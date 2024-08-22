import apiClient from "../../config/axios";

const login = async (email: string, password: string) => {
  const response = await apiClient.post("/auth/login", { email, password });
  if (response.data.status) return true
  return null;
};

const register = async (email: string, password: string) => {
  const response = await apiClient.post("/auth/register", { email, password });
  if (response.data.status) return true
  return null;
};

const logout = async () => {
  const response = await apiClient.post("/auth/logout");
  return response.data;
};

const forgotPassword = async (email: string) => {
  const response = await apiClient.post("/auth/forgot-password", { email });
  return response.data;
};

const changePassword = async (password: string) => {
  const response = await apiClient.post("/auth/change-password", { password });
  return response.data;
};

export { login, register, logout, forgotPassword, changePassword };
