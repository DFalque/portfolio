import "./CardWork.scss"
import Tag from "../interface/Tag"

function CardWork(props) {
	const { img, title, review, description, tags } = props

	if (!tags) return null
	return (
		<div className="CardWork">
			<div
				className="CardWork__image"
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className="CardWork__info">
				<h3 className="CardWork__title">{title}</h3>
				<p className="CardWork__review">{review}</p>
				<div className="CardWork__tags">
					{tags.map((tag, index) => (
						<p key={index} className="CardWork__tags__tag">
							{tag}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}

export default CardWork
