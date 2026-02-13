import { createFileRoute } from '@tanstack/react-router';
import { Briefcase, Code2, User } from 'lucide-react';
import React from 'react';

import { ExperienceItem } from '@/features/portfolio/experience-item';
import { ProjectItem } from '@/features/portfolio/project-item';
import { Section } from '@/features/portfolio/section';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/_layout/work/')({ component: Work });

const experiences = [
	{
		title: 'Senior Frontend Developer',
		company: 'InfinitiBit',
		location: 'Dhaka, Bangladesh',
		period: 'Mar 2025 — Present',
		highlights: [
			'Lead Frontend Developer for the Graphbit Cloud Platform; architected and developed the core React frontend for a robust SaaS platform',
			'Spearheaded development of complex web-based applications for global enterprises, focusing on front-end architectural design',
			'Built scalable backends using FastAPI, PostgreSQL, MongoDB, and Redis to support data-heavy applications',
			'Established build processes, automated testing, and asset management to ensure high code reliability',
			'Mentored and guided frontend developers, fostering a culture of technical excellence and collaboration',
			'Collaborated in Agile sprints for rapid prototyping, iterative delivery, and team alignment',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Giga Tech Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Mar 2023 — Mar 2025',
		highlights: [
			'Built AI-focused web applications from the ground up using React and Next.js, targeting Machine Learning and NLP workflows',
			'Implemented 8+ Data Extraction methods for NLP and machine learning datasets',
			'Designed and implemented a Bengali Search Engine interface, optimizing performance for high-precision information retrieval',
			'Built web application to manage and monitor various web crawlers for collection of Bengali Data',
			'Engineered a comprehensive dataset management tool and managed multiple microservices for performance and scalability',
		],
	},
	{
		title: 'Software Engineer',
		company: 'Workspace Infotech Limited',
		location: 'Dhaka, Bangladesh',
		period: 'Sep 2021 — Feb 2023',
		highlights: [
			'Built 4+ web applications with React and Next.js from the ground up as Lead Frontend Developer',
			'Achieved Lighthouse scores >90% for high-traffic applications through collaboration with UI/UX and API teams',
			'Spearheaded architectural rewrites resulting in a 40% decrease in load time and enhanced accessibility',
			'Mentored 3+ colleagues on React best practices and assisted in project onboarding',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Oiiu',
		location: 'Dhaka, Bangladesh',
		period: 'Jul 2020 — Aug 2021',
		highlights: [
			'Developed and maintained a high-traffic GraphQL and Next.js e-commerce platform scaling to thousands of users',
			'Migrated a monolithic backend to a Mesh GraphQL Server built on top of BigCommerce',
			'Engineered internal analytics tools that led to a 20% increase in user engagement',
		],
	},
];

const projects = [
	{
		title: 'Graphbit Cloud Platform',
		description:
			'AI/SaaS platform streamlining AI agent lifecycles. Architected the core React frontend and established build processes and automated testing for global enterprise tools.',
		href: 'https://platform.graphbit.ai/',
	},
	{
		title: 'SEPAS',
		description:
			'Energy Tech platform with complex geospatial network builders and topological graph visualizations for power grid modeling and renewable energy optimization.',
	},
	{
		title: 'Corpus Hub',
		description:
			'AI & ML platform for managing interconnected data extraction methods including Crawlers, Datasets, and Bengali Dictionary. Implemented 8+ distinct data extraction workflows.',
		href: 'https://corpus.bangla.gov.bd/',
	},
	{
		title: 'Label Hub',
		description:
			'NLP and Machine Learning data extraction and analysis platform, focusing on high-precision data labeling and iterative ML pipelines.',
		href: 'http://label-hub.gigatechltd.com/',
	},
	{
		title: 'Information Retrieval',
		description:
			'Bengali search engine platform with high-performance searching capabilities, optimized for seamless integration within broader data ecosystems.',
		href: 'http://ir.bangla.gov.bd/',
	},
	{
		title: 'Merchaint',
		description:
			'E-commerce platform scaled to thousands of users using React and Next.js. Implemented SSR, client-side caching, and multi-level authorization.',
		href: 'https://www.merchaint.com/',
	},
	{
		title: 'Wearit',
		description:
			'Multi-vendor e-commerce platform featuring loyalty points and bulk management. Migrated backend to Mesh GraphQL architecture for high-volume traffic.',
	},
];

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
				<Section icon={Code2} title="Projects">
					<div className="space-y-8">
						{projects.map((project) => (
							<ProjectItem key={project.title} {...project} />
						))}
					</div>
				</Section>
			</div>
		</>
	);
}
