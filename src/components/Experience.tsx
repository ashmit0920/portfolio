
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Joint Secretary",
      company: "OWASP Student Chapter, TIET",
      location: "Patiala, Punjab",
      period: "September 2024 - August 2025",
      description: [
        "Managed an International Org's Student Chapter with 150+ members",
        "Led the Design and Tech departments of the society",
        "Successfully conducted an international Hackathon series named HackOwasp",
      ]
    },
    {
      title: "Software Development Intern",
      company: "BlueStock FinTech",
      location: "Remote",
      period: "May 2025 - July 2025",
      description: [
        "Developed responsive IPO-related web applications using React and Django",
        "Collaborated with senior developers on full-stack projects",
        "Improved application performance by 25% through code optimization",
        "Participated in agile development processes and code reviews"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my development skills
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-600 transform -translate-x-1/2"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 border-4 border-background"></div>
              
              <div className="ml-16 bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-cyan-400 mb-2">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-foreground/60">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="text-foreground/80 flex items-start"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
