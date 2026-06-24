import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
	display: "swap",
});

export const metadata: Metadata = {
	title: "İbrahim Halil Özhun | Portfolio",
	description:
		"Statistics undergraduate combining theoretical data analysis with modern software development. Exploring machine learning, web scraping, and full-stack projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			// Applying font CSS variables globally and enabling antialiasing for smoother font rendering
			className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
		>
			{/* Setting the global dark theme background, text color, and ensuring the body takes up minimum full screen height */}
			<body className="min-h-full flex flex-col bg-[#050816] text-white">
				{children}
			</body>
		</html>
	);
}
