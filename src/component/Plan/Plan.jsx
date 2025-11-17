import React from 'react';
import styles from './Plan.module.scss';

const Plan = () => {
  const plans = [
    {
      id: '01',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet feli'
    },
    {
      id: '02',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet feli'
    },
    {
      id: '03',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet feli'
    }
  ];

  return (
    <section className={styles.plan}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>VIEW PLANS</h2>
        
        <p className={styles.mainDescription}>
          Lorem ipsum dolor sit amet, consectetur adjpiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet felis.
        </p>

        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <div key={plan.id} className={styles.planCard}>
              <div className={styles.cardImage}>
                <span className={styles.planNumber}>{plan.id}</span>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardDescription}>{plan.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;