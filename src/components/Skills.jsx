import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaFigma,
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiPython,
    SiFirebase,
} from 'react-icons/si';

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB', level: 95 },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 90 },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 88 },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
            { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 98 },
            { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 95 },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 92 },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 90 },
            { name: 'Python', icon: SiPython, color: '#3776AB', level: 85 },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 87 },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 88 },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 82 },
        ],
    },
    {
        title: 'Tools & Others',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 92 },
            { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 78 },
            { name: 'AWS', icon: FaAws, color: '#FF9900', level: 75 },
            { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 80 },
        ],
    },
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        <section id="skills" className="section">
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
                            My <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="section-subtitle">
                            Technologies and tools I use to bring ideas to life
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="space-y-16">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                custom={categoryIndex}
                            >
                                <h3 className="text-xl md:text-2xl font-bold mb-8 text-center md:text-left">
                                    <span className="gradient-text">{category.title}</span>
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            className="glass rounded-2xl p-5 card-hover group"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                delay: categoryIndex * 0.2 + skillIndex * 0.05,
                                                duration: 0.4,
                                            }}
                                            whileHover={{ y: -8, scale: 1.02 }}
                                        >
                                            {/* Icon */}
                                            <motion.div
                                                className="w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center mx-auto"
                                                whileHover={{ rotate: 360, scale: 1.2 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <skill.icon
                                                    size={40}
                                                    style={{ color: skill.color }}
                                                    className="transition-all duration-300"
                                                />
                                            </motion.div>

                                            {/* Skill Name */}
                                            <h4 className="text-center font-semibold mb-3">{skill.name}</h4>

                                            {/* Progress Bar */}
                                            <div className="relative h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                                                <motion.div
                                                    className="absolute inset-y-0 left-0 rounded-full"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${skill.color}, var(--primary-500))`,
                                                    }}
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                                    transition={{
                                                        delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                                        duration: 1,
                                                        ease: 'easeOut',
                                                    }}
                                                />
                                            </div>

                                            {/* Percentage */}
                                            <motion.p
                                                className="text-center text-xs md:text-sm text-[var(--text-muted)] mt-2"
                                                initial={{ opacity: 0 }}
                                                animate={isInView ? { opacity: 1 } : {}}
                                                transition={{
                                                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                                }}
                                            >
                                                {skill.level}%
                                            </motion.p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skills Summary */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 glass rounded-3xl p-8 md:p-12"
                    >
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <motion.h4
                                    className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.8, type: 'spring' }}
                                >
                                    16+
                                </motion.h4>
                                <p className="text-[var(--text-secondary)]">Technologies Mastered</p>
                            </div>
                            <div>
                                <motion.h4
                                    className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.9, type: 'spring' }}
                                >
                                    100%
                                </motion.h4>
                                <p className="text-[var(--text-secondary)]">Commitment to Quality</p>
                            </div>
                            <div>
                                <motion.h4
                                    className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1, type: 'spring' }}
                                >
                                    24/7
                                </motion.h4>
                                <p className="text-[var(--text-secondary)]">Learning & Growing</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
