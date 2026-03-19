import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Check } from "lucide-react";

export default function VoiceOfChild() {
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
      <section className="relative py-16 md:py-24 bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/voice-of-child-hero-JzZEFUeCT6m8iMpWQd4YXJ.webp)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm font-medium text-accent mb-4">
              MEDIATION SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Voice of the Child Interviews
            </h1>
            <p className="text-xl text-white/90">
              Professionally conducted interviews ensuring children's perspectives are heard and considered in mediation processes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ensuring Children's Voices Are Heard</h2>
            <p className="text-lg text-muted-foreground mb-6">
              When parents separate or divorce, children are often affected by decisions made about their futures—yet their voices are rarely heard in the process. At MediMagic, we believe children's perspectives, preferences, and concerns are important and should be considered in mediation. Voice of the Child interviews provide a safe, confidential space for children to express themselves and have their views represented in the mediation process.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Are Voice of the Child Interviews?</h3>
            <p className="text-muted-foreground mb-6">
              Voice of the Child interviews are professionally conducted, confidential conversations with children in which they are invited to share their perspectives, feelings, and preferences regarding their family situation. These interviews are facilitated by a trained mediator or social worker who creates a safe, non-judgmental environment where children can express themselves freely.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Purpose of Voice of the Child Interviews</h3>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Gather Children's Perspectives</h4>
                <p className="text-muted-foreground text-sm">Understand how children view their situation and what matters most to them.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Identify Children's Needs</h4>
                <p className="text-muted-foreground text-sm">Understand children's emotional, social, and practical needs during the transition.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Inform Mediation</h4>
                <p className="text-muted-foreground text-sm">Provide information to parents and mediators to help develop child-centred solutions.</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <h4 className="font-bold text-foreground mb-3">Validate Children's Experiences</h4>
                <p className="text-muted-foreground text-sm">Help children feel heard and respected, supporting their emotional wellbeing during a difficult time.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">How Voice of the Child Interviews Work</h3>
            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Preparation</h4>
                  <p className="text-muted-foreground">Parents are informed about the process and consent is obtained. The child is prepared for the interview in an age-appropriate way.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Safe Environment</h4>
                  <p className="text-muted-foreground">The interview takes place in a comfortable, neutral setting where the child feels safe and supported.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Confidential Conversation</h4>
                  <p className="text-muted-foreground">The interviewer engages the child in open, age-appropriate conversation about their feelings, preferences, and concerns.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Documentation & Feedback</h4>
                  <p className="text-muted-foreground">The child's perspective is documented and shared with parents and mediators in a way that protects the child's privacy and wellbeing.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Age-Appropriate Approaches</h3>
            <p className="text-muted-foreground mb-6">
              Voice of the Child interviews are tailored to children's developmental stages:
            </p>
            <div className="space-y-4 my-8">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Young Children (5-8)</h4>
                <p className="text-muted-foreground">Play-based activities, drawing, and simple conversations to help children express their feelings and preferences.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">School-Age Children (9-12)</h4>
                <p className="text-muted-foreground">Structured conversations, activity-based discussions, and guided activities to explore their perspectives and needs.</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-foreground mb-2">Teenagers (13+)</h4>
                <p className="text-muted-foreground">Direct, respectful conversations that acknowledge their growing independence and capacity for complex thinking.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">What Is NOT Voice of the Child Interviews</h3>
            <p className="text-muted-foreground mb-6">
              It's important to understand what Voice of the Child interviews are not:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-8">
              <li className="flex gap-3"><span className="text-accent">•</span> <strong className="text-foreground">Not a custody evaluation:</strong> The process does not determine custody or make decisions for parents.</li>
              <li className="flex gap-3"><span className="text-accent">•</span> <strong className="text-foreground">Not therapy:</strong> While supportive, interviews are not therapeutic counselling.</li>
              <li className="flex gap-3"><span className="text-accent">•</span> <strong className="text-foreground">Not putting children in the middle:</strong> Children are never asked to choose between parents or take sides.</li>
              <li className="flex gap-3"><span className="text-accent">•</span> <strong className="text-foreground">Not forcing children to speak:</strong> Participation is voluntary and children can decline to participate.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">Benefits of Voice of the Child Interviews</h3>
            <div className="space-y-3 my-8">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Child-Centred Decisions:</strong> Ensures decisions reflect children's needs and preferences.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Emotional Validation:</strong> Children feel heard and respected, supporting their emotional wellbeing.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Improved Outcomes:</strong> Arrangements that reflect children's input are more likely to work in practice.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Reduced Conflict:</strong> Understanding children's perspectives can help parents move beyond conflict toward solutions.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground"><strong className="text-foreground">Professional Facilitation:</strong> A trained professional ensures the process is safe, neutral, and developmentally appropriate.</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-lg my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Confidentiality & Child Protection</h3>
              <p className="text-muted-foreground">
                All Voice of the Child interviews are conducted with strict confidentiality. The child's privacy is protected, and information is shared with parents and mediators only in ways that serve the child's best interests. If safety concerns are identified, appropriate steps are taken to protect the child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Hear Your Child's Voice?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how Voice of the Child interviews can support your family's mediation process.
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
