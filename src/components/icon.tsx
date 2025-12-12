import type React from 'react';

import type { IconName } from '@/generated/icons';

// Import the hashed icon sprite - this will work in both dev and production
// The Vite plugin ensures the hashed version is always available
const spriteHref = (() => {
	try {
		// Try to import with the current hash pattern first
		const hashedIcons = import.meta.glob('/icons/icon.*.svg', {
			eager: true,
			query: '?url',
			import: 'default',
		});
		const iconEntries = Object.entries(hashedIcons);
		if (iconEntries.length > 0 && iconEntries[0]) {
			return iconEntries[0][1] as string;
		}
	} catch (error) {
		console.warn(
			'Failed to load hashed icon sprite, falling back to static version:',
			error,
		);
	}

	// Fallback to static version
	return '/icons/icon.svg';
})();

export function Icon({
	name,
	...props
}: React.SVGProps<SVGSVGElement> & {
	name: IconName;
}) {
	return (
		<svg {...props} aria-hidden="true">
			<use href={`${spriteHref}#${name}`} />
		</svg>
	);
}
