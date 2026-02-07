import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24",
                className
            )}
        >
            {children}
        </section>
    );
}
