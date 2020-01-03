import React from 'react';

import CarouselComponent from '../../components/Home/Carousel.component';
import styles from '../../css/about.module.css';

function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        Reducing violence, recidivism and family dysfunction while building
        community
      </h1>
      <div className={styles.container}>
        <article className={styles.articleone}>
          <CarouselComponent />
        </article>
        <article className={styles.articletwo}>
          <h3 className={styles.passage}>
            Since 2013, Gerrel Jones has been working with Individuals and
            organizations to improve the lives of the citizens of his community.
            He began with teaching in churches, local schools and colleges. Then
            he expanded to teaching in Alabama and Georgia prisons. While
            working at the Foundry Men’s Recovery Center in Bessemer as a full
            time counselor, Gerrel still managed to feed homeless people in the
            streets of Birmingham. While working with the Birmingham Violence
            Reduction Initiative, Gerrel was able to provide resources to many
            of the most vulnerable populations in the city. These are the
            services that became the emphases of outreach as Pneuma Gallery
            developed. School, Church, Prison, Recovery and Homeless.
          </h3>
        </article>
      </div>
    </section>
  );
}

export default About;
