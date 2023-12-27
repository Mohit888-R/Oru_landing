import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google';
import { Provider } from 'jotai';
import ResponsiveInit from '@/lib/providers/ResponsiveInit';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { DevTools } from 'jotai-devtools';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // useEffect(() => {
  //   if (
  //     router.pathname !== '/apple-app-site-association' &&
  //     router.pathname !== '/' &&
  //     router.pathname !== '/oru-guide/how-to-buy' &&
  //     router.pathname !== '/oru-guide/how-to-sell' &&
  //     router.pathname !== '/contact-us' &&
  //     router.pathname !== '/delivery-policy' &&
  //     router.pathname !== '/faqs' &&
  //     router.pathname !== '/privacy-policy' &&
  //     router.pathname !== '/aboutus' &&
  //     router.pathname !== '/refund-policy' &&
  //     router.pathname !== '/terms-of-services'
  //   ) {
  //     router.push('/');
  //   }
  // }, [router.pathname]);
  return (
    <>
      <Provider>
        {/* <DevTools theme="dark" /> */}
        <ResponsiveInit />
        <main
          className={`${poppins.variable} ${inter.variable} font-poppins`}
        >
          <Navbar />
          {/* <GlobalLoading /> */}
          <Component {...pageProps} />
          <Footer />
        </main>
      </Provider>
    </>
  )
}
