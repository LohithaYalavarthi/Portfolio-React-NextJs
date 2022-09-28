import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-white text-black ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
