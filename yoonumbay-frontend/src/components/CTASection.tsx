import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative rounded-3xl gradient-hero p-8 md:p-16 overflow-hidden text-center">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                            Prêt à transformer votre exploitation ?
                        </h2>
                        <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
                            Rejoignez YoonuMbay aujourd'hui et accédez à tous les outils nécessaires pour une agriculture moderne et rentable.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                                Créer mon compte gratuit
                            </Button>
                            <Button size="xl" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                Contacter un expert
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
