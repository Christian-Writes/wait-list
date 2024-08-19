import { useMutation, useQueryClient } from "@tanstack/react-query";
import { joinWaitList } from "../service";
import toast from "react-hot-toast";
import { useId } from "react";

export const useJoinWaitList = () => {
	const queryClient = useQueryClient();
	const id = useId();
	return useMutation({
		mutationFn: joinWaitList,
		onMutate: () => toast.loading("Loading...", { id }),
		onSuccess: () => toast.success("Thanks for Joining 😁", { id }),
		onSettled: () => queryClient.invalidateQueries({ queryKey: ["count"] }),
	});
};
