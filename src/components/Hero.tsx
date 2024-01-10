import React from 'react'
import Image from 'next/image'
import backgroundImage from '@/assets/mockups3.png'

type Props = {}

export const Hero = (props: Props) => {
	return (
		<section className='hero min-h-screen'>
			<div className='absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#067fbb_100%)]'></div>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='m-2'>
					<h1 className='text-4xl md:text-6xl font-extrabold'>
						Small Business
						<span className='text-accent'> Web Design </span> & Development
					</h1>
					<h4 className='pt-4 text-xl max-w-lg'>
						No page builders or WordPress - We offer 100% hand-coded websites
						with superior results starting at $150/mo.
					</h4>
				</div>
				<div className='mask mask-decagon mt-10 max-w-lg'>
					<Image
						src={backgroundImage}
						alt={'bg'}
						className='object-scale-down'
					/>
				</div>
			</div>
		</section>
	)
}
