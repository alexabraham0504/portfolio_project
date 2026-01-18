import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Tailwind", "Bootstrap"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "REST APIs"]
        },
        {
            title: "AI / ML",
            skills: ["Python", "Generative AI", "Machine Learning"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Deployment Tools"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <section id="skills" className="section" ref={ref}>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="mb-4">Skills & Technologies</h2>
                <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
                    Technologies I work with to build modern applications.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {skillCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={itemVariants}
                        className="card"
                    >
                        <h3 className="text-base font-semibold mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill} className="tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
