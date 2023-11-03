import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins } from 'next/font/google';
import { Provider } from 'jotai';
import ResponsiveInit from '@/lib/providers/ResponsiveInit';

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
