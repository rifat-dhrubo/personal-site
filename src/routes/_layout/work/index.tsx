import { createFileRoute } from '@tanstack/react-router';
import { Briefcase, User } from 'lucide-react';
import React from 'react';

import { ExperienceItem } from '@/features/portfolio/experience-item';
import { Section } from '@/features/portfolio/section';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/_layout/work/')({ component: Work });

const experiences = [
	{
		title: 'Senior Frontend Developer',
		company: 'InfinitiBit Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Mar 2025 — Present',
		highlights: [
			'Lead front-end architectural design and technical direction on various projects as Lead Front-end Developer',
			'Spearheaded development for complex web based tool for some of the largest companies in the world.',
			'Built scalable backend using FastApi, postgresql, mongodb, redis and various other tools',
			'Establish build processes, automated testing, and asset management',
			'Mentor frontend developers, fostering technical excellence',
			'Collaborated in Agile sprints for rapid prototyping, iterative delivery, and team alignment',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Giga Tech Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Mar 2023 — Mar 2025',
		highlights: [
			'Built ML/AI web applications with React and Next.js as Lead Frontend Developer',
			'Implemented 8+ data extraction methods for NLP and machine learning',
			'Designed Bengali Search Engine interface with focus on performance',
			'Engineered dataset management tool similar to Hugging Face',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Workspace Infotech',
		location: 'Dhaka, Bangladesh',
		period: 'Sep 2021 — Feb 2023',
		highlights: [
			'Built 4+ web applications from ground up as Lead Frontend Developer',
			'Scaled applications to 1000s of users with 90%+ Lighthouse scores',
			'Spearheaded rewrites resulting in 40% decrease in load time',
			'Mentored 5+ colleagues on React and project onboarding',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Oiiu',
		location: 'Dhaka, Bangladesh',
		period: 'Jul 2020 — Aug 2021',
		highlights: [
			'Developed GraphQL and Next.js e-commerce platform scaled to 1000s of users',
			'Built internal tools leading to 20% increase in user engagement',
			'Led migration from monolithic GraphQL to Mesh GraphQL on BigCommerce',
		],
	},
];

// const projects = [
// 	{
// 		title: 'Corpus Hub',
// 		description:
// 			'Platform for managing interconnected data extraction including Crawler management, Dataset management, and Bengali Dictionary.',
// 		href: 'https://corpus.bangla.gov.bd/',
// 	},
// 	{
// 		title: 'Information Retrieval',
// 		description:
// 			'Bengali search platform with advanced information retrieval capabilities.',
// 		href: 'http://ir.bangla.gov.bd/',
// 	},
// 	{
// 		title: 'Label Hub',
// 		description:
// 			'Data extraction and analysis platform for NLP and Machine Learning projects.',
// 		href: 'http://label-hub.gigatechltd.com/',
// 	},
// 	{
// 		title: 'Merchaint',
// 		description:
// 			'Modern frontend with SSR, client-side caching, session management, and multi-level authorization.',
// 		href: 'https://www.merchaint.com/',
// 	},
// 	{
// 		title: 'Wearit',
// 		description:
// 			'Multi-vendor e-commerce platform with coupons, discounts, user points, and wholesale products.',
// 	},
// ];

function Work() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			<div
				className={cn(
					'transition-all duration-700 ease-out',
					mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
				)}
			>
				{/* About */}
				<Section icon={User} title="About">
					<div className="space-y-4 leading-relaxed text-muted-foreground">
						<p>
							Currently serving as Senior Frontend Developer at InfinitiBit GmbH
							in Munich, leading architectural design and technical direction
							for modern web applications. My expertise spans the full stack,
							with particular focus on React, Next.js, and scalable system
							design.
						</p>
						<p>
							I&apos;ve built and scaled applications serving thousands of
							users, specializing in performance optimization, accessibility,
							and seamless user experiences. My work includes Bengali NLP
							platforms, e-commerce solutions, and complex data management
							systems.
						</p>
					</div>
				</Section>

				<div className="border-t border-border/30" />

				{/* Experience */}
				<Section icon={Briefcase} title="Experience">
					<div className="space-y-10">
						{experiences.map((exp) => (
							<ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
						))}
					</div>
				</Section>

				<div className="border-t border-border/30" />

				{/* Projects */}
				{/* <Section icon={Code2} title="Projects">
					<div className="space-y-6">
						{projects.map((project) => (
							<ProjectItem key={project.title} {...project} />
						))}
					</div>
				</Section> */}
			</div>
		</>
	);
}
