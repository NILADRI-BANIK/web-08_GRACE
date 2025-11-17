import React from "react";
import styles from "./Hero.module.scss";
import heroImage from "../../assets/image/image 176.png";
import ellipse145 from "../../assets/svg/Ellipse 145.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <div className={styles.badge}>
            <span className={styles.arrow}>→</span>
            <span className={styles.badgeText}>Dermetologist</span>
          </div>

          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur
          </h1>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
          </p>
        </div>

        {/* Hero Image */}
        <div className={styles.imageContainer}>
          <img
            src={heroImage}
            alt="Professional Dermatologist"
            className={styles.heroImage}
          />
        </div>

        {/* Right Content */}
        <div className={styles.rightContent}>
          <p className={styles.rightDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            tincidunt sed purus phasellus condimentum sed diam sem.
          </p>

          <button className={styles.ctaButton}>
            <span className="leftSpacer"></span>{" "}
            <span>Lorem ipsum</span>
            <span className="buttonArrow">
              <img src={ellipse145} alt="arrow-icon" />
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h2 className={styles.brandName}>GRACE</h2>

        <div className={styles.navigation}>
          <button className={styles.navButton}>CONTACT ME</button>
          <button className={`${styles.navButton} ${styles.navButtonPrimary}`}>
            ABOUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
