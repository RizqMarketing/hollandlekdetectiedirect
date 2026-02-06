import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceFAQProps {
  faqs: { question: string; answer: string }[];
  serviceName: string;
}

const ServiceFAQ = ({ faqs, serviceName }: ServiceFAQProps) => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ocean-pale rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft border border-border/50">
            <div className="w-1.5 h-1.5 rounded-full bg-ocean-medium" />
            <span className="text-sm font-semibold text-ocean-deep uppercase tracking-wider">Veelgestelde Vragen</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vragen over{" "}
            <span className="text-gradient-ocean">{serviceName}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen? Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij? Neem gerust contact op.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card rounded-2xl border border-border/50 shadow-soft px-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left font-display text-lg font-bold text-foreground hover:text-ocean-deep hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
