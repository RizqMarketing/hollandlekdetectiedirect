import { createContext, useContext, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";

// --- Context ---

interface ContactFormContextType {
  openContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | null>(null);

export const useContactForm = () => {
  const ctx = useContext(ContactFormContext);
  if (!ctx) throw new Error("useContactForm must be used within ContactFormProvider");
  return ctx;
};

// --- Form Schema ---

const contactSchema = z.object({
  naam: z.string().min(2, "Vul uw naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  telefoon: z.string().min(8, "Vul een geldig telefoonnummer in"),
  adres: z.string().optional(),
  dienst: z.string().min(1, "Selecteer een dienst"),
  bericht: z.string().min(10, "Uw bericht moet minimaal 10 tekens bevatten"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const diensten = [
  "Lekdetectie",
  "Daklekkage Opsporing",
  "Waterlekkage Opsporing",
  "Thermografie",
  "Endoscopie Inspectie",
  "Anders",
];

// --- Provider + Modal ---

export const ContactFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openContactForm = useCallback(() => setOpen(true), []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      naam: "",
      email: "",
      telefoon: "",
      adres: "",
      dienst: "",
      bericht: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.naam,
          from_email: data.email,
          phone: data.telefoon,
          address: data.adres || "Niet opgegeven",
          service: data.dienst,
          message: data.bericht,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Aanvraag verzonden!", {
        description: "Wij nemen zo snel mogelijk contact met u op.",
      });
      form.reset();
      setOpen(false);
    } catch {
      toast.error("Er ging iets mis", {
        description: "Probeer het opnieuw of bel ons direct.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactFormContext.Provider value={{ openContactForm }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Gratis Inspectie Aanvragen
            </DialogTitle>
            <DialogDescription>
              Vul het formulier in en wij nemen binnen 2 uur contact met u op.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-2">
            {/* Naam */}
            <div className="space-y-2">
              <Label htmlFor="naam">Naam *</Label>
              <Input
                id="naam"
                placeholder="Uw volledige naam"
                {...form.register("naam")}
              />
              {form.formState.errors.naam && (
                <p className="text-sm text-destructive">{form.formState.errors.naam.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres *</Label>
              <Input
                id="email"
                type="email"
                placeholder="uw@email.nl"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
              )}
            </div>

            {/* Telefoon */}
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoonnummer *</Label>
              <Input
                id="telefoon"
                type="tel"
                placeholder="06-12345678"
                {...form.register("telefoon")}
              />
              {form.formState.errors.telefoon && (
                <p className="text-sm text-destructive">{form.formState.errors.telefoon.message}</p>
              )}
            </div>

            {/* Adres */}
            <div className="space-y-2">
              <Label htmlFor="adres">Adres</Label>
              <Input
                id="adres"
                placeholder="Straat, huisnummer, postcode, plaats"
                {...form.register("adres")}
              />
            </div>

            {/* Dienst */}
            <div className="space-y-2">
              <Label>Type dienst *</Label>
              <Select
                onValueChange={(value) => form.setValue("dienst", value, { shouldValidate: true })}
                value={form.watch("dienst")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer een dienst" />
                </SelectTrigger>
                <SelectContent>
                  {diensten.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.dienst && (
                <p className="text-sm text-destructive">{form.formState.errors.dienst.message}</p>
              )}
            </div>

            {/* Bericht */}
            <div className="space-y-2">
              <Label htmlFor="bericht">Bericht *</Label>
              <Textarea
                id="bericht"
                placeholder="Beschrijf uw situatie..."
                rows={4}
                {...form.register("bericht")}
              />
              {form.formState.errors.bericht && (
                <p className="text-sm text-destructive">{form.formState.errors.bericht.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Verzenden...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Aanvraag Versturen</span>
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </ContactFormContext.Provider>
  );
};
