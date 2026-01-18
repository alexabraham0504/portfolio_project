import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section" ref={ref}>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="mb-4">Experience</h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                    Professional experience in AI and web development.
                </p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card max-w-3xl"
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Generative AI & Full Stack Intern</h3>
                        <p className="text-[var(--accent)] font-medium">SupeAI</p>
                    </div>
                    <p className="text-[var(--text-tertiary)] text-sm mt-2 md:mt-0">
                        July 2025 – Present
                    </p>
                </div>

                <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li className="flex items-start gap-3">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <span>Building AI-powered web applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <span>Integrating ML models with full-stack systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <span>Collaborating with product and engineering teams</span>
                    </li>
                </ul>
            </motion.div>
        </section>
    );
};

export default Experience;
