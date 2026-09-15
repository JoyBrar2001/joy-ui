# Joy UI

Joy UI is a registry-driven component and data-visualization showcase built with Next.js, React, Tailwind CSS, Radix UI, and Apache ECharts.

It provides a browsable collection of reusable interface components and chart examples. Every example includes a live preview, installation instructions, and copyable source code.

## What it includes

### UI Components

The UI Components section contains reusable examples for accordions, alerts, avatars, buttons, calendars, checkboxes, chips, collapsibles, command palettes, dialogs, drawers, dropdown menus, inputs, multi-selects, popovers, progress indicators, radio groups, scroll areas, selects, separators, sliders, switches, tabs, textareas, toasts, and tooltips.

Visit `/components/ui` to browse the collection.

### Charts

The Charts section is powered by Apache ECharts and currently includes:

- Line charts
- Bar charts
- Pie charts
- Radar charts
- Tree charts
- Treemap charts
- Sankey graphs

Each chart family has its own sidebar and detail page. Examples include stacked charts, area charts, waterfall charts, radial trees, disk usage treemaps, node alignment, and gradient edges.

Visit `/components/charts` to browse the collection.

### Creative Components

The Creative Components section is reserved for experimental, animated, and more opinionated interface patterns.

Visit `/components/creative` to see the current coming-soon page.

## How users can use it

1. Open the UI Components or Charts section.
2. Select a component or chart family from the sidebar.
3. Review the live examples on the detail page.
4. Open the code button for an example.
5. Use the Installation tab to see required packages and source files.
6. Use the Code tab to copy the example implementation.
7. Adapt the example to the application’s own data, styling, and behavior.

The command palette is available from the navbar and can also be opened with `Ctrl + K` on Windows/Linux or `Cmd + K` on macOS.

## Getting started

### Requirements

- Node.js 20 or newer is recommended.
- npm 10 or newer is recommended.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint against src
npm run build    # Create a production build
npm run start    # Start the production server
```

## Project structure

```text
src/
├── app/
│   ├── components/
│   │   ├── charts/
│   │   │   ├── [chart]/       # Dynamic chart detail pages
│   │   │   └── page.tsx       # Chart index page
│   │   ├── creative/          # Creative components landing page
│   │   └── ui/
│   │       └── [component]/   # Dynamic UI component detail pages
│   └── layout.tsx
├── components/
│   ├── charts/                # Shared ECharts renderer and examples
│   ├── shared/                # Navbar, sidebars, and shared navigation
│   └── ui/                    # Reusable UI primitives
├── constants/
│   ├── charts-data.tsx        # Chart registry and example metadata
│   ├── data.tsx               # UI component registry and example metadata
│   └── <component>/           # Component examples and source snippets
├── providers/
│   └── ThemeProvider.tsx      # SSR-safe light/dark/system theme state
└── utils/
```

## Architecture

Joy UI uses registries to keep navigation, routes, previews, and code guides synchronized.

### UI component registry

UI component metadata is stored in `src/constants/data.tsx`. Each entry defines the component title, description, installation steps, utility files, source files, preview examples, and copyable example code.

The dynamic route at `src/app/components/ui/[component]/page.tsx` reads this registry to render each component page.

### Chart registry

Chart metadata is stored in `src/constants/charts-data.tsx`. The chart registry powers the Charts landing page, Charts sidebar, dynamic chart routes, preview rendering, installation dialogs, and example code dialogs.

Chart previews are rendered through the shared `src/components/charts/EChart.tsx` wrapper around `echarts-for-react`.

## Adding a UI component

1. Add the reusable primitive under `src/components/ui`.
2. Add the component examples under a matching folder in `src/constants`.
3. Add the source and example code strings used by the code dialog.
4. Export the example components from the folder’s `components/index.ts` file.
5. Create the component metadata entry in `src/constants/<component>/index.tsx`.
6. Add the entry to `src/constants/data.tsx`.
7. Run the validation commands.

Once registered, the component becomes available through the UI sidebar, dynamic route, command palette data, preview grid, and code guide.

## Adding a chart family or example

1. Add the chart option factory or variant to `src/components/charts/ChartExamples.tsx`.
2. Add the variant name and display title to `src/constants/charts-data.tsx`.
3. Add the matching code snippet to the chart example code generator.
4. Keep chart colors compatible with the shared monochrome theme.
5. Use the existing `EChart` wrapper so client-only chart rendering remains isolated from server rendering.
6. Run the validation commands.

For a new chart family, add a new `ChartKind`, option factory, and registry entry. The existing sidebar and dynamic chart route will then expose it automatically.

## Styling and themes

The project uses Tailwind CSS with class-based dark mode. The shared theme provider supports light, dark, and system theme preferences, persists the selection in local storage, and responds to system theme changes.

Chart examples use a consistent black, white, and gray palette that adapts to the active theme.

## Main dependencies

- [Next.js](https://nextjs.org/) for the application framework and routing
- [React](https://react.dev/) for the UI layer
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Apache ECharts](https://echarts.apache.org/) for charts
- [echarts-for-react](https://github.com/hustcc/echarts-for-react) for React integration
- [cmdk](https://github.com/pacocoursey/cmdk) for the command palette
- [Lucide React](https://lucide.dev/) for icons

## Validation

Before opening a pull request or deploying, run:

```bash
npm run lint
npx tsc --noEmit --incremental false
git diff --check
npm run build
```

The project may require a writable `.next` directory for the production build. If the build reports an operating-system permission error for `.next`, correct the directory permissions or remove stale build output before retrying.

## Deployment

Joy UI can be deployed as a standard Next.js application:

```bash
npm install
npm run build
npm run start
```

It can also be deployed through a Next.js-compatible hosting provider such as Vercel. No application secrets or environment variables are required for the current showcase.

## Contributing

When adding or changing an example:

- Preserve the registry-driven architecture.
- Keep installation and source instructions accurate.
- Keep light and dark themes readable.
- Prefer accessible Radix primitives where applicable.
- Add responsive behavior for narrow screens.
- Run linting, type-checking, and diff validation before submitting changes.

## License

No license has been declared for this repository yet. Add a `LICENSE` file before distributing the project publicly.
