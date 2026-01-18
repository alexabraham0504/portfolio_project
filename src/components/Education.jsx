import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="bg-[var(--bg-tertiary)]" ref={ref}>
            <div className="section">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="mb-4">Education</h2>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="card max-w-3xl"
                >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">Master of Computer Applications (MCA)</h3>
                        </div>
                        <p className="text-[var(--text-tertiary)] text-sm mt-2 md:mt-0">
                            2023 – 2025
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
