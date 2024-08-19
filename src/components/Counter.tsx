import { AnimatePresence, motion } from "framer-motion";
import { useGetCount } from "../hooks/useGetCount";

// const users = ["user1.jpg", "user2.jpg", "user3.jpg"];

const Counter = () => {
	const { data: count, isLoading, isError } = useGetCount();

	return (
		<div className="h-[16px]">
			<AnimatePresence mode="wait">
				{!isLoading && (
					<motion.p
						initial={{ opacity: 0.4 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, ease: "linear" }}
						className="text-xs text-[#334155] relative"
					>
						{`${isError ? "200" : count}+ members have already joined`}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Counter;
