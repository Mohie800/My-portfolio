"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layers, Wrench, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggeredList } from "./animations";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Redux",
        "React Query",
        "Expo",
        "React Native",
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "RESTful APIs",
        "JWT Authentication",
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        "Git & GitHub",
        "Vite",
        "CI/CD",
        "SSR",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollReveal className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Layers className="h-10 w-10 text-primary mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[700px]">
            A comprehensive set of technologies and tools I work with to build
            modern, scalable web applications.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(var(--primary-rgb), 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-primary/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>
                    <StaggeredList className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </StaggeredList>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
