import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function InternalTabBox() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Internal TabBox"
        description="Create tabbed containers within sections to organize related elements into multiple tabs."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Usage</h2>
        <CodeBlock
          code={`local MyTabbox = Section:AddTabbox({
    Name = "Settings"
})

local Tab1 = MyTabbox:AddTab("General")
local Tab2 = MyTabbox:AddTab("Advanced")

-- Add elements to Tab1
Tab1:AddToggle({
    Name = "Enable Feature",
    Default = false,
    Callback = function(Value)
        print("Feature:", Value)
    end
})

-- Add elements to Tab2
Tab2:AddSlider({
    Name = "Speed",
    Min = 0,
    Max = 100,
    Default = 50,
    Callback = function(Value)
        print("Speed:", Value)
    end
})`}
        />
      </section>

      <ConfigTable
        title="TabBox Configuration"
        rows={[
          {
            property: "Name",
            type: "string",
            default: '"Tabbox"',
            description: "The name/title displayed above the tabbox",
            required: true,
          },
        ]}
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Tab Methods</h2>
        <p className="text-[#a0a0a0] mb-4">
          Each tab returned by <code>AddTab()</code> supports the following element methods:
        </p>
        <ul className="list-disc list-inside text-[#a0a0a0] space-y-2 ml-4">
          <li><code>AddLabel()</code> - Add text labels</li>
          <li><code>AddToggle()</code> - Add toggle switches</li>
          <li><code>AddButton()</code> - Add clickable buttons</li>
          <li><code>AddSlider()</code> - Add value sliders</li>
          <li><code>AddDropdown()</code> - Add dropdown menus</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Complete Example</h2>
        <CodeBlock
          code={`local VisualBox = VisualsTab:AddLeftSection("Visuals & Logic")

local Tabbox = VisualBox:AddTabbox({
    Name = "Display Options"
})

-- Tab 1: ESP Settings
local ESPTab = Tabbox:AddTab("ESP")
ESPTab:AddToggle({
    Name = "Show Players",
    Default = true,
    Callback = function(Value)
        -- Toggle player ESP
    end
})

ESPTab:AddToggle({
    Name = "Show Items",
    Default = false,
    Callback = function(Value)
        -- Toggle item ESP
    end
})

-- Tab 2: UI Settings
local UITab = Tabbox:AddTab("UI")
UITab:AddSlider({
    Name = "Opacity",
    Min = 0,
    Max = 100,
    Default = 80,
    Callback = function(Value)
        -- Adjust UI opacity
    end
})

UITab:AddDropdown({
    Name = "Theme",
    Options = {"Dark", "Light", "Auto"},
    Default = "Dark",
    Callback = function(Value)
        -- Change theme
    end
})`}
        />
      </section>

      <InfoBox type="tip">
        <strong>Auto-Sizing:</strong> Internal TabBoxes automatically resize to fit their content. 
        No scrollbars will appear - the container expands as needed.
      </InfoBox>

      <InfoBox type="info">
        <strong>Organization:</strong> Use TabBoxes to group related settings without cluttering 
        your sections. Perfect for categorizing features like ESP, Aimbot, or UI customization.
      </InfoBox>
    </div>
    </>
  );
}
