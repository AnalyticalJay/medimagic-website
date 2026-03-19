import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function PalliativeCare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg text-foreground">MediMagic</span>
            </div>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/palliative-care-hero-34SwgVS27aigQBtej9z34w.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Palliative & End-of-Life Care
            </h1>
            <p className="text-xl text-white/90">
              Sensitive support for families navigating end-of-life transitions, communication, and grief.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Supporting You Through End-of-Life Transitions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              End-of-life transitions are among the most profound and challenging experiences families face. Whether caring for a loved one with a terminal diagnosis or grieving the loss of someone close, these transitions bring complex emotional, spiritual, practical, and relational challenges. At MediMagic, our palliative and end-of-life care services provide compassionate, professional support to help families navigate this sacred time with dignity, love, and peace.
            </p>

            <div className="my-12 rounded-lg overflow-hidden shadow-lg">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/palliative-care-content-kMKPDW7XnLk7CZZp3hyUZV.webp" alt="Peaceful family gathering with dignity and compassion" className="w-full h-auto" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Palliative & End-of-Life Care Support?</h3>
            <p className="text-muted-foreground mb-6">
              Palliative and end-of-life care support is professional social work guidance designed to help individuals and families navigate the physical, emotional, spiritual, and practical dimensions of end-of-life transitions. It combines emotional support, practical guidance, communication facilitation, and grief support to help families move through this transition with compassion and peace.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas of Support</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Emotional Support</h4>
                <p className="text-muted-foreground text-sm">Safe space to process fear, grief, anger, and other emotions related to end-of-life.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Family Communication</h4>
                <p className="text-muted-foreground text-sm">Guidance on difficult conversations and helping family members communicate with each other.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Spiritual Support</h4>
                <p className="text-muted-foreground text-sm">Support with spiritual or existential questions and connection to spiritual resources.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Practical Planning</h4>
                <p className="text-muted-foreground text-sm">Guidance on medical decisions, advance directives, and end-of-life planning.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Grief Support</h4>
                <p className="text-muted-foreground text-sm">Support processing grief and building resilience after loss.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Caregiver Support</h4>
                <p className="text-muted-foreground text-sm">Support for those caring for dying loved ones, managing emotional and practical demands.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Who Can Benefit?</h3>
            <p className="text-muted-foreground mb-6">
              Palliative and end-of-life care support is valuable for:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> Individuals with terminal diagnoses and their families</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Family members caring for dying loved ones</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Those grieving the loss of a loved one</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Families navigating complex end-of-life decisions</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Those seeking spiritual or existential support during end-of-life</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Support Process</h3>
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Initial Assessment</h4>
                  <p className="text-muted-foreground">Understanding your situation, concerns, and support needs during this transition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Emotional & Spiritual Support</h4>
                  <p className="text-muted-foreground">Safe space to process emotions and explore spiritual or existential dimensions of end-of-life.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Communication Facilitation</h4>
                  <p className="text-muted-foreground">Support with difficult conversations and helping family members communicate with each other.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Practical Guidance</h4>
                  <p className="text-muted-foreground">Support with medical decisions, advance directives, and end-of-life planning.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Ongoing Grief Support</h4>
                  <p className="text-muted-foreground">Continued support after loss, helping families process grief and rebuild.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Palliative & End-of-Life Care Support</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Emotional Resilience:</strong> Develop healthy coping strategies and emotional resilience.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Spiritual Peace:</strong> Explore spiritual dimensions and find peace during end-of-life.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Family Connection:</strong> Strengthen family relationships and communication during this sacred time.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Practical Support:</strong> Navigate medical and practical decisions with professional guidance.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Grief Processing:</strong> Support processing grief and rebuilding after loss.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Confidential & Compassionate</h3>
              <p className="text-muted-foreground">
                All palliative and end-of-life care support is provided in a confidential, deeply compassionate environment. Your experiences, feelings, and spiritual beliefs are respected and honoured. Support is tailored to your unique needs, values, and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Support?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how palliative and end-of-life care support can help you and your family navigate this transition with peace and dignity.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Schedule Consultation
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
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/"><a className="opacity-80 hover:opacity-100">Home</a></Link></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">Mediation Services</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">Social Work Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:0640603592" className="opacity-80 hover:opacity-100">064 060 3592</a></li>
                <li><a href="mailto:CorneliaGriessel@MediMagic.co.za" className="opacity-80 hover:opacity-100">CorneliaGriessel@MediMagic.co.za</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2026 MediMagic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
