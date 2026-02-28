import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Template() {
  return (
    <>
    <TableOfContents />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Template"
        description="A comprehensive template showcasing all UI elements and methods available in Seisen UI."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed mb-4">
            This template provides a complete, production-ready example that demonstrates every feature of Seisen UI. 
            Use it as a starting point for your own scripts or as a reference for implementing specific elements.
          </p>
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed">
            The template includes: Window creation, all UI elements, TabBoxes, DependencyBoxes, Theme Manager, 
            Save Manager, Tags, and more.
          </p>
        </div>
      </section>

      <InfoBox type="tip">
        <strong>Pro tip:</strong> Copy this template and modify it to fit your needs. All elements are 
        properly configured with flags for saving/loading configurations.
      </InfoBox>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Full Template Code</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed">
            💡 This template includes detailed comments explaining each section and feature, plus a new Tags tab demonstration.
          </p>
        </div>
        <CodeBlock
          title="template.lua"
          language="lua"
          code={`local Repo = "https://raw.githubusercontent.com/Seisen88/Seisen-Library/main/"
local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua?v="))()
local ThemeManager = loadstring(game:HttpGet(Repo .. "addons/ThemeManager.lua"))()
local SaveManager = loadstring(game:HttpGet(Repo .. "addons/SaveManager.lua"))()

local Window = Library:CreateWindow({
    Name = "SeisenUI",
    Icon = "rbxassetid://125926861378074",
    Theme = Library.Theme,
    ToggleKeybind = Enum.KeyCode.LeftAlt,
    Version = "v1.0.0",
    SubTitle = "Seisen Library"
})

Window:AddSidebarSection("Main Navigation")

local HomeTab = Window:AddTab("Home", "Welcome", "user")
local HomeSection = HomeTab:AddSection("Information", "Left")
HomeSection:AddLabel({ Text = "Welcome to the Seisen UI Template!" })
HomeSection:AddLabel({ Text = "This script demonstrates every feature." })
HomeSection:AddDivider("Controls")
HomeSection:AddLabel({ Text = "Left Alt to toggle UI" })

Window:AddSidebarDivider()
Window:AddSidebarSection("Components")

local ElementsTab = Window:AddTab("Elements", "Inputs & Logic", "box")

local ToggleBox = ElementsTab:AddLeftSection("Toggles & Actions")

ToggleBox:AddToggle({
    Name = "Standard Toggle",
    Default = false,
    Flag = "Toggle1",
    Callback = function(Value)
        print("Toggle 1:", Value)
        Window:Notify({
            Title = "Toggle Updated",
            Content = "Standard Toggle is now " .. tostring(Value),
            Duration = 2
        })
    end,
    Tooltip = "This is a standard toggle with a tooltip!"
})

ToggleBox:AddToggle({
    Name = "Toggle with Keybind",
    Default = true,
    Flag = "ToggleKey",
    Keybind = Enum.KeyCode.Q,
    Callback = function(Value)
        print("Toggle Key:", Value)
    end
})

ToggleBox:AddCheckbox({
    Name = "Checkbox Style",
    Default = false,
    Flag = "Check1",
    Callback = function(Value)
        print("Checkbox:", Value)
    end
})

ToggleBox:AddDivider()

ToggleBox:AddButton({
    Name = "Simple Button",
    Callback = function()
        print("Button Clicked")
    end,
    Tooltip = "This button also has a tooltip"
})

ToggleBox:AddButton({
    Name = "Trigger Notification",
    Callback = function()
        Window:Notify({
            Title = "Test Notification",
            Content = "This is a test notification with a longer description.",
            Duration = 5
        })
    end
})

local KeybindBox = ElementsTab:AddLeftSection("Keybinds")
KeybindBox:AddKeybind({
    Name = "Standalone Keybind",
    Default = "E",
    Mode = "Toggle",
    Flag = "Keybind1",
    Callback = function()
        print("Keybind Pressed")
    end
})

local InputBox = ElementsTab:AddRightSection("Values & Inputs")

InputBox:AddSlider({
    Name = "Integer Slider",
    Min = 0,
    Max = 100,
    Default = 50,
    Flag = "SliderInt",
    Callback = function(Value)
        print("Slider Int:", Value)
    end
})

InputBox:AddSlider({
    Name = "Steps Slider",
    Min = 0,
    Max = 10,
    Default = 5,
    Flag = "SliderStep",
    Callback = function(Value)
        print("Slider Step:", Value)
    end
})

InputBox:AddDivider("Selections")

InputBox:AddDropdown({
    Name = "Single Selection",
    Options = {"Option A", "Option B", "Option C"},
    Default = "Option A",
    Flag = "Drop1",
    Callback = function(Value)
        print("Dropdown:", Value)
        Window:Notify({
            Title = "Selection Changed",
            Content = "You selected: " .. tostring(Value),
            Duration = 3,
            Image = "rbxassetid://10723415903"
        })
    end
})

InputBox:AddTextbox({
    Name = "Text Input",
    Default = "",
    Placeholder = "Type here...",
    Flag = "Text1",
    Callback = function(Value)
        print("Text Input:", Value)
    end
})

InputBox:AddColorPicker({
    Name = "Accent Color",
    Default = Color3.fromRGB(0, 200, 100),
    Flag = "Color1",
    Callback = function(Value)
        print("Color Picked:", Value)
    end
})

local AdvancedTab = Window:AddTab("Advanced", "Complex Items", "layers")

local LeftTabbox = AdvancedTab:AddLeftTabbox("Nested Tabs")

local NestedTab1 = LeftTabbox:AddTab("Settings A")
NestedTab1:AddToggle({ Name = "Nested Toggle 1", Flag = "NestT1" })
NestedTab1:AddButton({ Name = "Nested Action", Callback = function() print("Nest 1") end })

local NestedTab2 = LeftTabbox:AddTab("Settings B")
NestedTab2:AddLabel({ Text = "This is a second tab inside a box." })
NestedTab2:AddSlider({ Name = "Nested Slider", Min = 0, Max = 10, Default = 1, Flag = "NestS1" })

local VisualBox = AdvancedTab:AddRightSection("Visuals & Logic")

local InternalTabbox = VisualBox:AddTabbox({ Name = "Internal Tabbox" })

local IT1 = InternalTabbox:AddTab("Tab 1")
IT1:AddLabel({ Text = "This is inside a section!" })
IT1:AddButton({ Name = "Click Me", Callback = function() print("Internal Tab 1") end })

local IT2 = InternalTabbox:AddTab("Tab 2")
IT2:AddLabel({ Text = "Tab 2 Content" })

VisualBox:AddDivider("Logic")

VisualBox:AddLabel({ Text = "Dependency Box Demo:" })
VisualBox:AddToggle({
    Name = "Enable Detail View",
    Default = false,
    Flag = "ShowDetails"
})

local DepBox = VisualBox:AddDependencyBox({
    DependsOn = "ShowDetails"
})

DepBox:AddLabel({ Text = "You can only see this if the toggle above is ON." })
DepBox:AddButton({ Name = "Secret Action", Callback = function() print("Secret!") end })

VisualBox:AddDivider("Media")

local TestPart = Instance.new("Part")
TestPart.Color = Color3.fromRGB(0, 150, 255)
TestPart.Material = Enum.Material.Neon
local ViewportParams = VisualBox:AddViewport({ Height = 100 })
ViewportParams:SetModel(TestPart)

VisualBox:AddImage({
    Image = "rbxassetid://125926861378074",
    Height = 80
})

local params = VisualBox:AddPassthrough({ Height = 30 })
local customLabel = Instance.new("TextLabel")
customLabel.Size = UDim2.new(1, 0, 1, 0)
customLabel.BackgroundTransparency = 1
customLabel.Text = "Custom Passthrough Element"
customLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
customLabel.Font = Enum.Font.Code
customLabel.Parent = params

local SettingsTab = Window:AddTab("Settings", "Theme & Config", "settings")

ThemeManager:SetLibrary(Library)
SaveManager:SetLibrary(Library)

SaveManager:IgnoreThemeSettings()
SaveManager:SetIgnoreIndexes({ 'MenuKeybind' })
ThemeManager:SetFolder("SeisenTemplate")
SaveManager:SetFolder("SeisenTemplate/Main")

ThemeManager:BuildThemeSection(SettingsTab)
SaveManager:BuildConfigSection(SettingsTab)

local UISettings = SettingsTab:AddRightSection("UI Settings")
UISettings:AddSlider({
    Name = "UI Scale",
    Min = 90,
    Max = 120,
    Default = 100,
    Callback = function(Value)
        Window:SetScale(Value / 100)
    end
})

print("Seisen UI Template Loaded")`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard
            title="📦 All UI Elements"
            description="Toggles, Buttons, Sliders, Dropdowns, Textboxes, Checkboxes, Keybinds, Color Pickers"
          />
          <FeatureCard
            title="🎨 Theme Manager"
            description="Pre-configured theme switching with 35+ built-in themes"
          />
          <FeatureCard
            title="💾 Save Manager"
            description="Automatic config saving and loading functionality"
          />
          <FeatureCard
            title="📑 TabBoxes"
            description="Nested tabs for organizing complex interfaces"
          />
          <FeatureCard
            title="🔗 Dependency Boxes"
            description="Conditional UI elements based on toggle states"
          />
          <FeatureCard
            title="🖼️ Media Elements"
            description="Images, Viewports, and custom Passthrough elements"
          />
          <FeatureCard
            title="🏷️ Tags System"
            description="Organize and categorize your features with tags"
          />
          <FeatureCard
            title="⚙️ UI Scaling"
            description="Dynamic UI scaling with slider control"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Quick Customization</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed mb-4">
            To customize the template for your script:
          </p>
          <ul className="list-disc list-inside text-[#a0a0a0] font-mono text-sm space-y-2 ml-4">
            <li>Change the window name and icon</li>
            <li>Modify the toggle keybind</li>
            <li>Add/remove tabs based on your needs</li>
            <li>Update section names and elements</li>
            <li>Change SaveManager folder names</li>
          </ul>
        </div>
      </section>

      <InfoBox type="warning">
        <strong>Note:</strong> Make sure to update the SaveManager and ThemeManager folder names 
        to match your script name to avoid conflicts with other scripts.
      </InfoBox>
    </div>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#111111] border border-[#2d2d32] rounded-lg p-4 hover:border-[#00c864]/50 transition-colors">
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#a0a0a0]">{description}</p>
    </div>
  );
}
