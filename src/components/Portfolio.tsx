"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import Section from "./Section";

const projects = [
    {
        id: 1,
        title: "Brand Commercial",
        category: "Commercial",
        description: "High-energy product launch video for tech startup",
        thumbnail: "commercial",
    },
    {
        id: 2,
        title: "YouTube Documentary",
        category: "Documentary",
        description: "Long-form storytelling with emotional narrative",
        thumbnail: "documentary",
    },
    {
        id: 3,
        title: "Social Media Campaign",
        category: "Social Media",
        description: "Viral Instagram Reels series for fashion brand",
        thumbnail: "social",
    },
    {
        id: 4,
        title: "Music Video",
        category: "Music",
        description: "Cinematic music video with color grading",
        thumbnail: "music",
    },
    {
        id: 5,
        title: "Corporate Interview",
        category: "Corporate",
        description: "Professional interview series with B-roll",
        thumbnail: "corporate",
    },
    {
        id: 6,
        title: "Event Highlight",
        category: "Event",
        description: "Conference recap with dynamic transitions",
        thumbnail: "event",
    },
];

const categories = ["All", "Commercial", "Documentary", "Social Media", "Music", "Corporate", "Event"];

export default function Portfolio() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(p => p.category === activeCategory);

    return (
        <Section id="portfolio" className="section-padding">
            <div className="max-width-container pt-8 md:pt-16">
                <div ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 md:mb-32"
                    >
                        <span className="text-accent font-black tracking-[0.3em] uppercase text-xs mb-6 block">The Portfolio</span>
                        <h2 className="font-extrabold tracking-tighter">
                            Featured <span className="text-accent italic">Work</span>
                        </h2>
                        <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            A curated selection of projects showcasing cinematic vision and professional-grade editing.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-20"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-4 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 ${activeCategory === cat
                                    ? "bg-accent text-background shadow-xl shadow-accent/20 scale-105"
                                    : "bg-surface/50 backdrop-blur-md text-foreground-muted hover:bg-surface-hover hover:text-foreground border border-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Portfolio Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="group relative glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-full"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video bg-surface overflow-hidden relative">
                                    <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <Play className="text-accent fill-accent ml-1" size={24} />
                                        </div>
                                    </div>
                                    {/* Placeholder for actual image */}
                                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                        <span className="text-[10px] font-black tracking-widest uppercase opacity-20">{project.category} Preview</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] text-accent font-black tracking-[0.2em] uppercase">{project.category}</span>
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                            <ExternalLink className="text-foreground-muted group-hover:text-accent transition-colors" size={16} />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-accent transition-colors">{project.title}</h3>
                                    <p className="text-foreground-muted text-base leading-relaxed line-clamp-2 font-medium">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
