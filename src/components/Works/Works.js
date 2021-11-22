import CardWork from "../CardWork/CardWork"
import { work } from "../../data/data"
import "./Works.scss"

const Works = () => {
	return (
		<section className="Works" id="work">
			<h2>Works</h2>
			<div className="Works__container">
				{work.map((card) => (
					<CardWork key={card.id} {...card} />
				))}
			</div>
		</section>
	)
}

export default Works
