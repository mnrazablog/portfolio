import React, { useEffect, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import Button from '../Button.jsx';

const roles = [
  'Frontend Developer',
  'React Native Developer',
  'Full Stack Developer',
  'MERN Stack Developer',
  'PERN Stack Developer',
];

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);

        if (subIndex === currentRole.length) {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        }
      } else {
        setText(currentRole.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm text-emerald-300">
              Available for freelance work
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-light text-white/70">
                Hey, I'm
              </span>

              <br />

              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Noorullah Raza
              </span>
            </h1>

            {/* Typing Role */}
            <div className="flex h-10 items-center gap-2">
              <span className="text-xl font-medium text-zinc-300 sm:text-2xl">
                {text}
              </span>

              <span className="h-6 w-[3px] animate-pulse rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Building modern, scalable and visually stunning digital
            products with smooth interactions, clean architecture and
            exceptional user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact">
              <Button
                name="Let's work together"
                isBeam
                containerClass="min-w-[220px]"
              />
            </a>

            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
            >
              View Projects

              <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

      {/* Right Side */}
<div className="relative flex w-full max-w-md flex-1 flex-col items-center justify-center">
  {/* Glow */}
  <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl" />

  {/* Image Card */}
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

    <img
      src="/assets/mnraza-dev.png"
      alt="Noorullah Raza"
      className="relative z-10 h-[420px] w-full rounded-[1.5rem] object-cover"
    />

    {/* Floating Badge */}
    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
      <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

      <span className="text-sm text-zinc-200">
        Building cool stuff since 2021
      </span>
    </div>
  </div>

  {/* Socials */}
  <div className="mt-6 flex items-center gap-4">
    <a
      href="https://twitter.com/mnraza_codes"
      target="_blank"
      rel="noreferrer"
      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M18.244 2H21.5l-7.12 8.136L22.75 22h-6.555l-5.133-6.71L5.2 22H1.94l7.614-8.702L1.5 2h6.722l4.64 6.116L18.244 2Zm-1.15 18h1.803L7.247 3.896H5.313L17.094 20Z" />
      </svg>
    </a>

    <a
      href="https://linkedin.com/in/mnraza1907"
      target="_blank"
      rel="noreferrer"
      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.79 53.79 0 1 1 53.79-53.8 53.79 53.79 0 0 1-53.79 53.8zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M248 8C111 8 0 119 0 256c0 109.8 71.5 202.9 170.7 235.8 12.5 2.3 17.1-5.4 17.1-12v-42.2c-69.5 15.1-84.2-29.5-84.2-29.5-11.4-28.8-27.8-36.5-27.8-36.5-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.3 58.6 27.2 72.9 20.8 2.3-16.2 8.7-27.2 15.8-33.5-55.5-6.3-113.9-27.8-113.9-123.7 0-27.3 9.7-49.5 25.6-66.9-2.6-6.3-11.1-31.7 2.4-66.1 0 0 20.9-6.7 68.5 25.6a236.4 236.4 0 0 1 124.7 0c47.6-32.3 68.5-25.6 68.5-25.6 13.5 34.4 5 59.8 2.4 66.1 15.9 17.4 25.6 39.6 25.6 66.9 0 96.1-58.5 117.3-114.2 123.5 9 7.8 17 23.1 17 46.6v69.1c0 6.7 4.5 14.5 17.2 12C424.5 458.9 496 365.8 496 256 496 119 385 8 248 8z" />
      </svg>
    </a>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;