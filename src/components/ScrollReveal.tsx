import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in' | 'flip-up';
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: 'div' | 'span' | 'section' | 'li' | 'h2' | 'h3' | 'p' | 'ul';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  duration = 800,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  style = {},
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement && !once) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  // Combine custom options into inline CSS variables
  const combinedStyle: React.CSSProperties = {
    ...style,
    ['--reveal-duration' as any]: `${duration}ms`,
    ['--reveal-delay' as any]: `${delay}ms`,
  };

  const classes = `reveal reveal-${animation} ${isVisible ? 'reveal-visible' : ''} ${className}`.trim();

  return (
    <Component
      ref={elementRef as any}
      className={classes}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
};
