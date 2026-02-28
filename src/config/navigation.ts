export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Introduction",
    items: [
      { title: "Getting Started", href: "/" },
      { title: "Installation", href: "/installation" },
      { title: "Template", href: "/template" },
      { title: "Structuring", href: "/structuring" },
    ],
  },
  {
    title: "Core",
    items: [
      { title: "Library", href: "/core/library", subItems: [
        { title: "Loading", href: "/core/library#loading" },
        { title: "Methods", href: "/core/library#methods" },
        { title: "Properties", href: "/core/library#properties" },
        { title: "Accessing Elements", href: "/core/library#accessing" },
      ]},
      { title: "Game Restriction", href: "/core/set-game-id", subItems: [
        { title: "Usage", href: "/core/set-game-id#usage" },
        { title: "Multi-Game", href: "/core/set-game-id#multi-game" },
        { title: "Finding Your ID", href: "/core/set-game-id#finding-id" },
        { title: "Return Values", href: "/core/set-game-id#return-values" },
      ]},
      { title: "Common Properties", href: "/core/common-properties", subItems: [
        { title: "Overview", href: "/core/common-properties#overview" },
        { title: "Methods", href: "/core/common-properties#methods" },
        { title: "Tooltip Example", href: "/core/common-properties#tooltip" },
        { title: "Conditional Visibility", href: "/core/common-properties#conditional" },
      ]},
      { title: "SaveManager", href: "/core/save-manager", subItems: [
        { title: "Setup", href: "/core/save-manager#setup" },
        { title: "Core Methods", href: "/core/save-manager#core-methods" },
        { title: "Save & Load", href: "/core/save-manager#save-load" },
        { title: "Autoload", href: "/core/save-manager#autoload" },
        { title: "Ignore Methods", href: "/core/save-manager#ignore" },
      ]},
      { title: "ThemeManager", href: "/core/theme-manager" },
    ],
  },
  {
    title: "Structure",
    items: [
      { title: "Window", href: "/structure/window", subItems: [
        { title: "Usage", href: "/structure/window#usage" },
        { title: "Methods", href: "/structure/window#methods" },
        { title: "Full Example", href: "/structure/window#full-example" },
      ]},
      { title: "Tabs", href: "/structure/tabs", subItems: [
        { title: "Creating a Tab", href: "/structure/tabs#creating" },
        { title: "Methods", href: "/structure/tabs#methods" },
        { title: "Full Example", href: "/structure/tabs#full-example" },
      ]},
      { title: "Sections", href: "/structure/sections" },
      { title: "Tabboxes", href: "/structure/tabboxes" },
      { title: "DependencyBox", href: "/structure/dependency" },
    ],
  },
  {
    title: "UI Elements",
    items: [
      { title: "Labels", href: "/elements/labels" },
      { title: "Buttons", href: "/elements/buttons", subItems: [
        { title: "Usage", href: "/elements/buttons#usage" },
        { title: "Methods", href: "/elements/buttons#methods" },
        { title: "Risky Button", href: "/elements/buttons#risky" },
        { title: "Double Click", href: "/elements/buttons#double-click" },
      ]},
      { title: "Toggles", href: "/elements/toggles", subItems: [
        { title: "Usage", href: "/elements/toggles#usage" },
        { title: "Methods", href: "/elements/toggles#methods" },
        { title: "Toggle with Keybind", href: "/elements/toggles#keybind" },
        { title: "Conditional Visibility", href: "/elements/toggles#conditional" },
      ]},
      { title: "Checkboxes", href: "/elements/checkboxes" },
      { title: "Sliders", href: "/elements/sliders", subItems: [
        { title: "Usage", href: "/elements/sliders#usage" },
        { title: "Methods", href: "/elements/sliders#methods" },
        { title: "Suffix/Prefix", href: "/elements/sliders#suffix-prefix" },
      ]},
      { title: "Dropdowns", href: "/elements/dropdowns", subItems: [
        { title: "Usage", href: "/elements/dropdowns#usage" },
        { title: "Methods", href: "/elements/dropdowns#methods" },
        { title: "Multi-Select", href: "/elements/dropdowns#multi-select" },
        { title: "Dynamic Options", href: "/elements/dropdowns#dynamic" },
      ]},
      { title: "Textboxes", href: "/elements/textboxes", subItems: [
        { title: "Usage", href: "/elements/textboxes#usage" },
        { title: "Methods", href: "/elements/textboxes#methods" },
      ]},
      { title: "Color Pickers", href: "/elements/color-pickers", subItems: [
        { title: "Usage", href: "/elements/color-pickers#usage" },
        { title: "Methods", href: "/elements/color-pickers#methods" },
        { title: "ESP Color Example", href: "/elements/color-pickers#example" },
      ]},
      { title: "Keybinds", href: "/elements/keybinds", subItems: [
        { title: "Usage", href: "/elements/keybinds#usage" },
        { title: "Keybind Modes", href: "/elements/keybinds#modes" },
        { title: "Methods", href: "/elements/keybinds#methods" },
        { title: "Accessing & Updating", href: "/elements/keybinds#accessing" },
      ]},
      { title: "Dividers", href: "/elements/dividers" },
      { title: "Images", href: "/elements/images" },
      { title: "Viewports", href: "/elements/viewports" },
      { title: "Passthrough", href: "/elements/passthrough" },
      { title: "Notifications", href: "/elements/notifications", subItems: [
        { title: "Standalone", href: "/elements/notifications/standalone" },
      ]},
      { title: "Internal TabBox", href: "/elements/internal-tabbox" },
      { title: "Tags", href: "/elements/tags" },
    ],
  },
];
