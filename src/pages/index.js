import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.component';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner.component';
import About from '../components/Home/About.component';
import Services from '../components/Home/Services.component';

export default ({ data }) => (
  <>
    <Layout>
      <StyledHero home="true" img={data.PG1.childImageSharp.fluid}>
        <Banner
          title="Pneuma Gallery"
          info="nonprofit corporation catering to the needs of schools, churches, recovering addicts, homeless and prisoners"
        >
          <Link to="/contact" className="btn-white">
            get in touch
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  </>
);

export const query = graphql`
  query {
    PG1: file(relativePath: { eq: "PG1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
