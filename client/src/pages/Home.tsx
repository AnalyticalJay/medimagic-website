import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

/**
 * Design Philosophy: Humanist Wellness
 * - Soft teal palette with realistic human imagery
 * - Asymmetric layouts with generous whitespace
 * - Poppins Bold for headlines, Inter Regular for body
 * - Smooth transitions and soft shadows for depth
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-lg text-foreground">MediMagic</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">How It Works</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Clarity and Direction Through Conflict
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Professional family law mediation and social work services supporting individuals through complex life transitions with structure, fairness, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="flex gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>FAMAC Accredited Mediator</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>SASW Registered Social Worker</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" 
                alt="Professional mediation session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Welcome to MediMagic
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            MediMagic is a uniquely integrated practice combining family law mediation and professional social work support. Our approach addresses both the <strong>practical decisions</strong> and the <strong>emotional realities</strong> that arise during conflict, separation, illness, or major life change.
          </p>
          <p className="text-lg text-muted-foreground">
            We focus on helping individuals move forward with clarity, dignity, and stability through structured, ethical, and client-centred care.
          </p>
        </div>
      </section>

      {/* Mediation Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-accent">Mediation</span> Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Structured Solutions for Complex Disputes. Mediation offers a practical, confidential, and future-focused alternative to litigation. At MediMagic, mediation is approached with structure, neutrality, and a clear focus on resolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/services/divorce-settlement">
              <div className="group cursor-pointer p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">MEDIATION</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Divorce Settlement Agreements
                </h3>
                <p className="text-muted-foreground mb-4">
                  Structured mediation to help couples reach fair, legally sound divorce agreements with clarity and mutual understanding.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/maintenance-agreements">
              <div className="group cursor-pointer p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">MEDIATION</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Maintenance Agreements
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professional guidance for financial support arrangements that are equitable, sustainable, and fair to all parties involved.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/parenting-plans">
              <div className="group cursor-pointer p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">MEDIATION</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Parenting Plans
                </h3>
                <p className="text-muted-foreground mb-4">
                  Child-centred co-parenting frameworks that prioritise the wellbeing of children during and after separation.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/voice-of-child">
              <div className="group cursor-pointer p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">MEDIATION</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Voice of the Child
                </h3>
                <p className="text-muted-foreground mb-4">
                  Professionally conducted interviews ensuring children's perspectives are heard and considered in mediation processes.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>

          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            All Mediation Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Social Work Services Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-accent">Social Work</span> Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Supporting Stability Through Life Transitions. Social work services at MediMagic focus on emotional stability, resilience, and practical support during periods of change, illness, or conflict.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/services/adult-divorce-preparation">
              <div className="group cursor-pointer p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">SOCIAL WORK</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Adult Divorce Preparation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Emotional and practical support for individuals navigating the personal challenges of divorce and separation.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/illness-disability">
              <div className="group cursor-pointer p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">SOCIAL WORK</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Illness & Disability Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Compassionate guidance for individuals and families adjusting to the impact of illness or disability.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/palliative-care">
              <div className="group cursor-pointer p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">SOCIAL WORK</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Palliative & End-of-Life Care
                </h3>
                <p className="text-muted-foreground mb-4">
                  Sensitive support for families navigating end-of-life transitions, communication, and grief.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>

            <Link href="/services/health-education">
              <div className="group cursor-pointer p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-sm font-semibold text-accent mb-3">SOCIAL WORK</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  Health Education & Promotion
                </h3>
                <p className="text-muted-foreground mb-4">
                  Educational support to promote health awareness, informed decision-making, and wellness.
                </p>
                <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Link>
          </div>

          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
            All Social Work Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose MediMagic?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            An Integrated Approach to Resolution and Support. Most mediation and support services operate in isolation, requiring individuals to navigate legal decisions and emotional challenges separately. This often leads to fragmented processes, increased stress, and prolonged conflict.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Integrated Services</h3>
              <p className="text-muted-foreground">
                By integrating family law mediation with professional social work, we provide coordinated, structured support that addresses both decision-making and emotional stability in one process.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Child-Centred Practice</h3>
              <p className="text-muted-foreground">
                Where children are involved, their wellbeing and best interests remain central to every process, guided by ethical responsibility and care.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Reduced Conflict</h3>
              <p className="text-muted-foreground">
                One trusted professional guiding your journey eliminates duplicated processes and reduces overall stress and conflict.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Professional Standards</h3>
              <p className="text-muted-foreground">
                All services delivered with strict impartiality, confidentiality, and adherence to professional ethical codes and regulations.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Standards You Can Trust</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Ethical & Neutral Practice</h4>
                  <p className="text-muted-foreground">All services delivered with strict impartiality, clear professional boundaries, and informed consent.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Confidential & Secure Care</h4>
                  <p className="text-muted-foreground">Client information handled with discretion and confidentiality at all stages, creating a secure environment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Child-Centred Decision Making</h4>
                  <p className="text-muted-foreground">Where children are involved, their wellbeing remains central, guided by ethical responsibility and care.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Professionally Regulated Practice</h4>
                  <p className="text-muted-foreground">Services provided in line with recognised professional standards, ensuring accountability and integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Cornelia Griessel
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Cornelia Griessel is a dually trained and registered social worker and family mediator with extensive experience in medical social work, family mediation, and child-centred practice.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Her professional background includes over two decades of service within a multidisciplinary healthcare environment, as well as the founding and long-term management of a registered childcare non-profit organisation.
            </p>
            <p className="text-lg text-muted-foreground">
              Cornelia's work is guided by neutrality, clarity, and a strong commitment to protecting the wellbeing of vulnerable individuals — particularly children — while facilitating fair and responsible outcomes.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">FAMAC Accredited Mediator</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">SASW Registered Social Worker</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">20+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop" 
                alt="Cornelia Griessel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Professional support begins with a clear conversation. Contact MediMagic today to request guidance through your situation.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">MediMagic</h3>
              <p className="text-sm opacity-80">Professional mediation and social work services for complex life transitions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100">Home</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100">About</a></li>
                <li><a href="#services" className="opacity-80 hover:opacity-100">Services</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100">Mediation Services</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">Social Work Services</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">About Cornelia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:0640603592" className="opacity-80 hover:opacity-100">064 060 3592</a></li>
                <li><a href="mailto:CorneliaGriessel@MediMagic.co.za" className="opacity-80 hover:opacity-100">CorneliaGriessel@MediMagic.co.za</a></li>
                <li><a href="https://medimagic.co.za" className="opacity-80 hover:opacity-100">medimagic.co.za</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2026 MediMagic. All rights reserved. Powered by Manus.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
