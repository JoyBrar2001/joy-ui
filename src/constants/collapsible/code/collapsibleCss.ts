export const collapsibleCss = `@import "tailwindcss";

@theme{
  --animate-slideUpCollapsible: slideUpCollapsible 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownCollapsible: slideDownCollapsible 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideDownCollapsible {
    from {
      height: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
    }
  }
  
  @keyframes slideUpCollapsible {
    from {
      height: var(--radix-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
}`