import * as universal from '../entries/pages/stock/_page.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/stock/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/stock/+page.js";
export const imports = ["_app/immutable/nodes/6.2b976e78.js","_app/immutable/chunks/index.88078d7b.js","_app/immutable/chunks/index.771ab63d.js"];
export const stylesheets = ["_app/immutable/assets/6.265a38f0.css"];
export const fonts = [];
