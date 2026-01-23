// services/auth.service.ts
import api from "@/api/axios";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth.types";

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  try {
    console.log("Envoi de la requête login:", data);
    
    const response = await api.post<AuthResponse>("/auth/login", data);
    
    console.log("Réponse du serveur:", response.data);
    
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token);
      console.log("Token stocké:", response.data.token.substring(0, 20) + "...");
    }
    
    return response.data;
  } catch (error: any) {
    console.error("Erreur dans login service:", error);
    
    // Afficher plus de détails sur l'erreur
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    }
    
    throw error;
  }
};
export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/register", data);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};