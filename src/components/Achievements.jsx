import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiTrendingUp, FiGithub, FiUsers, FiCode, FiStar } from 'react-icons/fi';

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const achievements = [
        {
            icon: FiAward,
            title: 'AI Innovation',
            description: 'Built G-Form AI - An intelligent form builder with 1000+ active users, reducing form creation time by 70%',
            color: '#8B5CF6',
            stat: '1K+ Users',
        },
        {
            icon: FiTrendingUp,
            title: 'Performance Optimization',
            description: 'Optimized Calendar AI to handle 10K+ events with 40% faster load time using advanced caching',
            color: '#06B6D4',
            stat: '40% Faster',
        },
        {
            icon: FiGithub,
            title: 'Open Source Contributor',
            description: 'Active contributor to React ecosystem with 50+ stars across personal projects',
            color: '#EC4899',
            stat: '50+ ⭐',
        },
        {
            icon: FiUsers,
            title: 'Team Collaboration',
            description: 'Led development teams of 3-5 members on multiple projects, ensuring on-time delivery',
            color: '#10B981',
            stat: '5+ Projects',
        },
        {
            icon: FiCode,
            title: 'Code Quality',
            description: 'Maintained 95%+ code coverage across all major projects with comprehensive testing',
            color: '#F59E0B',
            stat: '95% Coverage',
        },
        {
            icon: FiStar,
            title: 'Client Satisfaction',
            description: '15+ satisfied clients with 100% project completion rate and positive feedback',
            color: '#EF4444',
            stat: '100% Success',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="achievements" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
                            Key <span className="gradient-text">Achievements</span> 🎯
                        </h2>
                        <p className="section-subtitle">
                            Measurable impact and proven results from my work
                        </p>
                    </motion.div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={achievement.title}
                                variants={itemVariants}
                                className="glass rounded-3xl p-4 card-hover group flex flex-col"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Icon & Stat */}
                                <div className="flex items-start justify-between mb-2">
                                    <motion.div
                                        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                        style={{ background: `${achievement.color}20` }}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <achievement.icon size={22} style={{ color: achievement.color }} />
                                    </motion.div>

                                    {/* Stat Badge */}
                                    <motion.div
                                        className="px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0"
                                        style={{
                                            background: `${achievement.color}15`,
                                            color: achievement.color,
                                            border: `1px solid ${achievement.color}30`,
                                        }}
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                                    >
                                        {achievement.stat}
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${achievement.color}, var(--primary-400))`,
                                    }}
                                >
                                    <span className="group-hover:hidden">{achievement.title}</span>
                                    <span className="hidden group-hover:inline bg-gradient-to-r bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: `linear-gradient(135deg, ${achievement.color}, var(--primary-400))`,
                                        }}
                                    >
                                        {achievement.title}
                                    </span>
                                </h3>

                                {/* Description */}
                                <p className="text-[var(--text-secondary)] leading-tight text-sm mb-3 flex-grow">
                                    {achievement.description}
                                </p>

                                {/* Decorative Line */}
                                <motion.div
                                    className="h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                                    style={{ background: achievement.color }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12"
                    >
                        <motion.div
                            className="inline-block glass rounded-3xl px-6 py-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="text-sm text-[var(--text-secondary)] mb-3">
                                Want to build something amazing together?
                            </p>
                            <motion.a
                                href="#contact"
                                className="btn-primary inline-flex"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Let's Collaborate
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
