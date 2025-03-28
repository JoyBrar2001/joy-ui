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

export type ComponentEntry = {
  title: string;
  component: (props?: any) => React.ReactNode;
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
  chip: chipData,
  codeblock: codeblockData,
  hoverCard: hoverCardData,
  input: inputData,
  popover: popoverData,
  radioGroup: radioData,
  scrollarea: scrollareaData,
  separator: separatorData,
  tabs: tabsData,
  tooltip: tooltipData,
};
