import React, { useEffect } from 'react';

const TouchEnhancer = ({ children }) => {
  useEffect(() => {
    // Prevent bounce scrolling on iOS
    const preventBounce = (e) => {
      if (e.target === document.body || e.target === document.documentElement) {
        e.preventDefault();
      }
    };

    // Add touch start effects globally
    const addTouchEffects = () => {
      document.addEventListener('touchstart', (e) => {
        const target = e.target.closest('button, [role="button"], .clickable');
        if (target && !target.disabled) {
          target.style.transform = 'scale(0.98)';
          target.style.opacity = '0.8';
        }
      }, { passive: true });

      document.addEventListener('touchend', (e) => {
        const target = e.target.closest('button, [role="button"], .clickable');
        if (target) {
          setTimeout(() => {
            target.style.transform = '';
            target.style.opacity = '';
          }, 100);
        }
      }, { passive: true });

      // Haptic feedback for supported devices
      const addHapticFeedback = (intensity = 50) => {
        if (navigator.vibrate) {
          navigator.vibrate(intensity);
        }
      };

      // Add haptic feedback to buttons
      document.addEventListener('touchstart', (e) => {
        const target = e.target.closest('button, [role="button"]');
        if (target && !target.disabled) {
          addHapticFeedback(30);
        }
      }, { passive: true });
    };

    // Initialize enhancements
    addTouchEffects();
    document.addEventListener('touchmove', preventBounce, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventBounce);
    };
  }, []);

  return <>{children}</>;
};

export default TouchEnhancer;