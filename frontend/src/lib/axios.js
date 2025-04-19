import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://craaaackle-backend.onrender.com/api"
      : import.meta.env.VITE_BACKEND_URL || "/api", 
  withCredentials: true,
});
