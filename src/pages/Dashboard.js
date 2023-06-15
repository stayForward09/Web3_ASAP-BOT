import { useState } from "react"
import LeftBar from "../components/dashboard/LeftBar"
import NavBar from "../components/dashboard/NavBar"
import Dividend from "../components/dashboard/Dividend"

const Dashboard = () => {
	const [navIsOpen, setNavIsOpen] = useState(false)

	return (
		<div className="flex flex-col flex-1">
			<NavBar navState={[navIsOpen, setNavIsOpen]} />
			<div className="flex flex-1">
				<LeftBar navState={[navIsOpen, setNavIsOpen]} />
				<Dividend />
			</div>
		</div>
	)
}
export default Dashboard