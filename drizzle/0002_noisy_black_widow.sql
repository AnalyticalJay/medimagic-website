CREATE TABLE `availability` (
	`id` int AUTO_INCREMENT NOT NULL,
	`date` varchar(255) NOT NULL,
	`timeSlot` varchar(255) NOT NULL,
	`isAvailable` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `availability_id` PRIMARY KEY(`id`)
);
