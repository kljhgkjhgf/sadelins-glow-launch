import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !phone) {
      toast.error("Veuillez remplir tous les champs requis");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Bonjour Sadelins 👋\n\nEmail: ${email}\nTéléphone: ${phone}\n\nMessage: ${message || "Je souhaite discuter d'un projet"}`
    );
    
    window.open(`https://wa.me/+33123456789?text=${whatsappMessage}`, '_blank');
    
    toast.success("Redirection vers WhatsApp...");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Passe à l'<span className="text-primary">action</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Tu as une idée ou un projet ? Sadelins t'aide à le concrétiser.
          </p>
          <p className="text-lg text-muted-foreground">
            Remplis ce formulaire et je te réponds personnellement sur WhatsApp pour t'aider à clarifier, structurer ou lancer ton projet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-4 sm:p-6 md:p-8 rounded-2xl border border-border shadow-elegant">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Numéro de téléphone <span className="text-primary">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+33 6 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Parle-nous de ton projet (optionnel)
            </label>
            <Textarea
              id="message"
              placeholder="Décris brièvement ton projet ou tes besoins..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-background border-border focus:border-primary"
            />
          </div>

          <Button 
            type="submit"
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base sm:text-lg py-5 sm:py-6 rounded-full shadow-glow transition-all hover:scale-105"
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base md:text-lg">Discuter de mon projet sur WhatsApp</span>
          </Button>

          <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-sm">
                <strong className="text-foreground">Voici ce que tu gagnes en me parlant :</strong>
                <br />
                Clarté sur ton projet, stratégie personnalisée et accompagnement sur mesure.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
