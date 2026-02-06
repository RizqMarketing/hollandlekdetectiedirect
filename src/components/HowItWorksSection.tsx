import { Phone, Search, FileText, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Contact Opnemen",
    description: "Bel ons of vul het contactformulier in. Beschrijf uw dakprobleem en wij plannen snel een afspraak.",
  },
  {
    icon: Search,
    step: "02",
    title: "Dakinspectie & Detectie",
    description: "Onze dakspecialist komt langs met thermografie en detectieapparatuur om de lekkage nauwkeurig te lokaliseren.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Uitgebreid Rapport",
    description: "U ontvangt een gedetailleerd rapport met bevindingen, foto's en aanbevelingen voor dakreparatie.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Dakreparatie & Herstel",
    description: "Wij adviseren over de beste aanpak voor uw dak en kunnen doorverwijzen naar betrouwbare dakspecialisten.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="werkwijze" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-pale rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft border border-border/50">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Onze Werkwijze</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Van melding tot{" "}
            <span className="text-gradient-ocean">oplossing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Een transparant en efficiënt proces. Geen verrassingen, alleen resultaat.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-ocean-light via-ocean-medium to-ocean-light opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Step indicator */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-cta opacity-20 group-hover:opacity-40 blur-sm transition-opacity" />
                    {/* Main circle */}
                    <div className="relative w-16 h-16 rounded-full bg-gradient-cta flex items-center justify-center shadow-elevated group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-ocean-medium flex items-center justify-center shadow-soft">
                      <span className="text-xs font-bold text-ocean-deep">{item.step}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow between steps - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[72px] -right-4 text-ocean-light/40">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 text-center group-hover:-translate-y-1">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
