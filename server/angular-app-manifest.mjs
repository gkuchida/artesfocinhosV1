
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/artesfocinhos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/artesfocinhos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 34741, hash: '6edc88e8ce5b3158c72d46d2a3a76637a25c1476e442c1d6744dd6dccabd68b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22748, hash: '9361916202e36a40e4e222780a839defeef66c919dcacd520e352805895c81c2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53586, hash: '9f86eb5b416c6e059414d94f5c667c63d91452ea29a86d52ce4db37ede7d5335', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KOJOEABB.css': {size: 239156, hash: 'TYPNsJIYpHY', text: () => import('./assets-chunks/styles-KOJOEABB_css.mjs').then(m => m.default)}
  },
};
