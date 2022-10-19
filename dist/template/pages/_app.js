import Framework7 from 'framework7/bundle';
import Framework7React, { f7ready, App, View } from 'framework7-react';
Framework7.use(Framework7React);
import '../node_modules/framework7/framework7-bundle.min.css';
import '../public/static/css/main.css';
import PanelLeft from '../components/PanelLeft.js';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Routes from '../components/Routes';
import { useEffect, useState } from 'react';

function CordovaApp({ Component, pageProps }) {

    const router = useRouter();
    const [app, setApp] = useState(null);

    useEffect(() => {
        f7ready((f7) => {
            setApp(f7);
        });
    }, []);

    return <>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover" />
            <meta name="format-detection" content="telephone=no" />
		    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            {(() => {
                if (app) {
                    if (
                        app.device.android == true ||
                        app.device.ios == true
                    ) {
                        return <>
                            <script src="cordova.js"></script>
                        </>;
                    }
                }
            })()}
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