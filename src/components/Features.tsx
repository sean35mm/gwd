import React from 'react'
import mobileImage from '../assets/illustrations/confirmed.svg'
import responsiveImage from '../assets/illustrations/real-time-sync.svg'
import seoImage from '../assets/illustrations/data-trends.svg'
import Image from 'next/image'

type CardTypeProps = {
	id: number
	title: string
	description: string
	image: string
}

const features = [
	{
		id: 1,
		title: 'Mobile First Design',
		description:
			'We start building your site for mobile devices first, then we scale up to desktop. This ensures that your site is fast and responsive on all devices.',
		image: mobileImage,
	},
	{
		id: 2,
		title: 'Fully Responsive',
		description:
			'Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.',
		image: responsiveImage,
	},
	{
		id: 3,
		title: 'SEO Ready',
		description:
			'We build your site with SEO in mind so you can rank higher on Google and other search engines.',
		image: seoImage,
	},
]

const Card = ({ id, title, description, image }: CardTypeProps) => {
	return (
		<div className='card md:w-96 bg-white shadow-xl mx-4 my-4' key={id}>
			<figure>
				<Image
					src={image}
					alt={'feature images'}
					width={300}
					height={300}
					className='m-4 max-h-48'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	)
}

export const Features = () => {
	return (
		<section className='mx-10 my-24 flex flex-col items-center'>
			<div className='text-center max-w-4xl'>
				<h1 className='text-5xl font-bold'>
					<span className='text-accent'>WHAT</span> WE DO
				</h1>
				<div className='divider'></div>
				<p>
					We specialize in small business web design and development for clients
					anywhere in the US. Every line of code is written by hand to ensure
					the best performance, which helps bring in more customers to your site
					and bring more revenue to your business.
				</p>
			</div>

			<div className='flex flex-col lg:flex-row flex-wrap mt-24 justify-center'>
				{features.map((feature) => {
					return (
						<Card
							key={feature.id}
							id={feature.id}
							title={feature.title}
							description={feature.description}
							image={feature.image}
						/>
					)
				})}
			</div>
		</section>
	)
}
