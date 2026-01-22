import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <a href="#" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center shadow-button">
                                <Leaf className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold text-foreground">
                                Yoonu<span className="text-primary">Mbay</span>
                            </span>
                        </a>
                        <p className="text-muted-foreground leading-relaxed">
                            La plateforme digitale dédiée à l'autonomisation des agriculteurs sénégalais. Ensemble, cultivons l'avenir.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Semences</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conseils Agricoles</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Location Matériel</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marché en ligne</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Entreprise</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partenaires</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-muted-foreground">
                            <li>Dakar, Sénégal</li>
                            <li>+221 33 000 00 00</li>
                            <li>contact@yoonumbay.sn</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2026 YoonuMbay. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
