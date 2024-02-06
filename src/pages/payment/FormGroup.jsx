export const FormGroup = ({ label, name, placeholder, amount, payment }) => {
	return (
		<div className="w-full group">
			<label
				htmlFor="amount"
				className={`text-sm capitalize relative mb-1 inline-block `}
			>
				{label}
				{amount && ": $"}
			</label>
			<div className="px-4 bg-[#392E24] bg-opacity-60 relative rounded-md shadow-sm border border-solid border-[#fe941c78] form-group w-full flex align-middle">
				<input
					type={amount ? "number" : "text"}
					name={name}
					placeholder={placeholder}
					className="w-full py-2.5 i-reset leading-none placeholder:text-sm placeholder:text-neutral-500"
				/>
				{payment && (
					<span className="absolute top-[50%] right-3 translate-y-[-50%] !text-[0.6rem] font-semibold text-shadow=200 text-neutral-300 capitalize">
						Responsive
					</span>
				)}
			</div>
		</div>
	);
};
