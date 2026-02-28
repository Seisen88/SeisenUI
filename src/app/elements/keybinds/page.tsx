import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Keybinds() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Keybinds"
        description="An input for capturing keyboard shortcuts that trigger actions."
      />

      <section className="mb-12">
        <h2 id="usage" className="text-2xl font-semibold text-white mb-4">Usage</h2>
        <CodeBlock
          code={`Section:AddKeybind({
    Name = "Activate",
    Default = "E",
    Mode = "Toggle",
    Flag = "ActivateKey",
    Callback = function()
        print("Keybind pressed!")
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
            default: '"Keybind"',
            description: "Display name shown next to the keybind",
            required: true,
          },
          {
            property: "Default",
            type: "string",
            default: '""',
            description: "Initial key (e.g., 'E', 'F', 'LeftShift')",
          },
          {
            property: "Mode",
            type: "string",
            default: '"Toggle"',
            description: "How the keybind works: 'Toggle', 'Hold', or 'Always'",
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
            description: "Function called when the keybind is activated",
          },
        ]}
      />

      <section className="mb-12">
        <h2 id="modes" className="text-2xl font-semibold text-white mb-4">Keybind Modes</h2>
        <ul className="space-y-3 text-[#a0a0a0]">
          <li>
            <strong className="text-white">Toggle:</strong> Press once to enable, press again to disable
          </li>
          <li>
            <strong className="text-white">Hold:</strong> Active only while the key is held down
          </li>
          <li>
            <strong className="text-white">Always:</strong> Triggers every time the key is pressed
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 id="methods" className="text-2xl font-semibold text-white mb-4">Methods</h2>
        <MethodCard
          name="Keybind:SetValue(key)"
          description="Programmatically change the bound key."
          params="key: Enum.KeyCode"
          returns="void"
        />
        <MethodCard
          name="Keybind:SetVisible(visible)"
          description="Show or hide the keybind element."
          params="visible: boolean"
          returns="void"
        />
        <MethodCard
          name="Keybind:SetDisabled(disabled)"
          description="Enable or disable the keybind (prevents rebinding and activation)."
          params="disabled: boolean"
          returns="void"
        />
        <MethodCard
          name="Keybind:SetTooltip(text)"
          description="Update the hover tooltip text."
          params="text: string"
          returns="void"
        />
      </section>

      <section className="mb-12">
        <h2 id="accessing" className="text-2xl font-semibold text-white mb-4">Accessing & Updating</h2>
        <CodeBlock
          code={`local MyBind = Section:AddKeybind({
    Name = "Activate",
    Default = "E",
    Mode = "Toggle",
    Flag = "ActivateKey",
    Callback = function()
        print("Activated!")
    end
})

-- Change key programmatically
MyBind:SetValue(Enum.KeyCode.F)

-- Read current key via Flag
local currentKey = Library.Options.ActivateKey.Value
print(currentKey.Name)`}
        />
      </section>

      <InfoBox type="info">
        <strong>Rebinding:</strong> Users can click on the keybind button and press a new key to change it.
        Press <code>Escape</code> or <code>Backspace</code> to clear the binding.
      </InfoBox>
    </div>
    </>
  );
}

