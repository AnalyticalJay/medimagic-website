import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function HealthEducation() {
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
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              SOCIAL WORK SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Health Education & Promotion
            </h1>
            <p className="text-xl text-muted-foreground">
              Educational support to promote health awareness, informed decision-making, and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Empowering Health Through Education</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Health literacy—the ability to understand health information and make informed decisions—is fundamental to wellbeing. Yet many people lack access to clear, trustworthy health information or struggle to navigate complex health systems. At MediMagic, our health education and promotion services empower individuals and communities with knowledge, skills, and resources to make informed health decisions and promote wellness.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is Health Education & Promotion?</h3>
            <p className="text-muted-foreground mb-6">
              Health education and promotion is professional social work support designed to increase health literacy, promote informed decision-making, and support behaviour change that improves health and wellbeing. It combines education, counselling, and resource connection to help individuals and families make informed choices about their health.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Areas of Support</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Health Literacy</h4>
                <p className="text-muted-foreground text-sm">Education to help you understand health information and navigate health systems.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Chronic Disease Management</h4>
                <p className="text-muted-foreground text-sm">Support managing chronic conditions like diabetes, hypertension, and heart disease.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Preventive Health</h4>
                <p className="text-muted-foreground text-sm">Education on disease prevention, screening, and healthy lifestyle choices.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Mental Health Awareness</h4>
                <p className="text-muted-foreground text-sm">Education on mental health, stress management, and emotional wellbeing.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Sexual & Reproductive Health</h4>
                <p className="text-muted-foreground text-sm">Education on sexual health, contraception, and reproductive wellbeing.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Substance Use Prevention</h4>
                <p className="text-muted-foreground text-sm">Education on substance use risks and support for behaviour change.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Who Can Benefit?</h3>
            <p className="text-muted-foreground mb-6">
              Health education and promotion is valuable for:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> Individuals seeking to improve health literacy and understanding</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Those managing chronic health conditions</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Families wanting to promote health and wellness</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Individuals seeking to make informed health decisions</li>
              <li className="flex gap-3"><span className="text-accent">•</span> Those interested in disease prevention and health promotion</li>
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
                  <h4 className="font-bold text-foreground mb-2">Assessment</h4>
                  <p className="text-muted-foreground">Understanding your health concerns, current knowledge, and learning needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Education & Information</h4>
                  <p className="text-muted-foreground">Provision of clear, evidence-based health information tailored to your needs and learning style.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Skill Development</h4>
                  <p className="text-muted-foreground">Development of practical skills for managing health, making decisions, and navigating health systems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Support & Follow-up</h4>
                  <p className="text-muted-foreground">Ongoing support to help you implement changes and achieve health goals.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Topics We Cover</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Understanding health conditions and treatment options</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Medication management and adherence</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Nutrition and healthy eating</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Physical activity and exercise</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Stress management and mental health</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Sleep hygiene and rest</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Navigating healthcare systems and accessing resources</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Health Education & Promotion</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Informed Decision-Making:</strong> Make health decisions based on clear, evidence-based information.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Better Health Outcomes:</strong> Improved understanding and management of health leads to better outcomes.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Empowerment:</strong> Feel empowered to take control of your health and wellbeing.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Disease Prevention:</strong> Reduce risk of disease through informed lifestyle choices.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Improved Quality of Life:</strong> Better health management improves overall quality of life.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Evidence-Based & Accessible</h3>
              <p className="text-muted-foreground">
                All health education and promotion is based on current evidence and presented in clear, accessible language. We respect your existing knowledge and beliefs while providing accurate, trustworthy information to support informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Improve Your Health?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how health education and promotion can support your wellness goals.
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
