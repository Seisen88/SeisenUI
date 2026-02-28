import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Notifications() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Notifications"
        description="Display temporary notification messages at the top center of the screen with auto-dismiss functionality."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Two Ways to Call</h2>
        <p className="text-[#a0a0a0] mb-4">
          Notifications can be triggered from two sources:
        </p>
        <ul className="list-disc list-inside text-[#a0a0a0] space-y-2 mb-6 ml-2">
          <li>
            <code>Window:Notify()</code> — use this inside callbacks after <code>CreateWindow()</code> has
            been called.
          </li>
          <li>
            <code>Library:Notify()</code> — fully standalone, works even{" "}
            <strong>before</strong> <code>CreateWindow()</code>. Auto-creates its own ScreenGui if
            needed.
          </li>
        </ul>
        <CodeBlock
          code={`-- After CreateWindow:
Window:Notify({
    Title = "Success",
    Content = "Settings have been saved!",
    Duration = 3
})

-- Before CreateWindow (standalone):
Library:Notify({
    Title = "Script Loaded",
    Content = "Initializing, please wait...",
    Duration = 3,
    Image = "info"
})`}
        />
      </section>

      <ConfigTable
        title="Configuration"
        rows={[
          {
            property: "Title",
            type: "string",
            default: '"Notification"',
            description: "The title text displayed in the notification",
          },
          {
            property: "Content",
            type: "string",
            default: '"Content"',
            description: "The main message content of the notification",
          },
          {
            property: "Duration",
            type: "number",
            default: "3",
            description: "How long (in seconds) the notification stays visible before auto-dismissing",
          },
          {
            property: "Image",
            type: "string",
            default: '"rbxassetid://10709791437"',
            description: "Icon asset ID or Lucide icon name to display (e.g. \"check-circle\", \"alert-triangle\", \"info\")",
          },
        ]}
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Examples</h2>
        
        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Success</h3>
        <CodeBlock
          code={`Window:Notify({
    Title = "Success",
    Content = "Your changes have been saved successfully!",
    Duration = 2,
    Image = "check-circle"
})`}
        />

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Warning</h3>
        <CodeBlock
          code={`Window:Notify({
    Title = "Warning",
    Content = "This action cannot be undone.",
    Duration = 5,
    Image = "alert-triangle"
})`}
        />

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Info</h3>
        <CodeBlock
          code={`Window:Notify({
    Title = "Info",
    Content = "Press F9 to open the developer console.",
    Duration = 4,
    Image = "info"
})`}
        />

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Error</h3>
        <CodeBlock
          code={`Window:Notify({
    Title = "Error",
    Content = "Failed to connect to the server.",
    Duration = 5,
    Image = "x-circle"
})`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Triggering from Element Callbacks</h2>
        <p className="text-[#a0a0a0] mb-4">
          You can trigger notifications from any element callback:
        </p>
        <CodeBlock
          code={`Section:AddToggle({
    Name = "Auto Farm",
    Default = false,
    Callback = function(Value)
        Window:Notify({
            Title = Value and "Enabled" or "Disabled",
            Content = "Auto Farm is now " .. (Value and "ON" or "OFF"),
            Duration = 2,
            Image = Value and "check-circle" or "x-circle"
        })
    end
})`}
        />
      </section>

      <InfoBox type="tip">
        <strong>Stacking:</strong> Multiple notifications stack vertically from the top center.
        Each fades in and out smoothly and is automatically cleaned up after its duration.
      </InfoBox>

      <InfoBox type="info">
        <strong>Icons:</strong> Use any Lucide icon name (e.g. <code>check-circle</code>,{" "}
        <code>alert-triangle</code>, <code>info</code>, <code>x-circle</code>,{" "}
        <code>loader</code>) or a Roblox asset ID string.
      </InfoBox>

      <InfoBox type="tip">
        <strong>Standalone usage:</strong> <code>Library:Notify()</code> also works before{" "}
        <code>CreateWindow()</code> is called. See the{" "}
        <a href="/elements/notifications/standalone" className="text-[var(--accent)] hover:underline">
          Standalone
        </a>{" "}
        sub-page for details.
      </InfoBox>
    </div>
    </>
  );
}
