import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="bg-radial-glow absolute inset-0 opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mono text-primary mb-4 block text-sm tracking-wider">
            Get In Touch
          </span>
          <h2 className="section-heading mb-6">
            Let's work
            <span className="text-gradient-blue"> together</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to say hi, my inbox is
            always open!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card mb-8 p-8"
          >
            <div className="text-muted-foreground flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-5 w-5" />
                <span>aadhithyag2000@gmail.com</span>
              </div>
              <div className="bg-border hidden h-6 w-px sm:block" />
              <div className="flex items-center gap-3">
                <MapPin className="text-primary h-5 w-5" />
                <span>Dublin, Ireland</span>
              </div>
            </div>
          </motion.div>

          <motion.a
            href="mailto:aadhithyag2000@gmail.com"
            className="btn-primary inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="h-4 w-4" />
            Send Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
