import Head from 'next/head'
import React from 'react'

const HEAD = ({title , desc , canonical ,  schema}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
      <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' rel='stylesheet' />
      <link rel="canonical" href={"https://mrmadvertisingdubai.com/"+canonical} />
      <link rel="icon" href="/Logo1.png" />
      <script type='application/ld+json'  dangerouslySetInnerHTML={{__html: JSON.stringify(schema)} } />
    
    </Head>
  )
}

export default HEAD