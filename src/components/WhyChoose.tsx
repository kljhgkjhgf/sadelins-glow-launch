import { Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Expertise technique et créative",
  "Solutions 100% personnalisées",
  "Accompagnement humain et réactif",
  "Tarifs transparents et ajustés",
  "Innovation et technologies de pointe",
  "Résultats mesurables et durables",
];

const testimonials = [
  {
    name: "Marie L.",
    role: "CEO, StartupTech",
    content: "Sadelins a transformé notre vision en une application incroyable. L'équipe est réactive et professionnelle.",
  },
  {
    name: "Thomas D.",
    role: "Fondateur, E-Commerce Pro",
    content: "Grâce au chatbot IA développé par Sadelins, nous avons augmenté nos conversions de 40%. Impressionnant!",
  },
  {
    name: "Sarah K.",
    role: "Directrice Marketing",
    content: "Un accompagnement personnalisé du début à la fin. Notre site web est magnifique et performant.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Pourquoi choisir <span className="text-primary">Sadelins</span> ?
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Votre réussite est notre priorité
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold text-center mb-12">
          Ce que disent nos <span className="text-primary">clients</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-elegant transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
