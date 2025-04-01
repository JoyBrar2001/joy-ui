import React from "react";

import { accordionData } from "./accordion";
import { alertData } from "./alert";
import { avatarData } from "./avatar";
import { buttonData } from "./button";
import { checkboxData } from "./checkbox";
import { codeblockData } from "./codeblock";
import { chipData } from "./chip";
import { inputData } from "./input";
import { radioData } from "./radio";
import { scrollareaData } from "./scrollarea";
import { separatorData } from "./separator";
import { tabsData } from "./tabs";
import { tooltipData } from "./tooltip";
import { popoverData } from "./popover";
import { hoverCardData } from "./hovercard";
import { drawerData } from "./drawer";
import { switchData } from "./switch";
import { selectData } from "./select";
import { collapsibleData } from "./collapsible";

export type ComponentEntry = {
  title: string;
  component: () => React.ReactNode;
  code: string;
};

export type StepType = "dependencies" | "utilities" | "source";

export type LanguageType = "css" | "shell" | "typescript" | "tsx" | "javascript" | "jsx" | "python" | "cpp";

export type DependeciesStep = {
  type: StepType;
  libraries: Array<string>;
}

export type UtilitiesStep = {
  type: StepType;
  files: Array<{
    name: string;
    path: string;
    language: LanguageType;
    code: string;
  }>
};

export type SourceStep = {
  type: StepType;
  name: string;
  path: string;
  language: LanguageType;
  code: string;
};

export type ComponentCategory = {
  cols: 4 | 6 | 12;
  title: string;
  subtitle: string;
  steps: Array<DependeciesStep | UtilitiesStep | SourceStep>;
  components: ComponentEntry[];
};

export type ComponentData = Record<string, ComponentCategory>;

export const data: ComponentData = {
  accordion: accordionData,
  alert: alertData,
  avatar: avatarData,
  button: buttonData,
  checkbox: checkboxData,
  collapsible: collapsibleData,
  chip: chipData,
  codeblock: codeblockData,
  drawer: drawerData,
  hoverCard: hoverCardData,
  input: inputData,
  popover: popoverData,
  radioGroup: radioData,
  scrollarea: scrollareaData,
  select: selectData,
  separator: separatorData,
  switch: switchData,
  tabs: tabsData,
  tooltip: tooltipData,
};
