const EmailForm = () => {
	return (
		<form className="flex gap-x-3 ">
			<input
				type="text"
				className="p-2 w-full text-[#334155] border-b-[1.2px] border-[#020617] placeholder:text-[#33415599] max-w-[240px] focus:outline-none"
				placeholder="name@domain.com"
			/>
			<button
				type="submit"
				className="bg-[#020617] px-6 py-3 text-sm rounded-md text-white text-nowrap font-semibold"
			>
				Join Now
			</button>
		</form>
	);
};

export default EmailForm;
