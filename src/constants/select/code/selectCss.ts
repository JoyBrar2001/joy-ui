export const selectCss = `@import "tailwindcss";

@theme {
  --animate-openSelectTop: openSelectTop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-openSelectBottom: openSelectBottom 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes openSelectTop {
    from {
      transform-origin: bottom;
      transform: scale(0.8) translateY(25px);
      opacity: 0;
    }
    to {
      transform-origin: bottom;
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }

  @keyframes openSelectBottom {
    from {
      transform-origin: top;
      transform: scale(0.8) translateY(-25px);
      opacity: 0;
    }
    to {
      transform-origin: top;
      transform: scale(1) translateY(0px);
      opacity: 1;
    }
  }
}`