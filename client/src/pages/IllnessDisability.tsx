import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function IllnessDisability() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/illness-disability-hero-85DJ9LTpRzR7zEqFX2fsgd.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Illness & Disability Support
            </h1>
            <p className="text-xl text-white/90">
              Compassionate guidance for individuals and families adjusting to the impact of illness or disability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Supporting You Through Health Challenges</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A diagnosis of serious illness or disability can fundamentally change your life and the lives of those around you. Beyond the medical aspects, illness and disability bring emotional, practical, and relational challenges that require compassionate, professional support. At MediMagic, our illness and disability support services help individuals and families navigate these complex transitions with resilience and dignity.
            </p>

            <div className="my-12 rounded-lg overflow-hidden shadow-lg">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/illness-disability-content-LYZMPav9drhb22dCT5ncBa.webp" alt="Healthcare professional providing compassionate care" className="w-full h-auto" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Illness & Disability Support?</h3>
            <p className="text-muted-foreground mb-6">
              Illness and disability support is professional social work guidance designed to help individuals and families adjust to the physical, emotional, social, and practical impacts of illness or disability. It combines emotional support, practical guidance, and resource connection to help you navigate this transition with confidence and hope.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas of Support</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Emotional Adjustment</h4>
                <p className="text-muted-foreground text-sm">Support processing shock, grief, anger, and other emotions related to diagnosis or disability.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Family Communication</h4>
                <p className="text-muted-foreground text-sm">Guidance on communicating with family members and helping them adjust.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Practical Planning</h4>
                <p className="text-muted-foreground text-sm">Support with medical decisions, treatment options, and healthcare navigation.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Resource Connection</h4>
                <p className="text-muted-foreground text-sm">Connection to medical, financial, and social resources available to support you.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Lifestyle Adjustment</h4>
                <p className="text-muted-foreground text-sm">Support adapting to changes in daily life, work, and relationships.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Coping Strategies</h4>
                <p className="text-muted-foreground text-sm">Development of healthy coping mechanisms and stress management techniques.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Who Can Benefit?</h3>
            <p className="text-muted-foreground mb-6">
              Illness and disability support is valuable for:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> Individuals recently diagnosed with serious illness or disability</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Families adjusting to a loved one's illness or disability</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Caregivers managing the emotional and practical demands of care</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Individuals managing chronic illness or long-term disability</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Those navigating changes in identity, independence, or life plans</li>
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
                  <p className="text-muted-foreground">Understanding your diagnosis, situation, and support needs.</p>
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
                  <p className="text-muted-foreground">Support with medical decisions, treatment navigation, and lifestyle adjustments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Resource Connection</h4>
                  <p className="text-muted-foreground">Connection to medical, financial, and social resources to support your journey.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Illness & Disability Support</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Emotional Resilience:</strong> Develop healthy coping strategies and emotional resilience.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Clarity & Direction:</strong> Gain clarity about your situation and direction for moving forward.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Practical Support:</strong> Navigate medical and practical decisions with professional guidance.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Resource Access:</strong> Connect with resources and support systems available to you.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Family Support:</strong> Help your family adjust and communicate effectively.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Confidential & Compassionate</h3>
              <p className="text-muted-foreground">
                All illness and disability support is provided in a confidential, compassionate environment. Your experiences, feelings, and concerns are respected and validated. Support is tailored to your unique needs and circumstances.
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
            Schedule a consultation to discuss how illness and disability support can help you and your family navigate this transition.
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
