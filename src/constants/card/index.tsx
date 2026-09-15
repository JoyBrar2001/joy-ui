import { ComponentCategory } from "../data";
import { cardCode } from "./code/cardCode";
import { basicCardCode, cardWithActionCode, cardWithFooterCode, cardWithHeaderCode, mediaCardCode, notificationCardCode, pricingCardCode, productCardCode, profileCardCode, settingsCardCode, statsCardCode } from "./code/componentCodes";
import { BasicCard, CardWithAction, CardWithFooter, CardWithHeader, MediaCard, NotificationCard, PricingCard, ProductCard, ProfileCard, SettingsCard, StatsCard } from "./components";

export const cardData: ComponentCategory = {
  cols: 6,
  title: "Card",
  subtitle: "Composable cards with headers, content, actions, descriptions, and footers.",
  steps: [
    { type: "dependencies", libraries: ["clsx", "tailwind-merge"] },
    { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: `export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }` }] },
    { type: "source", name: "Card.tsx", path: "@/components/ui/Card.tsx", language: "tsx", code: cardCode },
  ],
  components: [
    { title: "Basic Card", component: BasicCard, code: basicCardCode },
    { title: "Card with Header", component: CardWithHeader, code: cardWithHeaderCode },
    { title: "Card with Footer", component: CardWithFooter, code: cardWithFooterCode },
    { title: "Card with Action", component: CardWithAction, code: cardWithActionCode },
    { title: "Profile Card", component: ProfileCard, code: profileCardCode },
    { title: "Stats Card", component: StatsCard, code: statsCardCode },
    { title: "Pricing Card", component: PricingCard, code: pricingCardCode },
    { title: "Notification Card", component: NotificationCard, code: notificationCardCode },
    { title: "Media Card", component: MediaCard, code: mediaCardCode },
    { title: "Settings Card", component: SettingsCard, code: settingsCardCode },
    { title: "Product Card", component: ProductCard, code: productCardCode },
  ],
};
