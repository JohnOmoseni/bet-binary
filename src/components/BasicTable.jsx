import {
	flexRender,
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import data from "@constants/mockData.json";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from "react-icons/fa";

const columns = [
	{
		header: "Rank",
		accessorKey: "id",
	},
	{
		header: "Name",
		accessorFn: (row) => `${row.first_name} ${row.last_name},`,
	},
	{
		header: "Last name",
		accessorKey: "last_name",
	},
	{
		header: "Email",
		accessorKey: "email",
	},
	{
		header: "Gender",
		accessorKey: "gender",
	},
];

function BasicTable({}) {
	const [sorting, setSorting] = useState([]);
	const [filtering, setFiltering] = useState("");

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			globalFilter: filtering,
		},
		onSortingChange: setSorting,
		onGlobalFilterChange: setFiltering,
	});

	return (
		<div className="relative mt-[2.5em] sm:[4em]">
			<div className="w-[50%] max-w-80 mb-4 sm:mb-8 px-4 bg-[#392E24] bg-opacity-60 relative rounded-md shadow-sm border border-solid border-[#fe941c78] form-group flex ml-auto align-middle">
				<input
					type="text"
					value={filtering}
					onChange={(e) => setFiltering(e.target.value)}
					placeholder="Filter by"
					className=" py-2.5 i-reset leading-none placeholder:text-sm placeholder:text-neutral-500"
				/>
			</div>

			<div className="grid place-items-center overflow-x-auto rounded-xl overflow-hidden">
				<table className="w-full max-w-full border border-solid border-br-light border-spacing-0 shadow-md rounded-xl lg:overflow-hidden">
					<thead className="shadow-md border-b-2 border-solid border-gray-500 border-opacity-50 overflow-hidden">
						{table.getHeaderGroups().map((headerGroup) => {
							return (
								<tr key={headerGroup.id} className="">
									{headerGroup.headers.map((header) => {
										return (
											<th
												key={header.id}
												onClick={header.column.getToggleSortingHandler()}
												className=" bg-slate-700 py-5 px-6 border-b-2 border-solid border-br-light whitespace-nowrap leading-5"
											>
												{header.isPlaceholder ? null : (
													<div className="flex-row gap-2">
														{flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
														{
															{
																asc: (
																	<FaRegArrowAltCircleUp
																		fill="#ed940ef1"
																		className=""
																	/>
																),
																desc: (
																	<FaRegArrowAltCircleDown
																		fill="red"
																		className="text-red-300"
																	/>
																),
															}[header.column.getIsSorted() ?? null]
														}
													</div>
												)}
											</th>
										);
									})}
								</tr>
							);
						})}
					</thead>
					<tbody className="">
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => {
								return (
									<tr
										key={row.id}
										className="hover:bg-[#111] even:bg-neutral-900 transition-colors border-b-2 border-solid border-br-light last:border-none"
									>
										{row.getVisibleCells().map((cell) => {
											return (
												<td key={cell.id} className="text-center py-8 px-6 ">
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</td>
											);
										})}
									</tr>
								);
							})
						) : (
							<tr className="hover:bg-[#111] w-full grid place-items-center even:bg-neutral-900 transition-colors border-b-2 border-solid border-br-light last:border-none">
								<td className="text-center py-8 px-6 ">No results</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			<div className="flex-row !justify-end gap-2 my-6 ml-auto">
				<button onClick={() => table.setPageIndex(0)}>First page</button>
				<button
					disabled={!table.getCanPreviousPage()}
					onClick={() => table.previousPage()}
				>
					Previous page
				</button>
				<button
					disabled={!table.getCanNextPage()}
					onClick={() => table.nextPage()}
				>
					Next page
				</button>
				<button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
					Last page
				</button>
			</div>
		</div>
	);
}

export default BasicTable;
