import { motion } from "framer-motion";
import {
  SiReact, SiTailwindcss, SiFramer, SiTypescript, SiNodedotjs, SiExpress,
  SiDjango, SiMongodb, SiPostgresql, SiMysql, SiDocker, SiNginx,
  SiPm2, SiGithubactions, SiSocketdotio, SiRedis,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = { name: string; icon: IconType };

const groups: { title: string; tag: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    tag: "ui & motion",
    skills: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    title: "Backend",
    tag: "apis & services",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Django REST", icon: SiDjango },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    title: "Databases",
    tag: "storage layer",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "DevOps",
    tag: "ship it",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Nginx", icon: SiNginx },
      { name: "PM2", icon: SiPm2 },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="font-mono text-xs text-primary mb-2">// 02 — tech stack</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Tools I use to <span className="text-gradient">build</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A modern, battle-tested stack covering everything from pixel-perfect UI
            to deployment pipelines.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-lg">{group.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  {group.tag}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/30 px-3 py-2.5 text-sm transition-all hover:border-primary/40 hover:bg-secondary/60"
                  >
                    <skill.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-foreground/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
