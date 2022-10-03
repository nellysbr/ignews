//toda vez que o usuario troca de pagina ele vai ser chamado

import React from 'react';
import { AppProps } from 'next/app';

import '../../styles/global.scss';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return(  
  <>
    <Header />
    <Component {...pageProps} /> 
     
  </>


  )
   

  
}

export default MyApp

