import { CgArrowRight } from 'react-icons/cg'
import { SpinnerCircular } from 'spinners-react'

const LaptopVideo = () => {
	return (
		<>
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/OH4juvq6Wgg" title="YouTube video player"
				className='w-full h-full border-0 z-20 absolute top-0 left-0 bottom-0 right-0'
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			{/* <div className="w-full h-full border-0 z-20 absolute top-0 left-0 bottom-0 right-0 bg-emerald-600"></div> */}
			<SpinnerCircular color='#fff' secondaryColor='#aaa' size={"50px"} className='z-10' />
		</>
	)
}

const TopHero = () => {
	return (
		<section className="flex py-14 smm:py-20 md:py-28 text-center flex-col">
			<div className="px-6 ssm:px-10 max-w-[1066px] mx-auto w-full flex justify-between flex-col">
				<h1 className="text-4xl ssm:text-5xl smm:text-6xl md:text-[80px] leading-none w-full font-clash font-semibold colored-hero-text">Auto Discord dex sniper bot</h1>
				<p className="pt-5 max-w-[792px] font-medium text-sm ssm:text-base md:text-xl mx-auto">The fastest discord DEX (uniswap, pancakeswap ) sniper bot , Be the first to buy the next 1000X tokens.</p>
				<div className="pt-5 smm:pt-9 md:pt-[55px] mx-auto flex gap-5 items-center text-sm ssm:text-base md:text-xl">
					<button className="fancy-left-hero-btn py-3 px-6 md:px-8 md:py-4 rounded-full gap-3 flex items-center">Buy Here <CgArrowRight /></button>
					<button className="fancy-right-hero-btn py-3 px-6 md:px-8 md:py-4 rounded-full gap-3 flex items-center">Charts <CgArrowRight /></button>
				</div>
			</div>
			<div className="py-10 px-2 smm:pt-16 md:pt-[100px] flex items-center justify-center">
				<div className="relative w-[260px] xsm:w-[320px] smm:w-[400px] md:w-[600px] lg:w-[900px] xl:w-[1200px]">
					<img src="/images/home-laptop.png" alt="Home Laptop" className='w-full' />
					<div className="items-center justify-center overflow-hidden hidden xl:flex absolute bg-black top-[43px] left-[181px] w-[867px] h-[542px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden lg:flex xl:hidden absolute bg-black top-[32px] left-[136px] w-[651px] h-[406px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden md:flex lg:hidden absolute bg-black top-[21px] left-[91px] w-[433px] h-[272px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden smm:flex md:hidden absolute bg-black top-[13px] left-[60px] w-[290px] h-[182px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden xsm:flex smm:hidden absolute bg-black top-[11px] left-[49px] w-[231px] h-[145px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden flex xsm:hidden absolute bg-black top-[9px] left-[39px] w-[188px] h-[118px]"><LaptopVideo /></div>
				</div>
			</div>
		</section>
	)
}
export default TopHero