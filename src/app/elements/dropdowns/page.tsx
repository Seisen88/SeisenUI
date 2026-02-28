import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Dropdowns() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Dropdowns"
        description="A selection menu that allows users to choose from a list of options."
      />
      
      <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
        <Image
          src="/images/Dropdown.png"
          alt="Dropdown Preview"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-12">
        <h2 id="usage" className="text-2xl font-semibold text-white mb-4">Usage</h2>
        <CodeBlock
          code={`Section:AddDropdown({
    Name = "Select Mode",
    Options = {"Option A", "Option B", "Option C"},
    Default = "Option A",
    Multi = false, -- Optional: Set to true for multi-select
    Flag = "ModeSelection",
    Callback = function(Value)
        print("Selected:", Value)
    end
})`}
        />
      </section>

      <ConfigTable
        title="Configuration"
        rows={[
          {
            property: "Name",
            type: "string",
            default: '"Dropdown"',
            description: "Display name shown above the dropdown",
            required: true,
          },
          {
            property: "Options",
            type: "table",
            default: "{}",
            description: "Array of options to display in the dropdown",
            required: true,
          },
          {
            property: "Default",
            type: "string | table",
            default: "First option",
            description: "Initially selected option (string) or table of options (if Multi is true)",
          },
          {
            property: "Multi",
            type: "boolean",
            default: "false",
            description: "Allow selecting multiple options. Callback receives a table of values.",
          },
          {
            property: "Flag",
            type: "string",
            default: "nil",
            description: "Unique identifier for saving/referencing",
          },
          {
            property: "Callback",
            type: "function",
            default: "nil",
            description: "Function called when selection changes. Receives value (string) or table (if Multi).",
          },
        ]}
      />

      <section className="mb-12">
        <h2 id="methods" className="text-2xl font-semibold text-white mb-4">Methods</h2>
        <MethodCard
          name="Dropdown:SetValue(value)"
          description="Programmatically set the selected option."
          params="value: string | table"
          returns="void"
        />
        <MethodCard
          name="Dropdown:Refresh(options, keepCurrent)"
          description="Update the list of options in the dropdown."
          params="options: table, keepCurrent: boolean"
          returns="void"
        />
      </section>

      <section className="mb-12">
        <h2 id="multi-select" className="text-2xl font-semibold text-white mb-4">Multi-Select Example</h2>
        <CodeBlock
          code={`Section:AddDropdown({
    Name = "Select Targets",
    Options = {"Player", "NPC", "Boss"},
    Default = {"Player"}, -- Use table for default when Multi is true
    Multi = true, 
    Flag = "TargetSettings",
    Callback = function(Values)
        -- Values is a table containing all selected options
        print("Selected count:", #Values)
        for _, val in ipairs(Values) do
            print(val)
        end
    end
})`}
        />
      </section>

      <section className="mb-12">
        <h2 id="dynamic" className="text-2xl font-semibold text-white mb-4">Dynamic Options Example</h2>
        <CodeBlock
          code={`-- Get players for dropdown
local function getPlayers()
    local players = {}
    for _, player in ipairs(game.Players:GetPlayers()) do
        table.insert(players, player.Name)
    end
    return players
end

Section:AddDropdown({
    Name = "Target Player",
    Options = getPlayers(),
    Default = "Select...",
    Flag = "TargetPlayer",
    Callback = function(playerName)
        local target = game.Players:FindFirstChild(playerName)
        if target then
            print("Target set to:", target)
        end
    end
})`}
        />
      </section>
    </div>
    </>
  );
}
