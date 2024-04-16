import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../theme/variables.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="InApp Solutions" />
        <meta
          name="description"
          content="InApp Solution is a technology company that provides web and mobile application solutions."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="InApp Solutions" />
        <meta
          name="twitter:description"
          content="InApp Solution is a technology company that provides web and mobile application solutions."
        />

        <meta
          name="keywords"
          content="in app , in app solutions, website developement, application developement, mobile application developement"
        />
        <meta
          property="twitter:image"
          content="https://www.inappsolutions.com/img/logo-inapp.1205a7f4.png"
        />
        <meta
          property="twitter:url"
          content="https://www.inappsolutions.com/img/204*204.jpg"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="1258954137642163" />
        <meta property="og:site_name" content="InApp Solutions" />
        <meta property="og:title" content="InApp Solutions" />
        <meta property="og:url" content="https://www.inappsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="InApp Solution is a technology company that provides web and mobile application solutions."
        />
        <meta
          property="og:image:url"
          content="https://www.inappsolutions.com/img/logo-inapp.1205a7f4.png"
        />
        {/* <meta property="og:image:secure_url" content="https://www.inappsolutions.com/img/logo-inapp.1205a7f4.png" />  */}
        <meta
          property="og:image:type"
          content="image/png"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <title>InApp Solutions</title>
      </Head>
      <Component {...pageProps} />
      <Script
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: ` var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5f86bba22901b920769349a9/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })()`,
        }}
      />
      <Script
      id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "InApp  Solutions",
              "alternateName": "InAppSolutions",
              "address": [{
                "@type": "PostalAddress",
                "addressCountry": "PAKISTAN",
                "addressLocality": "KARACHI",
                "addressRegion": "SINDH",
                "postalCode": "75210",
                "streetAddress": "Plot # 12-j, Block-6 P-E-C-H-S"
              }],
              "description": "We build scalable, intelligent web & mobile solutions that simplify people’s lives.",
              "logo": "https://www.inappsolutions.com/img/logo-inapp.1205a7f4.png",
              "url": "https://www.inappsolutions.com/",
              "sameAs": [
                "https://www.facebook.com/Inappsolutions",
                "https://www.linkedin.com/company/inappsolutions",
                "https://twitter.com/InAppSolutions",
                "https://www.instagram.com/inappsolutions/"
              ],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+923002700424",
                "telephone": "+1 (503) 966-1524",
                "email": "mailto:hello@inappsolutions.com",
                "contactType": "customer service"
              }]
            }
          ),
        }}
      />
    </>
  );
}

export default MyApp;
