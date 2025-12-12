/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles.css',
	tailwindFunctions: ['cva', 'cn', 'clxs'],
	singleQuote: true,
	endOfLine: 'lf',
	useTabs: true,
	semi: true,
	trailingComma: 'all',
};

export default config;
