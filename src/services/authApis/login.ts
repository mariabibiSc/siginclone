// Creator Developer: Maria
// Date created:6 july 2024
// Decsription: Login service api code.

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
console.log("VITE_APP_BASE_URL", API_BASE_URL);

interface LoginPayload {
  username: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};
