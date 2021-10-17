import "./About.scss"
import Image from "../../assets/images/aaaa.jpeg"

const About = () => {
	return (
		<section className="About">
			<div className="About__text">
				<h2>About me</h2>
				<p>
					Graduated in “Software engineering” & “Business Administration”. I
					really ️work with Javascript and Python. I started my professional
					career in the management area but I switched to the Software Sector
					when I saw what we could do with a computer ‍ .
				</p>
				<p>
					Graduated in “Software engineering” & “Business Administration”. I
					really ️work with Javascript and Python. I started my professional
					career in the management area but I switched to the Software Sector
					when I saw what we could do with a computer ‍ .
				</p>
			</div>
			<div className="About__image">
				<img src={Image} />
			</div>
		</section>
	)
}

export default About
