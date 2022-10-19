import indexPage from '../pages/index.js';
import aboutPage from '../pages/test/about.js';
import pPage from '../pages/test/abc/p.js';
import asrPage from '../pages/test/dr/s/asr.js';


const routes = [{
    path: '/test/about.html',
    component: aboutPage,
}, {
    path: '/test/dr/s/asr.html',
    component: asrPage,
}, {
    path: '/test/abc/p.html',
    component: pPage,
}, {
    path: '/',
    component: indexPage,
}];


export default routes;

