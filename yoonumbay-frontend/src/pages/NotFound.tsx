import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page non trouvée</h2>
            <p className="text-muted-foreground mb-10 max-w-md">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <Button asChild size="lg">
                <Link to="/">Retour à l'accueil</Link>
            </Button>
        </div>
    );
};

export default NotFound;
