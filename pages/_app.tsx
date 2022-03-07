import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
              Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
              Segoe UI Symbol, Noto Color Emoji;
          }
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
