import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle2, ArrowRight, Droplets } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20 lg:pt-24">
      {/* Animated water background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-ocean-pale rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-secondary rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Water ripple decorations */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-2 border-ocean-light/20 rounded-full animate-ripple" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-ocean-light/15 rounded-full animate-ripple" style={{ animationDelay: '1.5s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,150,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Column - Content */}
          <div className="py-12 lg:py-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2.5 mb-8 shadow-soft border border-border/50 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Nu beschikbaar in uw regio</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Daklekkages{" "}
              <span className="relative">
                <span className="text-gradient-ocean">opsporen</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-ocean-light/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,6 Q50,0 100,6 T200,6" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
              <br />
              en verhelpen
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Lekt uw dak? Wij vinden de oorzaak snel en nauwkeurig met geavanceerde technologie.
              <span className="text-foreground font-medium"> Geen onnodige schade, wel een snelle oplossing</span>.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: Clock, text: "Binnen 2 uur ter plaatse" },
                { icon: Shield, text: "Grondige dakinspectie" },
                { icon: CheckCircle2, text: "Geen vind = geen kosten" },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border/50 shadow-soft hover:shadow-card hover:bg-card transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-ocean-medium" />
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="xl" className="group">
                <span>Gratis Inspectie Aanvragen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <span>Bekijk Werkwijze</span>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 lg:gap-12 mt-14 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              {[
                { value: "15+", label: "Jaar ervaring" },
                { value: "5.000+", label: "Daklekkages verholpen" },
                { value: "4.9★", label: "Klantwaardering" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[650px] animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Main Image with creative frame */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-cta rounded-3xl opacity-10 blur-xl" />
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-ocean-medium rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-ocean-light rounded-br-3xl" />
              
              {/* Image Container */}
              <div className="relative w-full h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/hero-leak-detection.jpg"
                  alt="Professionele dakinspectie specialist aan het werk"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center shadow-soft">
                      <Droplets className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground">Daklekkage Inspectie</div>
                      <div className="text-sm text-muted-foreground">Snel de oorzaak vinden</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - Response Time */}
            <div className="absolute -left-4 lg:-left-12 top-12 bg-card rounded-2xl shadow-elevated p-5 border border-border/50 max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-2xl font-display font-bold text-foreground">24/7</div>
              </div>
              <div className="text-sm text-muted-foreground">Spoedservice beschikbaar, ook 's nachts en in weekenden</div>
            </div>

            {/* Floating Card - Rating */}
            <div className="absolute -right-4 lg:-right-8 bottom-32 bg-card rounded-2xl shadow-elevated p-5 border border-border/50">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="font-display text-xl font-bold text-foreground">4.9 / 5</div>
              <div className="text-sm text-muted-foreground">500+ Google Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto fill-background">
          <path d="M0,40 C480,100 960,0 1440,40 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
