import { createFileRoute } from '@tanstack/react-router';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

import { Navigation } from '@/features/portfolio/navigation';
import { SocialLink } from '@/features/portfolio/social-link';
import { cn } from '@/lib/utils';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />

			<main className="flex min-h-screen items-center justify-center px-6">
				<div className="w-full max-w-2xl">
					<div
						className={cn(
							'space-y-10 transition-all duration-700 ease-out',
							mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
						)}
					>
						{/* Header */}
						<header className="space-y-4">
							<h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
								Rifat Hossain
							</h1>
							<p className="text-lg font-light text-muted-foreground md:text-xl">
								Full-stack Software Engineer
							</p>
							<p className="text-sm text-muted-foreground/60">
								Dhaka, Bangladesh
							</p>
						</header>

						{/* Divider */}
						<div className="h-px w-11/12 bg-linear-to-r from-border via-border/50 to-transparent" />

						{/* Bio */}
						<p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
							Building accessible web experiences, scaling systems, and shipping
							reliable applications.
						</p>

						{/* Links */}
						<div className="flex flex-wrap gap-3">
							<SocialLink
								href="mailto:rifat.hossain.dhrubo@gmail.com"
								icon={Mail}
								label="Email"
							/>
							<SocialLink
								external
								href="https://linkedin.com/in/rifat-hossain-dhrubo"
								icon={Linkedin}
								label="LinkedIn"
							/>
							<SocialLink
								external
								href="https://github.com/rifat-dhrubo"
								icon={Github}
								label="GitHub"
							/>
							<SocialLink
								external
								href="/resume.pdf"
								icon={FileText}
								label="Resume"
							/>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="fixed right-0 bottom-0 left-0 border-t border-border/50 bg-background/60 py-4 backdrop-blur-2xl">
				<div className="mx-auto max-w-5xl px-6">
					<p className="text-center text-xs text-muted-foreground/50">
						&copy; 2025 Rifat Hossain
					</p>
				</div>
			</footer>
		</div>
	);
}
