import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import MainService from '@/components/MainService'
import { Pricing } from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center'>
			<Header />
			<Hero />
			<Features />
			<MainService />
			<Pricing />
			<Footer />
		</main>
	)
}
