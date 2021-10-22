import "./Skills.scss"

import { ReactComponent as Imagen } from "../../assets/images/javascript.svg"
import { ReactComponent as ImagenSass } from "../../assets/images/sass.svg"
import { ReactComponent as ImagenReact } from "../../assets/images/icons8-react.svg"
import { ReactComponent as ImagenTypeScript } from "../../assets/images/typescript.svg"
import { ReactComponent as ImagenFigma } from "../../assets/images/figma.svg"
import { ReactComponent as ImagenPython } from "../../assets/images/python.svg"

const Skills = () => {
	return (
		<section className="Skills" id="skills">
			<h2>Skills</h2>
			<div className="Skills__container">
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<ImagenSass className="icon" />
					</div>
					<div className="Skills__skillCard__textContainer">
						<h3>CSS / SASS</h3>
						<p>
							I have a good level of CSS although I usually use SASS in my
							projects or Javascript objects to define the structure of the
							project to make it more scalable and readable.
						</p>
					</div>
				</div>
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<Imagen className="icon" />
					</div>
					<div className="Skills__skillCard__textContainer">
						<h3>Javascript</h3>

						<p>
							I have been using javascript for more than 3 years and every year
							I try to update myself with its new features. Handle arrays,
							objects and requests well.
						</p>
					</div>
				</div>
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<ImagenReact className="icon" />
					</div>
					<div className="Skills__skillCard__textContainer">
						<h3>React</h3>

						<p>
							I've been working with React and other React frameworks for 2
							years. Looking for the best techniques and patterns to improve
							scalability and maintainability of projects.
						</p>
					</div>
				</div>
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<ImagenTypeScript className="icon" />
					</div>
					<div className="Skills__skillCard__textContainer">
						<h3>Typescript</h3>

						<p>
							I continue to improve my programming skills and my projects, so I
							am working on projects using Typescript and all its
							functionalities.
						</p>
					</div>
				</div>
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<ImagenFigma className="icon" />
					</div>
					<div className="Skills__skillCard__textContainer">
						<h3>Figma</h3>

						<p>
							Although I am not specialized in design, I like to design and
							create projects using the best user experience practices to add
							value to the projects.
						</p>
					</div>
				</div>
				<div className="Skills__skillCard">
					<div className="iconSkill">
						<ImagenPython className="icon" />
					</div>

					<div className="Skills__skillCard__textContainer">
						<h3>Python</h3>
						<p>
							I use python for my own projects to practice my skills in the
							field of artificial intelligence and Big Data, an area I am
							passionate about.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
