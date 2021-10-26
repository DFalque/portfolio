import "./Tag.scss"
const Tag = (props) => {
	const { name, tagId } = props

	const colorSchema = {
		React: "react",
		Node: "node",
		Sass: "sass",
	}

	const color = colorSchema[tagId]

	return (
		<div className={`Tag ${color}`}>
			<p>#{name}</p>
		</div>
	)
}

export default Tag
