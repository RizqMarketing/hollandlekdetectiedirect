import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/diensten/ServiceHero";
import ServiceProblems from "@/components/diensten/ServiceProblems";
import ServiceProcess from "@/components/diensten/ServiceProcess";
import ServiceBenefits from "@/components/diensten/ServiceBenefits";
import ServiceFAQ from "@/components/diensten/ServiceFAQ";
import ServiceCTA from "@/components/diensten/ServiceCTA";
import RelatedServices from "@/components/diensten/RelatedServices";
import TrustSection from "@/components/TrustSection";
import { getServiceBySlug } from "@/data/services";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

const EndoscopieInspectie = () => {
  const service = getServiceBySlug("endoscopie-inspectie")!;

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hollandlekdetectiedirect.nl${service.path}`} />
        <link rel="canonical" href={`https://hollandlekdetectiedirect.nl${service.path}`} />
        <script type="application/ld+json">{JSON.stringify(generateServiceSchema(service))}</script>
        <script type="application/ld+json">{JSON.stringify(generateFAQSchema(service.faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(generateBreadcrumbSchema(service))}</script>
      </Helmet>
      <Header />
      <main>
        <ServiceHero
          title={service.title}
          subtitle={service.heroSubtitle}
          description={service.heroDescription}
          icon={service.icon}
          gradient={service.gradient}
          stats={service.stats}
          image="/endoscopie.jpg"
          imageAlt="Endoscopische camera-inspectie van leidingen"
        />
        <TrustSection />
        <ServiceProblems problems={service.problems} gradient={service.gradient} />
        <ServiceProcess steps={service.processSteps} gradient={service.gradient} />
        <ServiceBenefits benefits={service.benefits} serviceName={service.title} gradient={service.gradient} />
        <ServiceFAQ faqs={service.faqs} serviceName={service.title} />
        <ServiceCTA serviceName={service.title} />
        <RelatedServices currentSlug={service.slug} />
      </main>
      <Footer />
    </div>
  );
};

export default EndoscopieInspectie;
