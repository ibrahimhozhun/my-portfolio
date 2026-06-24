/**
 * Represents a single item within the InfoGrid component.
 * @property {string} label - The main title or topic of the grid item.
 * @property {string} value - The descriptive text associated with the label.
 * @property {string} [repoUrl] - Optional URL for external links (transforms the item into an anchor tag).
 * @property {string[]} [techStack] - Optional array of technology names to display as pills.
 */
export type InfoGridItem = {
	label: string;
	value: string;
	repoUrl?: string;
	techStack?: string[];
};

export function InfoGridItem({ item }: { item: InfoGridItem }) {
	return (
		<div>
			<p className="text-2xl font-mono font-semibold text-[#2cf3d1]">
				{item.label}
			</p>
			<p className="mt-1 mb-2 text-md text-white/70">{item.value}</p>
		</div>
	);
}
