import "./Nav.scss"
function Nav() {
	return (
		<div className="Nav">
			<a>Portfolio</a>
			<nav className="Nav__LinksContainer">
				<a className="Nav__LinksContainer__Link">About me</a>
				<a className="Nav__LinksContainer__Link">Work</a>
				<a className="Nav__LinksContainer__Link">Contact</a>
			</nav>
		</div>
	)
}

export default Nav
