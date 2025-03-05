import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/Outfit/Outfit-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Outfit/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

export default outfit;