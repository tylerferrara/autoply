import * as universal from '../entries/pages/about/_page.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/4.dbad1bc4.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/index.88078d7b.js"];
export const stylesheets = [];
export const fonts = [];
