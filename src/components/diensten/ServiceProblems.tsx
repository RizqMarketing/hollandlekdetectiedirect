import { AlertTriangle } from "lucide-react";

interface ServiceProblemsProps {
  problems: { title: string; description: string }[];
  gradient: string;
}

const ServiceProblems = ({ problems, gradient }: ServiceProblemsProps) => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ocean-pale/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Herkenbare Problemen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Herkent u deze{" "}
            <span className="text-gradient-ocean">problemen</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wacht niet tot de schade groter wordt. Hoe eerder een probleem wordt opgespoord, hoe lager de kosten.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br from-ocean-medium to-ocean-light flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-ocean-deep transition-colors">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-ocean-medium to-ocean-light opacity-5 rounded-bl-[80px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProblems;
