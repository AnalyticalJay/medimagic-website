import { useLocation } from "wouter";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Booking() {
  const [, navigate] = useLocation();

  // Extract service type from URL query parameters if available
  const params = new URLSearchParams(window.location.search);
  const serviceType = params.get("service") || "";

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
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation with Cornelia Griessel. Whether you need mediation services, social work support, or guidance through a life transition, we're here to help.
            </p>
          </div>

          {/* Booking Form */}
          <div className="flex justify-center">
            <BookingForm 
              serviceType={serviceType}
              onSuccess={() => {
                // Redirect to home after successful booking
                setTimeout(() => navigate("/"), 2000);
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="/#services" className="hover:text-accent transition-colors">Services</a></li>
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
                <li><a href="/about" className="hover:text-accent transition-colors">About Cornelia</a></li>
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
