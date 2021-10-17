import About from "./components/About/About"
import Header from "./components/Header"
import Layout from "./layout/Layout"

function App() {
	return (
		<>
			<Layout>
				<Header />
				<About />
			</Layout>
		</>
	)
}

export default App
