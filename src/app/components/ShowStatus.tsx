import { Lanyard } from "./Status";
import Time from "./Time";

export default function ShowStatus() {
    return (
        <>
            <div className="flex my-2">
				<div className="flex w-full flex-row items-center 
					gap-x-1 rounded-xl text-white text-sm 
					whitespace-nowrap">
                    <Lanyard />
					&mdash;
					<Time />
				</div>
			</div>
        </>
    )
}