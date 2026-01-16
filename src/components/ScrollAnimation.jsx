import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimation = ({ 
  children, 
  animation = 'up', 
  delay = 0,
  className = ''
}) => {
  const [elementRef, isVisible] = useScrollAnimation();

  const animationClass = {
    'up': 'scroll-animate',
    'left': 'scroll-animate-left',
    'right': 'scroll-animate-right',
    'fade': 'scroll-animate-fade',
    'scale': 'scroll-animate-scale'
  }[animation] || 'scroll-animate';

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;





