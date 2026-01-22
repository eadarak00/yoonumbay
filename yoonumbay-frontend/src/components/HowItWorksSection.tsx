const steps = [
    {
        number: "01",
        title: "Inscription",
        description: "Créez votre compte agriculteur ou acheteur en quelques secondes.",
    },
    {
        number: "02",
        title: "Choix des Services",
        description: "Sélectionnez les intrants ou les conseils dont vous avez besoin.",
    },
    {
        number: "03",
        title: "Accompagnement",
        description: "Bénéficiez d'un suivi régulier tout au long de votre culture.",
    },
    {
        number: "04",
        title: "Récolte & Vente",
        description: "Récoltez vos produits et vendez-les au meilleur prix sur notre marché.",
    },
];

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Comment ça marche ?</h2>
                        <p className="text-muted-foreground mb-8 text-lg">
                            YoonuMbay simplifie chaque étape de votre parcours agricole. Notre processus est conçu pour être simple, efficace et accessible à tous.
                        </p>
                        <div className="space-y-8">
                            {steps.map((step) => (
                                <div key={step.number} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                            <div className="w-full h-full rounded-2xl bg-card shadow-2xl border border-border overflow-hidden relative">
                                {/* Mock UI or Image placeholder */}
                                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                    <span className="text-primary font-bold text-xl">Interface YoonuMbay</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
