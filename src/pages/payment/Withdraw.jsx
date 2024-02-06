import Button from "@components/Button";
import { FormGroup } from "./FormGroup";

const Withdraw = () => {
	const onWithdraw = () => {};

	return (
		<form onSubmit={onWithdraw} className="mx-auto w-[80%] sm:max-w-[34rem]">
			<div className="flex-column sm:flex-row gap-4 sm:gap-8">
				<FormGroup label="Amount" placeholder="Enter amount" amount />
				<FormGroup label="Choose funding method" placeholder="BTC" payment />
			</div>

			<Button
				type="submit"
				title="Withdraw"
				loadingText="Loading"
				className="mt-[3rem] flex mx-auto"
			/>
		</form>
	);
};

export default Withdraw;
