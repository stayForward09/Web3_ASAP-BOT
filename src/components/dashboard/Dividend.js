const Dividend = () => {
	return (
		<div className="flex w-full flex-1 flex-col z-10 px-6 py-8 sm:px-10 sm:py-9">
			<h1 className="text-2xl font-semibold">Dividend</h1>
			<div className="flex gap-8 pt-8 flex-col 1.5xl:flex-row">
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Total BUSD Claimed</h3>
						<div className="flex gap-4 items-center flex-wrap">
							<button className="break-keep px-5 py-2 border border-white rounded-full opacity-70">Buy ASAP</button>
							<button className="break-keep px-5 py-2 border border-white rounded-full opacity-70">Stake Crypto</button>
						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">$27632</p>
						<p className="text-[#92929D] text-sm pt-2">Compared to ($21340 last year)</p>
					</div>
				</div>
				<div className="px-6 py-5 bg-subBg rounded-2xl w-full flex flex-col justify-between">
					<div className="flex justify-between gap-2 items-center flex-wrap">
						<h3 className="text-base text-[#92929D]">Unrealized Pending BUSD</h3>
						<div className="flex gap-4 items-center flex-wrap">
							<button className="break-keep px-5 py-2 border border-white rounded-full opacity-70">Claim Now</button>
						</div>
					</div>
					<div className="pt-5">
						<p className="font-semibold text-3xl">$27632</p>
						<p className="text-[#92929D] text-sm pt-2">Compared to ($21340 last year)</p>
					</div>
				</div>
			</div>
			<div className="flex pt-14 flex-wrap gap w-full gap-5">
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Next Pool Release</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Total Payouts</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">$0</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Dividend Growth</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">+241.21%</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Your Staked sASAP</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">0</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>Next Payout</p>
					</div>
				</div>
				<div className="px-5 py-7 flex gap-8 bg-subBg rounded-2xl w-full smm:w-[calc(50%_-_10px)] sm:w-full md:w-[calc(50%_-_10px)] items-center">
					<div className="w-[50px] h-[50px] bg-white bg-opacity-[0.06] flex items-center justify-center rounded-full">
						<img src="/images/reverse-dollar.svg" alt="reverse dollar" />
					</div>
					<div className="flex gap-2 text-sm font-medium text-[#92929D] flex-col">
						<p>sASAP Stoked</p>
						<p className="font-semibold text-2xl text-[#FAFAFB]">0</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Dividend