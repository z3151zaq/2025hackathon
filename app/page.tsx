'use client';
import React from 'react';
import MeteorRain from './components/MeteorRain';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-green-400 p-8 font-sans relative overflow-hidden">
      <MeteorRain />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-green-300">Reinvent-CLI</h1>

        {/* GitHub 链接图标 */}
        <div className="mb-6 flex items-center space-x-2 text-green-300">
          <a
            href="https://github.com/z3151zaq/reinvent-cli.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-green-500 transition-colors duration-200"
          >
            {/* GitHub SVG logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-1"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.113.793-.26.793-.577v-2.234c-3.338.727-4.033-1.61-4.033-1.61-.547-1.385-1.335-1.754-1.335-1.754-1.09-.744.083-.729.083-.729 1.205.086 1.84 1.243 1.84 1.243 1.07 1.835 2.809 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.305-.535-1.536.117-3.2 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.048.137 3.003.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.664.242 2.895.12 3.2.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.192.694.8.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="underline">View on GitHub</span>
          </a>
        </div>

        <div className="mockup-code bg-zinc-800 text-green-300 mb-6 border border-green-600 rounded-xl text-sm leading-snug">
          <pre><code>install: npm i reinvent-cli -g</code></pre>
          <pre><code>usage: reinvent [ ask | config | CMD ] [ options ]</code></pre>
          <pre style={{marginTop:10}}><code>       // say what you want and get cmds</code></pre>
          <pre><code>       reinvent ask &lt;natural language&gt;</code></pre>
          <pre style={{marginTop:10}}><code>       // use a command in natural language</code></pre>
          <pre><code>       reinvent CMD &lt;natural language&gt;</code></pre>
          <pre style={{marginTop:10}}><code>       // hijack a command</code></pre>
          <pre><code>       reinvent CMD</code></pre>
          <pre style={{marginTop:10}}><code>       // and use it in natural language: CMD &lt;natural language&gt;</code></pre>
          <pre><code>       CMD &lt;natural language&gt;</code></pre>
          
          {/* <pre><code>       reinvent config --language</code></pre> */}
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

          

          <div className="flex flex-col gap-10">
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
              <div
                key={idx}
                className="flex items-start gap-4 w-full max-w-5xl mx-auto"
              >
                {/* 标题容器：字体稍大 */}
                <div className="w-[280px] text-left break-words">
                  <h3 className="text-green-300 text-base font-medium leading-snug">
                    {demo.title}
                  </h3>
                </div>

                {/* 视频区域 */}
                <div className="flex-1">
                  <video
                    src={demo.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-xl shadow-lg border border-green-600 transform scale-90 origin-top-left"
                  />
                </div>
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
