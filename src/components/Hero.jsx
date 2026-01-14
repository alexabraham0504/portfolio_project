import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/alexabraham0504', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/alex-abraham-28b266364', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:alexyabraham05@gmail.com', label: 'Email' },
    ];

    const handleScrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ background: 'var(--gradient-hero)' }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.p
                            className="text-[var(--primary-400)] font-semibold mb-4 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            👋 Hello, I'm
                        </motion.p>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="block text-[var(--text-primary)]">Alex Abraham</span>
                            <span className="gradient-text">Full Stack Developer</span>
                            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-[var(--accent-400)]">
                                AI & ML Enthusiast
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            I craft beautiful, scalable web applications with modern technologies and AI integration.
                            Passionate about creating exceptional user experiences and building intelligent solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                onClick={handleScrollToContact}
                                className="btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiMail /> Get in Touch
                            </motion.button>
                            <motion.a
                                href="/resume.pdf"
                                download="Alex_Abraham_Resume.pdf"
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    // Check if file exists, if not show alert
                                    fetch('/resume.pdf', { method: 'HEAD' })
                                        .then(res => {
                                            if (!res.ok) {
                                                e.preventDefault();
                                                alert('CV file not found. Please add your resume.pdf to the public folder.');
                                            }
                                        })
                                        .catch(() => {
                                            e.preventDefault();
                                            alert('CV file not found. Please add your resume.pdf to the public folder.');
                                        });
                                }}
                            >
                                <FiDownload /> Download CV
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full glass hover:bg-[var(--primary-500)] transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Hero Image/Avatar */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Glowing Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'var(--gradient-accent)',
                                    filter: 'blur(40px)',
                                    opacity: 0.5,
                                }}
                                animate={{
                                    scale: [1, 1.05, 1],
                                    opacity: [0.5, 0.7, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            {/* Avatar Container */}
                            <div
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group cursor-pointer spin-slow"
                            >
                                {/* Gradient Border */}
                                <div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        background: 'var(--gradient-accent)',
                                    }}
                                />

                                {/* Image */}
                                <div className="absolute inset-[3px] bg-[var(--bg-secondary)] rounded-full overflow-hidden z-10">
                                    <img
                                        src="/alex.jpg"
                                        alt="Alex Abraham"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 p-4 glass rounded-2xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="text-3xl">⚛️</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 p-4 glass rounded-2xl"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 -right-8 p-4 glass rounded-2xl"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                <span className="text-3xl">💡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-3 bg-[var(--primary-500)] rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
