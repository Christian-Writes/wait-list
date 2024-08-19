import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useJoinWaitList } from "../hooks/useJoinWaitList";

const schema = z.object({
	email: z.string().email({ message: "Invalid email" }),
});

type FormSchema = z.infer<typeof schema>;

const EmailForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: zodResolver(schema),
		mode: "onBlur",
	});

	const { mutate } = useJoinWaitList();

	const onSubmit = (data: FormSchema) => {
		reset();
		mutate(data);
	};
	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex gap-x-3 "
			>
				<input
					{...register("email")}
					required
					type="email"
					className="p-2 w-full text-[#334155] border-b-[1.2px] border-[#020617] placeholder:text-[#33415599] max-w-[240px] focus:outline-none"
					placeholder="name@email.com"
				/>
				<button
					type="submit"
					className="bg-[#020617] px-4 py-1 lg:px-6 lg:py-3 text-sm rounded-md text-white text-nowrap font-semibold"
				>
					Join Now
				</button>
			</form>
			{errors?.email && (
				<p className="text-red-400 font-medium text-sm font-inter mt-1">
					{errors.email?.message}
				</p>
			)}
		</div>
	);
};

export default EmailForm;
