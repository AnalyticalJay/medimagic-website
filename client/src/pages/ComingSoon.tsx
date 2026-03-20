import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you could send the email to a notification list
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/pagebackground_cf02c7c4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 md:mb-12">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663349340425/ZpznwMcSz4FYagEgbyVyar/medimagic_logo_e9a0b25b.webp" 
            alt="MediMagic Logo"
            className="h-16 md:h-20 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
          Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 drop-shadow-md">
          We're preparing something special for you. Professional family law mediation and social work services are on the way.
        </p>

        {/* Email Signup */}
        <form onSubmit={handleSubmit} className="mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <div className="flex-1 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent transition-all"
              />
            </div>
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              Notify Me
            </Button>
          </div>
          {submitted && (
            <p className="text-white/90 text-sm md:text-base mt-3 drop-shadow-md">
              ✓ Thank you! We'll notify you when we launch.
            </p>
          )}
        </form>

        {/* Divider */}
        <div className="border-t border-white/30 my-8 md:my-12"></div>

        {/* Preview Link */}
        <div className="text-center">
          <p className="text-white/80 text-sm md:text-base mb-4 drop-shadow-md">
            Want to preview the full website?
          </p>
          <a
            href="/?preview=true"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50"
          >
            View Preview
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-white/60 text-xs md:text-sm mt-12 md:mt-16 drop-shadow-md">
          MediMagic - Professional Mediation & Social Work Services
        </p>
      </div>
    </div>
  );
}
