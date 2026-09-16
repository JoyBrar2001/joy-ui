import type { ComponentCategory } from "../data";
import { aspectRatioCode } from "./code/aspectRatioCode";
import {
  avatarRatioCode,
  bannerRatioCode,
  containedImageCode,
  customRatioCode,
  landscapeImageCode,
  portraitImageCode,
  productRatioCode,
  responsiveGalleryCode,
  squareContentCode,
  videoRatioCode,
} from "./code/componentCodes";
import {
  AvatarRatio,
  BannerRatio,
  ContainedImage,
  CustomRatio,
  LandscapeImage,
  PortraitImage,
  ProductRatio,
  ResponsiveGallery,
  SquareContent,
  VideoRatio,
} from "./components";

export const aspectRatioData: ComponentCategory = {
  cols: 6,
  title: "Aspect Ratio",
  subtitle:
    "A lightweight layout primitive for keeping content, media, and responsive compositions proportional.",
  steps: [
    { type: "dependencies", libraries: ["clsx", "tailwind-merge"] },
    {
      type: "source",
      name: "AspectRatio.tsx",
      path: "@/components/ui/AspectRatio.tsx",
      language: "tsx",
      code: aspectRatioCode,
    },
  ],
  components: [
    { title: "16:9 Video Ratio", component: VideoRatio, code: videoRatioCode },
    {
      title: "Square Content without Image",
      component: SquareContent,
      code: squareContentCode,
    },
    {
      title: "Landscape Image",
      component: LandscapeImage,
      code: landscapeImageCode,
    },
    {
      title: "Portrait Image",
      component: PortraitImage,
      code: portraitImageCode,
    },
    { title: "Wide Banner", component: BannerRatio, code: bannerRatioCode },
    { title: "Circular Avatar", component: AvatarRatio, code: avatarRatioCode },
    {
      title: "Contained Image",
      component: ContainedImage,
      code: containedImageCode,
    },
    {
      title: "Responsive Gallery",
      component: ResponsiveGallery,
      code: responsiveGalleryCode,
    },
    {
      title: "Product Card Image",
      component: ProductRatio,
      code: productRatioCode,
    },
    {
      title: "Custom 2:1 Ratio",
      component: CustomRatio,
      code: customRatioCode,
    },
  ],
};
