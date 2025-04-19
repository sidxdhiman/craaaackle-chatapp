import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://craaaackle-backend.onrender.com/"
      : import.meta.env.VITE_BACKEND_URL || "/", 
  withCredentials: true,
});
