import { motion } from "framer-motion";
import { Cpu, Lock, Radio, GitBranch, Database, Layers } from "lucide-react";

const skills = [
  {
    icon: Layers,
    title: "API Design & REST Architecture",
    text: "Clean, versioned, documented endpoints with thoughtful resource modeling and pagination.",
  },
  {
    icon: Radio,
    title: "Real-time Systems",
    text: "Socket.IO-powered live updates, presence, and bidirectional communication.",
  },
  {
    icon: Lock,
    title: "Authentication & Security",
    text: "JWT, refresh tokens, role-based permissions, and safe transactional flows.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Deployment",
    text: "GitHub Actions pipelines, Docker, Nginx and PM2 on production VPS.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Schema modeling for SQL & NoSQL with indexing and query optimization in mind.",
  },
  {
    icon: Cpu,
    title: "System Design",
    text: "Designing scalable architectures that survive growth and real users.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-mono text-xs text-primary mb-2">// 04 — what I do best</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Engineering <span className="text-gradient">strengths</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            The areas where I bring the most value — built through real projects, not tutorials.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition-opacity" />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/60 border border-border mb-4 group-hover:border-primary/40 group-hover:text-primary transition-all">
                  <skill.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
