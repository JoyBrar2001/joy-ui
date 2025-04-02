export const accordionCss = `@import "tailwindcss";
          
@theme {
  --animate-slideUp: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDown: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }
    to {
      height: 0;
    }
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-accordion-content-height);
    }
  }
}`;