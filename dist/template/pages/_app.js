import Framework7 from 'framework7/bundle';
import Framework7React, { App, View } from 'framework7-react';
Framework7.use(Framework7React);
import '../node_modules/framework7/framework7-bundle.min.css';
import PanelLeft from '../components/PanelLeft.js';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Routes from '../components/Routes.js';


function CordovaApp({ Component, pageProps }) {

    const router = useRouter();

    return <>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />
            <meta name="format-detection" content="telephone=no" />
            <script src="cordova.js"></script>
        </Head>
        <App 
            theme="ios" 
            url={(process.env.NEXT_PUBLIC_HOST + router.asPath)} 
            routes={Routes}
        >
            <PanelLeft />
            <View url="/" className="view-main view-init">
                <Component initialPage {...pageProps} />
            </View>
        </App>
    </>;
}

export default CordovaApp;