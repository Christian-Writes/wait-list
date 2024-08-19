import { useState } from "react";
import Loader from "./components/Loader";
import Banner from "./components/Banner";
import Counter from "./components/Counter";
import EmailForm from "./components/EmailForm";
import { AnimatePresence, motion } from "framer-motion";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<AnimatePresence>
			{isLoading ? (
				<Loader onAnimationEnd={() => setIsLoading(false)} />
			) : (
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, ease: "linear" }}
					className="w-screen h-[100dvh] lg:p-7 overflow-hidden bg-[#F7F7F8]"
				>
					<section className="flex justify-center h-full lg:rounded-lg  lg:border md:overflow-hidden border-[#040c2f15]">
						<div className="w-full bg-white px-5 py-14 lg:px-10 flex flex-col justify-center">
							<h1 className="font-extrabold tracking-normal mb-28 sm:mb-14 font-dmSans text-[#020617] text-3xl lg:text-[40px] leading-[1.1em]">
								<span className="text-[#04BF87]">Christian</span> Writes
							</h1>

							<div className="font-inter flex flex-col gap-y-4 lg:gap-y-5 max-w-[400px] lg:max-w-[500px]">
								<Banner message="LAUNCHING SOON..." />
								<h2 className="font-semibold font-dmSans tracking-normal text-[32px] leading-[1.1em]">
									Ready to share your faith-filled stories and content?
								</h2>
								<p className="text-[#334155] text-base leading-[1.65em]">
									Be the first to join Christian Writes! Share your faith
									through writing, connect with others, and inspire the world.{" "}
									<br />
									Sign up now! 📚✨
								</p>
								<EmailForm />
								<Counter />
							</div>
						</div>
						<div className="w-full hidden md:block max-w-[45vw]">
							<img
								className="object-cover object-center w-full h-full"
								src="/assets/background3.png"
								alt="background"
							/>
						</div>
					</section>
				</motion.main>
			)}
		</AnimatePresence>
	);
}

export default App;
