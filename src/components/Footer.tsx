import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
    { icon: Mail, href: "mailto:tonmoy@example.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
                            <span className="text-accent">Tonmoy</span> Hasan Jihan
                        </h3>
                        <div className="space-y-4">
                            <p className="text-foreground font-black tracking-widest uppercase text-xs px-3 py-1 bg-white/5 rounded-full w-fit">
                                Professional Video Editor
                            </p>
                            <p className="text-foreground-muted text-lg leading-relaxed font-medium">
                                Crafting cinematic stories that resonate and inspire. Let&apos;s build your legacy together.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-black tracking-widest uppercase text-accent/80 text-sm mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {["About", "Portfolio", "Experience", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-foreground-muted hover:text-accent transition-all duration-300 text-lg font-bold tracking-tight inline-flex items-center gap-3 group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-[2px] bg-accent transition-all duration-500 rounded-full"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-black tracking-widest uppercase text-accent/80 text-sm mb-8">Digital Presence</h4>
                        <div className="flex flex-wrap gap-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 flex items-center justify-center glass-card rounded-2xl text-foreground-muted hover:text-accent hover:border-accent/40 hover:bg-white/10 transition-all duration-500 rotate-3 hover:rotate-0"
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-foreground-muted text-sm font-bold tracking-widest uppercase">
                        © {new Date().getFullYear()} Tonmoy Hasan Jihan
                    </p>
                    <p className="text-foreground-muted/50 text-xs font-medium tracking-widest uppercase">
                        Built with cinematic precision
                    </p>
                </div>
            </div>
        </footer>
    );
}
