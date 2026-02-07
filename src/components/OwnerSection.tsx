import { Briefcase, HardHat, HeartHandshake, Award, Quote } from "lucide-react";

const roles = [
  { icon: Briefcase, title: "Eigenaar", description: "Oprichter & directie" },
  { icon: HardHat, title: "Projectleider", description: "Aansturing op locatie" },
  { icon: HeartHandshake, title: "Klantencontact", description: "Persoonlijk aanspreekpunt" },
];

const OwnerSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-ocean-pale rounded-full blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] bg-secondary rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,150,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,150,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Het gezicht achter het bedrijf</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Persoonlijk contact,{" "}
            <span className="text-gradient-ocean">vakmanschap</span>
            {" "}gegarandeerd
          </h2>
        </div>

        {/* Content: Photo + Info */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Photo */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-6 bg-gradient-cta rounded-3xl opacity-10 blur-2xl" />

              {/* Frame corners */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-ocean-medium rounded-tl-3xl" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-ocean-light rounded-br-3xl" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://i.imgur.com/YXQLgTQ.jpg"
                  alt="Gino - Eigenaar Holland Lekdetectie Direct"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-bottom"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -right-4 lg:-right-8 bottom-8 bg-card rounded-2xl shadow-elevated p-4 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-cta flex items-center justify-center shadow-soft">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground">Jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Name & title */}
            <div className="mb-8">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Gino
              </h3>
              <div className="w-16 h-1 rounded-full bg-gradient-cta" />
            </div>

            {/* Quote */}
            <div className="relative mb-10 pl-6 border-l-2 border-ocean-light/40">
              <Quote className="absolute -left-3.5 -top-1 w-7 h-7 text-ocean-medium/30" />
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Als oprichter van Holland Lekdetectie Direct ben ik persoonlijk betrokken bij elk project. Van het eerste telefoontje tot de uiteindelijke oplossing — u heeft altijd direct contact met mij. Geen callcenters, geen doorverwijzingen, maar{" "}
                <span className="text-foreground font-medium not-italic">persoonlijke aandacht en vakmanschap</span>."
              </p>
            </div>

            {/* Role badges */}
            <div className="grid sm:grid-cols-3 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-5 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center mx-auto mb-3 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <role.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-display font-bold text-foreground mb-1">{role.title}</div>
                  <div className="text-xs text-muted-foreground">{role.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
