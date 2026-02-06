import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: { title: string; description: string; icon: LucideIcon }[];
  serviceName: string;
  gradient: string;
}

const ServiceBenefits = ({ benefits, serviceName, gradient }: ServiceBenefitsProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ocean-pale/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Onze Voordelen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Waarom kiezen voor{" "}
            <span className="text-gradient-ocean">{serviceName}</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ervaring, technologie en transparantie — dat is waar wij voor staan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-7 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-ocean-deep transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-cta rounded-2xl p-8 md:p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-water-shimmer/5 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-32 h-32 border border-primary-foreground/10 rounded-full animate-ripple" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                  Geen vind, geen kosten garantie
                </h3>
                <p className="text-primary-foreground/80 max-w-lg">
                  Wij zijn zo overtuigd van onze methoden dat wij een unieke garantie bieden: vinden wij geen lekkage, dan betaalt u niets.
                </p>
              </div>
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated group flex-shrink-0" asChild>
                <a href="tel:0800-1234567">
                  <span>Bel nu</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
