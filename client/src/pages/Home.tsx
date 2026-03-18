/**
 * MediMagic Homepage
 * 
 * Design Philosophy: Humanist Wellness
 * - Real, authentic human imagery with soft teal overlays
 * - Asymmetric layouts with strategic image placement
 * - Generous whitespace and soft shadows for calm atmosphere
 * - Poppins (bold) for headlines, Inter (regular) for body text
 * - Soft green accents (#8BC34A) for hope and growth messaging
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">MediMagic</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <Button className="bg-accent hover:bg-accent/90 text-white">Book Consultation</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/hero-mediation-a7CxdivLGAhR7kjYi2D38q.webp"
            alt="Professional mediation session"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay - dark teal fading to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Finding Peace Through Understanding
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
            Professional mediation and social work services designed to help you navigate life's most challenging moments with compassion and clarity.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We offer comprehensive mediation and social work services tailored to your unique needs. Each service is designed with care and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Link href="/services/conflict-resolution">
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-conflict-resolution-PJSL9y2Q8Xvx6iTmYC53Td.webp"
                    alt="Conflict Resolution"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Conflict Resolution</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Navigate disagreements with clarity and fairness. Our mediators help both parties find common ground and reach sustainable solutions.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/services/family-support">
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/hero-family-support-JZkazF5fgKeQLid2GgGb83.webp"
                    alt="Family Support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Family Support</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Strengthen family relationships through professional guidance. We help families communicate, heal, and grow together.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/services/child-support">
              <div className="group cursor-pointer h-full">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-child-support-ZF5GAw7cb8rruBgjHi7yAH.webp"
                    alt="Child Support"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Child Support Services</h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  Specialized support for children navigating difficult transitions. We create safe spaces for children to express and process emotions.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Reach Out</h3>
              <p className="text-foreground leading-relaxed">
                Contact us to discuss your situation. We listen without judgment and understand your unique needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Understand</h3>
              <p className="text-foreground leading-relaxed">
                Through professional mediation and counseling, we help all parties understand each other's perspectives and needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Resolve</h3>
              <p className="text-foreground leading-relaxed">
                Together, we find solutions that work for everyone. You'll leave with clarity, confidence, and a path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/about-portrait-NxfVncWHATocJTsndf4bSx.webp"
                alt="Sarah Mitchell, Founder"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About MediMagic</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Founded on the belief that every conflict can be transformed into an opportunity for growth, MediMagic brings together experienced mediators and social workers dedicated to helping people navigate life's most challenging moments.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                With over 15 years of combined experience in conflict resolution, family counseling, and child advocacy, our team is committed to creating safe, supportive spaces where understanding flourishes and lasting solutions emerge.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Professional & Certified</h4>
                    <p className="text-foreground">All mediators hold recognized certifications in conflict resolution and mediation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Confidential & Neutral</h4>
                    <p className="text-foreground">We maintain strict confidentiality and remain impartial throughout the process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary mb-1">Compassionate & Human-Centered</h4>
                    <p className="text-foreground">We treat every person with dignity and respect, recognizing the human element in every situation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Path Forward?</h2>
          <p className="text-lg mb-10 text-white/90 leading-relaxed">
            Whether you're facing a conflict, seeking family support, or need guidance for your child, we're here to help. Reach out today for a confidential consultation.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
            Book a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary mb-4">MediMagic</h4>
              <p className="text-foreground text-sm leading-relaxed">
                Professional mediation and social work services for a more peaceful tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/conflict-resolution"><span className="text-foreground hover:text-accent">Conflict Resolution</span></Link></li>
                <li><Link href="/services/family-support"><span className="text-foreground hover:text-accent">Family Support</span></Link></li>
                <li><Link href="/services/child-support"><span className="text-foreground hover:text-accent">Child Support</span></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-foreground hover:text-accent">About Us</a></li>
                <li><a href="#" className="text-foreground hover:text-accent">Contact</a></li>
                <li><a href="#" className="text-foreground hover:text-accent">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Contact</h4>
              <p className="text-sm text-foreground">
                <a href="tel:+1234567890" className="hover:text-accent">(123) 456-7890</a><br />
                <a href="mailto:hello@medimagic.com" className="hover:text-accent">hello@medimagic.com</a>
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 MediMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
