import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { avatarCode } from "./code/avatarCode";
import {
  AvatarWithFallbackIcon,
  AvatarWithFallbackText,
  AvatarWithIconBottomRight,
  AvatarWithIconTopLeft,
  AvatarWithIconTopRight,
  AvatarWithImageAndFallback,
  GroupAvatars
} from "./components";
import {
  avatarWithFallbackIconCode,
  avatarWithFallbackTextCode,
  avatarWithIconBottomRightCode,
  avatarWithIconTopLeftCode,
  avatarWithIconTopRightCode,
  avatarWithImageAndFallbackCode,
  groupAvatarsCode,
} from "./code/componentCodes";

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
      component: AvatarWithImageAndFallback,
      code: avatarWithImageAndFallbackCode,
    },
    {
      title: "Avatar with Fallback Text",
      component: AvatarWithFallbackText,
      code: avatarWithFallbackTextCode
    },
    {
      title: "Avatar with Fallback Icon",
      component: AvatarWithFallbackIcon,
      code: avatarWithFallbackIconCode
    },
    {
      title: "Avatar with Icon (Top Right)",
      component: AvatarWithIconTopRight,
      code: avatarWithIconTopRightCode
    },
    {
      title: "Avatar with Icon (Bottom Right)",
      component: AvatarWithIconBottomRight,
      code: avatarWithIconBottomRightCode
    },
    {
      title: "Avatar with Icon (Top Left)",
      component: AvatarWithIconTopLeft,
      code: avatarWithIconTopLeftCode
    },
    {
      title: "Group Avatars",
      component: GroupAvatars,
      code: groupAvatarsCode
    }
  ]
};