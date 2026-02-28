import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function GettingStarted() {
  return (
    <>
    <TableOfContents />
    <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Getting Started"
        description="Welcome to the Seisen UI documentation. Learn how to create beautiful, modern UI for your Roblox scripts."
      />
      
      <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
        <Image
          src="/images/Introduction.png"
          alt="Seisen UI Introduction"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">What is Seisen UI?</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed mb-4">
            Seisen UI is a modern, feature-rich UI library for Roblox script development. 
            It provides a clean, dark-themed interface with a sidebar navigation, tabbed content, 
            and a comprehensive set of UI elements including toggles, sliders, dropdowns, and more.
          </p>
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed">
            The library is designed to be easy to use while offering advanced customization options 
            for power users. It includes theme management, configuration saving/loading, and 
            real-time responsiveness.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed">
            Copy and paste this code into your script to get started with Seisen UI:
          </p>
        </div>
        <CodeBlock
          title="quickstart.lua"
          code={`local Repo = "https://raw.githubusercontent.com/Seisen88/Seisen-Library/main/"
local Library = loadstring(game:HttpGet(Repo .. "SeisenUI.lua"))()

-- Create a window
local Window = Library:CreateWindow({
    Name = "My Script",
    Icon = "home",
    ToggleKeybind = Enum.KeyCode.RightShift
})

-- Add a tab
local MainTab = Window:AddTab("Main", "Main Features", "home")

-- Add a section
local Section = MainTab:AddSection("Settings", "Left")

-- Add a toggle
Section:AddToggle({
    Name = "Enable Feature",
    Default = false,
    Callback = function(Value)
        print("Feature enabled:", Value)
    end
})

print("Script loaded!")`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FeatureCard
            title="🎨 Theming"
            description="35+ built-in themes with live switching. Create your perfect look."
          />
          <FeatureCard
            title="💾 Config Saving"
            description="Save and load configurations with the built-in SaveManager."
          />
          <FeatureCard
            title="🎯 Modern UI Elements"
            description="Toggles, sliders, dropdowns, color pickers, keybinds, and more."
          />
          <FeatureCard
            title="📱 Responsive"
            description="Resize and scale the UI in real-time with smooth animations."
          />
          <FeatureCard
            title="🔍 Search"
            description="Built-in search functionality for quick navigation."
          />
          <FeatureCard
            title="🎮 Keybind Support"
            description="Toggle UI visibility and bind actions to keyboard shortcuts."
          />
        </div>
      </section>

      <InfoBox type="tip">
        <strong>Pro tip:</strong> Use the sidebar navigation to explore all available UI elements 
        and their configuration options.
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
