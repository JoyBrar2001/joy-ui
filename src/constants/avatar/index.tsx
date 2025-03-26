import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { avatarCode } from "./code/avatarCode";
import { AvatarWithFallbackIcon, AvatarWithFallbackText, AvatarWithIconBottomRight, AvatarWithIconTopLeft, AvatarWithIconTopRight, AvatarWithImageAndFallback, GroupAvatars } from "./components";

export const avatarData: ComponentCategory = {
  cols: 4,
  title: "Avatar",
  subtitle: "A collection of avatars to choose from.",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-avatar"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile,
        }
      ]
    },
    {
      type: "source",
      name: "Avatar.tsx",
      path: "@/components/ui/Avatar.tsx",
      language: "tsx",
      code: avatarCode,
    }
  ],
  components: [
    {
      title: "Avatar With Image and Fallback",
      component: AvatarWithImageAndFallback
    },
    {
      title: "Avatar with Fallback Text",
      component: AvatarWithFallbackText
    },
    {
      title: "Avatar with Fallback Icon",
      component: AvatarWithFallbackIcon
    },
    {
      title: "Avatar with Icon (Top Right)",
      component: AvatarWithIconTopRight
    },
    {
      title: "Avatar with Icon (Bottom Right)",
      component: AvatarWithIconBottomRight
    },
    {
      title: "Avatar with Icon (Top Left)",
      component: AvatarWithIconTopLeft
    },
    {
      title: "Group Avatars",
      component: GroupAvatars
    }
  ]
};