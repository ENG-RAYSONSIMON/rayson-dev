import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { Code2, Server, Zap, Rocket } from "lucide-react";

const highlights = [
  { icon: Server, title: "API Architect", text: "Design clean, well-documented REST APIs that scale." },
  { icon: Zap, title: "Real-time Systems", text: "Live tracking, chat & sockets done right." },
  { icon: Code2, title: "Backend-focused", text: "Strong fundamentals in system design and DBs." },
  { icon: Rocket, title: "Ships to Production", text: "From localhost to VPS with Docker & CI/CD." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex items-end justify-between mb-14 flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-xs text-primary mb-2">// 01 — about</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">
              The engineer behind <br className="hidden sm:block" />
              the <span className="text-gradient">code.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-primary opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl glass">
                <img
                  src={portrait}
                  alt="Rayson Simon Tuvana portrait"
                  width={768}
                  height={896}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="glass rounded-md px-2 py-1">@rayson.dev</span>
                  <span className="glass rounded-md px-2 py-1 text-primary">// shipping</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science graduate</span> and
              backend-focused full stack engineer who genuinely enjoys building
              software that solves real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work across the stack — from designing clean REST architectures
              with <span className="text-primary">Django REST Framework</span> and{" "}
              <span className="text-primary">Node.js</span>, to crafting delightful
              user experiences with <span className="text-primary">React</span> and{" "}
              <span className="text-primary">React Native</span>. My focus is on
              writing production-grade code: systems that are scalable,
              maintainable, and observable.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-4 hover-lift hover:border-primary/30"
                >
                  <h.icon className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-display font-semibold text-sm mb-1">{h.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
