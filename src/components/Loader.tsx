import {
	AnimationSequence,
	cubicBezier,
	motion,
	useAnimate,
} from "framer-motion";
import { useEffect } from "react";

const easing = cubicBezier(0.43, 0.23, 0.23, 0.96);

const Loader = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const sequence = [
			[
				"#overflow",
				{ translateX: ["-110%", "0"] },
				{ duration: 1.5, ease: easing, delay: 1 },
			],
			["h1", { opacity: 1 }, { duration: 0.5 }],
			["#overflow", { translateX: "100vh" }, { duration: 1, ease: "linear" }],
			[
				"#background",
				{
					height: 0,
				},
				{ duration: 2, ease: easing },
			],
		];

		const controls = animate(sequence as AnimationSequence);

		controls.then(() => {
			onAnimationEnd();
		});

		return () => controls.stop();
	}, [animate, onAnimationEnd]);

	return (
		<motion.section
			initial={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			ref={scope}
			className="w-screen h-screen flex justify-center items-center overflow-hidden"
		>
			<div
				id="background"
				className="absolute top-0 w-full h-full bg-black"
			></div>
			<div className="w-[240px] sm:w-[360px] relative h-fit sm:h-[55px] overflow-hidden rounded-lg">
				<motion.div
					id="overflow"
					className="h-full w-full absolute bg-white rounded-lg"
				></motion.div>
				<h1 className="font-dmSans text-white text-center text-5xl font-bold opacity-0 italic text-wrap sm:text-nowrap">
					Christian Writes
				</h1>
			</div>
		</motion.section>
	);
};

export default Loader;
