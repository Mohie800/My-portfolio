"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, SlideInLeft, SlideInRight } from "./animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 pb-16 sm:pb-8">
          <FadeIn>
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Mohyeldeen Ali
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground md:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Front-End Developer | React & TypeScript Specialist
              </motion.p>
            </div>
          </FadeIn>

          <SlideInLeft delay={0.4}>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Building elegant, responsive, and high-performance web
              applications with modern technologies.
            </p>
          </SlideInLeft>

          <SlideInRight delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 absolute left-1/2 -translate-x-1/2 z-20">
              <Button className="gap-1" asChild>
                <a
                  href="/Mohyeldeen_CV_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="whatsapp://send?text=&phone=+966543281314"
                  className="gap-1"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </SlideInRight>
        </div>
      </div>
      {/* Animated background elements */}
      <motion.div
        className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-background z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      ></motion.div>
    </section>
  );
}
