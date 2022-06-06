import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../sections/hero/Hero.js'
import AboutOne from '../sections/about/Aboutmain.js'
import ServicesOne from '../sections/services/ServicesOne.js'
import TestimonialsOne from '../sections/testimonials/TestimonialsThree'
import ContactCreative from '../sections/contact/ContactCreative.js'
import ClientsOne from '../sections/clients/ClientsOne'
import RevealContent from '../components/reveal-content'

class Index extends React.Component {

  render() {

    const { site } = this.props.data

    return (
      <div>
         <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <RevealContent delay={0}>
        <Layout
          isHome={true}
          sections={['home', 'quem somos', 'serviços', 'Portfolio', 'contato']}
        >
          <Hero />
          <AboutOne />
          <ServicesOne />
          <TestimonialsOne />
          <ClientsOne />
          <ContactCreative />
        </Layout>
        </RevealContent>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`