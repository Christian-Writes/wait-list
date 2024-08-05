const Banner = ({ message }: { message: string }) => {
	return (
		<div className="bg-[#E2E8F0] px-3 flex items-center py-1 w-fit font-inter rounded-md">
			<span className="text-xs font-semibold uppercase text-[#020617]">
				{message}
			</span>
		</div>
	);
};

export default Banner;
