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
import { calendarData } from "./calendar";
import { dialogData } from "./dialog";
import { textareaData } from "./textarea";
import { dropdownMenuData } from "./dropdown-menu";
import { multiSelectData } from "./multi-select";
import { toastData } from "./toast";
import { progressData } from "./progress";
import { sliderData } from "./slider";
import { commandPaletteData } from "./command-palette";
import { cardData } from "./card";
import { aspectRatioData } from "./aspect-ratio";
import { breadcrumbData } from "./breadcrumb";
import { toggleData } from "./toggle";
import { contextMenuData } from "./context-menu";
import { alertDialogData } from "./alert-dialog";
import { toolbarData } from "./toolbar";
import { navigationMenuData } from "./navigation-menu";
import { menubarData } from "./menubar";
import { formData } from "./form";
import { toggleGroupData } from "./toggle-group";
import { passwordToggleFieldData } from "./password-toggle-field";
import { oneTimePasswordFieldData } from "./one-time-password-field";
import { labelData } from "./label";

export type ComponentEntry = {
  title: string;
  component: () => React.ReactNode;
  code: string;
};

export type StepType = "dependencies" | "utilities" | "source";

export type LanguageType =
  | "css"
  | "shell"
  | "typescript"
  | "tsx"
  | "javascript"
  | "jsx"
  | "python"
  | "cpp";

export type DependeciesStep = {
  type: StepType;
  libraries: Array<string>;
};

export type UtilitiesStep = {
  type: StepType;
  files: Array<{
    name: string;
    path: string;
    language: LanguageType;
    code: string;
  }>;
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
  calendar: calendarData,
  checkbox: checkboxData,
  commandPalette: commandPaletteData,
  card: cardData,
  aspectRatio: aspectRatioData,
  breadcrumb: breadcrumbData,
  toggle: toggleData,
  contextMenu: contextMenuData,
  alertDialog: alertDialogData,
  toolbar: toolbarData,
  navigationMenu: navigationMenuData,
  menubar: menubarData,
  form: formData,
  toggleGroup: toggleGroupData,
  passwordToggleField: passwordToggleFieldData,
  oneTimePasswordField: oneTimePasswordFieldData,
  label: labelData,
  collapsible: collapsibleData,
  chip: chipData,
  codeblock: codeblockData,
  dialog: dialogData,
  dropdownMenu: dropdownMenuData,
  multiSelect: multiSelectData,
  drawer: drawerData,
  hoverCard: hoverCardData,
  input: inputData,
  popover: popoverData,
  radioGroup: radioData,
  scrollarea: scrollareaData,
  select: selectData,
  separator: separatorData,
  switch: switchData,
  toast: toastData,
  progress: progressData,
  slider: sliderData,
  tabs: tabsData,
  textarea: textareaData,
  tooltip: tooltipData,
};
