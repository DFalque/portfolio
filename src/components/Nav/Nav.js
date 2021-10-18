import "./Nav.scss"
function Nav() {
	const scroll = (e) => {
		e.preventDefault()
		const target = e.target.getAttribute("href")
		//const element = document.querySelector(target)
		const location = document.querySelector(target).offsetTop
		window.scrollTo({
			left: 0,
			top: location - 50,
			behavior: "smooth",
		})
		console.log(location)
		//const link = 'document.getElementById("skills")'
		//window.scrollTo(0, link)
	}
	return (
		<div className="Nav sticky">
			<a className="Nav__icon">Diego Falque</a>
			<nav className="Nav__LinksContainer">
				<a
					href="#about"
					onClick={(e) => scroll(e)}
					className="Nav__LinksContainer__Link"
				>
					About
				</a>
				<a
					className="Nav__LinksContainer__Link"
					href="#skills"
					onClick={(e) => scroll(e)}
				>
					Skills
				</a>
				<a
					className="Nav__LinksContainer__Link"
					href="#work"
					onClick={(e) => scroll(e)}
				>
					Work
				</a>
				<a
					className="Nav__LinksContainer__Link"
					href="#contact"
					onClick={(e) => scroll(e)}
				>
					Contact
				</a>
			</nav>
		</div>
	)
}

export default Nav
