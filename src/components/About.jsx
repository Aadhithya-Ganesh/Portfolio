import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Creative Design",
      description:
        "Bringing ideas to life with stunning visuals and intuitive interfaces",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description:
        "Optimized code that delivers lightning-fast user experiences",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
  ];

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mono text-primary mb-4 block text-sm tracking-wider">
            About Me
          </span>
          <h2 className="section-heading mb-6">
            Passionate about building
            <span className="text-gradient-blue"> exceptional</span> digital
            experiences
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a developer who loves crafting clean, elegant solutions to
            complex problems. With a keen eye for design and a passion for
            performance, I create web applications that not only look great but
            also deliver outstanding user experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="bg-primary/10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                <feature.icon className="text-primary h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
