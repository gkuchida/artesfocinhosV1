
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 34727, hash: '36d3c68f71bcd1d11f52ff42bac6150da823e52d6d0a03666fb3a94c55d2502e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22734, hash: 'e13550330a34059462aa44fca20a025c9db119a8a47c9fd15792df7987b9cdaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 54695, hash: '955eced79237bbfe05fa2f49b574c7d97917923b49780e9cb9f30b487d87e89e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KOJOEABB.css': {size: 239156, hash: 'TYPNsJIYpHY', text: () => import('./assets-chunks/styles-KOJOEABB_css.mjs').then(m => m.default)}
  },
};
