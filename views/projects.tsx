import { InfoGrid } from "@/components/info-grid";

/**
 * Fetches portfolio projects directly from the GitHub API.
 * 1. Searches for the user's repositories tagged with the 'portfolio' topic.
 * 2. Fetches the custom 'portfolio.json' file for each matching repository.
 * * Uses Next.js data fetching with caching to avoid rate limits while ensuring data freshness.
 * * @returns {Promise<Array<Object>>} An array of project objects parsed from portfolio.json.
 */
async function getPortfolioProjects() {
	// Step 1: Query GitHub API for repositories with the specific topic
	const searchRes = await fetch(
		"https://api.github.com/search/repositories?q=user:ibrahimhozhun+topic:portfolio",
		{ next: { revalidate: 3600 } },
	);

	const searchData = await searchRes.json();
	const projects = [];

	// Step 2: Extract details via raw.githubusercontent.com for each repository found
	for (const repo of searchData.items) {
		try {
			const jsonRes = await fetch(
				`https://raw.githubusercontent.com/ibrahimhozhun/${repo.name}/main/portfolio.json`,
				{ next: { revalidate: 3600 } },
			);

			if (jsonRes.ok) {
				const projectData = await jsonRes.json();

				// Merge the custom JSON data with the repository URL from the API
				projects.push({
					...projectData,
					repoUrl: repo.html_url,
				});
			}
		} catch (error) {
			console.error(
				`Couldn't fetch portfolio.json for ${repo.name}`,
				error,
			);
		}
	}

	return projects;
}

/**
 * Projects Section (Server Component)
 * Resolves the fetched GitHub project data and maps it to the InfoGrid component
 * to dynamically display the portfolio showcase.
 */
export async function Projects() {
	const myProjects = await getPortfolioProjects();

	return (
		<div
			id="projects"
			className="scroll-mt-27 md:col-span-12 border-2 border-[#2cf3d1]/24 bg-[#07171a] p-6 shadow-[10px_10px_0_rgba(44,243,209,0.12)]"
		>
			<h4 className="font-mono text-2xl text-center font-bold mb-4">
				Projects
			</h4>
			<InfoGrid
				items={myProjects.map((project) => ({
					label: project.title,
					value: project.short_description,
					repoUrl: project.repoUrl,
					techStack: project.tech_stack,
				}))}
			/>
		</div>
	);
}
