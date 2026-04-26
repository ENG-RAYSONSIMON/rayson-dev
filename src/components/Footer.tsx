import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-primary text-primary-foreground text-sm">
            R
          </span>
          <span>Rayson Simon Tuvana</span>
        </div>

        <p className="text-xs font-mono text-muted-foreground text-center">
          © {new Date().getFullYear()} — Designed & built with care.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:rayson@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-primary hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
