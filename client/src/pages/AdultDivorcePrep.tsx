import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function AdultDivorcePrep() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/adult-divorce-prep-hero-DLtr8v98TVjnZq76hFx7Ls.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Adult Divorce Preparation
            </h1>
            <p className="text-xl text-white/90">
              Emotional and practical support for individuals navigating the personal challenges of divorce and separation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Supporting You Through Divorce</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Divorce is more than a legal process—it's a profound personal transition that affects every aspect of your life. Beyond the practical and financial decisions, divorce involves significant emotional challenges: grief, anger, uncertainty about the future, and questions about identity and self-worth. At MediMagic, our adult divorce preparation services provide emotional and practical support to help you navigate this transition with resilience and clarity.
            </p>

            <div className="my-12 rounded-lg overflow-hidden shadow-lg">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/adult-divorce-prep-content-BpiLE6xBKiRVZshSMf7n8w.webp" alt="Emotional support and compassionate care" className="w-full h-auto" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Adult Divorce Preparation?</h3>
            <p className="text-muted-foreground mb-6">
              Adult divorce preparation is professional social work support designed to help individuals process the emotional dimensions of divorce while preparing for the practical realities of life after separation. It combines emotional support, practical guidance, and coping strategies to help you move forward with confidence and stability.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas of Support</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Emotional Processing</h4>
                <p className="text-muted-foreground text-sm">Help processing grief, anger, loss, and other emotions that arise during divorce.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Identity & Self-Esteem</h4>
                <p className="text-muted-foreground text-sm">Support rebuilding your sense of self and identity after the end of a marriage.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Practical Planning</h4>
                <p className="text-muted-foreground text-sm">Guidance on financial planning, housing, employment, and other practical matters.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Coping Strategies</h4>
                <p className="text-muted-foreground text-sm">Development of healthy coping mechanisms and stress management techniques.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Social & Family Relationships</h4>
                <p className="text-muted-foreground text-sm">Navigation of changes in relationships with family, friends, and social networks.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Future Planning</h4>
                <p className="text-muted-foreground text-sm">Support in envisioning and planning for a positive future after divorce.</p>
              </div>
            </div>

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
                  <p className="text-muted-foreground">Understanding your situation, concerns, and goals for support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Emotional Support</h4>
                  <p className="text-muted-foreground">Safe space to process emotions and develop healthy coping strategies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Practical Guidance</h4>
                  <p className="text-muted-foreground">Support with financial planning, housing, employment, and other practical concerns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Future Planning</h4>
                  <p className="text-muted-foreground">Support in envisioning and planning for a positive, independent future.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Common Challenges Addressed</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Grief and loss related to the end of the marriage</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Anger, resentment, and conflict with ex-partner</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Anxiety about the future and financial security</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Loss of identity and self-esteem</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Social isolation and changes in relationships</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Practical concerns about housing, finances, and employment</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Adult Divorce Preparation</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Emotional Resilience:</strong> Develop healthy coping strategies and emotional resilience.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Clarity & Direction:</strong> Gain clarity about your situation and direction for the future.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Practical Preparation:</strong> Prepare practically for life after divorce.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Reduced Stress:</strong> Professional support reduces stress and anxiety.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Positive Transition:</strong> Move forward with confidence and hope for the future.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Confidential & Supportive</h3>
              <p className="text-muted-foreground">
                All adult divorce preparation support is provided in a confidential, non-judgmental environment. Your feelings, concerns, and experiences are respected and validated. Support is tailored to your unique needs and circumstances.
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
            Schedule a consultation to discuss how adult divorce preparation can support you through this transition.
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
