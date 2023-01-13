import React, { FunctionComponent } from 'react'

import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Next Application Scaffold" />
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>{children}</body>
  </html>
)

// noinspection JSUnusedGlobalSymbols
export default RootLayout
