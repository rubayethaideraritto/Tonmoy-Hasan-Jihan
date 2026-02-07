"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Crafting Stories That Resonate.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
            }
        }, 80); // Faster, smoother typing
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
        >
            {/* 3D Modern Visuals - Animated Blurred Spheres */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-accent/10 blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-accent/5 blur-[100px]"
                />

                {/* Floating "Glass" Spheres (3D Feel) */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[15%] w-32 h-32 rounded-full glass border-white/10 hidden md:block opacity-40 shadow-[0_0_40px_rgba(6,182,212,0.1)]"
                />
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [30, -30, 30] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[30%] left-[20%] w-20 h-20 rounded-full glass border-white/10 hidden md:block opacity-30 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                />
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px] z-0 opacity-40" />

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 py-24 md:py-32">
                <div className="text-center md:text-left space-y-16 md:space-y-24 flex flex-col items-center md:items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left w-full"
                    >
                        <h1 className="font-extrabold leading-[1] tracking-tighter mb-10 md:mb-12 min-h-[1.1em] text-4xl sm:text-6xl md:text-[clamp(3.5rem,7.5vw,9rem)] whitespace-normal md:whitespace-nowrap drop-shadow-[0_0_60px_rgba(6,182,212,0.5)]">
                            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                                {typedText}
                            </span>
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2.5 h-[0.7em] bg-accent ml-2 align-middle shadow-[0_0_35px_rgba(6,182,212,1)]"
                            />
                        </h1>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                            className="text-accent font-black tracking-[0.4em] uppercase text-xs sm:text-base px-10 py-4 glass rounded-full border-accent/40 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
                        >
                            Premium Video Editor
                        </motion.span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="text-lg md:text-3xl text-foreground-muted max-w-5xl font-medium leading-[1.4] drop-shadow-md"
                    >
                        I transform raw footage into premium cinematic experiences for brands, creators, and agencies worldwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        className="flex flex-wrap gap-10 justify-center md:justify-start items-center w-full"
                    >
                        <Button size="lg" className="rounded-2xl px-16 h-20 text-xl group shadow-[0_0_80px_rgba(6,182,212,0.6)] hover:shadow-[0_0_100px_rgba(6,182,212,0.8)] transition-all duration-500 scale-105 hover:scale-110">
                            <a href="#portfolio" className="flex items-center gap-2">
                                Explore Portfolio
                            </a>
                        </Button>
                        <Button size="lg" variant="secondary" className="rounded-2xl px-16 h-20 text-xl glass border-white/20 hover:bg-white/5 shadow-2xl hover:scale-105 transition-transform">
                            <a href="#contact">Start a Project</a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-20"
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-foreground-muted hover:text-accent transition-colors duration-500">
                    <span className="text-[10px] uppercase font-black tracking-widest">Discover More</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown size={20} className="text-accent" />
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
}
