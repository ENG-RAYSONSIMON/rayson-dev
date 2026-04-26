import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl container-px text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.95]"
        >
          Rayson Simon
          <br />
          <span className="text-gradient bg-[length:200%_auto] animate-gradient-shift">
            Tuvana
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 font-mono text-sm sm:text-base text-muted-foreground"
        >
          <span className="text-primary">{">"}</span> Full Stack Software Engineer
          <span className="text-border mx-2">|</span>
          MERN <span className="text-border mx-2">|</span> DRF
          <span className="text-border mx-2">|</span> Mobile Developer
          <span className="ml-1 inline-block h-4 w-[2px] bg-primary align-middle animate-blink" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Building scalable, real-world systems that solve real problems — from
          real-time APIs to production-grade mobile apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold transition-all hover:border-primary/40"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-5 text-muted-foreground"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rayson@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-all hover:text-primary hover:-translate-y-0.5"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="block h-1.5 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
