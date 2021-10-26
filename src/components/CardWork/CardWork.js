import "./CardWork.scss"
import Tag from "../interface/Tag"

function CardWork() {
	return (
		<div className="CardWork">
			<div className="CardWork__image"></div>
			<h3>InstaClone</h3>

			<div className="CardWork__tags">
				<Tag name="Sass" tagId="Sass" />
				<Tag name="Node" tagId="Node" />
				<Tag name="React" tagId="React" />
			</div>
		</div>
	)
}

export default CardWork
