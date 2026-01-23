import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Leaf,
  ArrowRight,
  Sprout,
  User,
  UserPlus,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { RegisterRequest } from "@/types/auth.types";
import { register } from "@/services/auth.service";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"farmer" | "buyer">("farmer");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (!acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }

    setIsLoading(true);

    try {
      const payload: RegisterRequest = {
        nom: formData.fullName,
        email: formData.email,
        motDePasse: formData.password,
        role: userType === "farmer" ? "AGRICULTEUR" : "ACHETEUR",
      };
      
      console.log("Payload", payload);
      await register(payload);

      // ✅ Redirection après succès
      navigate("/");
      // ou navigate("/login");
    } catch (error: any) {
      console.error("Signup error:", error);
      alert(error?.response?.data?.message || "Erreur lors de l'inscription");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-subtle">
      {/* Left Side - Illustration/Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-nature opacity-30" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        {/* Logo and Back Button */}
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-105 transition-transform">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              Retour à l'accueil
            </span>
          </Link>

          <Link to="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-heading text-foreground">
                Teranga<span className="text-primary">Market</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Marketplace agricole
              </p>
            </div>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold font-heading text-foreground leading-tight">
              Rejoignez la{" "}
              <span className="text-gradient">communauté agricole</span> du
              Sénégal
            </h2>

            <div className="space-y-4">
              {userType === "farmer" ? (
                <>
                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sprout className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Pour les Agriculteurs
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Vendez vos produits directement aux consommateurs, fixez
                        vos prix et développez votre activité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Revenus garantis
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Paiements sécurisés et transferts directs vers votre
                        compte bancaire.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🛒</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Pour les Acheteurs
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Accédez à des produits frais, locaux et de qualité
                        directement auprès des producteurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">
                        Livraison rapide
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Recevez vos produits frais en 24h maximum, avec suivi en
                        temps réel.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="relative z-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Agriculteurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">10K+</div>
              <div className="text-xs text-muted-foreground">Acheteurs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">14</div>
              <div className="text-xs text-muted-foreground">Régions</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex flex-col items-center gap-3">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card"
              >
                <UserPlus className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold font-heading text-foreground">
                  Teranga<span className="text-primary">Market</span>
                </h1>
                <p className="text-sm text-muted-foreground">Créer un compte</p>
              </div>
            </Link>
          </div>

          {/* Signup Card */}
          <Card className="shadow-card border border-border/50 bg-gradient-card overflow-hidden">
            {/* Top border with gradient effect */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />

            <CardHeader className="text-center pb-4 pt-8">
              <CardTitle className="text-2xl font-heading font-bold text-foreground">
                Inscription
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Rejoignez-nous en 2 minutes
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-8">
              <form onSubmit={handleSignup} className="space-y-6">
                {/* User Type Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <label className="text-sm font-semibold text-foreground">
                    Je suis :
                  </label>

                  <div className="flex bg-input/50 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setUserType("farmer")}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        userType === "farmer"
                          ? "bg-white shadow-sm text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Sprout className="w-5 h-5" />
                      Agriculteur
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType("buyer")}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        userType === "buyer"
                          ? "bg-white shadow-sm text-secondary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <User className="w-5 h-5" />
                      Acheteur
                    </button>
                  </div>
                </motion.div>

                {/* Full Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Nom complet
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      name="fullName"
                      placeholder={
                        userType === "farmer"
                          ? "Abdoulaye Diallo"
                          : "Marie Diop"
                      }
                      value={formData.fullName}
                      onChange={handleChange}
                      className="rounded-xl h-12 border-2 border-input hover:border-primary/50 focus:border-primary transition-all duration-300"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Adresse email
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="exemple@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl h-12 border-2 border-input hover:border-primary/50 focus:border-primary transition-all duration-300"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
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
                  <p className="text-xs text-muted-foreground">
                    Minimum 8 caractères
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`rounded-xl h-12 border-2 transition-all duration-300 ${
                        formData.confirmPassword &&
                        formData.password !== formData.confirmPassword
                          ? "border-destructive hover:border-destructive/50 focus:border-destructive"
                          : "border-input hover:border-primary/50 focus:border-primary"
                      }`}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-sm text-destructive">
                        Les mots de passe ne correspondent pas
                      </p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-5 h-5 mt-1 rounded border-2 border-input checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary/30 focus:ring-offset-0 cursor-pointer transition-all"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground cursor-pointer select-none"
                    >
                      J'accepte les{" "}
                      <Link
                        to="/terms"
                        className="text-primary hover:underline font-medium"
                      >
                        conditions
                      </Link>{" "}
                      et la{" "}
                      <Link
                        to="/privacy"
                        className="text-primary hover:underline font-medium"
                      >
                        politique de confidentialité
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-primary hover:opacity-90 shadow-card hover:shadow-hover transition-all duration-300 group"
                  disabled={isLoading || !acceptTerms}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Création en cours...
                      </>
                    ) : (
                      <>
                        {userType === "farmer"
                          ? "Devenir agriculteur"
                          : "Devenir acheteur"}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              {/* Login Link */}
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  Déjà un compte ?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
