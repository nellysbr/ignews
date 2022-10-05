//toda vez que o usuario troca de pagina ele vai ser chamado

import React from 'react';
import { AppProps } from 'next/app';

import '../../styles/global.scss';
import { Header } from '../components/Header';

import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps, session }) {
  return(  
  <>
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider> 
     
  </>


  )
   

  
}

export default MyApp

