import Image from 'next/image'
import backgroundImage from '@/assets/background-features.jpg'
import savingsImage from '@/assets/illustrations/savings.svg'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'

type Props = {}

const services = [
	{
		id: 1,
		title: 'Hosting Fees Included',
		description: 'Hosting fees are included in the monthly payment.',
	},
	{
		id: 2,
		title: 'Unlimited Edits',
		description: 'Change what you need as your business evolves.',
	},
	{
		id: 3,
		title: 'Customer Service',
		description:
			'Call diect anytime day or night, no phone trees or automated responses.',
	},
	{
		id: 4,
		title: 'Web Design & Development',
		description: 'Includes over 40 hours of design development and testing',
	},
	{
		id: 5,
		title: 'Analytics',
		description: 'Track your sites analytics and monitor traffic.',
	},
	{
		id: 6,
		title: 'SEO',
		description: 'Search Engine Optimization to help your site rank higher.',
	},
]

const MainService = (props: Props) => {
	return (
		<section className='hero bg-gradient-to-r from-cyan-500 to-blue-500 py-4'>
			<div className='hero-content bg-white/70 backdrop-blur-sm rounded-xl w-11/12 h-11/12 flex flex-col lg:flex-row'>
				<div className=''>
					<Image
						src={savingsImage}
						alt={'main service image'}
						className='w-[200px] md:w-[350px]'
					/>
				</div>
				<div className='md:w-1/2 md:ml-10 h-11/12 '>
					<h3 className='text-4xl font-extrabold mb-6'>
						<span className='text-accent'>$0</span> Down,{' '}
						<span className='text-accent'>$150</span> Per Month, 6 Month Minimum
						Contract
					</h3>
					<p className='my-3 text-lg'>
						$0 down for a standard 5 page small business website. If you need
						more than that then we have to do custom pricing based on the scope
						of work, number of additional pages, and time involved.
					</p>
					<p className='my-3 text-lg'>
						You own your domain, content, listing, and profiles. Cancel anytime
						with no fees or hassle!
					</p>
					{services.map((service) => {
						return (
							<div className='flex my-5' key={service.id}>
								<CheckBadgeIcon className='w-6 h-6 text-accent' />
								<p className='ml-2'>{service.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MainService
