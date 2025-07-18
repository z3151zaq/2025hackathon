// app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <h1 className="text-4xl font-bold mb-6">reinvent-cli</h1>

      <div className="bg-zinc-900 border border-green-700 rounded px-4 py-3 mb-6 text-green-300">
        <span className="mr-2">&gt;</span>
        <span className="text-green-300">reinvent git "initialize"</span>
      </div>

      <p className="mb-10 text-green-400">
        ⤷ Enter natural language commands to generate CLI combinations!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureBox title="Command Hijacking" desc="Use reinvent + command to map CLI automatically" />
        <FeatureBox title="Natural Language" desc="Generate command suggestions interactively" />
        <FeatureBox title="Interactive Mode" desc="Guide the user step by step" />
        <FeatureBox title="Plugin Mode" desc="Extend functionality with custom command plugins" />
        <FeatureBox title="Dry Run" desc="Preview command execution without running" />
        <FeatureBox title="Script Generation" desc="Generate bash/zsh script files" />
      </div>
    </main>
  );
}

function FeatureBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-green-700 rounded p-4 bg-zinc-900">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
