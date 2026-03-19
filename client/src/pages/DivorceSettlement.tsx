import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

/**
 * Design Philosophy: Humanist Wellness
 * - Service detail page for Divorce Settlement Agreements
 * - Soft teal palette with realistic imagery
 * - Clear process flow and benefits
 */

export default function DivorceSettlement() {
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
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/divorce-settlement-hero-Fiodox8CUUVyNc9TY4iXR9.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Divorce Settlement Agreements
            </h1>
            <p className="text-xl text-white/90">
              Structured mediation to help couples reach fair, legally sound divorce agreements with clarity and mutual understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Divorce Settlement Mediation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Divorce is one of life's most significant transitions. Beyond the emotional complexity, there are critical legal and financial decisions that must be made—decisions that will affect your future and that of your children. At MediMagic, we provide structured mediation to help you navigate these decisions with clarity, fairness, and mutual respect.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Divorce Settlement Mediation?</h3>
            <p className="text-muted-foreground mb-6">
              Divorce settlement mediation is a structured process in which a neutral, trained mediator helps both spouses communicate effectively and reach agreement on the key issues in their divorce. Rather than adversarial litigation, mediation focuses on collaborative problem-solving—allowing both parties to maintain control over the outcome and preserve dignity throughout the process.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Key Areas Addressed</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Asset & Property Division</h4>
                <p className="text-muted-foreground text-sm">Fair and equitable division of marital property, including real estate, investments, and personal assets.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Financial Support</h4>
                <p className="text-muted-foreground text-sm">Determination of spousal maintenance or alimony arrangements that are sustainable and fair.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Parenting Arrangements</h4>
                <p className="text-muted-foreground text-sm">Development of child-centred parenting plans that prioritise children's wellbeing and stability.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Child Support</h4>
                <p className="text-muted-foreground text-sm">Fair determination of financial support for children based on both parents' circumstances.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Mediation Process</h3>
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Initial Consultation</h4>
                  <p className="text-muted-foreground">Individual confidential meetings with each spouse to understand their perspective, concerns, and goals. This helps establish whether mediation is appropriate and what issues need to be addressed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Information Gathering</h4>
                  <p className="text-muted-foreground">Collection of relevant financial documents, property valuations, and other information necessary for informed decision-making. All parties receive the same information to ensure transparency.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Joint Mediation Sessions</h4>
                  <p className="text-muted-foreground">Structured sessions where both parties meet with the mediator to discuss issues, express concerns, and explore potential solutions. The mediator ensures balanced communication and keeps discussions focused on resolution.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Agreement Drafting</h4>
                  <p className="text-muted-foreground">Once consensus is reached on all issues, a comprehensive settlement agreement is drafted that accurately reflects the decisions made by both parties.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Legal Finalisation</h4>
                  <p className="text-muted-foreground">Guidance on the legal steps required to formalise the agreement through the court system, with support in ensuring all documentation is complete and accurate.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Mediated Divorce Settlements</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Cost-Effective:</strong> Mediation is typically significantly less expensive than adversarial litigation.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Faster Resolution:</strong> Mediation typically resolves disputes more quickly than court proceedings.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Control & Autonomy:</strong> Both parties maintain control over the outcome rather than having a judge decide for them.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Confidentiality:</strong> Mediation sessions are confidential, protecting privacy and sensitive information.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Preserves Relationships:</strong> By focusing on collaboration rather than conflict, mediation helps preserve relationships, particularly important when children are involved.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Fair & Balanced:</strong> A neutral mediator ensures both parties are heard equally and that agreements are fair to all involved.</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Who Can Benefit?</h3>
            <p className="text-muted-foreground mb-6">
              Divorce settlement mediation is valuable for couples who:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> Want to avoid the cost and stress of litigation</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Wish to maintain control over the outcome</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Have children and want to prioritise their wellbeing</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Prefer a confidential, private process</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Seek a faster resolution</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Want to preserve mutual respect and dignity</li>
            </ul>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Important Note</h3>
              <p className="text-muted-foreground">
                Mediation is not appropriate in all situations. If there is a history of domestic violence, abuse, or significant power imbalances, alternative approaches may be necessary. During the initial consultation, we assess whether mediation is suitable for your circumstances and can recommend other resources if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Mediation?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss your situation and learn how mediation can help you reach a fair settlement.
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
