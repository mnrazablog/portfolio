import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  IconArrowUpRight,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconSparkles,
  IconCheck,
} from '@tabler/icons-react';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_edv71wh',
        'template_snkz7dd',
        form.current,
        'y0s_PRp5UXaL55H1c',
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();

          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.error(error.text);
          alert('Something went wrong.');
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <IconSparkles size={16} className="text-emerald-300" />

            <span className="text-sm tracking-[0.2em] text-emerald-300">
              CONTACT
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
            Let’s Build Something
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Extraordinary
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Got an idea, startup or freelance opportunity? Let’s create modern,
            high-performance digital experiences together.
          </p>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Floating Card */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      CONTACT INFO
                    </p>

                    <h3 className="mt-4 text-3xl font-bold">
                      Let’s Connect
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <IconArrowUpRight className="text-zinc-300" />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                      <IconMail size={26} />
                    </div>

                    <div>
                      <p className="text-sm text-zinc-500">
                        Email Address
                      </p>

                      <a
                        href="mailto:noorullahraza007@gmail.com"
                        className="mt-1 block text-base font-medium text-white transition-colors hover:text-emerald-300"
                      >
                        noorullahraza007@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-8">
                  <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    Social Links
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/mnraza19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:text-white"
                    >
                      <IconBrandLinkedin
                        size={28}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    <a
                      href="https://twitter.com/mnraza_codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
                    >
                      <IconBrandX
                        size={28}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>

                    <a
                      href="#"
                      className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:text-white"
                    >
                      <IconBrandGithub
                        size={28}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 p-6">
                  <p className="text-lg leading-8 text-zinc-300">
                    “Creating experiences that are fast, modern and impossible
                    to ignore.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  SEND MESSAGE
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  Start Your Next Project
                </h3>
              </div>

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-emerald-400/40 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm text-zinc-400">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-cyan-400/40 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white placeholder:text-zinc-500 focus:border-emerald-400/40 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-5 text-base font-semibold transition-all duration-300 hover:scale-[1.01]"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center gap-2">
                    {sent ? (
                      <>
                        <IconCheck size={22} />
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        Send Message
                        <IconArrowUpRight size={22} />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;