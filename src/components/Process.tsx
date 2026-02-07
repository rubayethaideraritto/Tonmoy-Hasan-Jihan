"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Edit, RefreshCw, CheckCircle } from "lucide-react";
import Section from "./Section";

const steps = [
    {
        step: "01",
        title: "Share Your Vision",
        description: "Send me your raw footage and tell me the story you want to create. I'll review everything and ask clarifying questions.",
        icon: Upload,
    },
    {
        step: "02",
        title: "Editing & Crafting",
        description: "I'll work my magic—cutting, color grading, adding music, and ensuring every frame serves the narrative.",
        icon: Edit,
    },
    {
        step: "03",
        title: "Review & Revisions",
        description: "You'll get the first draft to review. I offer up to 2 revision rounds to ensure it matches your vision perfectly.",
        icon: RefreshCw,
    },
    {
        step: "04",
        title: "Final Delivery",
        description: "Once you're 100% satisfied, I'll deliver the final video in your preferred format, ready to publish.",
        icon: CheckCircle,
    },
];

export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="process" className="bg-surface/30 section-padding">
            <div className="max-width-container py-12">
                <div ref={ref} className="max-w-5xl mx-auto text-center space-y-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">The Workflow</span>
                        <h2 className="font-extrabold tracking-tighter">
                            How I Build <span className="text-accent italic">Excellence</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {steps.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="space-y-8 flex flex-col items-center group"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative w-24 h-24 rounded-[2.5rem] bg-surface flex items-center justify-center border border-white/5 group-hover:border-accent/40 transition-all duration-500">
                                            <Icon className="text-accent" size={32} />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-sm font-black text-background shadow-xl shadow-accent/20">
                                            {item.step}
                                        </div>
                                    </div>

                                    <div className="space-y-4 max-w-xs">
                                        <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
                                        <p className="text-foreground-muted text-lg font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}
