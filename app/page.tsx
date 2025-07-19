import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-8 font-sans">
      <h1 className="text-5xl font-bold mb-6 text-green-300">reinvent-cli</h1>

      <div className="mockup-code bg-zinc-800 text-green-300 mb-6 border border-green-600 rounded-xl">
        <pre data-prefix=">">
          <code>reinvent git "initialize"</code>
        </pre>
      </div>

      <p className="mb-10 text-green-500">
        ⤷ Enter natural language commands to generate CLI combinations!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </main>
  );
}

const features = [
  {
    title: "Command Hijacking",
    desc: "Use reinvent + command to map CLI automatically",
    icon: "💥",
  },
  {
    title: "Natural Language",
    desc: "Generate command suggestions interactively",
    icon: "💬",
  },
  {
    title: "Interactive Mode",
    desc: "Guide the user step by step",
    icon: "🧭",
  },
  {
    title: "Plugin Mode",
    desc: "Extend functionality with custom command plugins",
    icon: "🔌",
  },
  {
    title: "Dry Run",
    desc: "Preview command execution without running",
    icon: "🧪",
  },
  {
    title: "Script Generation",
    desc: "Generate bash/zsh script files",
    icon: "📜",
  },
];

function FeatureCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: string;
}) {
  return (
    <div className="card bg-zinc-900 border border-green-700 text-green-200 rounded-xl">
      <div className="card-body">
        <h2 className="card-title text-white text-xl">
          {icon && <span className="text-2xl mr-2">{icon}</span>}
          {title}
        </h2>
        <p className="text-sm text-violet-100">{desc}</p>
      </div>
    </div>
  );
}
