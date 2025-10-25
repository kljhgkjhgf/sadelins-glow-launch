import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    description: "Pour les petits projets",
    features: [
      "Landing page moderne",
      "Chatbot simple",
      "Design responsive",
      "Support 7j/7",
      "Livraison rapide",
    ],
    cta: "Choisir Essentiel",
  },
  {
    name: "Pro",
    description: "Pour les entreprises en croissance",
    features: [
      "Site web complet multi-pages",
      "Chatbot IA avancé",
      "Automatisations personnalisées",
      "SEO optimisé",
      "Tunnel de vente intégré",
      "Support prioritaire",
    ],
    popular: true,
    cta: "Choisir Pro",
  },
  {
    name: "Premium",
    description: "Pour les projets sur mesure",
    features: [
      "Application web/mobile complète",
      "IA et automatisation avancées",
      "Intégrations multiples",
      "Dashboard analytics",
      "Formation incluse",
      "Support dédié 24/7",
      "Maintenance continue",
    ],
    cta: "Choisir Premium",
  },
];

const Pricing = () => {
  const handlePricingClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Nos <span className="text-primary">Offres</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Choisissez la formule adaptée à vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-primary shadow-elegant scale-105 bg-card"
                  : "border-border bg-card"
              } transition-all hover:shadow-glow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                } transition-all`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                onClick={handlePricingClick}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
