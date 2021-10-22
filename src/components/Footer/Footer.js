import "./Footer.scss"

import { ReactComponent as ImgGithub } from "../../assets/images/github.svg"
import { ReactComponent as ImgDribbble } from "../../assets/images/dribbble.svg"
import { ReactComponent as ImgInstagram } from "../../assets/images/instagram.svg"
import { ReactComponent as ImgLinkdlin } from "../../assets/images/dribbble.svg"

//const imgGithub = "../../assets/images/github.svg"
function Footer() {
	return (
		<div className="Footer" id="contact">
			<h2>Contact</h2>
			<h3>Let's create your next experience together</h3>
			<a className="email-link" href={`mailto:falque@me.com`}>
				falque@me.com
			</a>
			<div className="Footer__iconContainer">
				<a
					className="Footer__iconContainer__icon"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImgGithub />
				</a>
				<a
					className="Footer__iconContainer__icon"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImgDribbble />
				</a>
				<a
					className="Footer__iconContainer__icon"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImgInstagram />
				</a>
				<a
					className="Footer__iconContainer__icon"
					href="#"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ImgDribbble />
				</a>
			</div>
		</div>
	)
}

export default Footer
