import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="bg-[var(--bg-tertiary)]" ref={ref}>
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="mb-8">About Me</h2>

                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        I'm a Full Stack Developer with hands-on experience in Generative AI, machine learning,
                        and modern web technologies. Currently interning at SupeAI, I focus on building clean,
                        scalable, and user-centric solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
