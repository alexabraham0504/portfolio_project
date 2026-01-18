import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "AI Content Generator",
            description: "Built an AI-powered content generation platform that helps marketers create SEO-optimized content 10x faster.",
            tech: ["Next.js", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
            role: "Full Stack Developer",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Real-Time Collaboration Tool",
            description: "Developed a collaborative workspace with real-time editing and WebSocket integration for team workflows.",
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            role: "Full Stack Developer",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Smart Analytics Dashboard",
            description: "Created an analytics platform with interactive data visualizations and ML-driven insights for business intelligence.",
            tech: ["React", "D3.js", "Python", "FastAPI"],
            role: "Frontend Lead",
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="projects" className="bg-[var(--bg-tertiary)]" ref={ref}>
            <div className="section">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="mb-4">Projects</h2>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                        Selected work showcasing my experience in full-stack development and AI integration.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            className="card group h-full flex flex-col"
                        >
                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                {project.title}
                            </h3>

                            {/* Role */}
                            <p className="text-sm text-[var(--accent)] font-medium mb-3">
                                {project.role}
                            </p>

                            {/* Description */}
                            <p className="text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tag text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.liveUrl}
                                    className="flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors font-medium"
                                >
                                    <FiExternalLink size={16} />
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubUrl}
                                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                                >
                                    <FiGithub size={16} />
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
