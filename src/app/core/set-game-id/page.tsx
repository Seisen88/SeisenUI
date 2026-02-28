import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, MethodCard, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function GameRestriction() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
        <PageHeader
          title="Game Restriction"
          description="Restrict your script to specific Roblox games. Shows a notification and halts execution if the game doesn't match."
        />

        <section className="mb-12">
          <h2 id="usage" className="text-2xl font-semibold text-white mb-4">Usage</h2>
          <p className="text-[#a0a0a0] mb-4">
            Call <code>Library:SetGameId()</code> immediately after loading the library — before{" "}
            <code>Library:CreateWindow()</code>. If the player is on an unauthorized game, a
            notification is shown and the script returns <code>false</code>.
          </p>
          <CodeBlock
            code={`local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua"))()

-- Lock to a single game
if not Library:SetGameId(1234567890) then return end

-- Continue with the rest of your script...
local Window = Library:CreateWindow({ Name = "My Script" })`}
          />
        </section>

        <section className="mb-12">
          <h2 id="multi-game" className="text-2xl font-semibold text-white mb-4">Multi-Game Example</h2>
          <p className="text-[#a0a0a0] mb-4">
            Pass a table of Game IDs to allow multiple games:
          </p>
          <CodeBlock
            code={`-- Allow multiple games
if not Library:SetGameId({1234567890, 9876543210}) then return end`}
          />
        </section>

        <section className="mb-12">
          <MethodCard
            name="Library:SetGameId(gameId)"
            description="Check if the current game matches the provided Game ID(s). Shows an 'Unauthorized Game' notification and returns false if not authorized. Returns true if authorized."
            params="gameId: number | table"
            returns="boolean"
          />
        </section>

        <ConfigTable
          title="Parameters"
          rows={[
            {
              property: "gameId",
              type: "number | table",
              default: "-",
              description: "A single Game ID (number) or a table of Game IDs to authorize",
              required: true,
            },
          ]}
        />

        <section className="mb-12">
          <h2 id="finding-id" className="text-2xl font-semibold text-white mb-4">Finding Your Game ID</h2>
          <p className="text-[#a0a0a0] mb-4">
            The Game ID is the <strong>Universe ID</strong> — not the Place ID. You can find it by:
          </p>
          <ul className="list-disc list-inside text-[#a0a0a0] space-y-2 mb-4">
            <li>Going to your game on Roblox.com → the number in the URL after <code>/games/</code></li>
            <li>Running <code>print(game.GameId)</code> in the Roblox Studio output</li>
            <li>Checking the Creator Dashboard under your game&apos;s settings</li>
          </ul>
          <CodeBlock code={`-- Print your current game's Universe ID
print(game.GameId)`} />
        </section>

        <InfoBox type="tip">
          <strong>Pattern:</strong> Always use{" "}
          <code>if not Library:SetGameId(...) then return end</code> so the script stops completely
          when the check fails. Calling <code>Library:SetGameId()</code> without checking its return
          value will not stop execution.
        </InfoBox>

        <InfoBox type="info">
          <strong>Standalone Notify:</strong> <code>SetGameId</code> uses{" "}
          <code>Library:Notify()</code> internally. The notification works even before{" "}
          <code>CreateWindow()</code> is called — it creates its own temporary ScreenGui.
        </InfoBox>

        <section className="mb-12 mt-8">
          <h2 id="return-values" className="text-2xl font-semibold text-white mb-4">Return Values</h2>
          <ConfigTable
            rows={[
              {
                property: "true",
                type: "boolean",
                default: "-",
                description: "Current game.GameId matches the provided ID(s) — script may continue",
              },
              {
                property: "false",
                type: "boolean",
                default: "-",
                description: "Game not authorized — notification shown, script should return",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
}
