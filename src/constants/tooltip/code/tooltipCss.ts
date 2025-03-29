export const tooltipCss = `@import "tailwindcss";
          
@theme {
  --animate-slideUpAndFadeIn: slideUpAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeIn: slideDownAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeIn: slideLeftAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeIn: slideRightAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeOut: slideDownAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideUpAndFadeOut: slideUpAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeOut: slideLeftAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeOut: slideRightAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUpAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideDownAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideLeftAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideRightAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideDownAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
  }

  @keyframes slideUpAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
  }

  @keyframes slideLeftAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
  }

  @keyframes slideRightAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
  }
}`;