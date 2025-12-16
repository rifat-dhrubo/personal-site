import type { LucideIcon } from 'lucide-react';
import type React from 'react';

interface SectionProps {
	icon?: LucideIcon;
	title: string;
	children: React.ReactNode;
}

export function Section({ children, icon: Icon, title }: SectionProps) {
	return (
		<section className="py-16 md:py-20">
			<div className="mx-auto max-w-5xl px-6">
				<div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-16">
					<div className="md:sticky md:top-24 md:self-start">
						<h2 className="flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
							{Icon ? <Icon className="h-3.5 w-3.5" /> : null}
							{title}
						</h2>
					</div>
					<div>{children}</div>
				</div>
			</div>
		</section>
	);
}
