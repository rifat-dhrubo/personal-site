import { getYear } from '@/lib/date';

export const Footer = () => {
	return (
		<footer className="right-0 bottom-0 left-0 max-h-(--footer-height) border-t border-border/50 bg-background/60 py-4 backdrop-blur-2xl">
			<div className="mx-auto max-w-5xl px-6">
				<p className="text-center text-xs text-muted-foreground/50">
					&copy;{getYear()} Rifat Hossain
				</p>
			</div>
		</footer>
	);
};
