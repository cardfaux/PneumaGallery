import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

//import { images } from '../../data/carousel';
import { images } from '../../components/images';
// import image from '../../images/PG6.jpg';
// import image2 from '../../images/PG7.jpg';
// import image3 from '../../images/PG8.jpg';
import styles from '../../css/carousel.module.css';

const INITIAL_INDEX = 0;

export default function CarouselComponent() {
  const [index, setIndex] = React.useState(INITIAL_INDEX);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={styles.wrapper}>
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(image => (
          <GalleryImage alt="pg" objectFit="cover" src={image} />
        ))}
      </Gallery>
      <div>
        <em>
          “The best way to find yourself is to lose yourself in the service of
          others.”
        </em>
        <br />-<strong>Mahatma Gandhi</strong>
      </div>
    </div>
  );
}
