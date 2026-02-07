"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import Section from "./Section";
import Button from "./ui/Button";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log("Form submitted:", formState);
    };

    return (
        <Section id="contact" className="bg-background section-padding">
            <div className="max-width-container py-12">
                <div ref={ref} className="text-center space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-accent font-black tracking-[0.3em] uppercase text-xs">Let&apos;s Connect</span>
                        <h2 className="font-extrabold tracking-tighter">
                            Start Your <span className="text-accent italic">Next Vision.</span>
                        </h2>
                        <p className="text-foreground-muted text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            Ready to transform your footage? Let&apos;s discuss how we can build something truly cinematic.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto pt-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-center space-y-8"
                        >
                            <div className="flex items-center gap-6 glass-card p-6 rounded-3xl group border-white/5">
                                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-all duration-500">
                                    <Mail className="text-accent" size={28} />
                                </div>
                                <div className="text-left">
                                    <p className="text-accent/60 font-black tracking-widest uppercase text-[10px] mb-1">Email</p>
                                    <a
                                        href="mailto:tonmoy.jihan@example.com"
                                        className="text-lg md:text-xl font-bold hover:text-accent transition-colors tracking-tight"
                                    >
                                        tonmoy.jihan@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 glass-card p-6 rounded-3xl group border-white/5">
                                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-all duration-500">
                                    <Phone className="text-accent" size={28} />
                                </div>
                                <div className="text-left">
                                    <p className="text-accent/60 font-black tracking-widest uppercase text-[10px] mb-1">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-lg md:text-xl font-bold hover:text-accent transition-colors tracking-tight"
                                    >
                                        +123 456 7890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 glass-card p-6 rounded-3xl group border-white/5">
                                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-all duration-500">
                                    <MapPin className="text-accent" size={28} />
                                </div>
                                <div className="text-left">
                                    <p className="text-accent/60 font-black tracking-widest uppercase text-[10px] mb-1">Location</p>
                                    <p className="text-lg md:text-xl font-bold tracking-tight">Worldwide / Remote</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="glass-card p-8 md:p-12 rounded-[2.5rem] space-y-8"
                        >
                            <div className="space-y-4">
                                <label htmlFor="name" className="block text-xs font-black tracking-widest uppercase text-accent/80 ml-1">
                                    Your Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all text-foreground text-lg font-medium placeholder-white/20"
                                    placeholder="e.g. Leonardo DiCaprio"
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="email" className="block text-xs font-black tracking-widest uppercase text-accent/80 ml-1">
                                    Professional Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all text-foreground text-lg font-medium placeholder-white/20"
                                    placeholder="e.g. leo@oscar.com"
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <label htmlFor="message" className="block text-xs font-black tracking-widest uppercase text-accent/80 ml-1">
                                    Project Brief
                                </label>
                                <textarea
                                    id="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none text-foreground text-lg font-medium placeholder-white/20"
                                    placeholder="Briefly describe your cinematic vision..."
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full rounded-2xl">
                                <Send size={24} className="mr-3" />
                                Launch Project
                            </Button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
