"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function FilterBox() {
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex items-center">
				<Checkbox id="terms1" />
				<label
					htmlFor="terms1"
					className="text-sm font-medium leading-none ml-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-20"
				>
					Filter 1{" "}
				</label>
			</div>
			<div className="flex items-center">
				<Checkbox id="terms2" />
				<label
					htmlFor="terms2"
					className="text-sm font-medium leading-none ml-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-20"
				>
					Filter 2{" "}
				</label>
			</div>
			{/* Add more checkboxes as needed */}
		</div>
	);
}
