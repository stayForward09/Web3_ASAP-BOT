import { CgArrowRight } from 'react-icons/cg'
import { SpinnerCircular } from 'spinners-react'

const LaptopVideo = () => {
	return (
		<>
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HwGuM02ajVE" title="YouTube video player"
				className='w-full h-full border-0 z-20 absolute top-0 left-0 bottom-0 right-0'
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<SpinnerCircular color='#fff' secondaryColor='#aaa' size={"50px"} className='z-10' />
		</>
	)
}

const TopHero = () => {
	return (
		<section className="flex px-6 py-14 smm:py-20 md:py-28 text-center flex-col">
			<div className="max-w-[1066px] mx-auto w-full flex justify-between flex-col">
				<h1 className="text-4xl ssm:text-5xl smm:text-6xl md:text-[80px] leading-none w-full font-clash font-semibold colored-hero-text">Auto Discord dex sniper bot</h1>
				<p className="pt-5 max-w-[792px] font-medium text-sm ssm:text-base md:text-xl mx-auto">The fastest discord DEX (uniswap, pancakeswap ) sniper bot , Be the first to buy the next 1000X tokens.</p>
				<div className="pt-5 smm:pt-9 md:pt-[55px] mx-auto flex gap-5 items-center text-sm ssm:text-base md:text-xl">
					<button className="fancy-left-hero-btn py-3 px-6 md:px-8 md:py-4 rounded-full gap-3 flex items-center">Buy Here <CgArrowRight /></button>
					<button className="fancy-right-hero-btn py-3 px-6 md:px-8 md:py-4 rounded-full gap-3 flex items-center">Charts <CgArrowRight /></button>
				</div>
			</div>
			<div className="py-10 smm:pt-16 md:pt-[100px] flex items-center justify-center">
				<div className="relative w-[270px] smm:w-[400px] md:w-[600px] lg:w-[900px] xl:w-[1200px]">
					<img src="/images/home-laptop.png" alt="Home Laptop" className='w-full' />
					<div className="items-center justify-center overflow-hidden hidden xl:flex absolute bg-black top-[43px] left-[182px] w-[866px] h-[540px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden lg:flex xl:hidden absolute bg-black top-[32px] left-[136px] w-[649px] h-[406px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden md:flex lg:hidden absolute bg-black top-[21px] left-[91px] w-[433px] h-[271px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden hidden smm:flex md:hidden absolute bg-black top-[15px] left-[60px] w-[289px] h-[179px]"><LaptopVideo /></div>
					<div className="items-center justify-center overflow-hidden flex smm:hidden absolute bg-black top-[10px] left-[40px] w-[196px] h-[122px]"><LaptopVideo /></div>
				</div>
			</div>
		</section>
	)
}
export default TopHero