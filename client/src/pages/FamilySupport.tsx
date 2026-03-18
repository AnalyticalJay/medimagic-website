/**
 * Family Support Service Page
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

export default function FamilySupport() {
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/hero-family-support-JZkazF5fgKeQLid2GgGb83.webp"
            alt="Family Support Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Family Support</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Strengthen family bonds through professional guidance, compassionate counseling, and practical support.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Strengthening Family Relationships</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Families are the foundation of our lives, yet they can also be sources of stress, conflict, and pain. Whether you're navigating divorce, blended family challenges, communication breakdowns, or generational tensions, our family support services provide professional guidance in a compassionate, non-judgmental environment.
              </p>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                We believe that families can heal, grow, and thrive when given the right support and tools. Our approach combines evidence-based counseling techniques with deep empathy for the unique dynamics of your family.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-6">Our Family Support Services Include</h3>
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Family Counseling</h4>
                  <p className="text-foreground leading-relaxed">
                    Work together with your family members to improve communication, resolve conflicts, and rebuild trust. Sessions are tailored to your family's unique needs and dynamics.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Divorce & Separation Support</h4>
                  <p className="text-foreground leading-relaxed">
                    Navigate the emotional and practical challenges of separation with professional support. We help families create parenting plans, manage co-parenting relationships, and support children through transitions.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Blended Family Integration</h4>
                  <p className="text-foreground leading-relaxed">
                    Blended families face unique challenges. We provide guidance on building trust, establishing boundaries, and creating a cohesive family unit that honors everyone's history.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Parenting Support</h4>
                  <p className="text-foreground leading-relaxed">
                    Strengthen your parenting skills and relationship with your children. We offer guidance on age-appropriate communication, discipline strategies, and emotional support.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2 text-lg">Intergenerational Healing</h4>
                  <p className="text-foreground leading-relaxed">
                    Address long-standing family patterns and generational trauma. We help families break cycles and create healthier relationships across generations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-6">Who Can Benefit?</h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Family support services are valuable for:
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Families going through divorce or separation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Blended families adjusting to new dynamics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Parents seeking to improve family communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Families dealing with loss, grief, or major transitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Any family seeking to strengthen their bonds</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-6">Our Approach</h3>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                We use evidence-based approaches including family systems therapy, cognitive-behavioral techniques, and solution-focused counseling. Every family is unique, and we tailor our approach to your specific needs, values, and goals. Sessions are conducted in a safe, confidential environment where all family members feel heard and respected.
              </p>
            </div>

            {/* Sidebar */}
            <div>
              {/* Info Box */}
              <div className="bg-muted/30 rounded-2xl p-8 mb-8 sticky top-24">
                <h4 className="font-bold text-primary mb-4">What to Expect</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Safe, confidential space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Non-judgmental support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Practical tools & strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-foreground text-sm">Progress tracking</span>
                  </li>
                </ul>
              </div>

              {/* CTA Box */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h4 className="font-bold text-primary mb-4">Strengthen Your Family</h4>
                <p className="text-foreground text-sm mb-6 leading-relaxed">
                  Every family deserves support. Let's work together to build stronger, healthier relationships.
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
            <h3 className="font-bold text-primary mb-3">Confidentiality & Privacy</h3>
            <p className="text-foreground leading-relaxed">
              All family counseling sessions are strictly confidential. We maintain professional boundaries and work with your family's best interests in mind. Our goal is to support healing and growth, not to judge or impose solutions.
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
