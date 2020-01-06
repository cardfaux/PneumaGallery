import React from 'react';

import StyledTitle from '../StyledTitle.component';
import styles from '../../css/services.module.css';

const Services = () => {
  return (
    <section className={styles.services}>
      <StyledTitle className={styles.styled} title="what" subtitle="we do" />
      <h1 className={styles.title}>
        We believe that these 5 emphases will help to strengthen our communities
      </h1>
      <h3 className={styles.excerpt}>
        We believe that these 5 emphases will help to strengthen communities
        through the establishment of healthy societal norms among vulnerable
        populations. Through provision, instruction and mentoring, we work to
        reduce family dysfunction, criminality and violence while promoting
        community responsibility, personal dignity and healthy citizenry.
      </h3>
      <div className={styles.schools}>
        <h1>Schools</h1>
        <h3 className={styles.excerpt}>
          Development of our youth is development of our future. PGI has
          invested itself in taking every opportunity to inform, inspire and
          empower students at every level. From grade school to college, we have
          been and will continue to support our education system with community
          engagement through volunteerism.
        </h3>
      </div>
      <div>
        <h1 className={styles.title}>Church</h1>
        <h3 className={styles.excerpt}>
          Faith communities are a driving force behind the value systems of many
          citizens. PGI recognizes that and works to support the efforts of
          these communities to establish spiritual resource connections as well
          as provide for tangible basic needs.
        </h3>
      </div>
      <div className={styles.schools}>
        <h1>Prison</h1>
        <h3 className={styles.excerpt}>
          Prisoners and returning citizens from correctional institutions have
          been a focus of PGI from the foundations of our development. Prisoners
          who are about to reenter society have basic resource needs and social
          development needs. Those who have already transitioned often need
          mental and emotional support. PGI and our partners work to meet those
          needs through connecting them with mental health, job skill training
          and employment.
        </h3>
      </div>
      <div>
        <h1 className={styles.title}>Recovery</h1>
        <h3 className={styles.excerpt}>
          Overcoming addiction is often a process that takes longer than most
          treatment programs last. PGI works to supplement the programs with
          aftercare support such as sponsorship, support groups and mentoring.
        </h3>
      </div>
      <div className={styles.schools}>
        <h1>Homeless</h1>
        <h3 className={styles.excerpt}>
          The needs of the homeless are myriad. PGI works to provide food,
          clothing, counseling and direction for a healthy life.
        </h3>
      </div>
    </section>
  );
};

export default Services;
