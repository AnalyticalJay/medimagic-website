import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Users, Shield, Calendar, Settings, Globe } from "lucide-react";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              MediMagic Website Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform for family law mediation and social work services with integrated booking management, admin dashboard, and professional service pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                View Live Website <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1: Booking System */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Client Booking System
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Intuitive booking interface where clients select services, choose dates and times, and provide contact information. Integrated calendar with 8 time slots per day.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">8 service types</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Date/time selection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Form validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 2: Admin Dashboard */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Settings className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Admin Dashboard
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive management interface for Cornelia to view, filter, and manage all bookings. Update statuses and manage availability slots.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Booking list with filters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Status management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Availability control</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 3: Service Pages */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Professional Service Pages
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    8 dedicated service pages with professional hero sections, realistic background images, and relevant service illustrations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">4 Mediation services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">4 Social Work services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Consistent branding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 4: Navigation */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Intuitive Navigation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Restructured navigation menu with Home, Mediation dropdown, Social Work dropdown, Contact, and Get Started button.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Service dropdowns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Mobile responsive</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Contact page</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 5: Authentication */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Secure Authentication
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Role-based access control with Manus OAuth integration. Admin-only dashboard access with automatic permission checks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Manus OAuth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Role-based access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Session management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Feature 6: Database */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Robust Backend
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full-stack application with tRPC API, database persistence, and real-time data management. Comprehensive test coverage.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">tRPC procedures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">Database schema</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground">28+ unit tests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Showcase Images */}
      <section className="py-20 md:py-32 bg-accent/5">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Visual Showcase
          </h2>

          <div className="space-y-12">
            {/* Booking System */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Client Booking System
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Clients can easily book consultations by selecting their preferred service, choosing a date and time from available slots, and entering their contact information. The form includes validation to ensure all required information is provided.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Interactive calendar interface</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Service type selection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Real-time availability</span>
                  </li>
                </ul>
              </div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/showcase-booking-system-nzws3g2Cdpu4wGpZ5FbnaH.webp"
                alt="Booking System"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Admin Dashboard */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/showcase-admin-dashboard-PjXNTvcu4u5YxmxLbPV6QK.webp"
                alt="Admin Dashboard"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Admin Dashboard
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Cornelia can manage all bookings from a centralized dashboard. Filter bookings by service type, status, or date range. Update booking statuses inline and manage availability slots for each day.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Advanced filtering options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Status management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Availability control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Pages */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Professional Service Pages
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Each of the 8 services has a dedicated page with a professional hero section featuring realistic background imagery and relevant service illustrations. Consistent branding throughout with teal/emerald color scheme.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Professional imagery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Consistent branding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Service illustrations</span>
                  </li>
                </ul>
              </div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/showcase-service-pages-N3MdNXbA6n4fJxrtiXsRcd.webp"
                alt="Service Pages"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/showcase-navigation-JX7uJG97yJG5fM6aqEsmsB.webp"
                alt="Navigation Menu"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Intuitive Navigation
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Restructured navigation menu with clear organization. Home link, Mediation dropdown with 4 services, Social Work dropdown with 4 services, Contact page, and Get Started button for bookings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Service dropdowns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Mobile responsive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Contact integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Page */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Contact Page
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Professional contact page with hero section, contact information, consultation hours, quick booking card, and comprehensive FAQ section. Designed to facilitate client engagement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Contact information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">Quick booking option</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">FAQ section</span>
                  </li>
                </ul>
              </div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/showcase-contact-page-ivCYQYW2FbcJ3r8xAxHEx8.webp"
                alt="Contact Page"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 md:py-32">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Technical Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Frontend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ React 19 with TypeScript</li>
                <li>✓ Tailwind CSS 4</li>
                <li>✓ shadcn/ui components</li>
                <li>✓ tRPC client integration</li>
                <li>✓ Responsive design</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Backend</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Express.js server</li>
                <li>✓ tRPC 11 procedures</li>
                <li>✓ Drizzle ORM</li>
                <li>✓ MySQL database</li>
                <li>✓ Zod validation</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Testing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Vitest framework</li>
                <li>✓ 28+ unit tests</li>
                <li>✓ Booking tests</li>
                <li>✓ Admin tests</li>
                <li>✓ Auth tests</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-accent/10 via-teal-500/5 to-accent/10 border-t border-border">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            The MediMagic website is fully functional and ready for Cornelia to manage bookings and provide services to clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
              View Live Website <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
