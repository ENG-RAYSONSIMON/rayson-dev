import { motion } from "framer-motion";
import { ArrowUpRight, Github, Smartphone, ShoppingBag, Server } from "lucide-react";

const projects = [
  {
    title: "Real-Time Lost Phone Tracker",
    period: "2024",
    description:
      "A cross-platform mobile app that recovers lost devices through live GPS streaming. Owners track their phone in real time on a web dashboard via Socket.IO.",
    stack: ["React Native", "Node.js", "Express", "Socket.IO", "MongoDB"],
    icon: Smartphone,
    accent: "from-cyan-500/20 to-blue-500/20",
    github: "https://github.com",
    demo: null,
    badge: "Real-time",
  },
  {
    title: "MERN E-commerce Platform",
    period: "2024",
    description:
      "Full-featured e-commerce app with product browsing, cart, checkout and order management. Zustand for state, JWT auth, and a clean REST API integration.",
    stack: ["React", "Zustand", "Node.js", "Express", "MongoDB"],
    icon: ShoppingBag,
    accent: "from-violet-500/20 to-fuchsia-500/20",
    github: "https://github.com",
    demo: "https://example.com",
    badge: "Full Stack",
  },
  {
    title: "DRF Shop API",
    period: "2024",
    description:
      "A production-style Django REST Framework API for e-commerce with JWT auth, granular permissions, atomic transactions, and well-documented endpoints.",
    stack: ["Django", "DRF", "PostgreSQL", "JWT", "Docker"],
    icon: Server,
    accent: "from-emerald-500/20 to-teal-500/20",
    github: "https://github.com",
    demo: null,
    badge: "Backend",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-xs text-primary mb-2">// 03 — selected work</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              Projects I've <span className="text-gradient">shipped</span>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A glimpse of systems I've built end-to-end — from architecture to deployment.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div
                className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700`}
              />

              <div className="relative grid md:grid-cols-12 gap-6 p-6 sm:p-8">
                <div className="md:col-span-1">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary/50 text-primary">
                    <project.icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-mono text-primary uppercase tracking-wider">
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/60 bg-secondary/40 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:flex-col gap-2 md:items-end justify-start md:justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2 text-xs font-medium transition-all hover:border-primary/40 hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
                    >
                      Live Demo
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
