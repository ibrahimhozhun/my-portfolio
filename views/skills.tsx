import { InfoGrid } from "@/components/info-grid";

/**
 * Skills Section Component
 * Renders a static grid detailing the developer's technical capabilities,
 * languages, and tools using the InfoGrid component.
 */
export function Skills() {
	return (
		<div
			id="skills"
			className="scroll-mt-27 md:col-span-12 border-2 border-[#2cf3d1]/24 bg-[#07171a] p-6 shadow-[10px_10px_0_rgba(44,243,209,0.12)]"
		>
			<h4 className="font-mono text-2xl text-center font-bold mb-4">
				Skills & Tech Stack
			</h4>
			<InfoGrid
				items={[
					{
						label: "Python & Machine Learning",
						value: "Building predictive models using Scikit-learn and handling complex data manipulation with Pandas and NumPy",
					},
					{
						label: "Web Scraping & ETL",
						value: "Automating data collection pipelines and extracting structured datasets from dynamic web pages using Selenium",
					},
					{
						label: "Applied Statistics",
						value: "Conducting rigorous statistical tests, exploratory data analysis (EDA), and probability distribution modeling using R and Python",
					},
					{
						label: "Full-Stack Web Dev & Backend",
						value: "Crafting responsive, fast, and modern web applications (including PWAs) using React, Next.js and engineering secure, high-performance APIs using FastAPI and Node.js",
					},
					{
						label: "Databases & Architecture",
						value: "Designing scalable data models and managing interactions with both relational (PostgreSQL) and NoSQL (MongoDB) databases",
					},
					{
						label: "Tools & Security",
						value: "Managing project deployments, implementing JWT authentication for secure access, and using TypeScript for robust codebases",
					},
				]}
			/>
		</div>
	);
}
