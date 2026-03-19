import { eq, and, gte, lte } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, bookings, InsertBooking, availability } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Booking queries
export async function createBooking(booking: InsertBooking) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(bookings).values(booking);
  return result;
}

export async function getBookings(limit: number = 50) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(bookings).limit(limit);
}

export async function getBookingById(id: number) {
  const db = await getDb();
  if (!db) {
    return undefined;
  }

  const result = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// Admin booking management queries
export async function updateBookingStatus(id: number, status: "pending" | "confirmed" | "completed" | "cancelled") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.update(bookings).set({ status }).where(eq(bookings.id, id));
  return result;
}

export async function getBookingsByDateRange(startDate: string, endDate: string) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(bookings)
    .where(and(
      gte(bookings.preferredDate, startDate),
      lte(bookings.preferredDate, endDate)
    ));
}

export async function getBookingsByService(serviceType: string) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  return await db.select().from(bookings).where(eq(bookings.serviceType, serviceType));
}

// Availability management queries
export async function getAvailability(date?: string) {
  const db = await getDb();
  if (!db) {
    return [];
  }

  if (date) {
    return await db.select().from(availability).where(eq(availability.date, date));
  }
  return await db.select().from(availability);
}

export async function setAvailability(date: string, timeSlot: string, isAvailable: boolean) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const existing = await db.select().from(availability)
    .where(and(eq(availability.date, date), eq(availability.timeSlot, timeSlot)));

  if (existing.length > 0) {
    return await db.update(availability)
      .set({ isAvailable: isAvailable ? 1 : 0 })
      .where(and(eq(availability.date, date), eq(availability.timeSlot, timeSlot)));
  } else {
    return await db.insert(availability).values({
      date,
      timeSlot,
      isAvailable: isAvailable ? 1 : 0,
    });
  }
}
