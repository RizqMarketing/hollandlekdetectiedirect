import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Holland Lekdetectie <span className="text-ocean-medium">Direct</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/#diensten" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Diensten
            </a>
            <a href="/#werkwijze" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Werkwijze
            </a>
            <a href="/#over-ons" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Over Ons
            </a>
            <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0800-1234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">0800-1234567</span>
            </a>
            <Button variant="hero" size="default">
              Gratis Inspectie
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-up">
            <nav className="flex flex-col gap-4">
              <a href="/#diensten" className="text-foreground font-medium py-2">
                Diensten
              </a>
              <a href="/#werkwijze" className="text-foreground font-medium py-2">
                Werkwijze
              </a>
              <a href="/#over-ons" className="text-foreground font-medium py-2">
                Over Ons
              </a>
              <a href="/#contact" className="text-foreground font-medium py-2">
                Contact
              </a>
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:0800-1234567" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">0800-1234567</span>
                </a>
                <Button variant="hero" className="w-full">
                  Gratis Inspectie
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
