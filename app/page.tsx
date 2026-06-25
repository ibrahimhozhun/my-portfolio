import { Contact } from "@/views/contact";
import { Navbar } from "../components/navbar";
import { Projects } from "@/views/projects";
import { Skills } from "@/views/skills";
import { Home } from "@/views/home";

// Navigation configuration array.
const navigationLabels = ["Home", "Skills", "Projects", "Contact"];

/**
 * Main Home Page Component
 * Acts as the root assembler for the single-page portfolio layout.
 * It sequentially renders the Navbar, Hero (Home), Skills, Projects, and Contact sections.
 */
export default async function HomePage() {
	return (
		<main id="home" className="min-h-screen">
			<Navbar
				brand="ibrahimhozhun"
				labels={navigationLabels}
				ctaLabel="Download my CV"
			/>
			<Home />
			<section className="grid gap-4 md:grid-cols-12 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
				<Skills />
				<Projects />
				<Contact />
			</section>
		</main>
	);
}
