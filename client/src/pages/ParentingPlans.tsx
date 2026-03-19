import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function ParentingPlans() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/parenting-plans-hero-cttnn4p5JN9Gys5Lbzh8nz.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Parenting Plans
            </h1>
            <p className="text-xl text-white/90">
              Child-centred co-parenting frameworks that prioritise the wellbeing of children during and after separation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Creating Child-Centred Parenting Plans</h2>
            <p className="text-lg text-muted-foreground mb-6">
              When parents separate or divorce, one of the most important decisions is how to ensure children's wellbeing and maintain meaningful relationships with both parents. At MediMagic, we help parents develop comprehensive parenting plans that prioritise children's needs, stability, and emotional security while allowing both parents to remain actively involved in their children's lives.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is a Parenting Plan?</h3>
            <p className="text-muted-foreground mb-6">
              A parenting plan is a detailed, written agreement that outlines how parents will share responsibilities for their children after separation or divorce. It covers custody arrangements, visitation schedules, decision-making authority, and practical matters affecting the children's daily lives. A well-developed parenting plan provides clarity, reduces conflict, and ensures children's needs are consistently met.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Key Components of a Parenting Plan</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Custody Arrangements</h4>
                <p className="text-muted-foreground text-sm">Determination of primary residence and legal custody, ensuring children have stability and security.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Visitation Schedule</h4>
                <p className="text-muted-foreground text-sm">Detailed schedule for time with each parent, including weekdays, weekends, holidays, and school breaks.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Decision-Making Authority</h4>
                <p className="text-muted-foreground text-sm">Clarification of who makes decisions regarding education, healthcare, religious upbringing, and major life choices.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Communication & Co-Parenting</h4>
                <p className="text-muted-foreground text-sm">Guidelines for effective communication between parents and strategies for respectful co-parenting.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Financial Arrangements</h4>
                <p className="text-muted-foreground text-sm">Details on child support, shared expenses, and how costs for education, healthcare, and activities are managed.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Dispute Resolution</h4>
                <p className="text-muted-foreground text-sm">Process for addressing disagreements or changes needed as children grow and circumstances evolve.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Child-Centred Principles</h3>
            <p className="text-muted-foreground mb-6">
              At MediMagic, parenting plans are developed using child-centred principles that prioritise children's wellbeing:
            </p>
            <div className="space-y-4 my-8">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Best Interests of the Child</h4>
                <p className="text-muted-foreground">All decisions are guided by what is best for the child's physical, emotional, and psychological wellbeing.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Maintaining Relationships</h4>
                <p className="text-muted-foreground">Plans ensure children maintain meaningful, consistent relationships with both parents whenever safe and appropriate.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Stability & Continuity</h4>
                <p className="text-muted-foreground">Arrangements minimise disruption to children's routines, schooling, and social relationships.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Age-Appropriate Consideration</h4>
                <p className="text-muted-foreground">Plans are tailored to children's ages and developmental stages, recognising that needs change as children grow.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Respectful Co-Parenting</h4>
                <p className="text-muted-foreground">Plans encourage parents to work together cooperatively, minimising conflict and protecting children from parental disputes.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">The Mediation Process for Parenting Plans</h3>
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Initial Assessment</h4>
                  <p className="text-muted-foreground">Discussion of each parent's relationship with the children, work schedules, and parenting goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Child-Focused Discussion</h4>
                  <p className="text-muted-foreground">Exploration of each child's needs, preferences, and how both parents can best support them.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Schedule Development</h4>
                  <p className="text-muted-foreground">Creation of realistic, practical custody and visitation schedules that work for both parents and serve children's interests.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Decision-Making Framework</h4>
                  <p className="text-muted-foreground">Agreement on how major decisions regarding education, healthcare, and other important matters will be made.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Documentation & Finalisation</h4>
                  <p className="text-muted-foreground">Comprehensive parenting plan document that can be formalised through the court system.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Mediated Parenting Plans</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Child-Focused:</strong> Plans prioritise children's wellbeing and best interests.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Practical & Realistic:</strong> Schedules are developed with input from both parents, making them more likely to work in practice.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Flexible & Adaptable:</strong> Plans can be adjusted as children grow and circumstances change.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Reduces Conflict:</strong> Clear agreements reduce ongoing disputes and protect children from parental conflict.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Maintains Relationships:</strong> Ensures children have meaningful relationships with both parents.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Cost-Effective:</strong> Mediation is less expensive than litigation over custody disputes.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Important Note</h3>
              <p className="text-muted-foreground">
                Parenting plans should always prioritise children's safety and wellbeing. In cases involving domestic violence, abuse, or safety concerns, special arrangements and protections are necessary. We assess all situations carefully to ensure children are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Develop a Parenting Plan?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how we can help you create a parenting plan that serves your children's best interests.
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
