"use client"

import type { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Fade in animation
export const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide in from left animation
export const SlideInLeft = ({
  children,
  delay = 0,
  className = "",
}: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Slide in from right animation
export const SlideInRight = ({
  children,
  delay = 0,
  className = "",
}: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

// Staggered list animation
export const StaggeredList = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.ul className={className}>
    {Array.isArray(children)
      ? children.map((child, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            {child}
          </motion.li>
        ))
      : children}
  </motion.ul>
)

// Scroll animation wrapper
export const ScrollReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
)

// Hover animation for cards
export const HoverCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
    transition={{ duration: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
)

// Text reveal animation
export const TextReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ clipPath: "inset(0 0 0 0)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

// Animated counter
export const Counter = ({
  from,
  to,
  duration = 2,
  className = "",
}: { from: number; to: number; duration?: number; className?: string }) => {
  return (
    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={className}>
      <motion.span
        initial={{ count: from }}
        whileInView={{ count: to }}
        viewport={{ once: true }}
        transition={{ duration }}
        style={{ display: "inline-block" }}
      >
        {({ count }) => Math.floor(count)}
      </motion.span>
    </motion.span>
  )
}

// Page transition wrapper
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <AnimatePresence mode="wait">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  </AnimatePresence>
)
