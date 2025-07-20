'use client';
import React from 'react';
import MeteorRain from './components/MeteorRain';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-8 font-sans relative overflow-hidden">
      <MeteorRain />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-green-300">reinvent-cli</h1>
        <div className="mockup-code bg-zinc-800 text-green-300 mb-6 border border-green-600 rounded-xl">
          <pre data-prefix=">"><code>reinvent + ask + natural language</code></pre>
          <pre data-prefix=">"><code>reinvent + CMD</code></pre>
          <pre data-prefix=">"><code>reinvent + CMD + natural language</code></pre>
          <pre data-prefix=">"><code>reinvent + config --language</code></pre>
        </div>
        <p className="mb-10 text-green-500">
          ⤷ Enter natural language commands to generate CLI combinations!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        {/* 🎬 CLI 演示视频区域 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-400 mb-4 text-left">
            🎬 Reinvent-CLI Demo Showcase
          </h2>
          <div className="flex flex-col items-start gap-4">
            {[
              {
                src: "/1.mp4",
                title: "Demo 1. Interactive mode",
              },
              {
                src: "/2.mp4",
                title: "Demo 2. Ask a question with NL and get commandlines",
              },
              {
                src: "/3.mp4",
                title: "Demo 3. Reinvent a commandline on your computer and use it in your own language",
              },
            ].map((demo, idx) => (
              <div key={idx} className="overflow-hidden w-full max-w-4xl">
                <h3 className="text-green-300 text-sm font-medium mb-2">{demo.title}</h3>
                <video
                  src={demo.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-xl shadow-lg border border-green-600 transform scale-90 origin-top-left inline-block"
                />
              </div>
            ))}
          </div>
        </div>


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
