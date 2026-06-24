/**
 * Contact Section Component
 * Renders a responsive grid of social and communication links.
 */
export function Contact() {
	return (
		<div
			id="contact"
			className="scroll-mt-27 md:col-span-12 border-2 border-[#2cf3d1]/24 bg-[#07171a] p-6 shadow-[10px_10px_0_rgba(44,243,209,0.12)]"
		>
			<h4 className="font-mono text-2xl text-center font-bold mb-4">
				Let&#39;s build something together
			</h4>
			<p className="md:col-span-12 text-lg text-center">
				I&#39;m currently looking for new opportunities. Whether you
				have a question, a project idea, or just want to say hi, my
				inbox is always open.
			</p>
			<div className="mt-6 flex flex-wrap justify-center gap-4">
				{[
					{
						name: "Github",
						link: "https://www.github.com/ibrahimhozhun",
						icon: (
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
							</svg>
						),
					},
					{
						name: "Linkedin",
						link: "https://www.linkedin.com/in/ibrahim-halil-ozhun/",
						icon: (
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
							>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
							</svg>
						),
					},
					{
						name: "Kaggle",
						link: "https://www.kaggle.com/ibrahimhozhun",
						icon: (
							<svg
								className="h-6 w-6 stroke-current fill-none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M3 3v18"></path>
								<path d="M18 3l-15 9"></path>
								<path d="M18 21l-15-9"></path>
							</svg>
						),
					},
					{
						name: "Email",
						link: "mailto:ibrahimhalil.ozhun12@gmail.com",
						icon: (
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
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						),
					},
				].map((item) => (
					<a
						key={item.name}
						href={item.link}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 border-2 border-[#318a7b] bg-[#146456] px-5 py-2.5 text-sm font-semibold text-[#041014] shadow-[4px_4px_0_rgba(44,243,209,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[#04aa91]"
					>
						{item.icon}
						<span>{item.name}</span>
					</a>
				))}
			</div>
		</div>
	);
}
