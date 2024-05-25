import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Formlar | Yazılım Topluluğu",
	description: "İYTE Yazılım Topluluğu Form Uygulaması",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Nav />
        			<div className="flex-grow">{children}</div>
				<Footer />
			</body>
		</html>
	);
}