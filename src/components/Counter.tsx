const users = ["user1.jpg", "user2.jpg", "user3.jpg"];

const Counter = () => {
	return (
		<div className="flex relative items-center">
			{users.map((user, index) => (
				<div
					style={{ left: `${index * -10}px` }}
					className="size-8 rounded-full overflow-hidden border-2 border-[#e2e8f0] relative"
				>
					<img
						className="object-cover h-full w-full object-center"
						src={`/assets/${user}`}
						alt="a user image"
					/>
				</div>
			))}
			<p className="text-xs text-[#334155] relative -left-[10px]">
				163+ makers have already joined
			</p>
		</div>
	);
};

export default Counter;
