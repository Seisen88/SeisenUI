import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Window() {
  return (
    <>
    <TableOfContents />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Window"
        description="The main container for your UI. Every Seisen UI starts with creating a Window."
      />
      
      <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
        <Image
          src="/images/Windows.png"
          alt="Window Structure Preview"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-12">
        <h2 id="usage" className="text-2xl font-semibold text-white mb-4">Usage</h2>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "My Script",
    Icon = "home",
    ConfigSettings = true,
    ToggleKeybind = Enum.KeyCode.RightShift,
    Version = "v1.0.0",    -- Green pill badge
    SubTitle = "Free"      -- Blue pill badge
})`}
        />
      </section>

      <ConfigTable
        title="Configuration"
        rows={[
          {
            property: "Name",
            type: "string",
            default: '"Seisen UI"',
            description: "The title displayed in the window header",
            required: true,
          },
          {
            property: "Icon",
            type: "string",
            default: '"home"',
            description: "Lucide icon name or Roblox asset ID for the window icon",
          },
          {
            property: "Theme",
            type: "table",
            default: "Library.Theme",
            description: "Theme configuration table (usually use default)",
          },
          {
            property: "ToggleKeybind",
            type: "Enum.KeyCode",
            default: "nil",
            description: "Key to toggle the UI visibility on/off",
          },
          {
            property: "ConfigSettings",
            type: "boolean",
            default: "false",
            description: "Automatically generate a 'Settings' tab with player mods (WalkSpeed, Fly, etc.)",
          },
          {
            property: "Version",
            type: "string",
            default: "nil",
            description: "Displays a green version pill badge next to the window title (e.g. \"v1.0.0\").",
          },
          {
            property: "SubTitle",
            type: "string",
            default: "nil",
            description: "Displays a blue subtitle pill badge next to the window title (e.g. \"Seisen Library\").",
          },
        ]}
      />

      <section className="mb-12">
        <h2 id="methods" className="text-2xl font-semibold text-white mb-4">Window Methods</h2>
        
        <MethodCard
          name="Window:AddTab(name, icon, subtitle)"
          description="Add a new tab to the window."
          params="name: string, icon: string, subtitle: string"
          returns="Tab object"
        />

        <MethodCard
          name="Window:AddSidebarSection(name)"
          description="Add a section header in the sidebar for organizing tabs."
          params="name: string"
          returns="void"
        />

        <MethodCard
          name="Window:AddSidebarDivider()"
          description="Add a visual divider line in the sidebar."
          returns="void"
        />

        <MethodCard
          name="Window:SetScale(scale)"
          description="Set the UI scale (1.0 = 100%)."
          params="scale: number"
          returns="void"
        />
      </section>

      <section className="mb-12">
        <h2 id="full-example" className="text-2xl font-semibold text-white mb-4">Full Example</h2>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "My Script Hub",
    Icon = "home",
    ToggleKeybind = Enum.KeyCode.RightShift
})

-- Organize sidebar
Window:AddSidebarSection("Main")

-- Add tabs
local HomeTab = Window:AddTab("Home", "home", "Welcome")
local SettingsTab = Window:AddTab("Settings", "settings", "Configure")

Window:AddSidebarDivider()
Window:AddSidebarSection("Modules")

local CombatTab = Window:AddTab("Combat", "sword", "Combat features")
local MovementTab = Window:AddTab("Movement", "zap", "Movement mods")`}
        />
      </section>

      <InfoBox type="tip">
        <strong>Icons:</strong> You can use any Lucide icon name (see lucide.dev/icons) or a Roblox asset ID string.
      </InfoBox>
    </div>
    </>
  );
}
