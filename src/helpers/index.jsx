import React from 'react'
import Head from 'react-helmet'

export const Helmet = ({title, desc}) => {
  return (
      <Head>
          <title>{title}</title>
          <meta name='description' content={desc} />

          {/* OG Tags */}

          <meta property='og:title' content={title} />
          <meta property='og:description' content={desc} />
          
          {/* Twitter */}
          
          <meta property='twiiter:title' content={title} />
          <meta property='twiiter:description' content={desc} />
    </Head>
  )
}
