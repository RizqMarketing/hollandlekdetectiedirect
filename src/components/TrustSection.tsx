import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Gecertificeerd",
    description: "VCA gecertificeerd en erkend specialist",
  },
  {
    icon: Award,
    title: "Kwaliteitsgarantie",
    description: "Geen vind, geen kosten",
  },
  {
    icon: Users,
    title: "Ervaren Team",
    description: "15+ jaar praktijkervaring",
  },
  {
    icon: Clock,
    title: "Snelle Service",
    description: "24/7 spoedservice beschikbaar",
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 bg-gradient-cta relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-2 sm:gap-4 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary-foreground text-sm sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
