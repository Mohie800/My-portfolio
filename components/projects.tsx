"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, HoverCard } from "./animations";

export default function Projects() {
  const projects = [
    {
      title: "Sadah CRM",
      description:
        "A comprehensive CRM system with vendor websites, WhatsApp integration, and custom domain support. Streamlined business operations and improved customer engagement.",
      image: "/sadah.png?height=400&width=600",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "WhatsApp API",
      ],
      liveUrl: "https://app.sadah.io",
      // githubUrl: "https://github.com/example/sadah-crm",
    },
    {
      title: "Qistar Platform",
      description:
        "platform organizes the relation between the renter and the owner of real estate where the owner gets the rent annually and the renter pays monthly",
      image: "/qistar.png?height=400&width=600",
      tags: ["React", "Node.js", "MUI"],
      liveUrl: "https://qistar.sa",
      // githubUrl: "https://github.com/example/ecommerce",
    },
    {
      title: "Khabnah",
      description:
        "E-commerce full stack React app with a dashboard uses node.js as a backend and MongoDB for data base",
      image: "/kh.png?height=400&width=600",
      tags: ["React", "MUI", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://khayat-indol.vercel.app/",
      githubUrl: "https://github.com/Mohie800/khayat",
    },
    {
      title: "Khardah",
      description: "Landing page for Khardah",
      image: "/khardah.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://kharda.vercel.app/",
      githubUrl: "https://github.com/Mohie800/kharda",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <ScrollReveal className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Code className="h-10 w-10 text-primary mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[700px]">
            A selection of projects that showcase my skills and experience in
            building modern web applications.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <HoverCard className="h-full">
                <Card className="overflow-hidden border-primary/10 h-full flex flex-col justify-between">
                  <motion.div
                    className="relative h-48 w-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.tags.map((tag, i) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Badge variant="secondary">{tag}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-1"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
