import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout.component';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner.component';
import About from '../components/Home/About.component';

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="Pneuma Gallery"
          info="nonprofit corporation catering to the needs of schools, churches, recovering addicts, homeless and prisoners"
        >
          <Link to="/contact" className="btn-white">
            get in touch
          </Link>
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  </>
);
