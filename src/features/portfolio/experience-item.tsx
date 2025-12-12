interface ExperienceItemProps {
	title: string;
	company: string;
	location: string;
	period: string;
	highlights: Array<string>;
}

export function ExperienceItem({
	company,
	highlights,
	location,
	period,
	title,
}: ExperienceItemProps) {
	return (
		<article className="group">
			<div className="space-y-3">
				<header className="space-y-1">
					<h3 className="text-lg font-medium text-foreground">{title}</h3>
					<p className="text-sm text-muted-foreground">
						{company} <span className="text-border">—</span> {location}
					</p>
					<p className="font-mono text-xs text-muted-foreground/60">{period}</p>
				</header>
				<ul className="space-y-1.5 text-sm text-muted-foreground">
					{highlights.map((highlight, index) => (
						<li
							key={index}
							className="relative pl-4 leading-relaxed before:absolute before:top-2.5 before:left-0 before:h-1 before:w-1 before:rounded-full before:bg-border before:content-['']"
						>
							{highlight}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
