import { FaSearch } from 'react-icons/fa'
import { Sling as Hamburger } from "hamburger-react"
// import { useWeb3Modal } from '@web3modal/react'

import { Web3Button } from '@web3modal/react'
const NavBar = ({ navState }) => {
	const [navIsOpen, setNavIsOpen] = navState
	// const { open, close } = useWeb3Modal()
	return (
		<nav className="bg-subBg px-6 py-5 flex border-b border-[#44444F]">
			<div className="text-blueText font-semibold text-lg flex gap-2 items-center justify-start sm:w-[200px] xl:w-[250px]">
				<img src="/images/logo.png" alt="Logo" />
				<h1>ASAP BOT</h1>
			</div>
			<div className="text-xs sm:text-sm flex-1 flex items-center gap-3 justify-end">
				<div className="hidden sm:flex gap-2 items-center flex-1">
					<FaSearch className='text-inactiveColor w-[20px] h-[20px]' />
					<input type="text" placeholder='Search…' className='bg-transparent border-none w-full' />
				</div>
				<div className="flex items-center gap-1 ssm:gap-3">
					<button className='hidden sm:flex px-4 py-3 rounded-full bg-blueText'>Buy ASAP</button>
					<Web3Button />
					<div className="flex sm:hidden">
						<Hamburger toggled={navIsOpen} toggle={setNavIsOpen} size={35} distance="sm" rounded />
					</div>
				</div>
			</div>
		</nav>
	)
}
export default NavBar