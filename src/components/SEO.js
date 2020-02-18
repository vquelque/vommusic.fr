import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import socialImage from "../../static/img/social.jpg"

const SiteMetadata = ({ pathname, locale }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, description },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang={locale} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${socialImage}`} />
      <meta name="twitter:card" content="summary" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-114030019-1"
      ></script>
      <script src="https://www.google.com/recaptcha/api.js"></script>
      {/* Google fonts - Montserrat for headings, Cardo for copy */}
      <link
        rel="stylesheet"
        href="http://fonts.googleapis.com/css?family=Montserrat:400,700|Cardo:400,400italic,700"
      />
    </Helmet>
  )
}

export default SiteMetadata
