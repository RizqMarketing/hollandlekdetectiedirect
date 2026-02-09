import {
  Home,
  Droplets,
  Thermometer,
  Search,
  Shield,
  Clock,
  CheckCircle2,
  Award,
  Target,
  Zap,
  Eye,
  FileText,
  Gauge,
  Ruler,
  Camera,
  Lightbulb,
  Volume2,
  Wind,
  Pipette,
  type LucideIcon,
} from "lucide-react";

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  icon: LucideIcon;
  gradient: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroDescription: string;
  shortDescription: string;
  problems: ServiceProblem[];
  processSteps: ServiceStep[];
  benefits: ServiceBenefit[];
  faqs: ServiceFAQ[];
  stats: ServiceStat[];
}

export const services: ServiceData[] = [
  {
    slug: "daklekkage-opsporing",
    title: "Daklekkage Opsporing",
    icon: Home,
    gradient: "from-blue-600 to-sky-400",
    path: "/diensten/daklekkage-opsporing",
    metaTitle: "Daklekkage Opsporing | Professionele Lekdetectie | Holland Lekdetectie Direct",
    metaDescription:
      "Professionele daklekkage opsporing in heel Nederland. Non-destructief, snel resultaat met thermografie en elektronische lekdetectie. 24/7 beschikbaar. Bel nu: 0800-1234567.",
    heroSubtitle: "Specialist in Daklekkage Detectie",
    heroDescription:
      "Lekt uw dak? Onze gecertificeerde specialisten sporen elke daklekkage snel en nauwkeurig op met geavanceerde technologie. Geen onnodige schade aan uw dak.",
    shortDescription:
      "Professioneel opsporen van lekkages in platte en schuine daken. Van dakpannen tot bitumen, wij vinden elke lekkage.",
    problems: [
      {
        title: "Wateroverlast in huis",
        description:
          "Vochtplekken op plafonds, druipend water en beschadigde muren door een lekkend dak. De schade groeit elke dag.",
      },
      {
        title: "Schimmelvorming",
        description:
          "Langdurige vochtindringing leidt tot schimmelgroei die schadelijk is voor uw gezondheid en die van uw gezin.",
      },
      {
        title: "Constructieschade",
        description:
          "Onontdekte daklekkages kunnen de draagconstructie van uw woning ernstig aantasten en leiden tot dure reparaties.",
      },
      {
        title: "Isolatieverlies",
        description:
          "Vocht in de dakisolatie vermindert de isolatiewaarde drastisch en verhoogt uw energiekosten aanzienlijk.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Visuele Dakinspectie",
        description:
          "Grondige visuele inspectie van het dak op beschadigde dakpannen, scheuren in loodslabben en verouderde kitvoegen.",
      },
      {
        step: "02",
        title: "Elektronische Lekdetectie",
        description:
          "Met geavanceerde elektronische meetapparatuur lokaliseren wij de exacte plek van de lekkage in uw dak.",
      },
      {
        step: "03",
        title: "Vochtmeting & Thermografie",
        description:
          "Warmtebeeldcamera's en vochtmeters brengen de volledige omvang van de vochtschade nauwkeurig in kaart.",
      },
      {
        step: "04",
        title: "Rapportage & Advies",
        description:
          "U ontvangt een uitgebreid rapport met foto's, bevindingen en een concreet reparatieadvies op maat.",
      },
    ],
    benefits: [
      {
        title: "Non-destructieve methoden",
        description: "Uw dak blijft volledig intact. Wij gebruiken geavanceerde technologie die geen schade veroorzaakt.",
        icon: Shield,
      },
      {
        title: "Binnen 24 uur ter plaatse",
        description: "Spoedservice beschikbaar. Bij acute lekkages staan wij dezelfde dag nog bij u op de stoep.",
        icon: Clock,
      },
      {
        title: "Alle daktypen",
        description: "Plat dak, schuin dak, bitumen, dakpannen, EPDM of zinken dak — wij hebben ervaring met elk type.",
        icon: Home,
      },
      {
        title: "Gecertificeerde inspecteurs",
        description: "Onze specialisten zijn volledig gecertificeerd en werken met de nieuwste detectieapparatuur.",
        icon: Award,
      },
      {
        title: "Geen vind = geen kosten",
        description: "Vinden wij geen lekkage? Dan betaalt u niets. Zo zeker zijn wij van onze methoden.",
        icon: CheckCircle2,
      },
      {
        title: "Uitgebreid fotoverslag",
        description: "U ontvangt een compleet rapport met foto's en duidelijke aanbevelingen voor herstel.",
        icon: FileText,
      },
    ],
    faqs: [
      {
        question: "Hoe lang duurt een daklekkage inspectie?",
        answer:
          "Een standaard daklekkage inspectie duurt gemiddeld 1 tot 2 uur, afhankelijk van de grootte en complexiteit van het dak. Bij uitgebreide problemen kan dit langer duren. Wij nemen altijd de tijd die nodig is voor een grondige inspectie.",
      },
      {
        question: "Is de inspectie destructief voor mijn dak?",
        answer:
          "Nee, wij gebruiken uitsluitend non-destructieve methoden zoals thermografie en elektronische lekdetectie. Uw dak blijft volledig intact tijdens het onderzoek. Dit is juist een van onze belangrijkste voordelen.",
      },
      {
        question: "Wat kost daklekkage opsporing?",
        answer:
          "De kosten zijn afhankelijk van de grootte van het dak en de complexiteit van het probleem. Neem contact op voor een vrijblijvende offerte. Bij ons geldt: geen vind, geen kosten.",
      },
      {
        question: "Werken jullie ook bij platte daken?",
        answer:
          "Ja, wij zijn gespecialiseerd in zowel platte als schuine daken. Onze methoden zijn geschikt voor elk type dakbedekking, van bitumen en EPDM tot dakpannen en leien.",
      },
      {
        question: "Wat gebeurt er na de inspectie?",
        answer:
          "Na de inspectie ontvangt u een uitgebreid rapport met foto's, de exacte locatie van de lekkage en duidelijke aanbevelingen voor herstel. Indien gewenst kunnen wij u doorverwijzen naar een betrouwbare reparatiepartner.",
      },
    ],
    stats: [
      { value: "1.500+", label: "Tevreden klanten" },
      { value: "< 2 uur", label: "Gemiddelde inspectietijd" },
      { value: "98%", label: "Succespercentage" },
    ],
  },
  {
    slug: "waterlekkage-opsporing",
    title: "Waterlekkage Opsporing",
    icon: Droplets,
    gradient: "from-blue-500 to-cyan-400",
    path: "/diensten/waterlekkage-opsporing",
    metaTitle: "Waterlekkage Opsporing | Leidingwerk & Vloerverwarming | Holland Lekdetectie Direct",
    metaDescription:
      "Verborgen waterlekkage? Wij detecteren leidinglekkages met akoestische detectie en tracergas. Minimale schade, nauwkeurig tot op 10cm. Bel: 0800-1234567.",
    heroSubtitle: "Expert in Waterlekkage Detectie",
    heroDescription:
      "Verborgen waterlekkage? Onze specialisten lokaliseren leidinglekkages in muren, vloeren en plafonds met minimale schade. Nauwkeurig tot op 10 centimeter.",
    shortDescription:
      "Detecteren van verborgen waterleidinglekkages in muren, vloeren en plafonds met minimale schade.",
    problems: [
      {
        title: "Onverklaarbaar hoge waterrekening",
        description:
          "Uw waterrekening stijgt zonder duidelijke reden? Een verborgen lekkage kan honderden liters water per dag verspillen.",
      },
      {
        title: "Natte plekken en vochtschade",
        description:
          "Mysterieuze natte plekken in muren, vloeren of plafonds die steeds terugkomen ondanks oppervlakkige reparaties.",
      },
      {
        title: "Drukverlies op de waterleiding",
        description:
          "Verminderde waterdruk of een watermeter die blijft draaien terwijl alle kranen dicht staan — tekenen van een lek.",
      },
      {
        title: "Waterschade aan bezittingen",
        description:
          "Ongecontroleerde lekkages kunnen leiden tot ernstige waterschade aan vloeren, meubels en waardevolle bezittingen.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Druktest Leidingsysteem",
        description:
          "We voeren een nauwkeurige druktest uit op uw waterleidingsysteem om te bevestigen of er een lekkage aanwezig is.",
      },
      {
        step: "02",
        title: "Akoestische Lekdetectie",
        description:
          "Met ultragevoelige microfoons luisteren wij naar lekgeluiden in uw leidingen om de locatie te bepalen.",
      },
      {
        step: "03",
        title: "Tracergas Methode",
        description:
          "Indien nodig injecteren wij onschadelijk tracergas in de leiding. Dit gas ontsnapt op de lekplek en wordt bovengronds gedetecteerd.",
      },
      {
        step: "04",
        title: "Precisielokalisatie & Rapport",
        description:
          "De exacte leklocatie wordt gemarkeerd (nauwkeurig tot 10cm) en u ontvangt een gedetailleerd rapport.",
      },
    ],
    benefits: [
      {
        title: "Minimale breekschade",
        description: "Slechts 1 tegel verwijderen in plaats van de hele vloer openbreken. Dat scheelt duizenden euro's.",
        icon: Target,
      },
      {
        title: "Nauwkeurig tot op 10cm",
        description: "Onze detectiemethoden lokaliseren de lekkage tot op 10 centimeter nauwkeurig.",
        icon: Ruler,
      },
      {
        title: "Ook vloerverwarming",
        description: "Gespecialiseerd in het opsporen van lekkages in vloerverwarmingssystemen zonder de vloer te beschadigen.",
        icon: Gauge,
      },
      {
        title: "Alle leidingtypes",
        description: "Koperen, kunststof, stalen of loden leidingen — onze methoden werken op elk materiaal.",
        icon: Pipette,
      },
      {
        title: "Voorkomt gevolgschade",
        description: "Snelle detectie voorkomt duizenden euro's aan gevolgschade door water aan uw woning en interieur.",
        icon: Shield,
      },
      {
        title: "Professioneel rapport",
        description: "U ontvangt een helder rapport met foto's, leklocatie en concrete hersteladviezen.",
        icon: FileText,
      },
    ],
    faqs: [
      {
        question: "Hoe weet ik of ik een verborgen waterlek heb?",
        answer:
          "Typische signalen zijn: een onverklaarbaar hoge waterrekening, natte plekken die terugkomen, een watermeter die blijft draaien met alle kranen dicht, of drukverlies op de leiding. Heeft u een van deze symptomen? Neem dan direct contact op.",
      },
      {
        question: "Kunnen jullie een lekkage in vloerverwarming vinden?",
        answer:
          "Ja, wij zijn gespecialiseerd in het opsporen van lekkages in vloerverwarmingssystemen. Met behulp van drukproeven, thermografie en tracergas vinden wij de exacte locatie zonder uw hele vloer open te breken.",
      },
      {
        question: "Hoeveel schade ontstaat er bij het opsporen?",
        answer:
          "Minimaal. Dankzij onze geavanceerde detectiemethoden hoeft er slechts op de exacte leklocatie een klein gat gemaakt te worden. Vergelijk dit met traditionele methoden waarbij vaak de hele vloer of muur opengebroken wordt.",
      },
      {
        question: "Hoe snel kunnen jullie langskomen?",
        answer:
          "Bij spoedgevallen kunnen wij vaak dezelfde dag nog langskomen. Voor reguliere inspecties plannen wij doorgaans binnen 24 tot 48 uur een afspraak. Bel ons voor de actuele beschikbaarheid.",
      },
      {
        question: "Repareren jullie de lekkage ook?",
        answer:
          "Wij zijn gespecialiseerd in het opsporen van lekkages. Voor de reparatie werken wij samen met betrouwbare partners die wij graag aan u doorverwijzen.",
      },
    ],
    stats: [
      { value: "1.500+", label: "Tevreden klanten" },
      { value: "10cm", label: "Nauwkeurigheid" },
      { value: "97%", label: "Eerste keer raak" },
    ],
  },
  {
    slug: "thermografie",
    title: "Thermografie",
    icon: Thermometer,
    gradient: "from-orange-500 to-amber-400",
    path: "/diensten/thermografie",
    metaTitle: "Thermografie Inspectie | Warmtebeeldonderzoek | Holland Lekdetectie Direct",
    metaDescription:
      "Thermografisch onderzoek voor vochtdetectie, energieverlies en isolatiegebreken. Professionele infraroodcamera's, direct visueel bewijs. Bel: 0800-1234567.",
    heroSubtitle: "Professioneel Thermografisch Onderzoek",
    heroDescription:
      "Onzichtbare problemen zichtbaar maken. Met professionele warmtebeeldcamera's detecteren wij vochtproblemen, isolatiegebreken en energieverlies in uw woning.",
    shortDescription:
      "Warmtebeeldcamera's tonen temperatuurverschillen die wijzen op verborgen vochtproblemen in daken en gevels.",
    problems: [
      {
        title: "Onzichtbare vochtproblemen",
        description:
          "Vocht achter muren en in constructies dat met het blote oog niet te zien is, maar wel schade aanricht.",
      },
      {
        title: "Energieverlies door slechte isolatie",
        description:
          "Uw energierekening is onverklaarbaar hoog? Mogelijk verliest uw woning warmte door gebrekkige isolatie.",
      },
      {
        title: "Koudebruggen & condensatie",
        description:
          "Koudebruggen in de constructie leiden tot condensvorming, schimmelgroei en een ongezond binnenklimaat.",
      },
      {
        title: "Verborgen bouwkundige gebreken",
        description:
          "Na een verbouwing of bij aankoop van een woning wilt u zeker weten dat er geen verborgen gebreken zijn.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Voorbereiding & Condities",
        description:
          "Wij controleren of de omstandigheden geschikt zijn voor een betrouwbare thermografische meting (temperatuurverschil binnen/buiten).",
      },
      {
        step: "02",
        title: "Thermografische Scan",
        description:
          "Met professionele infraroodcamera's scannen wij systematisch alle relevante oppervlakken van uw woning.",
      },
      {
        step: "03",
        title: "Analyse Warmtebeelden",
        description:
          "Onze specialisten analyseren de temperatuurpatronen en identificeren afwijkingen die duiden op problemen.",
      },
      {
        step: "04",
        title: "Gedetailleerd Rapport",
        description:
          "U ontvangt een uitgebreid rapport met geannoteerde warmtebeelden, bevindingen en concrete adviezen.",
      },
    ],
    benefits: [
      {
        title: "Volledig contactloos",
        description: "Geen aanraking, geen schade. De infraroodcamera registreert temperaturen op afstand.",
        icon: Eye,
      },
      {
        title: "Direct visueel bewijs",
        description: "Warmtebeelden tonen duidelijk in kleur waar de problemen zich bevinden. Overtuigend voor elke situatie.",
        icon: Camera,
      },
      {
        title: "Groot oppervlak snel scannen",
        description: "In korte tijd wordt een compleet gebouw gescand. Ideaal voor volledige woninginspecties.",
        icon: Zap,
      },
      {
        title: "Ideaal voor bouwkundige keuringen",
        description: "Bij aankoop van een woning geeft thermografie zekerheid over de staat van isolatie en constructie.",
        icon: CheckCircle2,
      },
      {
        title: "Energiebesparingsadvies",
        description: "Wij adviseren waar u het meest effectief kunt isoleren voor maximale energiebesparing.",
        icon: Lightbulb,
      },
      {
        title: "Preventief onderhoud",
        description: "Vroegtijdig problemen signaleren voordat ze uitgroeien tot kostbare schades.",
        icon: Shield,
      },
    ],
    faqs: [
      {
        question: "Wat is thermografie precies?",
        answer:
          "Thermografie is een techniek waarbij met een infraroodcamera de warmtestraling van oppervlakken wordt gemeten en omgezet in een kleurrijk warmtebeeld. Temperatuurverschillen worden zo zichtbaar gemaakt, waardoor vochtproblemen, isolatiegebreken en koudebruggen opgespoord kunnen worden.",
      },
      {
        question: "Wanneer is thermografie de juiste methode?",
        answer:
          "Thermografie is ideaal bij vermoeden van vochtproblemen, isolatiegebreken, energieverlies, koudebruggen of verborgen bouwkundige gebreken. Het is ook uitermate geschikt als onderdeel van een bouwkundige keuring bij de aankoop van een woning.",
      },
      {
        question: "Zijn er speciale voorwaarden nodig voor een thermografisch onderzoek?",
        answer:
          "Ja, voor betrouwbare resultaten is een temperatuurverschil van minimaal 10 graden Celsius tussen binnen en buiten gewenst. Daarom wordt thermografie bij voorkeur uitgevoerd in het koelere seizoen (oktober t/m april). Wij adviseren u over het ideale moment.",
      },
      {
        question: "Kan thermografie ook buitenshuis worden toegepast?",
        answer:
          "Absoluut. Wij voeren zowel interne als externe thermografische inspecties uit. Buitenopnames zijn bijzonder geschikt om isolatiegebreken in gevels, daken en kozijnen op te sporen.",
      },
      {
        question: "Hoe lees ik een thermografisch rapport?",
        answer:
          "Ons rapport bevat geannoteerde warmtebeelden met een duidelijke kleurenschaal. Blauwe/paarse tinten zijn koud (mogelijk vochtproblemen of isolatiegebreken), rode/gele tinten zijn warm. Elke afwijking wordt uitgelegd met een toelichting en advies.",
      },
    ],
    stats: [
      { value: "2.000+", label: "Inspecties uitgevoerd" },
      { value: "100%", label: "Non-destructief" },
      { value: "4.9★", label: "Klantwaardering" },
    ],
  },
  {
    slug: "endoscopie-inspectie",
    title: "Endoscopie Inspectie",
    icon: Search,
    gradient: "from-emerald-500 to-teal-400",
    path: "/diensten/endoscopie-inspectie",
    metaTitle: "Endoscopie Inspectie | Camera-inspectie Leidingen & Muren | Holland Lekdetectie Direct",
    metaDescription:
      "Endoscopie inspectie voor leidingen, spouwmuren en kruipruimtes. Flexibele HD-camera, real-time beelden, geen sloopwerk nodig. Bel: 0800-1234567.",
    heroSubtitle: "Specialist in Camera-inspectie",
    heroDescription:
      "Zien wat normaal verborgen blijft. Met flexibele endoscoop-camera's inspecteren wij leidingen, spouwmuren en kruipruimtes zonder sloopwerk. Direct diagnose ter plaatse.",
    shortDescription:
      "Camera-inspectie in moeilijk bereikbare plaatsen via kleine openingen. Geen sloopwerk nodig.",
    problems: [
      {
        title: "Problemen op onbereikbare plaatsen",
        description:
          "Lekkages, verstoppingen of schade op plekken waar u niet bij kunt — achter muren, in leidingen of kruipruimtes.",
      },
      {
        title: "Verstoppingen in afvoerleidingen",
        description:
          "Terugkerende verstoppingen die niet met standaard methoden opgelost worden. De oorzaak zit dieper in het systeem.",
      },
      {
        title: "Schade in spouwmuren",
        description:
          "Vochtproblemen of isolatiegebreken in spouwmuren die zonder inspectie onmogelijk vast te stellen zijn.",
      },
      {
        title: "Onzekerheid over verborgen constructies",
        description:
          "Bij verbouwing of aankoop wilt u weten wat er achter de muren en onder de vloeren verborgen zit.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Toegangspunt Bepalen",
        description:
          "Wij bepalen het optimale punt om de camera in te voeren — via een bestaande opening of een minimaal inspectiegat.",
      },
      {
        step: "02",
        title: "Camera Invoeren",
        description:
          "De flexibele endoscoop-camera met HD-resolutie en LED-verlichting wordt voorzichtig ingebracht.",
      },
      {
        step: "03",
        title: "Real-time Video-inspectie",
        description:
          "Op een beeldscherm volgen wij live mee en documenteren alle bevindingen met foto's en video-opnames.",
      },
      {
        step: "04",
        title: "Analyse & Rapportage",
        description:
          "U ontvangt een gedetailleerd rapport met beeldmateriaal, bevindingen en een concreet advies voor vervolgstappen.",
      },
    ],
    benefits: [
      {
        title: "Geen sloopwerk nodig",
        description: "Een kleine opening van slechts enkele millimeters volstaat. Uw woning blijft intact.",
        icon: Shield,
      },
      {
        title: "HD-camera met verlichting",
        description: "Haarscherpe beelden, zelfs in de donkerste ruimtes. LED-verlichting maakt alles zichtbaar.",
        icon: Camera,
      },
      {
        title: "Video-opnames bewaard",
        description: "Alle opnames worden bewaard en aan u overhandigd als onderdeel van uw dossier.",
        icon: Eye,
      },
      {
        title: "Breed inzetbaar",
        description: "Geschikt voor leidingen, muren, vloeren, kruipruimtes, schoorstenen en meer.",
        icon: Target,
      },
      {
        title: "Directe diagnose ter plaatse",
        description: "Onze specialist analyseert de beelden ter plekke en bespreekt direct de bevindingen met u.",
        icon: Zap,
      },
      {
        title: "Combineerbaar met andere methoden",
        description: "Endoscopie wordt vaak gecombineerd met thermografie of akoestische detectie voor een compleet beeld.",
        icon: Volume2,
      },
    ],
    faqs: [
      {
        question: "Wat is endoscopie inspectie precies?",
        answer:
          "Endoscopie inspectie is een visuele inspectiemethode waarbij een dunne, flexibele camera wordt ingebracht in moeilijk bereikbare ruimtes. Denk aan leidingen, spouwmuren, kruipruimtes of holtes in constructies. De camera stuurt real-time HD-beelden naar een beeldscherm.",
      },
      {
        question: "Hoe groot moet de opening zijn voor de camera?",
        answer:
          "Onze dunste endoscoop heeft een diameter van slechts 6mm. In de meeste gevallen is een bestaande opening (zoals een stopcontactgat of een voeg) voldoende. Indien nodig boren wij een klein gaatje dat achteraf eenvoudig wordt gedicht.",
      },
      {
        question: "Kunnen jullie ook rioolbuizen inspecteren?",
        answer:
          "Ja, voor rioolinspecties gebruiken wij speciale rioolcamera's die geschikt zijn voor grotere diameters en langere afstanden. Hiermee sporen wij verstoppingen, breuken, wortelingroei en verzakkingen op.",
      },
      {
        question: "Beschadigt de camera mijn leidingen?",
        answer:
          "Nee, de endoscoop is speciaal ontworpen om geen schade te veroorzaken. De flexibele tip past zich aan bochten aan en de buitenkant is glad afgewerkt om krassen te voorkomen.",
      },
      {
        question: "Krijg ik de video-opnames mee?",
        answer:
          "Ja, alle foto's en video-opnames die tijdens de inspectie worden gemaakt, worden aan u overhandigd op een USB-stick of digitaal verzonden.",
      },
    ],
    stats: [
      { value: "1.500+", label: "Tevreden klanten" },
      { value: "6mm", label: "Kleinste cameradiameter" },
      { value: "100%", label: "Non-destructief" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(currentSlug: string): ServiceData[] {
  return services.filter((s) => s.slug !== currentSlug);
}
