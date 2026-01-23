// components/Login.tsx (Design amélioré)
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, Leaf, ArrowRight, ChevronLeft, Wheat, ShoppingCart } from "lucide-react";
import { login } from "@/services/auth.service";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const loginData = {
        email: formData.email,
        motDePasse: formData.password
      };
      
      await login(loginData);
      toast.success("Connexion réussie !", {
        description: "Redirection vers votre tableau de bord",
      });
      navigate("/dashboard");
    } catch (error: any) {
      const message = error.response?.data?.message || "Email ou mot de passe incorrect";
      toast.error("Échec de connexion", {
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 animate-float-delayed">
        <div className="w-40 h-40 bg-amber-200/30 rounded-full blur-2xl"></div>
      </div>
      
      {/* Animated leaf icons */}
      <div className="absolute top-20 right-20 animate-pulse-slow">
        <Leaf className="w-12 h-12 text-emerald-300/40" />
      </div>
      <div className="absolute bottom-20 left-20 animate-pulse-slow-delayed">
        <Wheat className="w-10 h-10 text-amber-300/40" />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-0 backdrop-blur-sm bg-white/95 relative overflow-hidden z-10">
        {/* Decorative border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-amber-500 to-emerald-500"></div>
        
        {/* Corner accents */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>

        <CardHeader className="space-y-2 text-center pb-6 pt-8 relative">
          {/* Back button */}
          <Link 
            to="/" 
            className="absolute left-6 top-6 flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Retour</span>
          </Link>
          
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg animate-glow">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Yoonu<span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">Mbay</span>
              </h1>
              <CardDescription className="text-gray-600 mt-2">
                Connectez-vous à votre espace agricole
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pb-8 px-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-3 group">
              <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 group-focus-within:animate-pulse"></div>
                Adresse email
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-emerald-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="agriculteur@yoonumbay.sn"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 shadow-sm"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-3 group">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-700 font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 group-focus-within:animate-pulse"></div>
                  Mot de passe
                </Label>
                <Link
                  to="/mot-de-passe-oublie"
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-amber-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="h-12 pl-12 pr-12 rounded-xl border-2 border-gray-200 hover:border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 shadow-sm"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600 transition-colors p-1.5 rounded-lg hover:bg-amber-50"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Submit */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, rememberMe: checked as boolean})
                  }
                  className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 h-5 w-5 rounded-lg border-2"
                />
                <Label 
                  htmlFor="remember" 
                  className="text-gray-600 cursor-pointer select-none font-medium"
                >
                  Se souvenir de moi
                </Label>
              </div>
              
              <Button
                type="submit"
                className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl px-8 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Connexion...
                    </>
                  ) : (
                    <>
                      Se connecter
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </form>

          {/* Divider with text */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm font-medium text-gray-500">
                Nouveau sur YoonuMbay ?
              </span>
            </div>
          </div>

          {/* Registration Options */}
          <div className="space-y-4">
            <Link to="/inscription">
              <Button
                variant="outline"
                className="w-full h-14 rounded-xl border-2 border-amber-500/30 hover:border-amber-500 bg-amber-50/50 hover:bg-amber-100 text-amber-800 font-medium transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wheat className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="flex-1 text-left">
                    <div className="font-semibold">Nouveau Compte</div>
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Button>
            </Link>
          </div>
        </CardContent>

        <CardFooter className="border-t border-gray-100 pt-6 px-8">
          <p className="text-xs text-gray-500 text-center w-full leading-relaxed">
            En vous connectant, vous acceptez nos{" "}
            <Link 
              to="/conditions" 
              className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
            >
              Conditions d'utilisation
            </Link>{" "}
            et notre{" "}
            <Link 
              to="/confidentialite" 
              className="font-medium text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
            >
              Politique de confidentialité
            </Link>
            . Protégez vos identifiants.
          </p>
        </CardFooter>
      </Card>

      {/* Support link */}
      <div className="fixed bottom-6 right-6 z-20">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg text-sm font-medium text-gray-700 hover:text-emerald-600 hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <span>💬</span>
          Besoin d'aide ?
        </Link>
      </div>
    </div>
  );
};

export default Login;