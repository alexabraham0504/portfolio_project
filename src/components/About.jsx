import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayout, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { value: '2+', label: 'Years Experience' },
        { value: '9+', label: 'Projects Completed' },
        { value: '15+', label: 'Happy Clients' },
        { value: '10+', label: 'Technologies' },
    ];

    const services = [
        {
            icon: FiLayout,
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces with React, Vue, and modern CSS.',
        },
        {
            icon: FiServer,
            title: 'Backend Development',
            description: 'Creating robust APIs and server-side applications with Node.js, Python, and more.',
        },
        {
            icon: FiCpu,
            title: 'AI & Machine Learning',
            description: 'Integrating AI/ML solutions using Google Gemini, TensorFlow, and building intelligent applications.',
        },
        {
            icon: FiDatabase,
            title: 'Database Design',
            description: 'Designing efficient database schemas with Firebase, MongoDB, and PostgreSQL.',
        },
        {
            icon: FiCode,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable, and well-documented code following best practices.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-title">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="section-subtitle">
                            Passionate developer with a love for creating impactful digital experiences
                        </p>
                    </motion.div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-64">
                        {/* Image/Visual Side */}
                        <motion.div
                            variants={itemVariants}
                            className="relative flex justify-center"
                        >
                            <div className="relative">
                                {/* Background Decoration */}
                                <div
                                    className="absolute -inset-4 rounded-3xl opacity-50"
                                    style={{ background: 'var(--gradient-accent)' }}
                                />

                                {/* Main Image Container */}
                                <motion.div
                                    className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div
                                        className="w-full h-full flex items-center justify-center"
                                        style={{ background: 'var(--bg-tertiary)' }}
                                    >
                                        <motion.span
                                            className="text-9xl"
                                            animate={{ rotateY: [0, 360] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                        >
                                            💻
                                        </motion.span>
                                    </div>
                                </motion.div>

                                {/* Experience Badge */}
                                <motion.div
                                    className="absolute -bottom-8 -right-8 px-10 py-6 glass rounded-3xl shadow-2xl"
                                    whileHover={{ scale: 1.05 }}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <p className="text-5xl font-bold gradient-text mb-2">2+</p>
                                    <p className="text-base text-[var(--text-secondary)]">Years of Experience</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Crafting Digital Experiences with{' '}
                                <span className="gradient-text">Passion & Precision</span>
                            </h3>

                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                I'm a full-stack developer based in Kerala, India, with over 2 years of experience
                                building web applications. I specialize in JavaScript technologies and AI integration
                                across the entire development stack.
                            </p>

                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                My journey in tech started with a curiosity for how things work on the internet,
                                which led me to dive deep into frontend frameworks, backend systems, and everything
                                in between. I believe in writing clean, efficient code and creating seamless user
                                experiences.
                            </p>

                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies, contributing to
                                open-source projects, or sharing knowledge through technical writing and mentoring.
                            </p>

                            <motion.a
                                href="#contact"
                                className="btn-primary inline-flex mt-96"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Let's Work Together
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-96"
                        style={{ marginTop: '6rem' }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="glass rounded-3xl p-6 text-center card-hover"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                <h4 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </h4>
                                <p className="text-[var(--text-secondary)] text-xs md:text-sm">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} style={{ marginTop: '8rem' }}>
                        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            What I <span className="gradient-text">Do</span>
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    className="glass rounded-3xl card-hover"
                                    style={{ padding: '2rem' }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                                        style={{ background: 'var(--gradient-accent)' }}
                                    >
                                        <service.icon size={32} className="text-white" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-bold mb-6">{service.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-loose">
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
