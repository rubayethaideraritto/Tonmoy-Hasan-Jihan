"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="about" className="bg-background section-padding relative overflow-hidden">
            {/* Ambient background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 blur-[150px] rounded-full pointer-events-none -mr-48 -mt-48" />

            <div className="max-width-container relative z-10 py-12 flex flex-col items-center">
                <div ref={ref} className="w-full flex flex-col items-center text-center space-y-16 md:space-y-24">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 w-full flex flex-col items-center text-center"
                    >
                        <span className="text-accent font-black tracking-[0.4em] uppercase text-[10px] md:text-xs text-center">The Visionary</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-center">
                            Hi, I&apos;m <span className="text-accent italic">Tonmoy Hasan Jihan</span>
                        </h2>
                    </motion.div>

                    {/* Image Placeholder - Strictly Centered */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1 }}
                        className="relative w-40 h-40 md:w-56 md:h-56 group"
                    >
                        <div className="absolute inset-0 bg-accent/15 rounded-[2.5rem] blur-3xl group-hover:bg-accent/25 transition-all duration-700" />
                        <div className="relative h-full w-full bg-surface/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl">
                            <span className="text-foreground-muted font-black tracking-widest uppercase text-[10px] opacity-30 group-hover:opacity-50 transition-opacity px-4 text-center">Visual Storyteller</span>
                        </div>
                    </motion.div>

                    {/* Narrative text - Maximum Clarity & Centering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-xl md:text-3xl text-foreground-muted font-medium leading-[1.6] max-w-4xl w-full flex flex-col items-center text-center"
                    >
                        <p className="w-full text-center">
                            I don&apos;t just cut video; I craft <span className="text-white italic">emotional narratives</span>. With over 2 years of experience in the cinematic industry, I specialize in transforming raw moments into premium visual experiences.
                        </p>
                        <p className="w-full text-center">
                            Driven by simplicity and high-impact storytelling, I help global brands and creators break through the noise with surgical editing and professional-grade precision.
                        </p>
                    </motion.div>

                    {/* Stats - Balanced Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full pt-16 border-t border-white/5"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full place-items-center">
                            {[
                                { label: "Years Exp", value: "2+" },
                                { label: "Projects", value: "50+" },
                                { label: "Happiness", value: "100%" },
                                { label: "Precision", value: "Level 10" }
                            ].map((stat, index) => (
                                <div key={index} className="space-y-3 flex flex-col items-center text-center">
                                    <div className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center">{stat.value}</div>
                                    <div className="text-accent font-black tracking-[0.3em] uppercase text-[10px] md:text-[11px] opacity-60 text-center">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
