import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Your backend route prefix
});

// Signup API
export const signup = (data) => API.post("/signup", data);

// Login API
export const login = (data) => API.post("/login", data);

// Forgot Password API
export const forgotPassword = (data) => API.post("/forgot-password", data);

// Reset Password API
export const resetPassword = (data) => API.post("/reset-password", data);
