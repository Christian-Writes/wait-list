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
					<section className="flex h-full lg:rounded-lg  lg:border md:overflow-hidden border-[#040c2f15]">
						<div className="w-full bg-white px-5 py-14 lg:py-20 lg:px-10 flex flex-col justify-start">
							<header className="flex gap-x-3 items-center mb-10">
								<img
									className="lg:size-16 md:size-14 size-12"
									src="/assets/logo.svg"
									alt="logo icon"
								/>
								<h1 className="font-extrabold tracking-normal font-dmSans text-[#020617] text-[28px] sm:text-3xl lg:text-[40px] leading-[1.1em]">
									Christian Writes
								</h1>
							</header>
							<div className="font-inter flex flex-col gap-y-6 max-w-[400px] lg:max-w-[500px] mt-auto">
								<Banner />
								<h2 className="font-semibold font-dmSans tracking-normal text-3xl lg:text-4xl leading-[1.1em]">
									Ready to launch your <br className="hidden sm:block" />{" "}
									product, course or app?
								</h2>
								<p className="text-[#334155] text-sm leading-[1.65em]">
									Publish your own waitlist page in minutes to start capturing
									email addresses from potential customers and promoting your
									launch online
								</p>
								<EmailForm />
								<Counter />
							</div>
						</div>
						<div className="w-full hidden md:block max-w-[45vw]">
							<img
								className="object-cover object-[top_center] w-full h-full"
								src="/assets/background2.jpg"
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
