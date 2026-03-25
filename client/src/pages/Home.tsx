import { ArrowRight, Check, Zap, Heart, Users, Shield, CheckCircle, Lock, Baby, Award, Menu, X, ChevronDown, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

/**
 * Design Philosophy: Client Approved Design
 * - Green header with right-aligned menu
 * - Dark navy hero section
 * - Green line section headers with navy background
 * - SCARS to STARS box in hero section
 */

export default function Home() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mediationDropdownOpen, setMediationDropdownOpen] = useState(false);
  const [socialWorkDropdownOpen, setSocialWorkDropdownOpen] = useState(false);
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
      {/* Navigation - Green Header with Right-Aligned Menu */}
      <nav className="sticky top-0 z-50 bg-[#5DBB63] header-shadow">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
              alt="MediMagic Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu - Right Aligned */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <a href="/" className="text-white hover:text-white/80 transition-colors font-medium">Home</a>
            <a href="/about" className="text-white hover:text-white/80 transition-colors">About</a>
            
            {/* Mediation Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                Mediation
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/services/divorce-settlement" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Divorce Settlement Agreements</a>
                  <a href="/services/maintenance-agreements" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Maintenance Agreements</a>
                  <a href="/services/parenting-plans" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Parenting Plans</a>
                  <a href="/services/voice-of-child" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Voice of the Child</a>
                </div>
              </div>
            </div>
            
            {/* Social Work Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-white/80 transition-colors">
                Social Work
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/services/adult-divorce-preparation" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Adult Divorce Preparation</a>
                  <a href="/services/illness-disability" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Illness & Disability Support</a>
                  <a href="/services/palliative-care" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Palliative & End-of-Life Care</a>
                  <a href="/services/health-education" className="block px-4 py-2 text-sm text-foreground hover:bg-[#5DBB63]/10 hover:text-[#5DBB63] transition-colors">Health Education & Promotion</a>
                </div>
              </div>
            </div>

            <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>

            {/* Auth Section */}
            {!isAuthenticated ? (
              <Button 
                onClick={() => window.location.href = getLoginUrl()}
                className="bg-white text-[#5DBB63] hover:bg-white/90 font-medium"
              >
                Login
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-white text-sm">{user?.name}</span>
                {user?.role === 'admin' && (
                  <Button 
                    onClick={() => navigate('/admin/dashboard')}
                    className="bg-white text-[#5DBB63] hover:bg-white/90 text-xs"
                  >
                    Admin Dashboard
                  </Button>
                )}
                <Button 
                  onClick={logout}
                  className="bg-white text-[#5DBB63] hover:bg-white/90 text-xs"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#5DBB63] border-t border-white/20">
            <div className="container py-4 space-y-3 px-4">
              <a href="/" className="block text-white hover:text-white/80 transition-colors py-2 font-medium">Home</a>
              <a href="/about" className="block text-white hover:text-white/80 transition-colors py-2">About</a>
              
              {/* Mobile Mediation Dropdown */}
              <div>
                <button 
                  onClick={() => setMediationDropdownOpen(!mediationDropdownOpen)}
                  className="flex items-center gap-1 text-white hover:text-white/80 transition-colors py-2 w-full"
                >
                  Mediation
                  <ChevronDown className={`w-4 h-4 transition-transform ${mediationDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mediationDropdownOpen && (
                  <div className="pl-4 space-y-2 py-2 border-l-2 border-white/20">
                    <a href="/services/divorce-settlement" className="block text-white/90 hover:text-white text-sm py-1">Divorce Settlement Agreements</a>
                    <a href="/services/maintenance-agreements" className="block text-white/90 hover:text-white text-sm py-1">Maintenance Agreements</a>
                    <a href="/services/parenting-plans" className="block text-white/90 hover:text-white text-sm py-1">Parenting Plans</a>
                    <a href="/services/voice-of-child" className="block text-white/90 hover:text-white text-sm py-1">Voice of the Child</a>
                  </div>
                )}
              </div>

              {/* Mobile Social Work Dropdown */}
              <div>
                <button 
                  onClick={() => setSocialWorkDropdownOpen(!socialWorkDropdownOpen)}
                  className="flex items-center gap-1 text-white hover:text-white/80 transition-colors py-2 w-full"
                >
                  Social Work
                  <ChevronDown className={`w-4 h-4 transition-transform ${socialWorkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {socialWorkDropdownOpen && (
                  <div className="pl-4 space-y-2 py-2 border-l-2 border-white/20">
                    <a href="/services/adult-divorce-preparation" className="block text-white/90 hover:text-white text-sm py-1">Adult Divorce Preparation</a>
                    <a href="/services/illness-disability" className="block text-white/90 hover:text-white text-sm py-1">Illness & Disability Support</a>
                    <a href="/services/palliative-care" className="block text-white/90 hover:text-white text-sm py-1">Palliative & End-of-Life Care</a>
                    <a href="/services/health-education" className="block text-white/90 hover:text-white text-sm py-1">Health Education & Promotion</a>
                  </div>
                )}
              </div>

              <a href="#contact" className="block text-white hover:text-white/80 transition-colors py-2">Contact</a>

              {!isAuthenticated ? (
                <Button 
                  onClick={() => window.location.href = getLoginUrl()}
                  className="w-full bg-white text-[#5DBB63] hover:bg-white/90 font-medium"
                >
                  Login
                </Button>
              ) : (
                <div className="space-y-2">
                  {user?.role === 'admin' && (
                    <Button 
                      onClick={() => navigate('/admin/dashboard')}
                      className="w-full bg-white text-[#5DBB63] hover:bg-white/90"
                    >
                      Admin Dashboard
                    </Button>
                  )}
                  <Button 
                    onClick={logout}
                    className="w-full bg-white text-[#5DBB63] hover:bg-white/90"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Dark Navy */}
      <section className="bg-[#1a3a52] text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                MEDI MAGIC
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                STEADY SUPPORT THROUGH LIFE'S MOST DIFFICULT TRANSITIONS
              </h2>
              <p className="text-lg text-white/90">
                Medi Magic offers Professional Family Law Mediation and Social Work Services, bringing structure, fairness and calm direction to times of change.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => navigate('/booking')}
                  className="px-8 py-3 bg-[#5DBB63] text-white font-semibold rounded-full hover:bg-[#4da852] transition-colors"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={() => navigate('/about')}
                  className="px-8 py-3 bg-white text-[#1a3a52] font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Image and SCARS/STARS Box */}
            <div className="space-y-6">
              {/* Image with Green Border */}
              <div className="border-8 border-[#5DBB63] rounded-lg overflow-hidden">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/HandStar_877534a4.webp" 
                  alt="Transformation"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* SCARS to STARS Box */}
              <div className="bg-[#5DBB63] text-white p-6 rounded-lg">
                <p className="text-center text-lg font-bold">
                  Changing <span className="text-2xl">SCARS</span> into <span className="text-2xl">STARS</span> One <span className="text-2xl">BATTLE</span> at a time
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Services Section */}
      <section className="py-16 md:py-24 bg-white">
        {/* Section Header with Green Line and Navy Background */}
        <div className="bg-[#5DBB63] h-2 mb-0"></div>
        <div className="bg-[#1a3a52] text-white py-6 mb-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">MEDIATION SERVICES</h2>
          </div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Divorce Settlement Agreements",
                description: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
                link: "/services/divorce-settlement"
              },
              {
                title: "Parenting Plan",
                description: "Child-centred co-parenting frameworks prioritising children's wellbeing.",
                link: "/services/parenting-plans"
              },
              {
                title: "Maintenance Agreements",
                description: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
                link: "/services/maintenance-agreements"
              },
              {
                title: "Voice of the child Assessments",
                description: "Structured mediation to help couples reach fair, legally sound divorce agreements.",
                link: "/services/voice-of-child"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#1a3a52] text-white rounded-lg p-6 flex flex-col">
                <div className="border-4 border-[#5DBB63] rounded-lg mb-4 h-32 bg-gray-200"></div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-white/80 mb-4 flex-grow">{service.description}</p>
                <button 
                  onClick={() => navigate(service.link)}
                  className="bg-[#5DBB63] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4da852] transition-colors text-sm"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MediMagic Section */}
      <section className="py-16 md:py-24 bg-white">
        {/* Section Header with Green Line and Navy Background */}
        <div className="bg-[#5DBB63] h-2 mb-0"></div>
        <div className="bg-[#1a3a52] text-white py-6 mb-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">WHY CHOOSE MEDIMAGIC</h2>
          </div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-[#1a3a52]">Confidential & Safe</h3>
              <p className="text-gray-600">All sessions are conducted with strict confidentiality and professional ethics.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-3 text-[#1a3a52]">Emotionally Intelligent</h3>
              <p className="text-gray-600">We address both practical decisions and emotional wellbeing throughout your journey.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-[#1a3a52]">Highly Qualified</h3>
              <p className="text-gray-600">FAMAC Accredited Mediator and SASW Registered Social Worker with 20+ years experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        {/* Section Header with Green Line and Navy Background */}
        <div className="bg-[#5DBB63] h-2 mb-0"></div>
        <div className="bg-[#1a3a52] text-white py-6 mb-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        </div>

        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#1a3a52] text-left">{item.question}</h3>
                  {openFaqIndex === idx ? (
                    <Minus className="w-5 h-5 text-[#5DBB63] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#5DBB63] flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1a3a52] text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move Forward?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards clarity and resolution. Book a consultation with Cornelia today.
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="px-8 py-3 bg-[#5DBB63] text-white font-semibold rounded-full hover:bg-[#4da852] transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-white py-8 border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">MediMagic</h4>
              <p className="text-white/70">Professional Family Law Mediation and Social Work Services</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="/services/divorce-settlement" className="hover:text-white transition-colors">Divorce Settlement</a></li>
                <li><a href="/services/parenting-plans" className="hover:text-white transition-colors">Parenting Plans</a></li>
                <li><a href="/services/maintenance-agreements" className="hover:text-white transition-colors">Maintenance Agreements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-white/70">Email: info@medimagic.co.za</p>
              <p className="text-white/70">Phone: +27 (0) 21 XXX XXXX</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 MediMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
