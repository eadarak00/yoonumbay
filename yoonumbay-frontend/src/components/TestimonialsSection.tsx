import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Moussa Diop",
        role: "Agriculteur à Thiès",
        content: "Grâce à YoonuMbay, j'ai pu augmenter mon rendement de 40% cette année. Les conseils d'experts ont fait toute la différence.",
        avatar: "MD",
    },
    {
        name: "Fatou Sow",
        role: "Productrice de Mangues",
        content: "La plateforme m'a permis de trouver de nouveaux acheteurs à Dakar. Je n'ai plus de pertes post-récolte.",
        avatar: "FS",
    },
    {
        name: "Abdoulaye Ndiaye",
        role: "Jeune Entrepreneur Agricole",
        content: "L'accès au matériel moderne via YoonuMbay a transformé ma façon de travailler. C'est l'avenir de l'agriculture au Sénégal.",
        avatar: "AN",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos agriculteurs</h2>
                    <p className="text-muted-foreground">
                        Rejoignez des milliers d'agriculteurs qui transforment leur quotidien avec YoonuMbay.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="p-8 rounded-2xl bg-card border border-border relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-lg mb-8 italic text-foreground/90">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
