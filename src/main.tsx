import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
	MutationCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
	mutationCache: new MutationCache({
		onError: (error) => {
			console.log(error.message);
			if (error instanceof AxiosError) {
				toast.error(error.message);
			}
		},
	}),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<Toaster
				toastOptions={{
					success: {
						iconTheme: {
							primary: "#04BF87",
							secondary: "white",
						},
					},
				}}
			/>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
