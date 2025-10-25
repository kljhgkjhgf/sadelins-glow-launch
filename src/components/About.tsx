import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-4xl animate-slide-up">
        <div className="flex items-center justify-center mb-8">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Qui sommes-nous ?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed mb-8">
          <strong className="text-foreground">Sadelins</strong> est une entreprise spécialisée dans le <strong className="text-primary">développement web et mobile</strong>, 
          les <strong className="text-primary">automatisations intelligentes</strong>, la création de <strong className="text-primary">chatbots IA</strong> et 
          les <strong className="text-primary">solutions digitales sur mesure</strong>.
        </p>
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          Nous combinons fiabilité, expertise technique et vision humaine pour transformer vos projets en succès digitaux. 
          Chaque solution que nous créons est pensée pour répondre à vos besoins uniques.
        </p>
      </div>
    </section>
  );
};

export default About;
