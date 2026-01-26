import API from './axiosInstance';

export const loginUser = async (email, password) => {
    try {
        const { data } = await API.post("/auth/login", { email, password });

        // Logic check: only allow admin
        if (data.user.role !== "admin") {
            // Throw a string so the component can catch it easily
            throw new Error("Access Denied: Admins only.");
        }

        // Save data
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        return data.user; 
    } catch (err) {
        // Extract the error message string
        const message = err.response?.data?.message || err.message || "Login failed";
        throw message; 
    }
};

export const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
};

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};