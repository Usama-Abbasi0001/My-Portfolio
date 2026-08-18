import { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({
  target = 0,
  duration = 1200,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = Math.round(progress * target);
      setCount(nextValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [duration, target]);

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
