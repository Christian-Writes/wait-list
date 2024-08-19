import { axiosInstance } from "./config/apiClient";

export async function joinWaitList(payload: { email: string }) {
	try {
		const res = await axiosInstance.post("/enroll", payload);
		return res.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getCount() {
	try {
		const res = await axiosInstance.get("/count");
		return res.data;
	} catch (error) {
		console.log(error);
	}
}
