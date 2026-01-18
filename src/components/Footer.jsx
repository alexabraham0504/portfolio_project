import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
            <div className="section py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[var(--text-tertiary)] text-sm">
                        © 2026 Alex Abraham
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/alexabraham"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
                            aria-label="GitHub"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/alexabraham"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="mailto:alex.abraham@example.com"
                            className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Email"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
