import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {process.env.TRACKING === "true" ? (
          <script
            async
            data-website-id="ee5759be-c1cc-4e8c-9358-dbfbd95e2b4b"
            defer
            key="umami-tracking"
            src="https://tracking.henxhospitality.com/umami.js"
          />
        ) : null}
      </body>
    </Html>
  )
}
