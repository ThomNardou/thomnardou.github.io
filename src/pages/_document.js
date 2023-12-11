import PortfolioHeader from '@/components/header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <PortfolioHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
