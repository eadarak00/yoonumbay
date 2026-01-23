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
  Shield,
  Truck,
  CreditCard,
  CheckCircle,
  Star,
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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { RegisterRequest } from "@/types/auth.types";
import { register } from "@/services/auth.service";
import { toast } from "sonner";

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

    // Validation
    if (!formData.fullName.trim()) {
      toast.error("Erreur", { description: "Veuillez entrer votre nom complet" });
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Erreur", { description: "Veuillez entrer votre email" });
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Erreur", { description: "Le mot de passe doit contenir au moins 8 caractères" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Erreur", { description: "Les mots de passe ne correspondent pas" });
      return;
    }

    if (!acceptTerms) {
      toast.error("Erreur", { description: "Veuillez accepter les conditions d'utilisation" });
      return;
    }

    setIsLoading(true);

    try {
      const payload: RegisterRequest = {
        nom: formData.fullName.trim(),
        email: formData.email.trim(),
        motDePasse: formData.password,
        role: userType === "farmer" ? "AGRICULTEUR" : "ACHETEUR",
      };
      
      await register(payload);

      toast.success("Inscription réussie !", {
        description: "Redirection vers votre tableau de bord",
      });
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Signup error:", error);
      const message = error?.response?.data?.message || "Erreur lors de l'inscription";
      toast.error("Erreur d'inscription", {
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex">
      {/* Left Side - Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse-slow-delayed" />

        {/* Back Button */}
        <div className="relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 transition-colors group mb-8"
          >
            <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <ChevronLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">Retour</span>
          </Link>

          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-4 mb-12">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-lg animate-glow">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Yoonu<span className="text-emerald-700">Mbay</span>
              </h1>
              <p className="text-gray-600">La marketplace agricole sénégalaise</p>
            </div>
          </Link>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
                Rejoignez la{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  révolution agricole
                </span>{" "}
                du Sénégal
              </h2>
              <p className="text-lg text-gray-600">
                Connectez directement les producteurs aux consommateurs pour une agriculture plus juste et durable.
              </p>
            </div>

            {/* User Type Benefits */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${userType === 'farmer' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  <div className={`w-2 h-2 rounded-full ${userType === 'farmer' ? 'bg-emerald-600' : 'bg-amber-600'}`}></div>
                  <span className="font-semibold">
                    {userType === 'farmer' ? 'Agriculteur' : 'Acheteur'}
                  </span>
                </div>
                <span className="text-gray-500">← Sélectionnez votre profil</span>
              </div>

              <div className="space-y-4">
                {userType === "farmer" ? (
                  <>
                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-emerald-100">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Paiements sécurisés</h3>
                        <p className="text-gray-600">
                          Recevez vos paiements directement sur votre compte bancaire, sans intermédiaire.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-emerald-100">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Logistique simplifiée</h3>
                        <p className="text-gray-600">
                          Système de livraison optimisé pour vos produits frais vers les clients.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-emerald-100">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Star className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Visibilité accrue</h3>
                        <p className="text-gray-600">
                          Présentez vos produits à des milliers de clients potentiels dans tout le Sénégal.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Sprout className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Produits 100% frais</h3>
                        <p className="text-gray-600">
                          Accédez à des produits agricoles frais directement des champs à votre table.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Qualité garantie</h3>
                        <p className="text-gray-600">
                          Tous les produits sont vérifiés et garantis par nos experts qualité.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-100">
                      <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Livraison rapide</h3>
                        <p className="text-gray-600">
                          Recevez vos commandes en 24h maximum, avec suivi en temps réel.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10"
        >
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-600 font-medium">Agriculteurs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-gray-600 font-medium">Acheteurs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">14</div>
              <div className="text-sm text-gray-600 font-medium">Régions couvertes</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          {/* Mobile Header */}
          <div className="lg:hidden mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-md">
                <UserPlus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Yoonu<span className="text-emerald-700">Mbay</span>
                </h1>
                <p className="text-sm text-gray-600">Créer votre compte</p>
              </div>
            </Link>
          </div>

          {/* Signup Card */}
          <Card className="shadow-2xl border-0 overflow-hidden">
            {/* Gradient Header */}
            <div className="h-2 bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500"></div>

            <CardHeader className="text-center pb-6 pt-8 px-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Inscription
              </CardTitle>
              <CardDescription className="text-gray-600">
                Rejoignez-nous en quelques minutes
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-8 px-8">
              <form onSubmit={handleSignup} className="space-y-6">
                {/* User Type Selection */}
                <div className="space-y-3">
                  <Label className="text-gray-700 font-medium">
                    Je suis :
                  </Label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setUserType("farmer")}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        userType === "farmer"
                          ? "bg-emerald-50 border-2 border-emerald-500 text-emerald-700 shadow-sm"
                          : "bg-gray-100 border-2 border-transparent text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Sprout className="w-5 h-5" />
                      Agriculteur
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType("buyer")}
                      className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        userType === "buyer"
                          ? "bg-amber-50 border-2 border-amber-500 text-amber-700 shadow-sm"
                          : "bg-gray-100 border-2 border-transparent text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <User className="w-5 h-5" />
                      Acheteur
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2 group">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Nom complet
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder={
                      userType === "farmer"
                        ? "Ex: Moussa Diallo"
                        : "Ex: Aminata Ndiaye"
                    }
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 transition-all duration-300"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Adresse email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 transition-all duration-300"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Password */}
                <div className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Mot de passe
                    </Label>
                    <span className="text-xs text-gray-500">8 caractères minimum</span>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 transition-all duration-300 pr-12"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors p-1.5"
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2 group">
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                    Confirmer le mot de passe
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                        formData.confirmPassword &&
                        formData.password !== formData.confirmPassword
                          ? "border-red-500 hover:border-red-600 focus:border-red-500"
                          : "border-gray-200 hover:border-emerald-300 focus:border-emerald-500"
                      }`}
                      required
                      disabled={isLoading}
                    />
                    {formData.confirmPassword &&
                      formData.password === formData.confirmPassword && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                    )}
                  </div>
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        Les mots de passe ne correspondent pas
                      </p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                      className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 h-5 w-5 rounded-lg border-2 mt-0.5"
                    />
                    <Label
                      htmlFor="terms"
                      className="text-sm text-gray-600 cursor-pointer select-none"
                    >
                      J'accepte les{" "}
                      <Link
                        to="/terms"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
                      >
                        conditions d'utilisation
                      </Link>{" "}
                      et la{" "}
                      <Link
                        to="/privacy"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
                      >
                        politique de confidentialité
                      </Link>
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  disabled={isLoading || !acceptTerms}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Création du compte...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      {userType === "farmer" ? "Devenir agriculteur" : "Devenir acheteur"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Login Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Déjà un compte ?{" "}
                  <Link
                    to="/connexion"
                    className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Stats */}
          <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-xl font-bold text-emerald-700">500+</div>
              <div className="text-xs text-gray-600">Agriculteurs</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-xl font-bold text-amber-700">10K+</div>
              <div className="text-xs text-gray-600">Acheteurs</div>
            </div>
            <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
              <div className="text-xl font-bold text-emerald-600">14</div>
              <div className="text-xs text-gray-600">Régions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;