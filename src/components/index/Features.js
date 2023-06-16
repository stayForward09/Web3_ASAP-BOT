import { FaCheck } from "react-icons/fa"

const Features = () => {
	return (
		<section className="flex px-6 ssm:px-10 pb-20" id="features">
			<div className="max-w-[1350px] mx-auto w-full flex justify-between flex-col">
				<div className="font-cabinet py-24 smm:py-28 md:py-64  z-20">
					<h2 className="font-clash font-medium text-5xl">Features</h2>
					<p className="text-xl pt-2 pb-11">The Fastest discord sniper bot.</p>
					<div className="flex gap-4 flex-col">
						<div className="flex gap-4 items-center text-xl">
							<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
							<p className="font-medium">New Token Listing</p>
						</div>
						<div className="flex gap-4 items-center text-xl">
							<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
							<p className="font-medium">Manual Buy/Sell</p>
						</div>
						<div className="flex gap-4 items-center text-xl">
							<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
							<p className="font-medium">Auto-Buying</p>
						</div>
						<div className="flex gap-4 items-center text-xl">
							<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
							<p className="font-medium">Degen Vault</p>
						</div>
						<div className="flex gap-4 items-center text-xl">
							<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
							<p className="font-medium">Hold & Earn</p>
						</div>
					</div>
				</div>
				<div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center z-10">
					<img src="/images/features-phone.png" alt="Phone" className="w-full h-full object-contain" />
				</div>
			</div>
		</section>
	)
}
export default Features