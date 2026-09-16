const code = (body: string) =>
  `import { Toolbar, ToolbarButton, ToolbarSeparator } from "@/components/ui/Toolbar";\n\nexport function ToolbarExample() { return (${body}); }`;
export const formattingCode = code(
  `<Toolbar><ToolbarButton>Bold</ToolbarButton><ToolbarButton>Italic</ToolbarButton><ToolbarSeparator /><ToolbarButton>Undo</ToolbarButton></Toolbar>`,
);
export const linksCode = code(
  `<Toolbar><ToolbarLink href="#">Documentation</ToolbarLink><ToolbarLink href="#">Changelog</ToolbarLink><ToolbarSeparator /><ToolbarButton>Share</ToolbarButton></Toolbar>`,
);
export const groupsCode = code(
  `<Toolbar><ToolbarToggleGroup type="single"><ToolbarToggleItem value="left">Left</ToolbarToggleItem><ToolbarToggleItem value="center">Center</ToolbarToggleItem></ToolbarToggleGroup></Toolbar>`,
);
export const editorCode = code(
  `<Toolbar><ToolbarButton>File</ToolbarButton><ToolbarButton>Edit</ToolbarButton><ToolbarSeparator /><ToolbarButton>Preview</ToolbarButton></Toolbar>`,
);
export const toggleCode = code(
  `<Toolbar><ToolbarButton>Undo</ToolbarButton><ToolbarSeparator /><ToolbarToggleGroup type="single"><ToolbarToggleItem value="bold">Bold</ToolbarToggleItem></ToolbarToggleGroup></Toolbar>`,
);
