"use client";

import { joinClasses } from "@/utils/join-classes";
import type { ReactNode } from "react";

/**
 * Props definition for the Bento Card component.
 * @property {string} title - The main heading of the card.
 * @property {string} [description] - Optional subtext/description below the title.
 * @property {string} [eyebrow] - Optional small, capitalized label above the title.
 * @property {"default" | "hero"} [variant] - Determines the visual hierarchy and padding/gap sizes.
 * @property {string} [className] - Additional custom Tailwind classes for the wrapper.
 * @property {ReactNode} [children] - Optional React elements to render at the bottom of the card.
 */
type CardProps = {
	title: string;
	description?: string;
	eyebrow?: string;
	variant?: "default" | "hero";
	className?: string;
	children?: ReactNode;
};

/**
 * Reusable Card Component
 * Features a brutalist/terminal aesthetic with hover glow effects, custom gradients,
 * and a flexible flexbox interior to push children to the bottom.
 */
export function Card({
	title,
	description,
	eyebrow,
	variant = "default",
	className,
	children,
}: CardProps) {
	const isHero = variant === "hero";

	return (
		<article
			className={joinClasses(
				"group relative overflow-hidden border-2 border-[#2cf3d1]/24 bg-[#07171a] p-5 shadow-[0_0_28px_rgba(44,243,209,0.14),10px_10px_0_rgba(44,243,209,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(44,243,209,0.24),10px_10px_0_rgba(44,243,209,0.12)] sm:p-6",
				className,
			)}
		>
			{/* Background radial glow effect that intensifies on hover */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,243,209,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(44,243,209,0.08),transparent_38%)] opacity-80 transition-opacity group-hover:opacity-100" />

			{/* Background linear gradient for added depth */}
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(44,243,209,0.08),transparent_35%)] opacity-75 transition-opacity group-hover:opacity-100" />

			{/* Main content wrapper */}
			<div
				className={joinClasses(
					"relative flex h-full flex-col",
					isHero ? "gap-5" : "gap-2",
				)}
			>
				{/* Eyebrow label (e.g., 'Featured Project') */}
				{eyebrow ? (
					<p
						className={joinClasses(
							"text-sm font-bold brutalist-label tracking-[0.3em] text-[#9bf4e7]",
							isHero ? "sm:text-sm" : "",
						)}
					>
						{eyebrow}
					</p>
				) : null}

				{/* Title and Description block */}
				<div className="space-y-2">
					<h3
						className={joinClasses(
							"font-bold font-mono tracking-tight text-white",
							isHero
								? "text-3xl sm:text-5xl"
								: "text-xl sm:text-2xl",
						)}
					>
						{title}
					</h3>
					{description ? (
						<p
							className={joinClasses(
								"max-w-prose text-white/70",
								isHero
									? "text-base leading-7 sm:text-lg"
									: "text-sm leading-6 sm:text-base",
							)}
						>
							{description}
						</p>
					) : null}
				</div>

				{children ? <div className="mt-auto">{children}</div> : null}
			</div>
		</article>
	);
}
