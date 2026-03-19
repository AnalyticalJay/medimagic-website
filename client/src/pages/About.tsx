import { ArrowRight, Check, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Design Philosophy: Humanist Wellness
 * - Soft teal palette with professional imagery
 * - Asymmetric layouts with generous whitespace
 * - Poppins Bold for headlines, Inter Regular for body
 * - Smooth transitions and soft shadows for depth
 */

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
              alt="MediMagic Logo"
              className="h-10 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Mediation Services</div>
                  <a href="/services/divorce-settlement" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Divorce Settlement Agreements</a>
                  <a href="/services/maintenance-agreements" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Maintenance Agreements</a>
                  <a href="/services/parenting-plans" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Parenting Plans</a>
                  <a href="/services/voice-of-child" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Voice of the Child</a>
                  <div className="border-t border-border my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Social Work Services</div>
                  <a href="/services/adult-divorce-preparation" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Adult Divorce Preparation</a>
                  <a href="/services/illness-disability" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Illness & Disability Support</a>
                  <a href="/services/palliative-care" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Palliative & End-of-Life Care</a>
                  <a href="/services/health-education" className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors">Health Education & Promotion</a>
                </div>
              </div>
            </div>
            <a href="/" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-accent transition-colors">About</a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-primary/10 to-teal-500/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Cornelia Griessel
            </h1>
            <p className="text-xl text-muted-foreground">
              A dually trained social worker and family mediator with over 20 years of experience in medical social work, family mediation, and child-centred practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column: Headshot */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/cornelia-headshot-5tRS6Cw2LAbn3yQugwoTuy.webp"
                  alt="Cornelia Griessel"
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="mt-6 p-6 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-4">Professional Credentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">FAMAC Accredited Mediator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">SASW Registered Social Worker</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Master's Degree in Early Childhood Intervention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">20+ Years Professional Experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Biography */}
            <div className="md:col-span-2 space-y-8">
              {/* Professional Background */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Professional Background</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Cornelia is a dually trained and registered social worker and family mediator. She brings a unique combination of leadership, clinical knowledge, and practical experience to her work with families.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  With 20 years of military service based in a military health centre, she worked as part of a multidisciplinary team, providing coordinated care across social work, medical, and therapeutic disciplines. This experience shaped her structured, calm, and collaborative approach — essential when guiding families through complex or high-stakes situations.
                </p>
                <p className="text-lg text-muted-foreground">
                  During her service, she founded and established a military childcare NGO, which has continued successfully for more than a decade, reflecting her long-term commitment to child wellbeing and community support.
                </p>
              </div>

              {/* Education & Expertise */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Education & Expertise</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Cornelia holds a Master's Degree in Early Childhood Intervention, strengthening her expertise in child development, family systems, and trauma-informed practice. Her work is characterised by neutrality, professionalism, and a steady, ethical presence.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                    <h3 className="font-semibold text-foreground mb-3">Areas of Expertise</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Family mediation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Adolescent development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Medical social work
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Child participation processes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Crisis and trauma intervention
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Chronic and acute illness support
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-accent/5 rounded-lg border border-accent/10">
                    <h3 className="font-semibold text-foreground mb-3">Practice Characteristics</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Warm yet structured
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Neutral yet deeply supportive
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Calm, grounding and dependable
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Always protective of children
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Ethically driven
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        Evidence-based
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Her Approach</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Cornelia is uniquely positioned to support families through both relational conflict and emotional or medical stress. She offers families a consistent, trusted guide — bringing clarity, fairness, and compassionate insight to every stage of their journey.
                </p>
                <p className="text-lg text-muted-foreground">
                  Her work is guided by neutrality, clarity, and a strong commitment to protecting the wellbeing of vulnerable individuals — particularly children — while facilitating fair and responsible outcomes.
                </p>
              </div>

              {/* Tagline */}
              <div className="p-8 bg-gradient-to-r from-primary/5 to-teal-500/5 rounded-lg border-l-4 border-accent">
                <p className="text-2xl font-bold text-foreground">
                  Strength, Knowledge, Compassion — All in One.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/cta-background-consultation-Luc6yms9wcZAcXsWrkam34.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Work With Cornelia?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Professional support begins with a clear conversation. Contact MediMagic today to request a consultation.
          </p>
          <button className="cta-button-secondary inline-flex items-center">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">MediMagic</h3>
              <p className="text-sm text-background/80">Professional family law mediation and social work services.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Mediation</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Social Work</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-background/80">
                <li><a href="/" className="hover:text-background transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-background transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-background/80">Get in touch to schedule a consultation.</p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/80">
            <p>&copy; 2026 MediMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
