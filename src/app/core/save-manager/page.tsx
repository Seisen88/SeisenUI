import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function SaveManager() {
  return (
    <>
    <TableOfContents />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="SaveManager"
        description="Built-in addon for saving, loading, and auto-loading configuration profiles per script."
      />
      
      <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
        <Image
          src="/images/Savemanager.png"
          alt="SaveManager Preview"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-12">
        <h2 id="setup" className="text-2xl font-semibold text-white mb-4">Setup</h2>
        <p className="text-[#a0a0a0] mb-4">
          Load the SaveManager addon alongside the library, link it, set a folder, then call{" "}
          <code>BuildConfigSection()</code> to add the full config UI to a section.
          At the very end of your script call <code>LoadAutoloadConfig()</code> so saved settings
          are applied on load.
        </p>
        <CodeBlock
          code={`local Repo = "https://raw.githubusercontent.com/Seisen88/Seisen-Library/main/"
local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua"))()
local SaveManager = loadstring(game:HttpGet(Repo .. "addons/SaveManager.lua"))()
local ThemeManager = loadstring(game:HttpGet(Repo .. "addons/ThemeManager.lua"))()

-- Setup
SaveManager:SetLibrary(Library)
SaveManager:SetFolder("MyScript") -- saves to MyScript/Saved/
SaveManager:IgnoreThemeSettings() -- don't save theme options

local Window = Library:CreateWindow({ Name = "My Script" })

-- Add a Settings tab
local SettingsTab = Window:AddTab("Settings", "Settings", "settings")
local RightSection = SettingsTab:AddRightSection("Config")

-- Build the full config UI
SaveManager:BuildConfigSection(RightSection)
ThemeManager:BuildThemeSection(SettingsTab:AddLeftSection("Appearance"))

-- Auto-load saved config at startup
SaveManager:LoadAutoloadConfig()`}
        />
      </section>

      <section className="mb-12">
        <h2 id="core-methods" className="text-2xl font-semibold text-white mb-4">Core Methods</h2>

        <MethodCard
          name="SaveManager:SetLibrary(library)"
          description="Links the SaveManager to the Library instance. Must be called before any other method."
          params="library: table"
          returns="void"
        />

        <MethodCard
          name="SaveManager:SetFolder(path)"
          description="Sets the root folder name where configs are saved on the executor filesystem."
          params="path: string (e.g. 'MyScript')"
          returns="void"
        />

        <MethodCard
          name="SaveManager:SetSubFolder(folder)"
          description="Set an optional sub-folder inside Saved/ to organise configs by game or mode."
          params="folder: string"
          returns="void"
        />

        <MethodCard
          name="SaveManager:BuildConfigSection(section)"
          description="Builds the full config UI (name input, dropdowns, create/load/delete/autoload buttons) into a section."
          params="section: Section object"
          returns="void"
        />
      </section>

      <section className="mb-12">
        <h2 id="save-load" className="text-2xl font-semibold text-white mb-4">Save & Load Methods</h2>

        <MethodCard
          name="SaveManager:Save(name)"
          description="Save current toggle/slider/dropdown/color values to a .json file. Returns success (boolean) and error (string)."
          params="name: string"
          returns="boolean, string"
        />

        <MethodCard
          name="SaveManager:Load(name)"
          description="Load and apply a saved config. Respects Account Exclusive — will reject configs saved by a different user if that flag is set."
          params="name: string"
          returns="boolean, string"
        />

        <MethodCard
          name="SaveManager:Delete(name)"
          description="Delete a saved config file from disk."
          params="name: string"
          returns="boolean, string"
        />

        <MethodCard
          name="SaveManager:RefreshConfigList()"
          description="Returns an up-to-date table of all saved config names in the folder."
          returns="table"
        />
      </section>

      <section className="mb-12">
        <h2 id="autoload" className="text-2xl font-semibold text-white mb-4">Autoload Methods</h2>
        <p className="text-[#a0a0a0] mb-4">
          The autoload system lets users designate a config that loads automatically on script start.
          There are two types: <strong>Normal</strong> (shared across all accounts) and{" "}
          <strong>Account</strong> (per Roblox user ID). Account autoloads take priority.
        </p>

        <MethodCard
          name="SaveManager:LoadAutoloadConfig()"
          description="Checks for a saved autoload config and loads it. Call this at the very end of your script. Account autoloads have priority over Normal."
          returns="void"
        />

        <MethodCard
          name="SaveManager:SaveAutoloadConfig(name, isAccount)"
          description="Mark a config as the autoload target. Pass true for isAccount to make it account-exclusive."
          params="name: string, isAccount: boolean"
          returns="boolean, string"
        />

        <MethodCard
          name="SaveManager:DeleteAutoLoadConfig(isAccount)"
          description="Remove the autoload marker file. Pass true to remove the account autoload, false to remove the normal autoload."
          params="isAccount: boolean"
          returns="boolean, string"
        />

        <MethodCard
          name="SaveManager:GetAutoloadConfig()"
          description="Returns the current autoload config name and type ('Account' or 'Normal'). Returns 'none', 'None' if unset."
          returns="string, string"
        />
      </section>

      <section className="mb-12">
        <h2 id="ignore" className="text-2xl font-semibold text-white mb-4">Ignore Methods</h2>
        <p className="text-[#a0a0a0] mb-4">
          Prevent specific flags from being saved — useful for theme settings and UI-only options.
        </p>

        <MethodCard
          name="SaveManager:IgnoreThemeSettings()"
          description="Automatically ignores all ThemeManager flags so theme choices are not saved in configs."
          returns="void"
        />

        <MethodCard
          name="SaveManager:SetIgnoreIndexes(list)"
          description="Manually ignore specific flags by name."
          params="list: table (array of flag string names)"
          returns="void"
        />

        <CodeBlock
          code={`-- Example: ignore specific flags
SaveManager:SetIgnoreIndexes({ "MyToggle", "AdminPanel" })

-- Ignore all theme settings at once
SaveManager:IgnoreThemeSettings()`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Manual Save / Load Example</h2>
        <p className="text-[#a0a0a0] mb-4">
          You can also call Save/Load manually from button callbacks:
        </p>
        <CodeBlock
          code={`local success, err = SaveManager:Save("MyConfig")
if success then
    Window:Notify({ Title = "Saved", Content = "Config saved!", Duration = 2 })
else
    Window:Notify({ Title = "Error", Content = err, Duration = 4 })
end

local success, err = SaveManager:Load("MyConfig")
if not success then
    Window:Notify({ Title = "Load Failed", Content = err, Duration = 4 })
end`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">What Gets Saved</h2>
        <p className="text-[#a0a0a0] mb-4">
          SaveManager automatically serializes all flagged elements:
        </p>
        <ConfigTable
          rows={[
            { property: "Toggle", type: "boolean", default: "-", description: "Stored via Library.Toggles[flag]" },
            { property: "Slider", type: "number", default: "-", description: "Stored via Library.Options[flag]" },
            { property: "Dropdown", type: "string | table", default: "-", description: "Stored via Library.Options[flag], supports Multi" },
            { property: "ColorPicker", type: "Color3", default: "-", description: "Saved as hex string, loaded back as Color3" },
            { property: "Input (Textbox)", type: "string", default: "-", description: "Stored via Library.Options[flag]" },
          ]}
        />
      </section>

      <InfoBox type="tip">
        <strong>Auto-Load:</strong> Always call <code>SaveManager:LoadAutoloadConfig()</code> at the
        very end of your script, after all elements are defined, so values are applied to existing
        UI elements.
      </InfoBox>

      <InfoBox type="info">
        <strong>Account Exclusive:</strong> When a config is saved with the{" "}
        <em>Account Exclusive</em> toggle enabled, it stores the user&apos;s Roblox UserId.
        If someone else tries to load it, the load will be rejected.
      </InfoBox>
    </div>
    </>
  );
}
