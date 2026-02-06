import { Droplets, Thermometer, Search, Home } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Daklekkage Opsporing",
    description: "Professioneel opsporen van lekkages in platte en schuine daken. Van dakpannen tot bitumen, wij vinden elke lekkage.",
    color: "from-blue-600 to-sky-400",
    path: "/diensten/daklekkage-opsporing",
  },
  {
    icon: Droplets,
    title: "Waterlekkage Opsporing",
    description: "Detecteren van verborgen waterleidinglekkages in muren, vloeren en plafonds met minimale schade.",
    color: "from-blue-500 to-cyan-400",
    path: "/diensten/waterlekkage-opsporing",
  },
  {
    icon: Thermometer,
    title: "Thermografie",
    description: "Warmtebeeldcamera's tonen temperatuurverschillen die wijzen op verborgen vochtproblemen in daken en gevels.",
    color: "from-orange-500 to-amber-400",
    path: "/diensten/thermografie",
  },
  {
    icon: Search,
    title: "Endoscopie Inspectie",
    description: "Camera-inspectie in moeilijk bereikbare plaatsen via kleine openingen.",
    color: "from-emerald-500 to-teal-400",
    path: "/diensten/endoscopie-inspectie",
  },
];

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ocean-pale/30 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Onze Expertise</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Specialist in{" "}
            <span className="text-gradient-ocean">Daklekkages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van daklekkage opsporing tot volledige lekdetectie — wij combineren
            jarenlange ervaring met de nieuwste technologie.
          </p>
        </div>

        {/* Services Grid - Bento style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden block"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with gradient */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-ocean-deep transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-[100px]`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
