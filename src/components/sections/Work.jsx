import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { myProjects } from '../../constants';
import ProjectCard from '../ProjectCard';
import {
  IconSparkles,
  IconArrowUpRight,
  IconCode,
  IconDeviceMobile,
  IconLayoutGrid,
} from '@tabler/icons-react';

const categories = [
  {
    name: 'All',
    icon: <IconSparkles size={16} />,
  },
  {
    name: 'Web Apps',
    icon: <IconLayoutGrid size={16} />,
  },
  {
    name: 'Mobile Apps',
    icon: <IconDeviceMobile size={16} />,
  },
  {
    name: 'Full Stack',
    icon: <IconCode size={16} />,
  },
];

const Work = () => {
  const [active, setActive] = useState('All');

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm tracking-[0.2em] text-emerald-300">
              FEATURED PROJECTS
            </span>
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Crafting
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Digital
            </span>
            <br />
            Experiences
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            A collection of premium web and mobile applications focused on
            performance, smooth interactions, scalable architecture and modern
            user experiences.
          </p>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {categories.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(item.name)}
                className={`group relative overflow-hidden rounded-2xl border px-5 py-3 text-sm font-medium transition-all duration-500 ${
                  active === item.name
                    ? 'border-emerald-400/40 bg-emerald-500/10 text-white shadow-[0_0_40px_rgba(16,185,129,0.15)]'
                    : 'border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>

                {active === item.name && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Floating Decorations */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-10 top-40 hidden h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl lg:block"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-10 top-[30%] hidden h-32 w-32 rounded-full border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-xl lg:block"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {myProjects.map((project, idx) => (
            <motion.div
              key={project.title + idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                {/* Top Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-[32px] border border-white/5 group-hover:border-emerald-400/20" />

                {/* Project Card */}
                <ProjectCard
                  title={project.title}
                  description={project.desc}
                  image={project.logo}
                  year={project.year}
                  type={project.type}
                  tags={project.tags}
                  href={project.href}
                  repo={project.repo}
                  index={idx}
                />

                {/* Hover Overlay */}
                <div className="pointer-events-none absolute right-5 top-5 flex h-12 w-12 translate-y-4 items-center justify-center rounded-2xl border border-white/10 bg-black/40 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <IconArrowUpRight className="text-white" size={22} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <div className="inline-flex  w-full flex-col items-center rounded-[32px] border border-white/10 bg-white/5 px-10 py-10 backdrop-blur-2xl">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
              <IconSparkles
                size={32}
                className="text-emerald-300"
              />
            </div>

            <h3 className="text-3xl font-bold">
              Have an Idea?
            </h3>

            <p className="mt-4 max-w-xl text-zinc-400">
              Let’s collaborate and build something visually stunning,
              high-performing and impactful together.
            </p>

            <a
              href="#contact"
              className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.4)]"
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;