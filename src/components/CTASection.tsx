import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-cta relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-water-shimmer/5 rounded-full blur-3xl" />
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary-foreground/10 rounded-full animate-ripple" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary-foreground/10 rounded-full animate-ripple" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary-foreground/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground">Direct beschikbaar in uw regio</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Daklekkage ontdekt?
              <br />
              <span className="text-primary-foreground/80">Wij helpen direct.</span>
            </h2>

            <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Neem vandaag nog contact op voor een vrijblijvende dakinspectie.
              Onze dakspecialisten staan klaar om u te helpen.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a href="tel:0800-1234567" className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-display text-xl font-bold text-primary-foreground mb-1">0800-1234567</div>
              <div className="text-primary-foreground/60 text-sm">Gratis bellen</div>
            </a>
            
            <a href="mailto:info@hollandlekdetectie.nl" className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-display text-xl font-bold text-primary-foreground mb-1">info@hollandlekdetectie.nl</div>
              <div className="text-primary-foreground/60 text-sm">Reactie binnen 2 uur</div>
            </a>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="font-display text-xl font-bold text-primary-foreground mb-1">24/7</div>
              <div className="text-primary-foreground/60 text-sm">Spoedservice beschikbaar</div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated group h-16 px-12 text-lg"
            >
              <span>Vraag Gratis Inspectie Aan</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="mt-6 text-primary-foreground/50 text-sm flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Werkzaam in heel Nederland
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
