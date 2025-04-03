export const dialogCss = `@import "tailwindcss";

@theme {
  --animate-overlayShow: overlayShow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-overlayHide: overlayHide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-contentShow: contentShow 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-contentHide: contentHide 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes overlayHide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  }

  @keyframes contentHide {
    from {
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(24px) scale(0.96);
    }
  }
}`