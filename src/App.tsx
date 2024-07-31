import Banner from "./components/Banner";
import Counter from "./components/Counter";
import EmailForm from "./components/EmailForm";

function App() {
	return (
		<main className="w-screen h-screen p-5 overflow-hidden rounded-lg bg-[#F7F7F8]">
			<section className="grid grid-cols-[auto_45vw] h-full rounded-lg overflow-hidden border border-[#040c2f15]">
				<div className="w-full bg-white h-full py-20 px-10 flex flex-col justify-center">
					<header className="mb-20">
						<h1 className="font-extrabold tracking-normal font-dmSans text-[#020617] text-[40px] leading-[1.1em]">
							Christian Writes
						</h1>
					</header>
					<div className="font-inter flex flex-col gap-y-4 max-w-[500px]">
						<Banner />
						<h2 className="font-semibold font-dmSans tracking-normal text-4xl leading-[1.1em]">
							Ready to launch your <br /> product, course or app?
						</h2>
						<p className="text-[#334155] text-sm leading-[1.65em]">
							Publish your own waitlist page in minutes to start capturing email
							addresses from potential customers and promoting your launch
							online
						</p>
						<EmailForm />
						<Counter />
					</div>
				</div>
				<div className="w-full">
					<img
						className="object-cover w-full h-full"
						src="/assets/background.jpg"
						alt="background"
					/>
				</div>
			</section>
		</main>
	);
}

export default App;
