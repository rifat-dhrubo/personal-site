import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentProps } from 'react';

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			disableTransitionOnChange
			enableSystem
			attribute="class"
			defaultTheme="system"
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
