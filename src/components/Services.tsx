import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Sparkles, MessageSquare, Palette } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Développement Web & Mobile",
    description: "Sites modernes, performants et adaptés à vos besoins. De la landing page à l'application complexe.",
  },
  {
    icon: Sparkles,
    title: "Automatisation & IA",
    description: "Gagnez du temps et en productivité grâce à l'intelligence artificielle et l'automatisation de vos processus.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Tunnels de Vente",
    description: "Des assistants virtuels et systèmes automatisés pour convertir vos visiteurs en clients fidèles.",
  },
  {
    icon: Palette,
    title: "Gestion Digitale & Branding",
    description: "Accompagnement complet pour digitaliser et valoriser votre entreprise avec une identité forte.",
  },
];

const Services = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nos <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Des solutions complètes pour tous vos besoins digitaux
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={handleContactClick}
                >
                  En profiter
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
