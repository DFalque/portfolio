import Footer from "../components/Footer"
import Nav from "../components/Nav/Nav"
import "./Layout.scss"

function Layout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
