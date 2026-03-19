import { Link } from "wouter";
import { ArrowRight, Check, Zap, Heart, Users, Shield, CheckCircle, Lock, Baby, Award, Menu, X, ChevronDown, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * Design Philosophy: Humanist Wellness
 * - Soft teal palette with realistic human imagery
 * - Asymmetric layouts with generous whitespace
 * - Poppins Bold for headlines, Inter Regular for body
 * - Smooth transitions and soft shadows for depth
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is the difference between mediation and social work support?",
      answer: "Mediation focuses on structured, neutral facilitation of agreements between parties—such as divorce settlements or parenting plans. Social work support addresses the emotional, practical, and psychological aspects of life transitions, illness, or conflict. MediMagic uniquely integrates both services, addressing both decision-making and emotional wellbeing."
    },
    {
      question: "Is mediation confidential?",
      answer: "Yes. All mediation sessions are confidential and conducted with strict impartiality. Information shared during mediation cannot be used in court proceedings. This confidentiality creates a safe space for open, honest communication."
    },
    {
      question: "How long does the mediation process typically take?",
      answer: "The timeline varies depending on the complexity of the issues and the parties' readiness to reach agreement. Simple matters may be resolved in 2-3 sessions, while more complex disputes may require 5-8 sessions. Each process is tailored to the specific needs and pace of the individuals involved."
    },
    {
      question: "Can children be involved in the mediation process?",
      answer: "Children are not typically present in mediation sessions between adults. However, MediMagic offers the 'Voice of the Child' service, where children's perspectives are professionally gathered and considered in decisions affecting them. This ensures their wellbeing remains central to outcomes."
    },
    {
      question: "What if we cannot reach agreement through mediation?",
      answer: "Mediation is voluntary and non-binding. If parties cannot reach agreement, they retain the right to pursue litigation or other dispute resolution methods. However, mediation often clarifies issues and reduces conflict, making subsequent processes more efficient and less adversarial."
    },
    {
      question: "Are online consultations as effective as in-person sessions?",
      answer: "Yes. Online consultations are conducted through secure, encrypted platforms and provide the same level of professional support and confidentiality as in-person sessions. Many clients appreciate the flexibility and accessibility of remote services."
    },
    {
      question: "How do I know if mediation is right for my situation?",
      answer: "Mediation works best when both parties are willing to engage in good-faith dialogue and seek fair resolution. It's effective for divorce agreements, parenting plans, maintenance disputes, and family conflicts. Contact MediMagic for a confidential consultation to discuss whether mediation is appropriate for your circumstances."
    },
    {
      question: "What qualifications does Cornelia hold?",
      answer: "Cornelia is a FAMAC Accredited Mediator and SASW Registered Social Worker with over 20 years of professional experience in medical social work, family mediation, and child-centred practice. She is bound by strict professional ethical codes and regulatory standards."
    }
  ];
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
            <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">How It Works</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container py-4 space-y-3">
              <a href="#services" className="block text-foreground hover:text-accent transition-colors py-2">Services</a>
              <a href="#how-it-works" className="block text-foreground hover:text-accent transition-colors py-2">How It Works</a>
              <a href="#about" className="block text-foreground hover:text-accent transition-colors py-2">About</a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
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
          <div className="hidden md:flex items-center justify-center relative h-96">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/HandStar_877534a4.webp" 
              alt="Hand Holding Star - Transformation"
              className="w-full h-full object-contain drop-shadow-2xl"
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
      <section className="py-16 md:py-24 bg-pattern-mesh">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Welcome Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Welcome to MediMagic
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                MediMagic is a uniquely integrated practice combining family law mediation and professional social work support. Our approach addresses both the <strong>practical decisions</strong> and the <strong>emotional realities</strong> that arise during conflict, separation, illness, or major life change.
              </p>
              <p className="text-lg text-muted-foreground">
                We focus on helping individuals move forward with clarity, dignity, and stability through structured, ethical, and client-centred care.
              </p>
              <Link href="/about">
                <button className="cta-button mt-6 inline-flex items-center">
                  Learn About Cornelia <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </Link>
            </div>
            
            {/* Right Column: Key Features with Icons */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/welcome-icon-confidential-safe-3d-jinJuEKyMtJ24B5sf7ZCDS.webp" alt="Confidential & Safe" className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Confidential & Safe</h3>
                  <p className="text-muted-foreground">All sessions are conducted with strict confidentiality and professional ethics.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/welcome-icon-emotionally-intelligent-3d-LmKWNytDhKrWHTFhJunABb.webp" alt="Emotionally Intelligent" className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Emotionally Intelligent</h3>
                  <p className="text-muted-foreground">We address both practical decisions and emotional wellbeing throughout your journey.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/welcome-icon-highly-qualified-3d-cfDWdp9FeNPPjZ5nzSRDmx.webp" alt="Highly Qualified" className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Highly Qualified</h3>
                  <p className="text-muted-foreground">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Services Section */}
      <section className="py-16 md:py-24 bg-background">
        {/* Section Header Banner */}
        <div className="bg-primary/10 border-l-4 border-accent py-4 mb-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-accent font-bold">Mediation</span> <span className="text-foreground">Services</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/MaintenanceAgreements_7f8f3115.png)'}}>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/ParentingPLans_3613eb78.png)'}}>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/Voiceofchildinterviews_3f6329e9.png)'}}>
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
        {/* Section Header Banner */}
        <div className="bg-primary/10 border-l-4 border-accent py-4 mb-12">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              <span className="text-accent font-bold">Social Work</span> <span className="text-foreground">Services</span>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="mb-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Supporting Stability Through Life Transitions. Social work services at MediMagic focus on emotional stability, resilience, and practical support during periods of change, illness, or conflict.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link href="/services/adult-divorce-preparation">
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-adult-divorce-prep-5LK2t6N4NzrEizAzThCQKW.webp)'}}>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-illness-disability-jRKzze3aCiAjAKB8b4ySGX.webp)'}}>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-palliative-care-QS7MnXLSp9JHVuFzJuSiDx.webp)'}}>
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
              <div className="group cursor-pointer relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/service-health-education-EfX9YjeDhQzhWbtxHjAHUY.webp)'}}>
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
      <section className="py-16 md:py-24 bg-pattern-shapes">
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
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/why-choose-icon-integrated-services-3d-UgfPiUGbMwxf3wrehLrdVr.webp" alt="Integrated Services" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Integrated Services</h3>
              </div>
              <p className="text-muted-foreground">
                By integrating family law mediation with professional social work, we provide coordinated, structured support that addresses both decision-making and emotional stability in one process.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/why-choose-icon-child-centered-3d-cruvCSG7sJCHTMYjanmDC4.webp" alt="Child-Centred Practice" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Child-Centred Practice</h3>
              </div>
              <p className="text-muted-foreground">
                Where children are involved, their wellbeing and best interests remain central to every process, guided by ethical responsibility and care.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/why-choose-icon-reduced-conflict-3d-jkQvC6KymvBMR5TuM2Gvir.webp" alt="Reduced Conflict" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Reduced Conflict</h3>
              </div>
              <p className="text-muted-foreground">
                One trusted professional guiding your journey eliminates duplicated processes and reduces overall stress and conflict.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/why-choose-icon-professional-standards-3d-cZzz7gmx95wLfun3ciwbjF.webp" alt="Professional Standards" className="w-10 h-10 object-contain" />
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
      <section className="py-16 md:py-24 bg-pattern-diagonal">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Professional Standards You Can Trust
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/professional-standards-icon-ethical-neutral-3d-4k6b3hrjoG2CRxxD4DEXLA.webp" alt="Ethical & Neutral Practice" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Ethical & Neutral Practice</h3>
              </div>
              <p className="text-muted-foreground">
                All services delivered with strict impartiality, clear professional boundaries, and informed consent to ensure fair, balanced, and responsible processes.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/professional-standards-icon-confidential-secure-3d-iVfGL5uWDBE6M3Mjw4vMcE.webp" alt="Confidential & Secure Care" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Confidential & Secure Care</h3>
              </div>
              <p className="text-muted-foreground">
                Client information handled with discretion and confidentiality at all stages, creating a secure environment that supports open communication.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/professional-standards-icon-child-centered-3d-XEs8WrJfS5mVY6U2DVAQgo.webp" alt="Child-Centred Decision Making" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Child-Centred Decision Making</h3>
              </div>
              <p className="text-muted-foreground">
                Where children are involved, their wellbeing remains central, guided by ethical responsibility, care, and long-term developmental considerations.
              </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/professional-standards-icon-professionally-regulated-3d-JZze7vPNwnZjHx7XmmiARf.webp" alt="Professionally Regulated Practice" className="w-10 h-10 object-contain" />
                <h3 className="text-xl font-bold text-foreground">Professionally Regulated Practice</h3>
              </div>
              <p className="text-muted-foreground">
                Services provided in line with recognised professional standards and ethical codes, ensuring accountability, integrity, and consistent conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultations Section */}
      <section className="py-16 md:py-24 bg-pattern-blobs">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-semibold text-accent">
                Accessible Support
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Online Consultations Available Nationwide
              </h2>
              <p className="text-lg text-muted-foreground">
                MediMagic extends professional mediation and social work services beyond Port Elizabeth. Whether you're in another province or prefer the convenience of remote sessions, our online consultation services bring expert support directly to your home.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Secure & Confidential</h3>
                    <p className="text-muted-foreground text-sm">All online sessions conducted through secure, encrypted platforms ensuring complete privacy and confidentiality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Flexible Scheduling</h3>
                    <p className="text-muted-foreground text-sm">Book consultations at times that work for you, with flexible scheduling options to accommodate your lifestyle and commitments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Same Professional Quality</h3>
                    <p className="text-muted-foreground text-sm">Receive the same level of expert, compassionate support whether you choose in-person or online sessions.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button className="cta-button inline-flex items-center">
                  Book Your Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-foreground font-semibold text-lg">Professional Support, Anytime, Anywhere</p>
                  <p className="text-muted-foreground mt-2">Secure online consultations available nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section - Ready to Move Forward */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/cta-background-get-started-5qiKx5BMkiWBm6x7KohdTj.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our mediation and social work services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{item.question}</span>
                  <div className="flex-shrink-0">
                    {openFaqIndex === index ? (
                      <Minus className="w-5 h-5 text-accent" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-6 py-4 bg-muted/20 border-t border-border">
                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 rounded-lg" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/cta-background-consultation-Luc6yms9wcZAcXsWrkam34.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
            <div className="relative z-10">
              <p className="text-white/90 mb-4 font-semibold text-lg">Still have questions?</p>
              <button className="cta-button inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
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
