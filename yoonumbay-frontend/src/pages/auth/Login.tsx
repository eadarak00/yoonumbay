import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Leaf, ArrowRight, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log("Login attempt:", { email, password });
      // Ici, vous ajouterez votre logique d'authentification
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simule une requête API
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-nature opacity-50" />
      
      {/* Nature decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Leaf decorations */}
      <div className="absolute top-10 left-10 text-primary/20">
        <Sprout className="w-20 h-20 rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 text-secondary/20">
        <Sprout className="w-20 h-20 -rotate-12" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex flex-col items-center gap-3">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card hover:shadow-hover transition-all duration-300"
            >
              <Leaf className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold font-heading text-foreground">
                Yoonu<span className="text-primary">Mbay</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">La marketplace agricole sénégalaise</p>
            </div>
          </Link>
        </div>

        {/* Login Card */}
        <Card className="shadow-card border border-border/50 bg-gradient-card overflow-hidden hover:shadow-hover transition-shadow duration-300">
          {/* Top border with gradient effect */}
          <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
          
          <CardHeader className="text-center pb-4 pt-8">
            <CardTitle className="text-2xl font-heading font-bold text-foreground">
              🌱 Bienvenue
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Connectez-vous à votre espace agricole
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pb-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Adresse email
                </label>
                <Input
                  type="email"
                  placeholder="agriculteur@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl h-12 border-2 border-input hover:border-primary/50 focus:border-primary transition-all duration-300"
                  required
                  disabled={isLoading}
                />
              </motion.div>

              {/* Password Field */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    Mot de passe
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl h-12 border-2 border-input hover:border-primary/50 focus:border-primary transition-all duration-300 pr-12"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors p-1.5"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Remember Me */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="w-5 h-5 rounded border-2 border-input checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary/30 focus:ring-offset-0 cursor-pointer transition-all"
                />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer select-none">
                  Se souvenir de moi
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-primary hover:opacity-90 shadow-card hover:shadow-hover transition-all duration-300 group"
                  disabled={isLoading}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        Se connecter
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </form>

            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative my-8"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-muted-foreground font-medium">
                  Nouveau sur la plateforme ?
                </span>
              </div>
            </motion.div>

            {/* Sign Up Link */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <Link to="/inscription">
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-xl border-2 border-input hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="flex items-center gap-2 font-medium">
                    Créer un compte
                    <span className="text-lg">🚜</span>
                  </span>
                </Button>
              </Link>
              
              {/* Additional Info */}
              <p className="text-xs text-muted-foreground mt-6 text-center">
                En vous connectant, vous acceptez nos{" "}
                <Link to="/terms" className="text-primary hover:underline font-medium">
                  Conditions d'utilisation
                </Link>{" "}
                et notre{" "}
                <Link to="/privacy" className="text-primary hover:underline font-medium">
                  Politique de confidentialité
                </Link>
              </p>
            </motion.div>
          </CardContent>
        </Card>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 YoonuMbay •{" "}
            <Link to="/contact" className="text-primary hover:underline font-medium">
              Support agricole
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;