import React from 'react';
import { skills } from '../../constants/index.js';
import SkillPill from '../SkillPill';

const TechnicalSkills = () => {
  const skillSections = [
    {
      title: 'Frontend',
      skillsList: skills.frontend,
      color: {
        border: 'hover:border-cyan-500/30',
        shadow: 'hover:shadow-cyan-900/10',
        icon: 'text-cyan-400 group-hover:text-cyan-300',
      },
    },

    {
      title: 'Backend',
      skillsList: skills.backend,
      color: {
        border: 'hover:border-emerald-500/30',
        shadow: 'hover:shadow-emerald-900/10',
        icon: 'text-emerald-400 group-hover:text-emerald-300',
      },
    },

    // NEW MOBILE SECTION
    {
      title: 'Mobile',
      skillsList: skills.mobile,
      color: {
        border: 'hover:border-orange-500/30',
        shadow: 'hover:shadow-orange-900/10',
        icon: 'text-orange-400 group-hover:text-orange-300',
      },
    },

    {
      title: 'Tools',
      skillsList: skills.tools,
      color: {
        border: 'hover:border-purple-500/30',
        shadow: 'hover:shadow-purple-900/10',
        icon: 'text-purple-400 group-hover:text-purple-300',
      },
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            My Skills
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Technical
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Technologies and tools I use to build modern, scalable and
            high-performance applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition-all duration-300 hover:border-white/20"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.skillsList.map((tech) => (
                  <SkillPill
                    key={tech.id}
                    skill={tech}
                    colors={section.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;