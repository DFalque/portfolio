import "./Header.scss"

const Header = () => {
	return (
		<header className="Header" id="home">
			<div className="Header__text">
				<h2>
					Hi, I'm Diego<span> </span>
					<span role="img" aria-label="Emoji">
						👋
					</span>
				</h2>

				<h1>React Developer, design and experience</h1>
				<p>
					Voluptate nulla anim excepteur ex ipsum ea aute ut pariatur. Labore
					aute consectetur exercitation tempor et veniam laboris officia ex
					nulla officia. Labore incididunt aliqua deserunt nulla incididunt
					aliquip eiusmod laborum magna.
				</p>
				<button>Contact</button>
			</div>
		</header>
	)
}

export default Header
