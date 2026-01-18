import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactLinks = [
        {
            name: "Email",
            value: "alex.abraham@example.com",
            href: "mailto:alex.abraham@example.com",
            icon: FiMail
        },
        {
            name: "LinkedIn",
            value: "/in/alexabraham",
            href: "https://linkedin.com/in/alexabraham",
            icon: FiLinkedin
        },
        {
            name: "GitHub",
            value: "/alexabraham",
            href: "https://github.com/alexabraham",
            icon: FiGithub
        }
    ];

    return (
        <section id="contact" className="bg-[#EFEFEF]" ref={ref}>
            <div className="section">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="mb-4">Get in Touch</h2>

                    <p className="text-lg text-[var(--text-secondary)] mb-10">
                        Open to internships, full-time roles, and collaborations.
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent)] transition-all group"
                            >
                                <link.icon size={20} className="text-[var(--accent)]" />
                                <span className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                                    {link.name}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
