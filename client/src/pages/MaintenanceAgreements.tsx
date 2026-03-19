import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function MaintenanceAgreements() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/maintenance-agreements-hero-CEggRwoaoMbczH6n3Whr9k.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Maintenance Agreements
            </h1>
            <p className="text-xl text-white/90">
              Professional guidance for financial support arrangements that are equitable, sustainable, and fair to all parties involved.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Maintenance Agreements</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Maintenance (also known as alimony or spousal support) is a critical component of many divorce and separation agreements. It addresses the financial support one spouse may provide to the other during or after separation. At MediMagic, we help couples negotiate fair, sustainable maintenance arrangements through structured mediation.
            </p>

            <div className="my-12 rounded-lg overflow-hidden shadow-lg">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/maintenance-agreements-content-Z2EK4sgxGvPzyPfoajr8h4.webp" alt="Financial planning and maintenance agreements" className="w-full h-auto" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Maintenance?</h3>
            <p className="text-muted-foreground mb-6">
              Maintenance is financial support provided by one spouse to another to help maintain a reasonable standard of living after separation or divorce. Unlike child support (which is focused on children's needs), maintenance addresses the financial needs and capacity of each spouse.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Factors Considered in Maintenance Agreements</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Income & Earning Capacity</h4>
                <p className="text-muted-foreground text-sm">Current income of both parties and their ability to earn in the future.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Duration of Marriage</h4>
                <p className="text-muted-foreground text-sm">Length of the marriage and the financial interdependence established during that time.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Standard of Living</h4>
                <p className="text-muted-foreground text-sm">The lifestyle established during the marriage and each party's need to maintain it.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Age & Health</h4>
                <p className="text-muted-foreground text-sm">Age, health status, and ability to work or become self-sufficient.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Contributions to Marriage</h4>
                <p className="text-muted-foreground text-sm">Financial and non-financial contributions made during the marriage.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Childcare Responsibilities</h4>
                <p className="text-muted-foreground text-sm">Impact of childcare on earning capacity and career development.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Types of Maintenance Arrangements</h3>
            <div className="space-y-6 my-8">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Temporary Maintenance</h4>
                <p className="text-muted-foreground">Support provided during the divorce process, ending when the divorce is finalised.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Rehabilitative Maintenance</h4>
                <p className="text-muted-foreground">Support provided for a limited period to allow a spouse to become self-sufficient through education or training.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Permanent Maintenance</h4>
                <p className="text-muted-foreground">Long-term support, typically in cases of long marriages or where one spouse cannot become self-sufficient.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Lump Sum Maintenance</h4>
                <p className="text-muted-foreground">A one-time payment instead of ongoing monthly support, providing finality and closure.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Mediation Process for Maintenance Agreements</h3>
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Financial Disclosure</h4>
                  <p className="text-muted-foreground">Both parties provide complete financial information, including income, expenses, assets, and liabilities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Analysis & Discussion</h4>
                  <p className="text-muted-foreground">The mediator helps both parties understand the relevant factors and discuss what maintenance arrangement is fair and sustainable.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Negotiation & Agreement</h4>
                  <p className="text-muted-foreground">Through structured discussion, both parties work toward an agreement on the amount, duration, and terms of maintenance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Documentation</h4>
                  <p className="text-muted-foreground">The agreed maintenance arrangement is documented in a formal agreement that can be incorporated into the divorce decree.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Mediated Maintenance Agreements</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Fair & Equitable:</strong> Both parties have input into what is fair, rather than having a judge decide.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Sustainable:</strong> Agreements reached through mediation are more likely to be followed because both parties agreed to them.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Flexible:</strong> Mediation allows for creative solutions tailored to each couple's unique circumstances.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Cost-Effective:</strong> Mediation is less expensive than litigation over maintenance disputes.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Confidential:</strong> Discussions remain private, protecting sensitive financial information.</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Who Can Benefit?</h3>
            <p className="text-muted-foreground mb-6">
              Maintenance mediation is valuable for couples who:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> Need to negotiate fair financial support arrangements</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Want to avoid costly litigation over maintenance</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Seek creative, flexible solutions tailored to their situation</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Prefer to maintain control over financial decisions</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Want to preserve mutual respect and dignity</li>
            </ul>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Important Note</h3>
              <p className="text-muted-foreground">
                Maintenance arrangements may be modified in the future if circumstances change significantly (such as job loss, retirement, or substantial income changes). Mediation can also be used to renegotiate maintenance if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Negotiate Fair Maintenance?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to discuss how mediation can help you reach a sustainable maintenance agreement.
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
