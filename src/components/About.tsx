
import { motion } from "framer-motion";
import { Code, Coffee, Lightbulb, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing efficient and maintainable code"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Finding creative solutions to complex challenges"
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Committed to continuous learning and growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Hello! I'm Ashmit Thawait
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate Computer Science student with a deep love for technology 
              and problem-solving. Currently pursuing my degree, I'm constantly exploring 
              new programming languages, frameworks, and methodologies to expand my skill set.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              My journey in computer science has been driven by curiosity and the desire 
              to create meaningful applications that can make a difference. I believe in 
              writing clean, efficient code and am always eager to take on new challenges.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech trends, 
              contributing to open-source projects, or learning about emerging technologies 
              like AI and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-blue-400/50 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
