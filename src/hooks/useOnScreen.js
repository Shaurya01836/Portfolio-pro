import { useState, useEffect } from 'react';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set state to true only when the element is intersecting
        if (entry.isIntersecting) {
          setIntersecting(true);
        } else {
          setIntersecting(false);
        }
      },
      {
        threshold: 0.1, // Changed from 0.5 (50%) to 0.1 (10%) for better tracking of smaller/end sections
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};

export default useOnScreen;