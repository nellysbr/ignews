import Document, { Main, NextScript, Html, Head } from "next/document"

//css nao pode importar dentro do document, so no _app(apenas global).


export default class Mydocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
} 