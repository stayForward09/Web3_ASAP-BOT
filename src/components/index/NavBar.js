import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa"
import { discordLink, mLink, teelgramLink, twitterLink } from "../../utils";
import { Sling as Hamburger } from "hamburger-react"

const NavBar = () => {
	const [navIsOpen, setNavIsOpen] = useState(false)

	const scrollHandler = (e) => {
		e.preventDefault();
		setNavIsOpen(false)
		const hashVal = e.currentTarget.getAttribute('href').split("/").join("")
		window.history.pushState(null, null, `${hashVal}`)
		document.querySelector(hashVal)?.scrollIntoView({
			behavior: 'smooth'
		});
	}

	return (
		<section className="flex px-6 ssm:px-10" id="home">
			<nav className="max-w-[1320px] mx-auto w-full py-7 flex justify-between">
				<img src="/images/logo.png" alt="Logo" className="w-14 h-14" />
				<ul className="hidden sm:flex gap-8 lg:gap-14 xl:gap-[70px] items-center font-clash">
					<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#home">Home</Link></li>
					<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#about">About Us</Link></li>
					<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#features">Features</Link></li>
					<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#contact">Contact</Link></li>
				</ul>
				<div className="hidden sm:flex items-center justify-center gap-3 flex-wrap">
					<a href={twitterLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaTwitter className="w-4 h-4 xl:w-5 xl:h-5" /></a>
					<a href={mLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><img className="w-4 h-4 xl:w-5 xl:h-5" src="/images/fa-mmm.svg" alt="M" /></a>
					<a href={discordLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaDiscord className="w-4 h-4 xl:w-5 xl:h-5" /></a>
					<a href={teelgramLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaTelegram className="w-4 h-4 xl:w-5 xl:h-5" /></a>
				</div>
				<div className="flex sm:hidden items-center">
					<Hamburger toggled={navIsOpen} toggle={setNavIsOpen} size={35} distance="sm" rounded />
				</div>
			</nav>
			<div className={`fixed xl:hidden block backdrop-blur-sm w-full h-full top-0 bottom-0 z-50 ${navIsOpen ? "left-0" : "left-[101vw]"} transition-all duration-500`}>
				<div className="h-full w-[300px] relative mr-0 ml-auto p-[32px] overflow-auto flex flex-col gap-[60px] justify-between bg-mainBg">
					<div className="flex flex-col gap-[50px]">
						<div className="left-[-11px]"><Hamburger toggled={navIsOpen} toggle={setNavIsOpen} size={35} distance="sm" rounded /></div>
						<ul className="flex gap-[32px] flex-col items-start text-sm">
							<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#home">Home</Link></li>
							<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#about">About Us</Link></li>
							<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#features">Features</Link></li>
							<li><Link onClick={scrollHandler} className="hover:text-linkHover duration-75	transition-all" to="/#contact">Contact</Link></li>
						</ul>
					</div>
					<div className="flex flex-col gap-[30px] text-center">
						<div className="flex gap-[16px] justify-center">
							<a href={twitterLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaTwitter className="w-4 h-4 xl:w-5 xl:h-5" /></a>
							<a href={mLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><img className="w-4 h-4 xl:w-5 xl:h-5" src="/images/fa-mmm.svg" alt="M" /></a>
							<a href={discordLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaDiscord className="w-4 h-4 xl:w-5 xl:h-5" /></a>
							<a href={teelgramLink} target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 w-8 h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-full"><FaTelegram className="w-4 h-4 xl:w-5 xl:h-5" /></a>
						</div>
						<div className="flex flex-col gap-[8px] text-[10px]">
							<span>ASAP BOT</span>
							<span className="text-[#848484] uppercase">© Asapbot.xyz All rights reserved.</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default NavBar