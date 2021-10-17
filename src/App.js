import About from "./components/About/About"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Layout from "./layout/Layout"

function App() {
	return (
		<>
			<Layout>
				<Header />
				<About />
				<Skills />
			</Layout>
		</>
	)
}

export default App
