import Image from "next/image";
import { CodeBlock } from "@/components/CodeBlock";
import { ConfigTable } from "@/components/ConfigTable";
import { PageHeader, InfoBox } from "@/components/DocComponents";
import { TableOfContents } from "@/components/TableOfContents";

export default function Tags() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-8 py-12">
      <PageHeader
        title="Tags (Version & SubTitle)"
        description="Add visual tags to your window header with Version (green/accent pill) and SubTitle (blue pill)."
      />
      
      <div className="my-8 rounded-lg overflow-hidden border border-[var(--border)]">
        <Image
          src="/images/Tags.png"
          alt="Tags Preview"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
        <div className="bg-[#0d0d0d] border border-[#2d2d32] rounded-lg p-6 mb-4">
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed mb-4">
            Tags are visual pills displayed in the window header that show important information like 
            version numbers and subtitles. They appear as colored badges next to your window title.
          </p>
          <p className="text-[#a0a0a0] font-mono text-sm leading-relaxed">
            <strong className="text-green-400">Version</strong> appears as a green (accent) pill and 
            <strong className="text-blue-400"> SubTitle</strong> appears as a blue pill.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Usage</h2>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "My Script",
    Icon = "home",
    Theme = Library.Theme,
    ToggleKeybind = Enum.KeyCode.LeftAlt,
    Version = "v1.6.41",      -- Green (accent) pill tag
    SubTitle = "UI Library"   -- Blue pill tag
})`}
        />
      </section>

      <ConfigTable
        title="Configuration"
        rows={[
          {
            property: "Version",
            type: "string",
            default: "nil",
            description: "Version number displayed as a green (accent) pill in the window header",
          },
          {
            property: "SubTitle",
            type: "string",
            default: "nil",
            description: "Subtitle text displayed as a blue pill in the window header",
          },
        ]}
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Examples</h2>
        
        <h3 className="text-xl font-semibold text-white mb-3">Version Only</h3>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "Combat Script",
    Version = "v2.1.0"
})`}
        />

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">SubTitle Only</h3>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "ESP Features",
    SubTitle = "Premium"
})`}
        />

        <h3 className="text-xl font-semibold text-white mb-3 mt-6">Both Tags</h3>
        <CodeBlock
          code={`local Window = Library:CreateWindow({
    Name = "Universal Script",
    Version = "v3.0.5",
    SubTitle = "Beta Release"
})`}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Use Cases</h2>
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[#2d2d32] rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">🏷️ Version Tracking</h3>
            <p className="text-sm text-[#a0a0a0]">
              Display your script version number to help users know which version they're using
            </p>
          </div>
          <div className="bg-[#111111] border border-[#2d2d32] rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">📌 Status Indicators</h3>
            <p className="text-sm text-[#a0a0a0]">
              Show script status like "Beta", "Premium", "Free", "Pro", etc.
            </p>
          </div>
          <div className="bg-[#111111] border border-[#2d2d32] rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">🎯 Branding</h3>
            <p className="text-sm text-[#a0a0a0]">
              Add your brand name or script category as a subtitle
            </p>
          </div>
          <div className="bg-[#111111] border border-[#2d2d32] rounded-lg p-4">
            <h3 className="font-semibold text-white mb-2">⚠️ Release Stage</h3>
            <p className="text-sm text-[#a0a0a0]">
              Indicate development stage: "Alpha", "Beta", "Stable", "Experimental"
            </p>
          </div>
        </div>
      </section>

      <InfoBox type="tip">
        <strong>Pro tip:</strong> Keep tags short and concise for the best visual appearance. 
        Long text may overflow or look cluttered in the header.
      </InfoBox>
    </div>
    </>
  );
}
