import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Mail, label: "Email", value: "rayson@example.com", href: "mailto:rayson@example.com" },
  { icon: Phone, label: "Phone", value: "+255 000 000 000", href: "tel:+255000000000" },
  { icon: Github, label: "GitHub", value: "@raysonsimon", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Rayson Tuvana", href: "https://linkedin.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent — I'll get back to you soon!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs text-primary mb-2">// 05 — get in touch</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl">
            Let's build something <span className="text-gradient">great</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Got a project, role, or idea? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass rounded-xl p-4 hover-lift hover:border-primary/40"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary/60 border border-border text-primary group-hover:border-primary/40">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-4 flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Open to remote opportunities worldwide</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-secondary/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-secondary/60"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60 focus:bg-secondary/60 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
