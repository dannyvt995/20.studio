/* import {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '.././styles/SliderPartner.css';

const images = {
  image1: require('.././asset/gallery/3.png'),
  image2: require('.././asset/gallery/5.png'),
  image3: require('.././asset/gallery/8.png'),
  image4: require('.././asset/gallery/b.png'),
  image5: require('.././asset/gallery/7.jpg')
};

export default function SliderPartners() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
      console.log(swiper.activeIndex)
    };
  
  
  return (
    <section className='wrapper-slider-partners'>

        
      <Swiper
        slidesPerView={3}
      
        dir="rtl"
        onSlideChange={handleSlideChange}

      >
         {Object.keys(images).map((key, index) => (
          <SwiperSlide
            key={key}
            
          >
            <div className={`item`}>
              <img src={images[key]} alt='' />
              <div className='text'>{key}</div>
            </div>
          </SwiperSlide>
        ))}
    
        <SwiperSlide>
          <div className='item sd'>
            END
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
 */