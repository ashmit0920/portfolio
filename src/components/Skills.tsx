
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript & TypeScript", level: 85 },
        { name: "Go", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "Rust", level: 70 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Django", level: 70 },
        { name: "FastAPI", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS/GCP", level: 65 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Apache Kafka & Spark", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-foreground/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
