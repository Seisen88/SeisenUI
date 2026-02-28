import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function StandaloneNotifications() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
        <PageHeader
          title="Standalone Notifications"
          description="Library:Notify() works independently — no CreateWindow() required."
        />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
          <p className="text-[#a0a0a0] mb-4">
            <code>Library:Notify()</code> is fully standalone. It can be called directly on the
            Library object at any point in your script — even <strong>before</strong>{" "}
            <code>CreateWindow()</code> is called. When no notification container exists yet, it
            automatically creates a temporary <code>ScreenGui</code> named{" "}
            <code>SeisenNotify</code> to host the notifications.
          </p>
          <p className="text-[#a0a0a0] mb-4">
            Once <code>CreateWindow()</code> has been called, all subsequent{" "}
            <code>Library:Notify()</code> calls automatically reuse the window&apos;s built-in
            notification container — so notifications always appear consistently.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Usage Before CreateWindow</h2>
          <CodeBlock
            code={`local Repo = "https://raw.githubusercontent.com/Seisen88/Seisen-Library/main/"
local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua"))()

-- Works immediately after loading — no window needed
Library:Notify({
    Title = "Loading",
    Content = "Fetching game data...",
    Duration = 3,
    Image = "loader"
})

-- Later, create the window as normal
local Window = Library:CreateWindow({ Name = "My Script" })`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Use with Game Restriction</h2>
          <p className="text-[#a0a0a0] mb-4">
            This is used internally by <code>Library:SetGameId()</code> to show an
            &quot;Unauthorized Game&quot; notification before the window is ever created:
          </p>
          <CodeBlock
            code={`local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua"))()

-- SetGameId calls Library:Notify() internally if unauthorized
if not Library:SetGameId(1234567890) then return end

-- Only reaches here if authorized
local Window = Library:CreateWindow({ Name = "My Script" })`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">How It Works</h2>
          <div className="space-y-3">
            <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1 text-sm">1. Library loads</h3>
              <p className="text-xs text-[#a0a0a0]">
                <code>Library.NotificationContainer</code> is <code>nil</code>.
              </p>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1 text-sm">2. Library:Notify() called early</h3>
              <p className="text-xs text-[#a0a0a0]">
                Detects <code>NotificationContainer</code> is nil → creates a{" "}
                <code>SeisenNotify</code> ScreenGui + container frame automatically.
              </p>
            </div>
            <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-1 text-sm">3. CreateWindow() called</h3>
              <p className="text-xs text-[#a0a0a0]">
                Sets <code>Library.NotificationContainer</code> to the window&apos;s real
                container. All future <code>Library:Notify()</code> calls use it.
              </p>
            </div>
          </div>
        </section>

        <InfoBox type="info">
          <strong>Same options:</strong> <code>Library:Notify()</code> accepts the exact same{" "}
          <code>Title</code>, <code>Content</code>, <code>Duration</code>, and{" "}
          <code>Image</code> options as <code>Window:Notify()</code>.
        </InfoBox>

        <InfoBox type="tip">
          <strong>Tip:</strong> Prefer <code>Window:Notify()</code> inside element callbacks
          after the window is created. Use <code>Library:Notify()</code> for pre-window alerts
          like game locks or loading messages.
        </InfoBox>
      </div>
    </>
  );
}
