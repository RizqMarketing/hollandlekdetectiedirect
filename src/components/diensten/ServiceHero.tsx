import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { useContactForm } from "@/components/ContactFormModal";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
}

const ServiceHero = ({ title, subtitle, description, icon: Icon, gradient, stats, image, imageAlt }: ServiceHeroProps) => {
  const { openContactForm } = useContactForm();
  return (
    <section className="relative min-h-[85vh] bg-gradient-hero overflow-hidden pt-20 lg:pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-ocean-pale rounded-full blur-3xl opacity-60 animate-float" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-secondary rounded-full blur-3xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-2 border-ocean-light/20 rounded-full animate-ripple" />
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-ocean-light/15 rounded-full animate-ripple" style={{ animationDelay: "1.5s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,150,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground py-6 animate-fade-up">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/#diensten" className="hover:text-foreground transition-colors">Diensten</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center pb-24 lg:pb-32">
          {/* Left Column - Content */}
          <div className="py-8 lg:py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-4 py-2.5 mb-8 shadow-soft border border-border/50 animate-fade-up">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Direct beschikbaar — 24/7</span>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <p className="text-ocean-medium font-semibold text-sm uppercase tracking-wider mb-3">{subtitle}</p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-ocean">{title.split(" ").slice(-1)}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {description}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {[
                { icon: Clock, text: "Binnen 24 uur ter plaatse" },
                { icon: Shield, text: "Non-destructieve methoden" },
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
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" className="group" onClick={openContactForm}>
                <span>Gratis Inspectie Aanvragen</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:0800-1234567">Bel Direct: 0800-1234567</a>
              </Button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-8 lg:gap-12 mt-14 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-6 bg-gradient-cta rounded-3xl opacity-[0.08] blur-2xl" />

              {/* Corner accents */}
              <div className="hidden lg:block absolute -top-3 -left-3 w-24 h-24 border-t-[3px] border-l-[3px] border-ocean-medium/60 rounded-tl-3xl" />
              <div className="hidden lg:block absolute -bottom-3 -right-3 w-24 h-24 border-b-[3px] border-r-[3px] border-ocean-light/50 rounded-br-3xl" />

              {/* Image Container */}
              <div className="relative w-full h-64 sm:h-80 lg:h-[520px] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/5 to-transparent" />

                {/* Overlay badge on image */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-5 lg:left-5 lg:right-5 bg-card/85 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 lg:p-5 border border-white/20 shadow-elevated">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className={`w-11 h-11 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg ring-4 ring-white/10`}>
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-foreground text-base lg:text-lg truncate">{title}</div>
                      <div className="text-sm text-muted-foreground">Professionele inspectie & rapportage</div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - 24/7 Spoedservice */}
            <div className="absolute -left-6 top-10 hidden lg:block animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div className="relative bg-gradient-to-br from-ocean-deep to-ocean-medium rounded-2xl p-5 shadow-elevated max-w-[210px]">
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)] bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-display font-extrabold text-white leading-none">24/7</div>
                      <div className="text-ocean-pale/80 text-xs font-medium uppercase tracking-wider">Bereikbaar</div>
                    </div>
                  </div>
                  <div className="h-px bg-white/15 mb-3" />
                  <div className="text-sm text-white/80 leading-relaxed">Spoedservice beschikbaar, ook in weekenden en feestdagen</div>
                </div>
              </div>
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

export default ServiceHero;
