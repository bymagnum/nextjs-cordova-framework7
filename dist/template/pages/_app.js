import Framework7 from 'framework7/bundle';
import Framework7React, { App, View } from 'framework7-react';
Framework7.use(Framework7React);
import '../node_modules/framework7/framework7-bundle.min.css';
import PanelLeft from '/components/PanelLeft.js';
import { useRouter } from 'next/router';
import Head from 'next/head';


import aboutPage from '../pages/about.js';
import indexPage from '../pages/index.js';
import pPage from '../pages/abc/p.js';
import asrPage from '../pages/dr/s/asr.js';


const routes = [{
    path: '/about.html',
    component: aboutPage,
}, {
    path: '/dr/s/asr.html',
    component: asrPage,
}, {
    path: '/abc/p.html',
    component: pPage,
}, {
    path: '/',
    component: indexPage,
}];


function CordovaApp({ Component, pageProps }) {

    const router = useRouter();
    
    return <>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />
            <meta name="format-detection" content="telephone=no" />
            <script src="cordova.js"></script>
        </Head>
        <App theme="ios" url={(process.env.NEXT_PUBLIC_HOST + router.asPath)} routes={routes}>
            <PanelLeft />
            <View url="/" className="view-main view-init">
                <Component initialPage {...pageProps} />
            </View>
        </App>
    </>;
}

export default CordovaApp;