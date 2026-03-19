import { Link } from "wouter";
import { ArrowRight, Check, Zap, Heart, Users, Shield, CheckCircle, Lock, Baby, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
              alt="MediMagic Logo"
              className="h-10 w-auto"
            />
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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/hero-background-blend-JZD7f87nMVdv9t2kUKzGtK.webp)',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-teal-600/75 to-teal-500/50" />
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Clarity and Direction Through Conflict
            </h1>
            <p className="text-lg text-white/90 max-w-lg">
              Professional family law mediation and social work services supporting individuals through complex life transitions with structure, fairness, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="cta-button-secondary inline-flex items-center justify-center">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-full font-semibold text-white border-2 border-white hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex gap-6 pt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>FAMAC Accredited Mediator</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span>SASW Registered Social Worker</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative h-96">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/hero-transparent-figure-v2-gQNUbgUGqMAXN2s9kHt8h7.webp" 
              alt="Professional support figure"
              className="w-full h-full object-contain object-right opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-teal-500/5 border-y-4 border-accent relative overflow-hidden">
        <div className="absolute top-4 right-8 text-accent/20 text-6xl">✦</div>
        <div className="absolute bottom-4 left-8 text-accent/20 text-5xl">✦</div>
        <div className="container text-center relative z-10">
          <p className="slogan text-2xl md:text-3xl font-bold">
            Changing <span className="slogan-highlight text-3xl md:text-4xl">SCARS</span> into <span className="slogan-highlight text-3xl md:text-4xl">STARS</span> — One <span className="slogan-highlight text-3xl md:text-4xl">BATTLE</span> at a time
          </p>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/divorce-settleent_bec9bf43.png)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">MEDIATION</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Divorce Settlement Agreements
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Structured mediation to help couples reach fair, legally sound divorce agreements.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/maintenance-agreements">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-maintenance-agreements-enhanced-GP4fajaBjfTswGmGk9NF9u.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">MEDIATION</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Maintenance Agreements
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Professional guidance for equitable, sustainable financial support arrangements.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/parenting-plans">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-parenting-plans-enhanced-KGyGM288VnyxiWUoaXvx2t.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">MEDIATION</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Parenting Plans
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Child-centred co-parenting frameworks prioritising children's wellbeing.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/voice-of-child">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-voice-of-child-enhanced-KrtpgWcRxYwxWYrDh7Bqvm.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">MEDIATION</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Voice of the Child
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Professional interviews ensuring children's perspectives are heard and considered.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          <button className="cta-button-secondary inline-flex items-center">
            All Mediation Services <ArrowRight className="ml-2 w-4 h-4" />
          </button>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-adult-divorce-prep-enhanced-ZMz3YUqdcobQnhPmuR29u8.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">SOCIAL WORK</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Adult Divorce Preparation
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Emotional and practical support navigating the personal challenges of divorce.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/illness-disability">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-illness-disability-enhanced-646usUkxDq5RoMZZmGLDGy.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">SOCIAL WORK</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Illness & Disability Support
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Compassionate guidance for individuals and families adjusting to illness or disability.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/palliative-care">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-palliative-care-enhanced-AMNzGPWyGeFNBHQ5t9qsJH.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">SOCIAL WORK</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Palliative & End-of-Life Care
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Sensitive support for families navigating end-of-life transitions and grief.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/services/health-education">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-health-education-MfQZJQVeLaRzK5XXfAtdv9.webp)'}}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-all duration-300" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="text-xs font-semibold text-white/80 mb-2">SOCIAL WORK</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    Health Education & Promotion
                  </h3>
                  <p className="text-sm text-white/90 mb-4">
                    Educational support promoting health awareness and informed decision-making.
                  </p>
                  <Button className="cta-button w-fit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          <button className="cta-button-secondary inline-flex items-center">
            All Social Work Services <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Why Choose MediMagic Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Why Choose MediMagic?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
            An Integrated Approach to Resolution and Support
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Integrated Services</h3>
              </div>
              <p className="text-muted-foreground">
                By integrating family law mediation with professional social work, we provide coordinated, structured support that addresses both decision-making and emotional stability in one process.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Child-Centred Practice</h3>
              </div>
              <p className="text-muted-foreground">
                Where children are involved, their wellbeing and best interests remain central to every process, guided by ethical responsibility and care.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Reduced Conflict</h3>
              </div>
              <p className="text-muted-foreground">
                One trusted professional guiding your journey eliminates duplicated processes and reduces overall stress and conflict.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Professional Standards</h3>
              </div>
              <p className="text-muted-foreground">
                All services delivered with strict impartiality, confidentiality, and adherence to professional ethical codes and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Professional Standards You Can Trust
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Ethical & Neutral Practice</h3>
              </div>
              <p className="text-muted-foreground">
                All services delivered with strict impartiality, clear professional boundaries, and informed consent to ensure fair, balanced, and responsible processes.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Confidential & Secure Care</h3>
              </div>
              <p className="text-muted-foreground">
                Client information handled with discretion and confidentiality at all stages, creating a secure environment that supports open communication.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Baby className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Child-Centred Decision Making</h3>
              </div>
              <p className="text-muted-foreground">
                Where children are involved, their wellbeing remains central, guided by ethical responsibility, care, and long-term developmental considerations.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Professionally Regulated Practice</h3>
              </div>
              <p className="text-muted-foreground">
                Services provided in line with recognised professional standards and ethical codes, ensuring accountability, integrity, and consistent conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container max-w-3xl">
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

          <div className="flex gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>FAMAC Accredited Mediator</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>SASW Registered Social Worker</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              <span>20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-teal-600 to-teal-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Professional support begins with a clear conversation. Contact MediMagic today to request guidance through your situation.
          </p>
          <button className="cta-button-secondary inline-flex items-center">
            Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/services/divorce-settlement" className="hover:text-accent transition-colors">Mediation Services</a></li>
                <li><a href="/services/adult-divorce-preparation" className="hover:text-accent transition-colors">Social Work Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent transition-colors">About Cornelia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:0640603592" className="hover:text-accent transition-colors">064 060 3592</a></li>
                <li><a href="mailto:CorneliaGriessel@MediMagic.co.za" className="hover:text-accent transition-colors">CorneliaGriessel@MediMagic.co.za</a></li>
                <li><a href="https://medimagic.co.za" className="hover:text-accent transition-colors">medimagic.co.za</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-sm text-center">
            <p>&copy; 2026 MediMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
