"use client";

import { useEffect, useRef, useState } from "react";
import { joinClasses } from "../utils/join-classes";

type NavbarProps = {
	brand: string;
	labels: string[];
	ctaLabel: string;
};

/**
 * Responsive Navigation Bar Component
 * Handles desktop inline links and a mobile dropdown menu with smooth mounting/unmounting animations.
 */
export function Navbar({ brand, labels, ctaLabel }: NavbarProps) {
	// State to control the visual open/close animation of the mobile menu
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// State to control the actual DOM mounting/unmounting of the mobile menu
	const [isMenuMounted, setIsMenuMounted] = useState(false);

	// Refs to store animation frame and timeout IDs for cleanup
	const openFrameRef = useRef<number | null>(null);
	const closeTimerRef = useRef<number | null>(null);

	/**
	 * Handles the mounting and staggered open animation of the mobile menu.
	 */
	const openMenu = () => {
		if (closeTimerRef.current !== null) {
			window.clearTimeout(closeTimerRef.current);
			closeTimerRef.current = null;
		}

		if (openFrameRef.current !== null) {
			window.cancelAnimationFrame(openFrameRef.current);
			openFrameRef.current = null;
		}

		setIsMenuMounted(true);
		setIsMenuOpen(false);

		// Wait for the next paint to apply the open state class (triggering the CSS transition)
		openFrameRef.current = window.requestAnimationFrame(() => {
			setIsMenuOpen(true);
		});
	};

	/**
	 * Handles the close animation and subsequent unmounting of the mobile menu.
	 */
	const closeMenu = () => {
		setIsMenuOpen(false);

		if (closeTimerRef.current !== null) {
			window.clearTimeout(closeTimerRef.current);
		}

		// Wait for the CSS transition to finish before unmounting from DOM
		closeTimerRef.current = window.setTimeout(() => {
			setIsMenuMounted(false);
		}, 180);
	};

	/**
	 * Toggles the mobile menu state.
	 */
	const toggleMenu = () => {
		if (isMenuOpen) {
			closeMenu();
			return;
		}

		openMenu();
	};

	// Cleanup timeouts and animation frames on component unmount
	useEffect(() => {
		return () => {
			if (openFrameRef.current !== null) {
				window.cancelAnimationFrame(openFrameRef.current);
				openFrameRef.current = null;
			}
			if (closeTimerRef.current !== null) {
				window.clearTimeout(closeTimerRef.current);
				closeTimerRef.current = null;
			}
		};
	}, []);

	return (
		<header className="sticky top-0 z-50">
			<div className="relative mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
				<div className="flex w-full items-center justify-between gap-3 border-2 border-[#2cf3d1]/24 bg-[#07171a]/95 px-4 py-4 shadow-[10px_10px_0_rgba(44,243,209,0.12)] sm:px-6 min-[960px]:grid min-[960px]:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
					<a
						href="#home"
						className="flex items-center gap-3 justify-self-start"
					>
						<span className="grid h-11 w-11 place-items-center border-2 border-[#2cf3d1]/40 bg-[#061316] text-sm font-black text-[#2cf3d1] shadow-[4px_4px_0_rgba(44,243,209,0.14)]">
							&gt;
						</span>
						<span className="text-lg font-semibold tracking-[0.16em] text-white">
							{brand}
						</span>
					</a>

					<nav className="hidden items-center justify-center gap-2 justify-self-center min-[960px]:flex">
						{labels.map((label) => (
							<a
								key={label}
								href={"#" + label.toLowerCase()}
								className="border border-transparent px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[#2cf3d1]/30 hover:bg-[#0b2024] hover:text-[#eafffd]"
							>
								{label}
							</a>
						))}
					</nav>

					<div className="hidden shrink-0 flex-row items-center justify-end gap-3 justify-self-end min-[960px]:flex">
						<a
							href="#todo:add-resume-link"
							className="inline-flex w-full items-center justify-center whitespace-nowrap border-2 border-[#318a7b] bg-[#146456] px-5 py-2.5 text-sm font-semibold text-[#041014] shadow-[4px_4px_0_rgba(44,243,209,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[#04aa91] sm:w-auto"
						>
							{ctaLabel}
						</a>
					</div>

					<button
						type="button"
						onClick={toggleMenu}
						aria-label="Open navigation menu"
						aria-expanded={isMenuOpen}
						className="inline-flex h-12 w-12 items-center justify-center border-2 border-[#2cf3d1]/24 bg-[#10343a] text-[#eafffd] shadow-[4px_4px_0_rgba(44,243,209,0.2)] transition-transform hover:-translate-y-0.5 justify-self-end min-[960px]:hidden"
					>
						<span className="sr-only">Open navigation menu</span>
						<span className="flex flex-col gap-1.5">
							<span className="h-0.5 w-5 bg-current transition-transform duration-200" />
							<span className="h-0.5 w-5 bg-current transition-transform duration-200" />
							<span className="h-0.5 w-5 bg-current transition-transform duration-200" />
						</span>
					</button>
				</div>

				{isMenuMounted ? (
					<div className="absolute right-0 top-full z-50 mt-3 w-[min(75vw,14rem)] min-w-56 max-w-72 min-[960px]:hidden">
						<div
							className={joinClasses(
								"border-2 border-[#2cf3d1]/24 bg-[#07171a] p-4 shadow-[10px_10px_0_rgba(44,243,209,0.12)] transition-all duration-350 ease-out",
								isMenuOpen
									? "translate-y-0 scale-100 opacity-100"
									: "pointer-events-none -translate-y-4 scale-[0.96] opacity-0",
							)}
						>
							<div className="flex flex-col items-center gap-2">
								{labels.map((label) => (
									<a
										key={label}
										href={"#" + label.toLowerCase()}
										onClick={closeMenu}
										className="border border-transparent px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-[#2cf3d1]/30 hover:bg-[#0b2024] hover:text-[#eafffd]"
									>
										{label}
									</a>
								))}
							</div>

							<div className="mt-4 flex flex-col gap-3">
								<a
									href="#todo:add-resume-link"
									onClick={closeMenu}
									className="inline-flex w-full items-center justify-center whitespace-nowrap border-2 border-[#318a7b] bg-[#146456] px-4 py-3 text-sm font-semibold text-[#041014] shadow-[4px_4px_0_rgba(44,243,209,0.2)] hover:bg-[#04aa91]"
								>
									{ctaLabel}
								</a>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</header>
	);
}
