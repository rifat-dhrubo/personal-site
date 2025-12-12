/// <reference types="vitest/config" />
/// <reference types="vite-plugin-svgr/client" />

import crypto from 'node:crypto';
import fs from 'node:fs';
import { resolve } from 'node:path';

import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
import svgr from 'vite-plugin-svgr';
import viteTsConfigPaths from 'vite-tsconfig-paths';

function snakeCase(str: string) {
	const wordSeparators =
		// eslint-disable-next-line no-useless-escape
		/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/;
	const capitals = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g;
	str = str.replace(capitals, function (match) {
		return ' ' + (match.toLowerCase() || match);
	});
	return str.trim().split(wordSeparators).join('_');
}

/**
 * Computes an MD5 hash of all SVGs in src/assets/svg.
 * Caches the last computed hash in .cache/icons-hash.json
 * to avoid unnecessary recomputation between builds.
 */
function getCachedIconsHash(): string {
	const svgDir = 'src/assets/svg';
	const cacheFile = '.cache/icons-hash.json';

	if (!fs.existsSync(svgDir)) return '00000000';

	// Ensure cache directory exists
	fs.mkdirSync('.cache', { recursive: true });

	const files = fs.readdirSync(svgDir).filter((f) => f.endsWith('.svg'));
	const hash = crypto.createHash('md5');

	for (const file of files) {
		try {
			const content = fs.readFileSync(`${svgDir}/${file}`);
			hash.update(content);
		} catch (err) {
			console.warn(`⚠️ Skipped unreadable SVG: ${file}`);
			console.error(err);
		}
	}

	const newHash = hash.digest('hex').slice(0, 8);

	// Compare to cached hash
	if (fs.existsSync(cacheFile)) {
		try {
			const cached = JSON.parse(fs.readFileSync(cacheFile, 'utf-8')) as {
				hash?: string;
			};
			if (cached.hash === newHash) return cached.hash;
		} catch {
			// ignore malformed cache
		}
	}

	fs.writeFileSync(cacheFile, JSON.stringify({ hash: newHash }, null, 2));
	return newHash;
}

const iconsHash = getCachedIconsHash();
const hashedIconFileName = `icon.${iconsHash}.svg`;

/**
 * Ensures both static and hashed versions of the icon sprite exist
 */
function copyHashedIconsPlugin(hashedFile: string): Plugin {
	return {
		name: 'copy-hashed-icons',
		buildStart() {
			const iconsDir = 'public/icons';
			const staticIconPath = `${iconsDir}/icon.svg`;
			const hashedIconPath = `${iconsDir}/${hashedFile}`;

			if (fs.existsSync(staticIconPath)) {
				fs.mkdirSync(iconsDir, { recursive: true });
				fs.copyFileSync(staticIconPath, hashedIconPath);
			}
		},
	};
}

/**
 * Rewrites /icons/icon.svg → /icons/icon.<hash>.svg in dist
 */
function replaceIconReferencesPlugin(hashedFile: string): Plugin {
	return {
		name: 'replace-icon-references',
		apply: 'build',
		closeBundle() {
			const distDir = resolve('dist');
			const replaceInFiles = (dir: string) => {
				for (const file of fs.readdirSync(dir)) {
					const filePath = resolve(dir, file);
					if (fs.statSync(filePath).isDirectory()) {
						replaceInFiles(filePath);
					} else if (/\.(html|js|css)$/.test(filePath)) {
						const content = fs.readFileSync(filePath, 'utf-8');
						const updated = content.replace(
							/\/icons\/icon\.svg/g,
							`/icons/${hashedFile}`,
						);
						if (updated !== content) {
							fs.writeFileSync(filePath, updated);
						}
					}
				}
			};
			replaceInFiles(distDir);
			console.log(`✅ Updated icon references to ${hashedFile}`);
		},
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		devtools(),
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		viteTsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tanstackStart(),
		svgr(),
		viteReact({
			babel: {
				plugins: ['babel-plugin-react-compiler'],
			},
		}),

		tailwindcss(),
		iconsSpritesheet({
			withTypes: true,
			inputDir: 'src/assets/svg',
			outputDir: 'public/icons',
			typesOutputFile: 'src/generated/icons.ts',
			fileName: 'icon.svg',
			cwd: process.cwd(),
			iconNameTransformer(iconName: string) {
				return snakeCase(iconName);
			},
			formatter: 'prettier',
		}),
		copyHashedIconsPlugin(hashedIconFileName),
		replaceIconReferencesPlugin(hashedIconFileName),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
});
