import { Outlet, createFileRoute } from '@tanstack/react-router';

import { Footer } from '@/components/footer';
import { Navigation } from '@/features/portfolio/navigation';

export const Route = createFileRoute('/_layout')({
	component: RouteComponent,
});

const FOOTER_HEIGHT = 56;
const NAV_HEIGHT = 56;

function RouteComponent() {
	return (
		<div
			className="min-h-screen bg-background text-foreground"
			style={
				{
					'--nav-height': `${NAV_HEIGHT}px`,
					'--footer-height': `${FOOTER_HEIGHT}px`,
				} as React.CSSProperties
			}
		>
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
}
