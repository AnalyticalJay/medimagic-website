/**
 * Child Support Service Page
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

export default function ChildSupport() {
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-child-support-ZF5GAw7cb8rruBgjHi7yAH.webp"
            alt="Child Support Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Child Support Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Specialized support for children navigating difficult transitions with safety, care, and understanding.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Supporting Children Through Transitions</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Children are resilient, but they also need support when navigating major life changes—whether it's parental separation, family conflict, loss, or other challenging situations. At MediMagic, we create safe, child-friendly spaces where children can express their feelings, process their experiences, and develop healthy coping strategies.
              </p>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Our child support specialists are trained in child development, trauma-informed care, and age-appropriate communication. We work with children individually and also collaborate with parents to ensure consistency and support across all areas of their lives.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">Our Child Support Services Include</h3>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Individual Child Counseling</h4>
                  <p className="text-foreground leading-relaxed">
                    One-on-one sessions where children can express their feelings in a safe, non-judgmental environment. We use play therapy, art therapy, and conversation tailored to each child's age and needs.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Separation & Divorce Support</h4>
                  <p className="text-foreground leading-relaxed">
                    Help children understand and adjust to parental separation. We address fears, confusion, and emotions while maintaining their relationships with both parents.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Grief & Loss Support</h4>
                  <p className="text-foreground leading-relaxed">
                    Support children processing loss—whether due to death, relocation, or other significant changes. We help them express grief and build resilience.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Conflict Navigation</h4>
                  <p className="text-foreground leading-relaxed">
                    Help children understand and navigate family conflicts. We teach healthy communication skills and coping strategies for managing stress and emotions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Parental Coaching</h4>
                  <p className="text-foreground leading-relaxed">
                    Work with parents to understand their child's needs and provide guidance on supporting them through transitions. We help parents communicate effectively with their children.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">School & Social Support</h4>
                  <p className="text-foreground leading-relaxed">
                    Collaborate with schools and other support systems to ensure children receive consistent care and understanding across all areas of their lives.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">Age-Appropriate Approaches</h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                We tailor our approach based on each child's developmental stage:
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Young Children (3-7):</strong> Play therapy, storytelling, and simple conversations about feelings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>School-Age (8-12):</strong> Art therapy, structured activities, and guided conversations about emotions and situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Teenagers (13+):</strong> Counseling, skill-building, and support for navigating complex emotions and relationships</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-6">Why Professional Support Matters</h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Children often struggle to express complex emotions. Professional support helps them:
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Understand and name their feelings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Develop healthy coping strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Build resilience and confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Maintain healthy relationships with both parents</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Thrive academically and socially</span>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div>
              {/* Info Box */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-8 sticky top-24">
                <h4 className="font-bold text-primary mb-4">Our Child-Centered Approach</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Safe, welcoming environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Age-appropriate activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Trauma-informed care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Parental collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Confidentiality respected</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h4 className="font-bold text-primary mb-4">Support Your Child</h4>
                <p className="text-foreground text-sm mb-6 leading-relaxed">
                  Every child deserves support during difficult times. Let's help your child navigate transitions with confidence and care.
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
            <h3 className="font-bold text-primary mb-3">Confidentiality & Child Safety</h3>
            <p className="text-foreground leading-relaxed mb-4">
              All child sessions are confidential, with appropriate exceptions for safety concerns. We work collaboratively with parents and guardians while maintaining the child's trust and privacy. Our primary concern is always the child's wellbeing and safety.
            </p>
            <p className="text-foreground leading-relaxed">
              If you have concerns about a child's safety, we're trained to respond appropriately and will discuss any necessary steps with parents and relevant authorities.
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
