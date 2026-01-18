import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="section">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Name */}
                        <h1 className="text-[var(--text-primary)] mb-4">
                            Alex Abraham
                        </h1>

                        {/* Role */}
                        <p className="text-lg md:text-xl text-[var(--accent)] font-medium mb-6">
                            Full Stack Developer · Generative AI & ML
                        </p>

                        {/* Value Statement */}
                        <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed max-w-lg">
                            I build scalable web applications and intelligent systems that solve real-world problems.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="btn-primary">
                                View Projects
                                <FiArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn-secondary">
                                <FiMail size={18} />
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end order-first lg:order-last"
                    >
                        {/* Profile Image Container - Rounded Rectangle */}
                        <div className="w-72 h-80 md:w-80 md:h-[360px]">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-lg flex items-center justify-center">
                                {/* Placeholder - Replace with actual image */}
                                <div className="text-[var(--text-tertiary)]">
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                </div>
                                {/* Replace with your actual photo:
                <img 
                  src="/your-photo.jpg" 
                  alt="Alex Abraham"
                  className="w-full h-full object-cover object-top"
                /> */}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
