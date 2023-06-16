const WhyDifferent = () => {
	return (
		<section className="flex px-6 ssm:px-10 py-14 md:py-28">
			<div className="max-w-[1350px] mx-auto w-full flex justify-between flex-col">
				<div className="max-w-[780px] text-center mx-auto">
					<h1 className="font-clash font-semibold text-3xl smm:text-5xl md:text-6xl pb-3 md:pb-5">Why we are different</h1>
					<p className="font-cabinet text-base md:text-xl font-medium opacity-80 tracking-[.1em]">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
				</div>
				<div className="pt-14 smm:pt-20 md:pt-[100px] flex items-stretch justify-between gap-10 flex-wrap">
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-1.svg" alt="Diff 1" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">New Tokens Listing</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">Get the latest notification of new tokens launched on Ethereum node as they are launched and ape with a single button</p>
					</div>
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-2.svg" alt="Diff 2" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">Auto - Buying</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">Automatically buy any token while asleep using Asap auto buying sniping feature.</p>
					</div>
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-3.svg" alt="Diff 3" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">Degen Vault</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">20% of the taxed funds will be loaded in the bot which we will be used to ape into new tokens and share profits with holders .</p>
					</div>
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-4.svg" alt="Diff 4" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">Hold & Earn</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">1% taxed funds will be shared to all holders as dividend in ETH</p>
					</div>
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-5.svg" alt="Diff 5" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">Liquidity Locker</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">Check latest locked Liquidty pool token locked to avoid rugpulls</p>
					</div>
					<div className="bg-[#1C1C1C] px-8 py-10 xl:px-12 xl:py-14 flex flex-col w-full sm:w-[calc(50%_-_20px)] lg:w-[calc(33.3%_-_26.66px)] rounded-3xl">
						<img src="/images/diff-6.svg" alt="Diff 6" className="w-20 object-contain" />
						<h4 className="font-clash tracking-wider text-xl font-semibold md:text-[26px] leading-none pb-4 pt-8">Honeypot Checker</h4>
						<p className="font-cabinet tracking-wider text-sm md:text-base font-medium opacity-70 pb-6">With our filters ,you can spot honeypot tokens and avoid them.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default WhyDifferent