import type {AppProps} from 'next/app'
import Head from "next/head";
import './global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NextNprogress from 'nextjs-progressbar';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,500,700,800,900&display=swap"
                      rel="stylesheet"/>
            </Head>
            <NextNprogress color={"#00d79a"} options={{showSpinner: false}} stopDelayMs={200}
                           height={3}/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp
