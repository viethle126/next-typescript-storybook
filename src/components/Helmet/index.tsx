import React from "react"
import Head from "next/head"

interface HelmetProps {
  title: string
  description?: string
  meta?: React.ReactNode
}

const Helmet: React.FC<HelmetProps> = ({ title, description = "", meta }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description || ""} />
      {meta}
    </Head>
  )
}

export default Helmet
