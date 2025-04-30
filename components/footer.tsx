"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Mohie800",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/mohyeldeen-abdulazeem-567b15237",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center md:items-start">
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mohyeldeen Ali
            </motion.h3>
            <motion.p
              className="text-muted-foreground mt-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Front-End Developer | React & TypeScript Specialist
            </motion.p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:mohy_eldeen@outlook.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                mohy_eldeen@outlook.com
              </a>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Phone className="h-4 w-4 text-muted-foreground" />
              <a
                href="tel:+966543281314"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +966 543 281 314
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mohyeldeen Ali. All rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
