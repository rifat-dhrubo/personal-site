import { ClientOnly, Link, useLocation } from '@tanstack/react-router';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navigation() {
	const { resolvedTheme, setTheme } = useTheme();
	const pathname = useLocation({
		select: (location) => location.pathname,
	});

	return (
		<nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl">
			<div className="mx-auto max-w-5xl px-6">
				<div className="flex h-14 items-center justify-between">
					<Link
						className="text-base font-medium tracking-tight text-foreground/80 transition-colors duration-200 hover:text-foreground"
						to="/"
					>
						&lt;rh/&gt;
					</Link>
					<div className="flex items-center gap-8">
						<Link
							to="/work"
							className={`text-sm transition-colors duration-200 ${
								pathname === '/work'
									? 'font-medium text-foreground'
									: 'text-muted-foreground hover:text-foreground'
							}`}
						>
							work
						</Link>
						<ClientOnly fallback={<div className="size-4"></div>}>
							<button
								aria-label="Toggle theme"
								className="-m-2 p-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
								onClick={() =>
									setTheme((currentTheme) =>
										currentTheme === 'dark' ? 'light' : 'dark',
									)
								}
							>
								{resolvedTheme === 'dark' ? (
									<Sun className="h-4 w-4" />
								) : (
									<Moon className="h-4 w-4" />
								)}
							</button>
						</ClientOnly>
					</div>
				</div>
			</div>
		</nav>
	);
}
