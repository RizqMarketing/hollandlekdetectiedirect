import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getOtherServices } from "@/data/services";

interface RelatedServicesProps {
  currentSlug: string;
}

const RelatedServices = ({ currentSlug }: RelatedServicesProps) => {
  const otherServices = getOtherServices(currentSlug);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ocean-pale/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Meer Diensten</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Onze andere{" "}
            <span className="text-gradient-ocean">expertises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naast deze dienst bieden wij nog meer gespecialiseerde detectiemethoden aan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              to={service.path}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden block"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with gradient */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-ocean-deep transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {service.shortDescription}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-ocean-medium font-medium text-sm group-hover:gap-3 transition-all">
                <span>Meer informatie</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-[100px]`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
