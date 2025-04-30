"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./animations";

export default function Experience() {
  const experiences = [
    {
      company: "Al-Ekhtyar Al-Sahl",
      position: "Front-End Developer",
      period: "Jun 2024 - Present",
      description: [
        "Developed and maintained multiple React-based web applications, improving user experience and performance.",
        "Implemented responsive designs and ensured cross-browser compatibility for all projects.",
        "Collaborated with backend developers to integrate RESTful APIs and optimize data flow.",
      ],
    },
    {
      company: "Freelance",
      position: "Web Developer",
      period: "Oct 2023 - Jun 2024",
      description: [
        "Designed and developed custom websites and web applications for various clients across different industries.",
        "Created mobile-responsive interfaces using modern CSS frameworks and JavaScript libraries.",
        "Provided ongoing maintenance and support for client websites, ensuring optimal performance and security.",
      ],
    },
    {
      company: "KTL",
      position: "Junior Developer",
      period: "May 2022 - oct 2022",
      description: [
        "Assisted in the development of web applications using JavaScript and React.",
        "Participated in code reviews and implemented feedback to improve code quality and performance.",
        "Collaborated with the design team to implement UI/UX improvements based on user feedback.",
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <ScrollReveal className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ rotate: 180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="h-10 w-10 text-primary mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter">
            Work Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[700px]">
            My professional journey in the world of web development.
          </p>
        </ScrollReveal>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.company} variants={item}>
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  borderColor: "rgba(var(--primary-rgb), 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-primary/10">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {exp.position}
                        </h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <motion.ul
                      className="list-disc pl-5 space-y-1 text-muted-foreground"
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {exp.description.map((item, index) => (
                        <motion.li
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
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
