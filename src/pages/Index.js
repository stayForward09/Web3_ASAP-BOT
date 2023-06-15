import NavBar from "../components/index/NavBar"
import TopBackground from "../components/index/TopBackground"
import TopHero from "../components/index/TopHero"

const Index = () => {
	return (
		<div className="bg-black w-full flex-1 overflow-auto font-cabinet flex flex-col">
			<TopBackground />
			<NavBar />
			<TopHero />
		</div>
	)
}
export default Index