import apiClient from "../../config/axios";

const getUser = async (id: string) => {
  const response = await apiClient.get(`/user/${id}`);
  return response.data;
};

const createUser = async (email: string, password: string) => {
  const response = await apiClient.post("/user", { email, password });
  return response.data;
};

const updateUser = async (id: string, email: string, password: string) => {
  const response = await apiClient.put(`/user/${id}`, { email, password });
  return response.data;
};

const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`/user/${id}`);
  return response.data;
};

export { getUser, createUser, updateUser, deleteUser };
