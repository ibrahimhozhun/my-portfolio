import { InfoGrid } from "@/components/info-grid";
import { Card } from "@/components/card";

/**
 * Home (Hero) Section Component
 * Serves as the primary introduction view, showcasing the user's role, current focus,
 * and key status/availability via a responsive grid of Card components.
 */
export function Home() {
	return (
		<section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-8">
			<div className="brutalist-panel relative overflow-hidden p-4 sm:p-6 lg:p-8">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(44,243,209,0.12),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(44,243,209,0.08),transparent_20%)]" />
				<div className="relative grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(120px,auto)]">
					<Card
						eyebrow="BUILDING DATA & WEB PROJECTS"
						title="Data, Stats & Programming"
						description="I'm a Statistics undergraduate combining theoretical data analysis with modern software development. From building machine learning models and automating web scraping scripts with Python, to developing full-stack applications. I focus on turning complex data into functional, real-world solutions through code."
						variant="hero"
						className="md:col-span-8 md:row-span-2 min-h-80 flex"
					>
						<h4 className="text-lg mb-2 font-semibold tracking-tight text-white sm:text-2xl">
							Current Focus
						</h4>
						<InfoGrid
							items={[
								{
									label: "Project",
									value: "updating my old projects",
								},
								{
									label: "Learning",
									value: "EDA with Python & Pandas",
								},
								{
									label: "Hobby",
									value: "Composing songs with guitar for my lovely gf 💚",
								},
							]}
						/>
					</Card>

					<Card
						eyebrow="Featured Project"
						title="Real Estate Analyzer"
						description="Built an end-to-end data science project. I used Selenium to scrape real estate market data, stored it in PostgreSQL, and applied Scikit-learn algorithms for realistic property valuations."
						className="md:col-span-4 md:row-span-1"
					/>

					<Card
						eyebrow="Availability Status"
						title="Open to Opportunities"
						description="I am actively seeking internship opportunities or junior roles where I can apply my data science and programming skills to real-world problems."
						className="md:col-span-4 md:row-span-1"
					/>
				</div>
			</div>
		</section>
	);
}
