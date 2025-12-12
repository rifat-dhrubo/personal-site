import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface SocialLinkProps {
	href: string;
	icon: LucideIcon;
	label: string;
	external?: boolean;
}

export function SocialLink({
	external = false,
	href,
	icon: Icon,
	label,
}: SocialLinkProps) {
	return (
		<a
			className="group inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-accent/50 hover:text-foreground"
			href={href}
			rel={external ? 'noopener noreferrer' : undefined}
			target={external ? '_blank' : undefined}
		>
			<Icon className="h-4 w-4" />
			<span>{label}</span>
			<ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
		</a>
	);
}
