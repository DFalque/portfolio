import CardWork from "../CardWork/CardWork"
import "./Works.scss"

const Works = () => {
	return (
		<section className="Works" id="work">
			<h2>Works</h2>
			<div className="Works__container">
				<CardWork />
				<CardWork />
				<CardWork />
				<CardWork />
				<CardWork />
				<CardWork />
			</div>
		</section>
	)
}

export default Works
