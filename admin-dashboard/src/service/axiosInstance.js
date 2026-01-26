import axios from 'axios';

// 1. Create the instance with base configurations
const API = axios.create({
  baseURL: 'http://localhost:5000', // Your backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
    withCredentials: true,

});

// 2. Request Interceptor: Automatically attach the token to every request
API.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or state manager like Redux)
    const accessToken = localStorage.getItem('accessToken'); 
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor: Handle global errors (like 401 and 403)
API.interceptors.response.use(
  (response) => response, // Return the response if successful
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // Unauthorized: Usually means token expired or not logged in
      console.error("Session expired. Redirecting to login...");
      localStorage.removeItem('accessToken');
      window.location.href = '/login'; 
    } else if (status === 403) {
      // Forbidden: This matches your "isAllowedRoles" error
      // The user is logged in but doesn't have the right role
      alert("You do not have permission to access this resource.");
    }

    return Promise.reject(error);
  }
);

export default API;