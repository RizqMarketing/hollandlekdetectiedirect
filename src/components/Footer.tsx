import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-xl mb-2">Holland Lekdetectie</h3>
            <span className="text-ocean-light font-display font-semibold text-sm tracking-wide uppercase mb-4 block">Direct</span>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Specialist in daklekkages en lekdetectie in heel Nederland.
              Snel, nauwkeurig en zonder onnodige schade.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-light/20 hover:text-ocean-light transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-light/20 hover:text-ocean-light transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-ocean-light/20 hover:text-ocean-light transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50 mb-5">Navigatie</h4>
            <ul className="space-y-3">
              <li><a href="/#diensten" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Diensten</a></li>
              <li><a href="/#werkwijze" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Werkwijze</a></li>
              <li><a href="/#over-ons" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Over Ons</a></li>
              <li><a href="/#contact" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50 mb-5">Diensten</h4>
            <ul className="space-y-3">
              <li><Link to="/diensten/daklekkage-opsporing" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Daklekkage Opsporing</Link></li>
              <li><Link to="/diensten/waterlekkage-opsporing" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Waterlekkage Opsporing</Link></li>
              <li><Link to="/diensten/thermografie" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Thermografie</Link></li>
              <li><Link to="/diensten/endoscopie-inspectie" className="text-primary-foreground/70 hover:text-ocean-light transition-colors">Endoscopie Inspectie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary-foreground/50 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-ocean-light flex-shrink-0 mt-1" />
                <div>
                  <div className="text-primary-foreground font-medium">0800-1234567</div>
                  <div className="text-primary-foreground/50 text-sm">24/7 bereikbaar</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-ocean-light flex-shrink-0 mt-1" />
                <div>
                  <div className="text-primary-foreground font-medium">info@hollandlekdetectie.nl</div>
                  <div className="text-primary-foreground/50 text-sm">Reactie binnen 2 uur</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ocean-light flex-shrink-0 mt-1" />
                <div>
                  <div className="text-primary-foreground font-medium">Heel Nederland</div>
                  <div className="text-primary-foreground/50 text-sm">Wij komen naar u toe</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Holland Lekdetectie Direct. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-ocean-light transition-colors">Privacy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-ocean-light transition-colors">Voorwaarden</a>
            <a href="#" className="text-primary-foreground/50 hover:text-ocean-light transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
