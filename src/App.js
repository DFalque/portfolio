import About from "./components/About/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Works from "./components/Works/Works"
import Layout from "./layout/Layout"

function App() {
	return (
		<>
			<Layout>
				<Header />
				<About />
				<Skills />
				<Works />
			</Layout>
		</>
	)
}

export default App
