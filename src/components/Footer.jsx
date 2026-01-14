import { motion } from "framer-motion";
import { Code2, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-border/50 border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="text-primary h-5 w-5" />
            <span className="text-muted-foreground">Porfolio</span>
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              {
                icon: Github,
                href: "https://github.com/Aadhithya-Ganesh",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/aadhithya-ganesh-2730ba2bb",
                label: "LinkedIn",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
