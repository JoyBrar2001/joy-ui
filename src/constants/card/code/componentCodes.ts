const example = (body: string) =>
  `import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/Card";\n\nexport function CardExample() {\n  return (${body});\n}`;
export const basicCardCode = example(
  `<Card><CardContent><CardTitle>Keep things simple</CardTitle><CardDescription className="mt-2">A card can be as small as a single piece of content.</CardDescription></CardContent></Card>`,
);
export const cardWithHeaderCode = example(
  `<Card><CardHeader><CardTitle>Project details</CardTitle><CardDescription>Everything you need to know about this project.</CardDescription></CardHeader><CardContent><p>Joy UI is a collection of reusable interface patterns.</p></CardContent></Card>`,
);
export const cardWithFooterCode = example(
  `<Card><CardHeader><CardTitle>Delete workspace?</CardTitle><CardDescription>This action cannot be undone.</CardDescription></CardHeader><CardContent><p>All projects and members will be removed permanently.</p></CardContent><CardFooter><Button variant="destructive">Delete</Button></CardFooter></Card>`,
);
export const cardWithActionCode = example(
  `<Card><CardHeader><CardTitle>Team members</CardTitle><CardDescription>People with access to this workspace.</CardDescription><CardAction><Button variant="ghost">More</Button></CardAction></CardHeader><CardContent>Team members</CardContent></Card>`,
);
export const profileCardCode = example(
  `<Card><CardHeader><CardTitle>Alex Morgan</CardTitle><CardDescription>Product designer</CardDescription></CardHeader><CardContent>Designing calm, useful experiences.</CardContent><CardFooter><Button variant="outline">View profile</Button></CardFooter></Card>`,
);
export const statsCardCode = example(
  `<Card><CardHeader><CardDescription>Monthly revenue</CardDescription><CardTitle>$24,680</CardTitle><CardAction><span>+18.2%</span></CardAction></CardHeader><CardContent><div className="h-16">Chart content</div></CardContent></Card>`,
);
export const pricingCardCode = example(
  `<Card><CardHeader><CardTitle>Pro plan</CardTitle><CardDescription>For growing teams.</CardDescription></CardHeader><CardContent><p>$24 / month</p><ul><li>Unlimited projects</li><li>Priority support</li></ul></CardContent><CardFooter><Button className="w-full">Start free trial</Button></CardFooter></Card>`,
);
export const notificationCardCode = example(
  `<Card><CardHeader><CardTitle>New comment</CardTitle><CardDescription>Sarah left feedback on your dashboard.</CardDescription><CardAction>×</CardAction></CardHeader><CardFooter><Button variant="outline">Open comment</Button></CardFooter></Card>`,
);
export const mediaCardCode = example(
  `<Card><div className="h-28 bg-neutral-900" /><CardHeader><CardTitle>Design system essentials</CardTitle><CardDescription>12 min read</CardDescription></CardHeader><CardContent>Build a flexible system.</CardContent><CardFooter><Button variant="ghost">Read article</Button></CardFooter></Card>`,
);
export const settingsCardCode = example(
  `<Card><CardHeader><CardTitle>Security</CardTitle><CardDescription>Manage account protection.</CardDescription></CardHeader><CardContent>Two-factor authentication — Enabled</CardContent><CardFooter><Button variant="outline">Manage security</Button></CardFooter></Card>`,
);
export const productCardCode = example(
  `<Card><CardHeader><CardTitle>Wireless headphones</CardTitle><CardDescription>Studio quality · Matte black</CardDescription><CardAction>$129</CardAction></CardHeader><CardContent>In stock · Ships tomorrow</CardContent><CardFooter><Button>Add to cart</Button></CardFooter></Card>`,
);
