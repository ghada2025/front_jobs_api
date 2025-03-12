"use client"
import Image from "next/image"
import CreateJob from "./create-job"
import Search from "./search"

export default function Loginbar() {
	return (
		<>
			<div className="flex items-center justify-between pt-[10px]">
				<div className="flex items-center justify-between gap-[50px]">
					<Image src="/Logo(1).png" width={100} height={20} alt="logo" />
					<Search />
				</div>
				<div className="flex items-center justify-between gap-[20px]">
					<button className="border-[1px] border-blue-500 rounded-[3px] text-blue-600 py-[10px] px-[20px]">
						Sign In
					</button>
					{/* <button className="border-[1px] border-none bg-blue-600 py-[10px] px-[20px] text-white rounded-[3px]">
						Post A Job
					</button> */}
					<CreateJob />
				</div>
			</div>
		</>
	)
}
