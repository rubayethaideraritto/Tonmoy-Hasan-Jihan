"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import Section from "./Section";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "YouTuber (520K subscribers)",
        content: "Tonmoy transformed my raw vlog footage into something I'm genuinely proud of. His attention to pacing and storytelling is impressive. Will definitely work together again!",
        rating: 5,
    },
    {
        name: "Mark Davidson",
        role: "Marketing Director",
        content: "Professional, reliable, and creative. Tonmoy delivered our brand video ahead of schedule and nailed the brief on the first draft. Highly recommend!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "Content Creator",
        content: "I've worked with several editors, but Tonmoy stands out. He actually understands the emotion I want to convey and brings it to life through editing.",
        rating: 5,
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="testimonials" className="bg-surface/30 section-padding">
            <div className="max-width-container py-12">
                <div ref={ref} className="max-w-6xl mx-auto text-center space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Vanguard Feedback</span>
                        <h2 className="font-extrabold tracking-tighter">
                            Client <span className="text-accent italic">Stories</span>
                        </h2>
                        <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            Real feedback from the creators and brands who trust my vision.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="glass-card rounded-[2rem] p-8 md:p-10 relative flex flex-col h-full group"
                            >
                                {/* Quote icon */}
                                <div className="absolute top-10 right-10 text-accent/5 group-hover:text-accent/10 transition-colors">
                                    <Quote size={80} fill="currentColor" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1.5 mb-8 relative z-10">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-accent fill-accent" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-foreground-muted mb-10 relative z-10 leading-relaxed text-lg md:text-xl font-medium italic flex-grow">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author */}
                                <div className="border-t border-white/5 pt-8 relative z-10">
                                    <p className="font-black text-xl tracking-tight uppercase">{testimonial.name}</p>
                                    <p className="text-xs text-accent font-black tracking-widest uppercase mt-2">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
