import api from "../api/axios";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth.types";

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", data);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const register = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/register", data);
  localStorage.setItem("token", response.data.token);
  return response.data;
};
