//IMAGES
import InstaWork from "../assets/images/backgroundWorks/instaFondo.jpg"
import MomboWork from "../assets/images/backgroundWorks/mombo.png"
import Limpcies from "../assets/images/backgroundWorks/Limpcies.png"
import AliDrive from "../assets/images/backgroundWorks/AliDrive.png"

export const nav = ["about", "skills", "works"]

export const header = {
	title: "Este es el titulo",
}

export const about = {
	info: "Esta es la información",
}

export const work = [
	{
		id: 0,
		img: InstaWork,
		title: "InstaClone",
		review: "A copy of Instagram app",
		description: "Esta es la descripción",
		tags: ["REACT", "NODE", "GRAPHQL", "APOLLO", "AWS", "HEROKU"],
	},
	{
		id: 1,
		img: MomboWork,
		title: "Mombo",
		review: "An app aabout travel trips",
		description: "Esta es la descripción",
		tags: ["REACT NATIVE", "GOOGLE CLOUD", "AWS", "PYTHON"],
	},
	{
		id: 2,
		img: AliDrive,
		title: "Ali Drive",
		review: "Functional prototype for a car management application.",
		description: "Esta es la descripción",
		tags: ["REACT NATIVE", "GOOGLE CLOUD"],
	},
	{
		id: 3,
		img: InstaWork,
		title: "VISTT ",
		review: "A copy of Instagram app",
		description: "Esta es la descripción",
		tags: ["SASS", "REACT", "NODE"],
	},
	{
		id: 4,
		img: Limpcies,
		title: "Limpiezas Cies",
		review: "Application to calculate the appropriate amount of ozone gas.",
		description: "Esta es la descripción",
		tags: ["REACT NATIVE", "EXPO"],
	},
	{
		id: 5,
		img: InstaWork,
		title: "ITINERARY",
		review: "A copy of Instagram app",
		description: "Esta es la descripción",
		tags: ["SASS", "REACT", "NODE"],
	},
]

export const skill = [
	{ id: 1, description: "Esta es la descripción" },
	{ id: 1, description: "Esta es la descripción" },
]
