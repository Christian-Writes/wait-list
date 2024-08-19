import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"X-Client-Secret": import.meta.env.VITE_CLIENT_SECRET,
	},
});
