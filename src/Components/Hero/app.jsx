import React, { useRef, useEffect } from 'react';

const timeRunning = 3000;
const timeAutoNext = 7000;

const Carousel = ({ children }) => {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);
  const runTimeOut = useRef();
  const runNextAuto = useRef();

  const resetTimeAnimation = () => {
    const runningTime = runningTimeRef.current;
    if (runningTime) {
      runningTime.style.animation = 'none';
      // eslint-disable-next-line
      runningTime.offsetHeight;
      runningTime.style.animation = null;
      runningTime.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  const showSlider = (type) => {
    const list = listRef.current;
    const carousel = carouselRef.current;
    const sliderItemsDom = list.querySelectorAll('.item');
    if (type === 'next') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut.current);

    runTimeOut.current = setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto.current);
    runNextAuto.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    resetTimeAnimation();
  };

  useEffect(() => {
    resetTimeAnimation();
    runNextAuto.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut.current);
      clearTimeout(runNextAuto.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {/* Render passed children as carousel items */}
        {children}
      </div>
      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;