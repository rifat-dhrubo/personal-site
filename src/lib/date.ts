import { createIsomorphicFn } from '@tanstack/react-start';

export const getYear = createIsomorphicFn()
	.server(() => new Date().getFullYear())
	.client(() => new Date().getFullYear());
