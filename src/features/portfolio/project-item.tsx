import { ArrowUpRight } from 'lucide-react';

interface ProjectItemProps {
	title: string;
	description: string;
	href?: string;
}

export function ProjectItem({ description, href, title }: ProjectItemProps) {
	const Content = (
		<>
			<h3 className="inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors duration-200 group-hover:text-muted-foreground">
				{title}
				{href ? (
					<ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
				) : null}
			</h3>
			<p className="mt-1 text-sm leading-relaxed text-muted-foreground">
				{description}
			</p>
		</>
	);

	if (href) {
		return (
			<a
				className="group block"
				href={href}
				rel="noopener noreferrer"
				target="_blank"
			>
				{Content}
			</a>
		);
	}

	return <div className="group">{Content}</div>;
}
