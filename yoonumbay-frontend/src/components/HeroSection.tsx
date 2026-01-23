import { ArrowRight, Sparkles, Shield, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmerHero from "@/assets/farmer.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background avec effet de texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-emerald-50/80" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_width=%2260%22_height=%2260%22_viewBox=%220_0_60_60%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22none%22_fill-rule=%22evenodd%22%3E%3Cg_fill=%22%239C92AC%22_fill-opacity=%220.05%22%3E%3Cpath_d=%22M36_34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6_34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6_4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      
      {/* Cercles décoratifs animés */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-l from-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Motifs organiques */}
      <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Contenu gauche */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm animate-fade-up">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Fraîcheur garantie • Livraison express
              </span>
            </div>
            
            {/* Titre principal */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold tracking-tight">
                <span className="block text-foreground">Cultivé avec passion,</span>
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent">
                    livré avec soin
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Reconnectez-vous avec la terre. Commandez vos produits frais directement auprès des agriculteurs locaux du Sénégal, sans intermédiaires.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Explorer la marketplace
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button size="xl" variant="outline" className="border-2 group hover:border-primary/30 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  Devenir partenaire
                </span>
              </Button>
            </div>
            
            {/* Points forts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-border/50">
              {[
                { icon: Truck, label: "Livraison 24h", desc: "Frais garantis" },
                { icon: Shield, label: "100% Traçable", desc: "Origine certifiée" },
                { icon: Sparkles, label: "Qualité Premium", desc: "Sélection rigoureuse" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image hero */}
          <div className="relative">
            {/* Conteneur principal de l'image */}
            <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
              {/* Cadre décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-50 animate-pulse" />
              
              {/* Image principale */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
                <img
                  src={farmerHero}
                  alt="Agriculteur sénégalais proposant des produits frais de sa récolte"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
              
              {/* Cartes flottantes */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Leaf className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Bio & Local</p>
                    <p className="text-sm text-muted-foreground">Certifié sans pesticides</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float border border-white/20" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Livraison Smart</p>
                    <p className="text-sm text-muted-foreground">Optimisée en temps réel</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistiques */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
              <div className="inline-flex items-center gap-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                {[
                  { value: "500+", label: "Agriculteurs", color: "text-primary" },
                  { value: "10K+", label: "Clients", color: "text-secondary" },
                  { value: "14", label: "Régions", color: "text-emerald-600" },
                  { value: "4.9", label: "Satisfaction", color: "text-amber-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-4">
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;