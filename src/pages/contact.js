import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.component';
import StyledHero from '../components/StyledHero';
import Contact from '../components/Contact/Contact.component';

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
