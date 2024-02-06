import BasicTable from "./BasicTable";

function Transactions() {
	return (
		<div>
			<h3 className="mt-[4rem] mb-8 font-semibold uppercase text-xl text-shadow-100">
				Transaction History
			</h3>
			<BasicTable />
		</div>
	);
}

export default Transactions;
