import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
	title: 'Georgetown Web Design',
	description:
		'Georgetown Web Design is a web and design agency built for small businesses and nonprofits.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
			<body>{children}</body>
		</html>
	)
}
