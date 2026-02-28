import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Library() {
  return (
    <>
    <TableOfContents />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Library"
        description="Core library methods available globally after loading Seisen UI."
      />

      <section className="mb-12">
        <h2 id="loading" className="text-2xl font-semibold text-white mb-4">Loading the Library</h2>
        <CodeBlock
          code={`local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/Seisen88/Seisen-Library/main/SeisenUI.lua"))()`}
        />
      </section>

      <section className="mb-12">
        <h2 id="methods" className="text-2xl font-semibold text-white mb-4">Library Methods</h2>

        <MethodCard
          name="Library:CreateWindow(options)"
          description="Create the main UI window. This is the first thing you call after loading the library."
          params="options: table (see Window documentation)"
          returns="Window object"
        />

        <MethodCard
          name="Library:Toggle(state)"
          description="Toggle the UI visibility on/off. If state is provided (boolean), it sets the visibility to that state. Otherwise, it flips the current state."
          params="state: boolean (optional)"
          returns="void"
        />

        <MethodCard
          name="Library:Unload()"
          description="Completely destroy and clean up the UI. Use this when unloading your script."
          returns="void"
        />

        <MethodCard
          name="Library:ApplyTheme(themeName)"
          description="Apply a built-in theme by name."
          params="themeName: string"
          returns="void"
        />

        <MethodCard
          name="Library:SetGameId(gameId)"
          description="Restrict your script to specific games. Pass a single Game ID or a table of IDs. Shows an 'Unauthorized Game' notification and returns false if unauthorized. Must be used with an if-check to halt execution."
          params="gameId: number | table"
          returns="boolean"
        />

        <MethodCard
          name="Library:Notify(options)"
          description="Display a temporary notification at the top center of the screen. Fully standalone — works before or without CreateWindow(). If called before CreateWindow, it auto-creates its own temporary ScreenGui."
          params="options: table (Title, Content, Duration, Image)"
          returns="void"
        />
      </section>

      <section className="mb-12">
        <h2 id="properties" className="text-2xl font-semibold text-white mb-4">Library Properties</h2>
        <ConfigTable
          rows={[
            {
              property: "Library.ScreenGui",
              type: "ScreenGui",
              default: "-",
              description: "Reference to the main ScreenGui instance",
            },
            {
              property: "Library.Theme",
              type: "table",
              default: "Default theme",
              description: "Current theme color configuration",
            },
            {
              property: "Library.Options",
              type: "table",
              default: "{}",
              description: "All UI elements with Flag property (sliders, dropdowns, etc.)",
            },
            {
              property: "Library.Toggles",
              type: "table",
              default: "{}",
              description: "All toggle elements with Flag property",
            },
            {
              property: "Library.ToggleKeybind",
              type: "Enum.KeyCode",
              default: "nil",
              description: "Key used to toggle UI visibility",
            },
            {
              property: "Library.NotificationContainer",
              type: "Frame | nil",
              default: "nil",
              description: "Container frame for notifications. Auto-created by Notify() if nil; set by CreateWindow() when the window is built.",
            },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 id="accessing" className="text-2xl font-semibold text-white mb-4">Accessing Elements</h2>
        <CodeBlock
          code={`-- Access a toggle by its Flag
local isEnabled = Library.Toggles.MyToggle.Value
Library.Toggles.MyToggle:SetValue(true)

-- Access a slider/dropdown by its Flag
local speed = Library.Options.WalkSpeed.Value
Library.Options.WalkSpeed:SetValue(25)`}
        />
      </section>

      <InfoBox type="warning">
        <strong>Important:</strong> Always use <code>Library:Unload()</code> before disconnecting 
        or reloading your script to properly clean up connections.
      </InfoBox>
    </div>
    </>
  );
}
