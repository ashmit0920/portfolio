
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button.js";

export const Projects = () => {
  const projects = [
    {
      title: "ClickBait - Dynamic A/B Testing Engine",
      description: "A clickstream-based dynamic A/B Testing Engine that automates UI/UX testing with Multi-Armed Bandit and Bayesian Optimization. Dynamically shifts traffic to better-performing variations in real-time, capable of handling 100,000+ clicks/second.",
      tech: ["Python", "FastAPI", "Apache Kafka", "MongoDB", "Next.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com/ashmit0920/ClickBait",
      live: "#"
    },
    {
      title: "Piko.ai - Learning Assistant",
      description: "An AI-powered learning assistant that generates accurate, animated explanations using the Manim library and Gemini 2.5, grounded in real-time documentation via a custom-built vector index.",
      tech: ["Python", "FastAPI", "React", "TypeScript", "Gemini 2.5", "LangChain", "MongoDB"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      github: "https://github.com/ashmit0920/Piko.ai",
      live: "#"
    },
    {
      title: "Autonomous Web Agent",
      description: "AI agent that controls a web browser, parses websites and takes appropriate actions to navigate - completely autonomously.",
      tech: ["Python", "Playwright", "Gemini 2.5", "Chromium"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com/ashmit0920/autonomous-web-agent",
      live: "#"
    },
    {
      title: "MoodMuse",
      description: "An AI-powered Journaling App that provides insights, writing suggestions, and mood analysis for your daily entries.",
      tech: ["React Native", "Expo", "Gemini"],
      image: "https://github.com/ashmit0920/MoodMuse/blob/main/assets/mockup.png",
      github: "https://github.com/ashmit0920/MoodMuse",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-400/20 text-blue-400 rounded-full border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-background"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
