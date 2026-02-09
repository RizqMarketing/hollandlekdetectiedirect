import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ons dak lekte al maanden en niemand kon de oorzaak vinden. Holland Lekdetectie Direct kwam langs met een warmtecamera en had het probleem binnen een uur gelokaliseerd. Top service!",
    author: "Jan de Vries",
    location: "Amsterdam",
    avatar: "JV",
  },
  {
    quote: "Na een zware storm had ons dak schade. Holland Lekdetectie Direct reageerde dezelfde dag nog en vond snel de oorzaak. Zeer professioneel rapport met duidelijke foto's ontvangen.",
    author: "Maria Jansen",
    location: "Rotterdam",
    avatar: "MJ",
  },
  {
    quote: "Vochtplekken op zolder bleken een daklekkage te zijn. Dankzij de grondige inspectie van Holland Lekdetectie Direct is alles snel en vakkundig verholpen. Echte specialisten!",
    author: "Peter van den Berg",
    location: "Utrecht",
    avatar: "PB",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="over-ons" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-ocean-pale/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
              <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Klantervaringen</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Meer dan{" "}
              <span className="text-gradient-ocean">1.500+ tevreden</span>
              {" "}klanten
            </h2>
          </div>
          
          {/* Rating summary */}
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-center lg:text-right">
              <div className="flex items-center gap-1 justify-center lg:justify-end mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">4.9 uit 500+ reviews</div>
            </div>
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google Reviews" 
              className="h-6 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-8 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5 pt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center shadow-soft">
                  <span className="font-display font-bold text-primary-foreground text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
