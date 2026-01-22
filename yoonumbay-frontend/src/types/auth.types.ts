export interface LoginRequest {
  email: string;
  motDePasse: string;
}

export interface RegisterRequest {
  nom: string;
  email: string;
  motDePasse: string;
  role: Role;
}

export interface AuthResponse {
  token: string;
}

export type Role = "AGRICULTEUR" | "ACHETEUR";
