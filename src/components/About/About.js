import "./About.scss"
import Image from "../../assets/images/me.JPG"

const About = () => {
	return (
		<section className="About" id="about">
			<div className="About__content">
				<div className="About__text">
					<h2>About me</h2>
					<p>
						I started my professional career in the management and accounting
						area because I had studied Business Administration. One of my first
						jobs was Project assistant in a technology institution, where I
						worked on different projects related to government subsidy and
						market analysis to tech startups
					</p>
					<p>
						I had clear that I wanted to increase my technology knowledge and
						start to work in that area. That was the reason because I became to
						study Software engineer.
					</p>
					<p>
						As a programmer I have specialized in Javascript / Typescript
						language deu to its popularity and flexibility and I work as a React
						developer (React native, Gastby, etc).
					</p>
				</div>
				<div className="About__imageContainer">
					<img className="image" src={Image}></img>
				</div>
			</div>
		</section>
	)
}

export default About
