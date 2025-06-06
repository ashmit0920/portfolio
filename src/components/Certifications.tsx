
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      description: "Foundational understanding of AWS Cloud services and architecture",
      link: "#",
      badge: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "January 2024",
      description: "Advanced React concepts, hooks, state management, and best practices",
      link: "#",
      badge: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "November 2023",
      description: "Data analysis, visualization, and machine learning with Python",
      link: "#",
      badge: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "September 2023",
      description: "Comprehensive course covering algorithms, data structures, and problem-solving",
      link: "#",
      badge: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-sm text-foreground/60 mb-3">
                    <Calendar size={14} className="mr-2" />
                    {cert.date}
                  </div>
                  
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-2" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
