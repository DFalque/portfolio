import "./Header.scss"

const Header = () => {
	return (
		<header className="Header" id="home">
			<div className="Header__text">
				<h3>
					Hi, I'm Diego<span> </span>
					<span role="img" aria-label="Emoji">
						👋
					</span>
				</h3>

				<h1>React Developer, design and experience</h1>
				<p>
					I'm a Software Engineer specializing in React with 2 years of
					experience. As a Front-end engineer, I am concerned about design and
					user experience but also best practices in the tech industry to have
					reusable and maintainable code.
				</p>
				<button>CONNECT WITH ME</button>
			</div>
		</header>
	)
}

export default Header
