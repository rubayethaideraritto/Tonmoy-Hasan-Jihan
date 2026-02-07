"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, Award } from "lucide-react";
import Section from "./Section";

const timeline = [
    {
        year: "2023 - Present",
        title: "Freelance Video Editor",
        company: "Self-Employed",
        description: "Working with international clients on diverse video projects ranging from YouTube content to corporate videos.",
        icon: Briefcase,
    },
    {
        year: "2022 - 2023",
        title: "Junior Video Editor",
        company: "Digital Agency",
        description: "Assisted in creating promotional content for various brands. Learned advanced color grading and motion graphics.",
        icon: Calendar,
    },
    {
        year: "2022",
        title: "Started Video Editing Journey",
        company: "Learning Phase",
        description: "Began mastering Adobe Premiere Pro, After Effects, and DaVinci Resolve through online courses and personal projects.",
        icon: Award,
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="experience" className="bg-surface/30 section-padding">
            <div className="max-width-container py-12">
                <div ref={ref} className="max-w-5xl mx-auto text-center space-y-24">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-4 block">Professional Journey</span>
                        <h2 className="font-extrabold tracking-tighter">
                            Career <span className="text-accent italic">Milestones</span>
                        </h2>
                    </motion.div>

                    {/* Centered Timeline */}
                    <div className="space-y-16">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.15 }}
                                    className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-start"
                                >
                                    {/* Left: Info */}
                                    <div className="md:text-right space-y-2 pt-2">
                                        <div className="text-accent font-black tracking-widest uppercase text-xs py-1 px-3 bg-accent/5 rounded-full inline-block border border-accent/10">
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                                        <p className="text-accent font-black tracking-widest uppercase text-[10px] opacity-70">
                                            {item.company}
                                        </p>
                                    </div>

                                    {/* Right: Description */}
                                    <div className="text-left text-foreground-muted text-lg font-medium leading-relaxed max-w-sm">
                                        <p>{item.description}</p>
                                    </div>

                                    {/* Center Dot (Visual only on Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center h-full top-3">
                                        <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10" />
                                        {index !== timeline.length - 1 && (
                                            <div className="w-px h-[calc(100%+64px)] bg-gradient-to-b from-accent/50 to-transparent" />
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Integrated Tools Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="pt-24 border-t border-white/5"
                    >
                        <h3 className="text-lg font-black tracking-widest uppercase text-accent mb-12">Technical Arsenal</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Adobe Premiere Pro",
                                "After Effects",
                                "DaVinci Resolve",
                                "Final Cut Pro",
                                "Photoshop",
                                "Audition"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-foreground font-bold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
