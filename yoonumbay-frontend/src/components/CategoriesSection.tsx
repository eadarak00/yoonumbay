import { Leaf, Sprout, Wheat, Tractor } from "lucide-react";

const categories = [
    {
        name: "Semences & Intrants",
        description: "Des semences certifiées pour un rendement optimal.",
        icon: Sprout,
        color: "bg-green-500/10 text-green-600",
    },
    {
        name: "Conseils d'Experts",
        description: "Accompagnement personnalisé par des agronomes qualifiés.",
        icon: Leaf,
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        name: "Matériel Agricole",
        description: "Location et achat d'équipements modernes.",
        icon: Tractor,
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        name: "Marché & Vente",
        description: "Vendez vos récoltes directement aux acheteurs.",
        icon: Wheat,
        color: "bg-orange-500/10 text-orange-600",
    },
];

const CategoriesSection = () => {
    return (
        <section id="products" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
                    <p className="text-muted-foreground">
                        Tout ce dont vous avez besoin pour réussir votre campagne agricole, du semis à la récolte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
