export const checkboxCss = `@import "tailwindcss";

@theme {
  --animate-scaleUp: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --animate-scaleDown: scaleDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
}
`;