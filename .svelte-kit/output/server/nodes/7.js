import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 7;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/7.5f261d30.js","_app/immutable/chunks/index.88078d7b.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.1ae89bdb.js","_app/immutable/chunks/index.771ab63d.js"];
export const stylesheets = ["_app/immutable/assets/7.9d501049.css"];
export const fonts = [];
