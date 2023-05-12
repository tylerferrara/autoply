export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.11dce558.js","app":"_app/immutable/entry/app.e3dfaf86.js","imports":["_app/immutable/entry/start.11dce558.js","_app/immutable/chunks/index.88078d7b.js","_app/immutable/chunks/singletons.1ae89bdb.js","_app/immutable/chunks/index.771ab63d.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/entry/app.e3dfaf86.js","_app/immutable/chunks/index.88078d7b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/begin",
				pattern: /^\/begin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
