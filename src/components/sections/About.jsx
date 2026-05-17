import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  IconCopy,
  IconCheck,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSparkles,
  IconArrowUpRight,
  IconCode,
  IconDeviceMobile,
  IconBolt,
} from '@tabler/icons-react';

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('noorullahraza007@gmail.com');

    setCopied(true);

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 },
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <IconSparkles size={16} className="text-emerald-300" />

            <span className="text-sm tracking-wide text-emerald-300">
              ABOUT ME
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Crafting Digital
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Experiences
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Passionate about building premium web & mobile applications with
            modern UI, smooth animations and scalable architecture.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Left Big Fancy Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-70" />

            {/* Hover Glow */}
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

            <div className="relative z-10">
              {/* Top */}
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                {/* Image */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400 to-cyan-400 blur-xl opacity-30" />

                  <img
                    src="/assets/mnraza-dev.png"
                    alt="Noorullah Raza"
                    className="relative h-36 w-36 rounded-[2rem] border border-white/10 object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold lg:text-4xl">
                    Noorullah Raza
                  </h3>

                  <p className="mt-3 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-lg text-transparent">
                    Full Stack & React Native Developer
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      'React',
                      'React Native',
                      'Node.js',
                      'PostgreSQL',
                      'MongoDB',
                      'AI Integration',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-300 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-10">
                <p className="max-w-3xl text-base leading-8 text-zinc-400">
                  I build modern, scalable and visually stunning digital
                  products with a strong focus on clean architecture, smooth
                  user experiences and performance-driven development. I enjoy
                  transforming complex ideas into intuitive interfaces that feel
                  fast, premium and interactive.
                </p>
              </div>

              {/* Fancy Stats */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="group/stat relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                      <IconCode size={24} />
                    </div>

                    <h4 className="text-3xl font-black text-white">
                      10+
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      Projects Built
                    </p>
                  </div>
                </div>

                <div className="group/stat relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                      <IconDeviceMobile size={24} />
                    </div>

                    <h4 className="text-3xl font-black text-white">
                      4+
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      Years Learning
                    </p>
                  </div>
                </div>

                <div className="group/stat relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                      <IconBolt size={24} />
                    </div>

                    <h4 className="text-3xl font-black text-white">
                      100%
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      Passion Driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            {/* Contact Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

              <div className="relative z-10">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  CONTACT
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-snug">
                  Let’s Build Something Amazing Together
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Available for freelance projects, collaborations and exciting
                  startup ideas.
                </p>

                <button
                  onClick={handleCopy}
                  className="mt-7 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-500/10"
                >
                  <span className="truncate text-sm text-zinc-300">
                    noorullahraza007@gmail.com
                  </span>

                  {copied ? (
                    <IconCheck
                      size={20}
                      className="text-emerald-400"
                    />
                  ) : (
                    <IconCopy
                      size={20}
                      className="text-zinc-400"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Social Card */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    SOCIALS
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    Connect With Me
                  </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <IconArrowUpRight className="text-zinc-400" />
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://twitter.com/mnraza_codes"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                >
                  <IconBrandTwitter
                    size={26}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/mnraza1907"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:text-white"
                >
                  <IconBrandLinkedin
                    size={26}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                <a
                  href="#"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:text-white"
                >
                  <IconBrandGithub
                    size={26}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-7 backdrop-blur-2xl">
              <div className="absolute right-[-20%] top-[-20%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10">
                <p className="text-lg leading-8 text-zinc-300">
                  “I don’t just develop apps — I create digital experiences
                  that feel smooth, modern and unforgettable.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;