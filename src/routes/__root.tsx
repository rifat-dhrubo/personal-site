// import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';

import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { ThemeProvider } from '../components/theme-provider';
import { queryDevtools as TanStackQueryDevtools } from '../integrations/tanstack-query/devtools';
import appCss from '../styles.css?url';

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Rifat Hossain | Full-stack Software Engineer',
			},
			{
				name: 'description',
				content:
					'Full-stack software engineer specializing in accessible web experiences, scaling systems, and shipping reliable applications with React, Next.js, and Node.js.',
			},
			{
				property: 'og:type',
				content: 'website',
			},
			{
				property: 'og:title',
				content: 'Rifat Hossain | Full-stack Software Engineer',
			},
			{
				property: 'og:description',
				content:
					'Full-stack software engineer specializing in accessible web experiences, scaling systems, and shipping reliable applications.',
			},
			{
				property: 'og:image',
				content: '/rifat-card.png',
			},
			{
				property: 'og:image:alt',
				content: 'Rifat Hossain - Full-stack Software Engineer',
			},
			{
				property: 'og:url',
				content: 'https://rifathossain.com',
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image',
			},
			{
				name: 'twitter:title',
				content: 'Rifat Hossain | Full-stack Software Engineer',
			},
			{
				name: 'twitter:description',
				content:
					'Full-stack software engineer specializing in accessible web experiences, scaling systems, and shipping reliable applications.',
			},
			{
				name: 'twitter:image',
				content: '/rifat-card.png',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
			{
				rel: 'icon',
				href: '/favicon.ico',
			},
			{
				rel: 'apple-touch-icon',
				href: '/apple-touch-icon.png',
				sizes: '180x180',
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider>
					{children}
					<TanStackDevtools
						config={{
							position: 'bottom-right',
						}}
						plugins={[
							{
								name: 'Tanstack Router',
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
