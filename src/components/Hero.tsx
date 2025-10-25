import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transformez vos idées en{" "}
          <span className="text-primary">projets concrets</span> avec Sadelins
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Innovation, accompagnement et résultats. Votre partenaire digital pour réussir.
        </p>
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Découvrir nos services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
