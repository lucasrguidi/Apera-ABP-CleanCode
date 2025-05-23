import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import * as Style from './styles';

export const Slider = ({ children }: ISlider) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current)
      setWidth(sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth);
  }, []);

  return (
    <Style.SliderContainer>
      <motion.div ref={sliderRef} className="slider" whileTap={{ cursor: 'grabbing' }}>
        <motion.div
          className="sliderContent"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </Style.SliderContainer>
  );
};
