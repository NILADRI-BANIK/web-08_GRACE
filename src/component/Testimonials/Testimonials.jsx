import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import testimonialImage from '../../assets/image/Rectangle 1.png';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      number: '01',
      text: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem.',
      image: testimonialImage
    },
    {
      id: 2,
      number: '02',
      text: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem.',
      image: testimonialImage
    },
    {
      id: 3,
      number: '03',
      text: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc, tincidunt sed purus phasellus condimentum sed diam sem.',
      image: testimonialImage
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>TESTIMONIALS</h2>

        <div className={styles.imageContainer}>
          <img 
            src={testimonials[activeSlide].image} 
            alt="Testimonial" 
            className={styles.testimonialImage}
          />
          
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={styles.testimonialsList}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.testimonialItem} ${activeSlide === index ? styles.activeTestimonial : ''}`}
            >
              <span className={styles.number}>{testimonial.number}</span>
              <p className={styles.text}>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;