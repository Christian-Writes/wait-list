import { useQuery } from "@tanstack/react-query";
import { getCount } from "../service";

export const useGetCount = () => {
	return useQuery({
		queryKey: ["count"],
		queryFn: getCount,
		select: (res) => res.data,
	});
};
