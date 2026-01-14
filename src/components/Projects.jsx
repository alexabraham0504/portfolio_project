import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

const projectsData = [
    {
        id: 1,
        title: 'G-Form AI',
        description:
            'An AI-powered form builder platform using Google Gemini API. Create intelligent forms with AI-generated questions, smart analytics, drag-and-drop interface, and Google Authentication.',
        image: '/gform.png',
        tags: ['React 18', 'Firebase', 'Gemini AI', 'Vite'],
        liveUrl: 'https://g-form.vercel.app',
        githubUrl: 'https://github.com/alexabraham0504/g_form',
        featured: true,
        color: '#8B5CF6',
    },
    {
        id: 2,
        title: 'Calendar AI',
        description:
            'Intelligent calendar management system with AI-powered event scheduling, workspace collaboration, role-based access control, and smart suggestions for India holidays.',
        image: '/calendar-ai.png',
        tags: ['Astro', 'React', 'TypeScript', 'Firebase', 'Express.js'],
        liveUrl: 'https://calendar-ai.vercel.app',
        githubUrl: 'https://github.com/alexabraham0504/calendar-ai',
        featured: true,
        color: '#06B6D4',
    },
    {
        id: 3,
        title: 'AI Form Generator',
        description:
            'Google Form generator with AI-powered question generation using Gemini API. Features drag-and-drop reordering, CSV import, real-time preview, and instant Google Form creation.',
        image: '/ai-form-gen.png',
        tags: ['React', 'Gemini API', 'Node.js', 'Vite'],
        liveUrl: 'https://ai-form-generator.vercel.app',
        githubUrl: 'https://github.com/alexabraham0504/ai-form-generator',
        featured: false,
        color: '#EC4899',
    },
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [filter, setFilter] = useState('all');

    const filters = ['all', 'featured'];

    const filteredProjects =
        filter === 'all'
            ? projectsData
            : projectsData.filter((project) => project.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container mx-auto">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h2 className="section-title">
                            My <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="section-subtitle">
                            A selection of my recent work and personal projects
                        </p>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-4"
                        style={{ marginBottom: '6rem' }}
                    >
                        {filters.map((f) => (
                            <motion.button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 border-2 ${filter === f
                                    ? 'bg-gradient-to-r from-[var(--primary-500)] to-[var(--accent-500)] text-white border-transparent shadow-lg'
                                    : 'glass border-[var(--primary-500)]/30 hover:border-[var(--primary-500)] hover:text-[var(--primary-400)]'
                                    }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {f === 'all' ? 'All Projects' : '⭐ Featured'}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                        layout
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                layout
                                className="group relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Card with gradient border */}
                                <div
                                    className="relative rounded-2xl p-[2px] overflow-hidden h-full"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}, ${project.color}40, transparent)`,
                                    }}
                                >
                                    {/* Inner Card */}
                                    <div
                                        className="relative rounded-2xl overflow-hidden h-full flex flex-col"
                                        style={{ background: 'var(--bg-primary)' }}
                                    >
                                        {/* Project Image/Header */}
                                        <div
                                            className="relative h-52 md:h-60 overflow-hidden flex-shrink-0"
                                            style={{
                                                background: project.image
                                                    ? 'var(--bg-secondary)'
                                                    : `linear-gradient(145deg, ${project.color}30 0%, ${project.color}05 50%, var(--bg-secondary) 100%)`,
                                            }}
                                        >
                                            {project.image ? (
                                                /* Actual Project Image */
                                                <motion.img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.4 }}
                                                />
                                            ) : (
                                                /* Fallback Icon Container */
                                                <>
                                                    {/* Decorative Pattern */}
                                                    <div
                                                        className="absolute inset-0 opacity-10"
                                                        style={{
                                                            backgroundImage: `radial-gradient(circle at 20% 50%, ${project.color} 1px, transparent 1px)`,
                                                            backgroundSize: '20px 20px',
                                                        }}
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <motion.div
                                                            className="relative"
                                                            whileHover={{ scale: 1.1 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <div
                                                                className="absolute inset-0 blur-2xl opacity-50 rounded-full"
                                                                style={{ background: project.color }}
                                                            />
                                                            <div
                                                                className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                                                                style={{
                                                                    background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                                                                    boxShadow: `0 10px 40px ${project.color}40`,
                                                                }}
                                                            >
                                                                <FiFolder size={36} className="text-white" />
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </>
                                            )}

                                            {/* Hover Overlay with GitHub Link */}
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center"
                                                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                                                whileHover={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                                                style={{ background: 'rgba(0,0,0,0.5)' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-4 rounded-full text-white transition-all flex items-center gap-2"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                                                        boxShadow: `0 4px 20px ${project.color}60`,
                                                    }}
                                                    whileHover={{ scale: 1.1, y: -3 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <FiGithub size={22} />
                                                    <span className="font-semibold">View Code</span>
                                                </motion.a>
                                            </motion.div>

                                            {/* Featured Badge */}
                                            {project.featured && (
                                                <motion.div
                                                    className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${project.color}, var(--primary-500))`,
                                                        boxShadow: `0 4px 15px ${project.color}50`,
                                                    }}
                                                    initial={{ x: 20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 + index * 0.1 }}
                                                >
                                                    ⭐ Featured
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Project Info */}
                                        <div className="space-y-8 flex-1 flex flex-col" style={{ padding: '3rem' }}>
                                            {/* Title */}
                                            <h3
                                                className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                                                style={{
                                                    backgroundImage: `linear-gradient(135deg, ${project.color}, var(--primary-400))`,
                                                }}
                                            >
                                                <span className="group-hover:hidden">{project.title}</span>
                                                <span
                                                    className="hidden group-hover:inline bg-gradient-to-r bg-clip-text text-transparent"
                                                    style={{
                                                        backgroundImage: `linear-gradient(135deg, ${project.color}, var(--primary-400))`,
                                                    }}
                                                >
                                                    {project.title}
                                                </span>
                                            </h3>

                                            {/* Description */}
                                            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed flex-1">
                                                {project.description}
                                            </p>

                                            {/* Divider */}
                                            <div
                                                className="h-px w-full opacity-30"
                                                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
                                            />

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300 hover:scale-105"
                                                        style={{
                                                            background: `${project.color}15`,
                                                            color: project.color,
                                                            borderColor: `${project.color}30`,
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom Accent Line */}
                                        <div
                                            className="h-1 w-full"
                                            style={{
                                                background: `linear-gradient(90deg, ${project.color}, ${project.color}40, transparent)`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Shadow/Glow Effect */}
                                <div
                                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"
                                    style={{ background: project.color }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View More Button */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center mt-12"
                    >
                        <motion.a
                            href="https://github.com/alexabraham0504"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FiGithub /> View More on GitHub
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
