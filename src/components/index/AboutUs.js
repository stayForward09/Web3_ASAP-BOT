import { FaCheck } from "react-icons/fa"

const AboutUs = () => {
	return (
		<section className="flex px-6 ssm:px-10 pb-20" id="about">
			<div className="max-w-[1350px] mx-auto w-full flex justify-between flex-col">
				<div className="flex flex-col gap-4 md:gap-7 text-center max-w-[876px] mx-auto">
					<h1 className="font-clash font-semibold text-3xl smm:text-5xl md:text-6xl">Learn about Asapbot discord Sniper</h1>
					<p className="font-cabinet text-base md:text-xl font-medium opacity-80 tracking-[.2em]">Getting Started | Auto buying Setup</p>
				</div>
				<div className="pt-14 smm:pt-20 md:pt-[100px] flex items-center justify-between gap-8">
					<div className="font-clash flex-[6] z-20">
						<small className="text-[#49B2FC] text-base md:text-xl pb-2 md:pb-4 block">Getting Started</small>
						<h2 className="pb-0 font-medium text-2xl md:text-3xl">How to get started with Asap Bot</h2>
						<p className="text-base md:text-xl opacity-80 tracking-wider pt-2">Connect your Degen Wallet.</p>
						<div className="flex pt-11 gap-3 flex-col font-cabinet text-base md:text-xl">
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Set Default Buy Amount (ETH)</p>
							</div>
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Default Sell Amount (%): 10%</p>
							</div>
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Default Slippage: 10%</p>
							</div>
						</div>
					</div>
					<div className="flex-[5] absolute right-0 -bottom-12 max-md:opacity-50 md:relative z-10 max-w-[80%] smm:max-w-[400px] md:max-w-none">
						<img src="/images/about-illus-1.png" alt="Illus" />
					</div>
				</div>
				<div className="pt-24 smm:pt-36 md:pt-[160px] pb-20 flex items-center justify-between gap-8">
					<div className="flex-[5] absolute left-0 -bottom-12 max-md:opacity-50 md:relative z-10 max-w-[80%] smm:max-w-[400px] md:max-w-none">
						<img src="/images/about-illus-2.png" alt="Illus" />
					</div>
					<div className="font-clash flex-[6] z-20 max-w-lg">
						<small className="text-[#49B2FC] text-base md:text-xl pb-2 md:pb-4 block">Auto buying Setup</small>
						<h2 className="pb-0 font-medium text-2xl md:text-3xl">How to setup Auto -Buying Using Asapbot</h2>
						<p className="text-base md:text-xl opacity-80 tracking-wider pt-2">With our auto buying feature, you can snipe any token instantly once trading opens or LP added.</p>
						<div className="flex pt-11 gap-3 flex-col font-cabinet text-base md:text-xl">
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Require Verified Contract: true</p>
							</div>
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Require Honeypot / Tax Check: true</p>
							</div>
							<div className="flex gap-4 items-center">
								<div className="w-6 h-6 rounded-full bg-[#49B2FC] flex items-center  justify-center"><FaCheck className="w-[10px] h-[10px]" /></div>
								<p className="font-medium">Require Liquidity Lock: true</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<img src="/images/about-bg.png" alt="About" />
			</div>
		</section>
	)
}
export default AboutUs