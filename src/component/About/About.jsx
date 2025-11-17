import React from 'react';
import styles from './About.module.scss';
import aboutImage1 from '../../assets/image/Rectangle 2.png'; // Update paths as needed
import aboutImage2 from '../../assets/image/Rectangle 3.png';
import aboutImage3 from '../../assets/image/Rectangle 4.png';


const About = () => {
  const services = [
    {
      id: 1,
      image: aboutImage2,
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum.'
    },
    {
      id: 2,
      image: aboutImage3,
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum.'
    }
  ];

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>ABOUT ME</h2>

        <div className={styles.heroSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}>
              <img 
                src={aboutImage1} 
                alt="About Me" 
                className={styles.heroImage}
              />
            </div>
          </div>

          <div className={styles.heroContent}>
            <h3 className={styles.heroTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            
            <p className={styles.heroParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet felis. Eu sceleris, purus auctor curabitur. Pellentesque in quis rhoncus vel sed n
            </p>
            
            <p className={styles.heroParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus
            </p>

            <button className={styles.ctaButton}>
              <span className={styles.buttonArrow}>→</span>
              <span>Lorem ipsum dolor</span>
            </button>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImageContainer}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className={styles.serviceImage}
                />
              </div>
              
              <div className={styles.serviceContent}>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;