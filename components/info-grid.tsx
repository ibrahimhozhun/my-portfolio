import { joinClasses } from "@/utils/join-classes";
import { InfoGridItem } from "./info-grid-item";

type InfoGridProps = {
	items: InfoGridItem[];
	className?: string;
};

/**
 * InfoGrid Component
 * Displays a responsive grid of items (either static cards or clickable links).
 * Commonly used for listing skills or rendering dynamically fetched project cards.
 */
export function InfoGrid({ items, className }: InfoGridProps) {
	return (
		<div className={joinClasses("grid gap-3 sm:grid-cols-3", className)}>
			{items.map((item) =>
				item.repoUrl ? (
					/* Render as a clickable link if repoUrl is provided */
					<a
						key={item.label}
						href={item.repoUrl}
						target="_blank"
						rel="noreferrer"
						className="relative overflow-hidden border-2 border-[#2cf3d1]/24 bg-[#041014] p-4 shadow-[0_0_24px_rgba(44,243,209,0.16),6px_6px_0_rgba(44,243,209,0.12)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(44,243,209,0.28),6px_6px_0_rgba(44,243,209,0.12)]"
					>
						{/* Hover glow effect background */}
						<span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,243,209,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(44,243,209,0.08),transparent_40%)] opacity-80 transition-opacity group-hover:opacity-100" />
						{/* External link icon (Top Right) */}
						<span className="absolute right-2 top-2 text-sm font-black text-[#2cf3d1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</span>

						<div className="flex flex-col h-full">
							<InfoGridItem item={item} />
							<div className="mt-auto flex flex-wrap gap-2">
								{item.techStack?.map((tech_name) => (
									<span
										key={tech_name}
										className="rounded-full bg-[#2cf3d1]/20 px-3 py-2 text-sm font-semibold text-[#2cf3d1]"
									>
										{tech_name}
									</span>
								))}
							</div>
						</div>
					</a>
				) : (
					/* Render as a static informational box if no repoUrl is provided */
					<div
						key={item.label}
						className="relative overflow-hidden border-2 border-[#2cf3d1]/24 bg-[#041014] p-4 shadow-[0_0_24px_rgba(44,243,209,0.16),6px_6px_0_rgba(44,243,209,0.12)]"
					>
						<span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,243,209,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(44,243,209,0.08),transparent_40%)] opacity-80" />
						<InfoGridItem item={item} />
					</div>
				),
			)}
		</div>
	);
}
