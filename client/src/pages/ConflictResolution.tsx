/**
 * Conflict Resolution Service Page
 * 
 * Design Philosophy: Humanist Wellness
 * - Full-width hero image with teal gradient overlay
 * - Clean, readable layout with structured content
 * - Soft background boxes for important information
 * - Supporting imagery and icons
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function ConflictResolution() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <span className="text-2xl font-bold text-primary cursor-pointer">MediMagic</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-conflict-resolution-PJSL9y2Q8Xvx6iTmYC53Td.webp"
            alt="Conflict Resolution Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Conflict Resolution</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professional mediation to help you navigate disagreements and find fair, lasting solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Understanding Conflict Resolution</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Conflicts are a natural part of human relationships—whether in families, workplaces, or communities. What matters most is how we address them. At MediMagic, we believe that every conflict contains the seeds of understanding and growth.
              </p>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Our conflict resolution services provide a neutral, safe space where all parties can express their perspectives, be truly heard, and work together toward solutions that respect everyone's needs and interests.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">What to Expect</h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Initial Consultation</h4>
                    <p className="text-foreground">We meet with you individually to understand your perspective, concerns, and goals. This confidential conversation helps us prepare for mediation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Joint Mediation Session</h4>
                    <p className="text-foreground">In a structured, facilitated conversation, each party shares their perspective. Our mediator ensures everyone is heard and understood.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Collaborative Problem-Solving</h4>
                    <p className="text-foreground">Together, we explore options and work toward solutions that address the underlying interests of all parties involved.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Agreement & Follow-Up</h4>
                    <p className="text-foreground">Once an agreement is reached, we document it and provide follow-up support to ensure the solution works in practice.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">Who Can Benefit?</h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Conflict resolution services are valuable for:
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Couples navigating relationship challenges or divorce</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Family members with ongoing disputes or estrangement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Business partners or colleagues in workplace disputes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Neighbors or community members with ongoing tensions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Anyone seeking to resolve conflict constructively</span>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              {/* Info Box */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-8 sticky top-24">
                <h4 className="font-bold text-primary mb-4">Key Benefits</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Neutral, safe environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">All voices heard equally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Faster than litigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Cost-effective solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Preserves relationships</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h4 className="font-bold text-primary mb-4">Ready to Resolve?</h4>
                <p className="text-foreground text-sm mb-6 leading-relaxed">
                  Take the first step toward resolution. Contact us today for a confidential consultation.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-12 bg-muted/20">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl p-8 border-l-4 border-accent">
            <h3 className="font-bold text-primary mb-3">Important Note</h3>
            <p className="text-foreground leading-relaxed">
              Mediation is a confidential process. Anything discussed during mediation sessions is protected and cannot be used in court. Our role is to facilitate understanding and agreement—not to judge or make decisions for you. The solutions you reach are entirely in your control.
            </p>
          </div>
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
                <li><a href="/services/conflict-resolution" className="text-foreground hover:text-accent">Conflict Resolution</a></li>
                <li><a href="/services/family-support" className="text-foreground hover:text-accent">Family Support</a></li>
                <li><a href="/services/child-support" className="text-foreground hover:text-accent">Child Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-foreground hover:text-accent">Home</a></li>
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
