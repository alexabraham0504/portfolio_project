import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/alexabraham0504', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/alex-abraham-28b266364', label: 'LinkedIn' },
        { icon: FiMail, href: 'mailto:alexyabraham05@gmail.com', label: 'Email' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{ background: 'var(--bg-secondary)' }}>
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="#home"
                            onClick={(e) => handleLinkClick(e, '#home')}
                            className="text-2xl font-bold gradient-text inline-block mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Alex Abraham
                        </motion.a>
                        <p className="text-[var(--text-secondary)] mb-6 max-w-md leading-relaxed">
                            Full Stack Developer & AI/ML Enthusiast passionate about creating beautiful, functional, and
                            intelligent digital experiences. Let's build something amazing together.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                    className="p-3 glass rounded-xl hover:bg-[var(--primary-500)] transition-all duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className="text-[var(--text-secondary)] hover:text-[var(--primary-400)] transition-colors inline-flex items-center gap-2"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" />
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
                        <ul className="space-y-3 text-[var(--text-secondary)]">
                            <li>
                                <a
                                    href="mailto:alexyabraham05@gmail.com"
                                    className="hover:text-[var(--primary-400)] transition-colors"
                                >
                                    alexyabraham05@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+917034374393"
                                    className="hover:text-[var(--primary-400)] transition-colors"
                                >
                                    +91 7034374393
                                </a>
                            </li>
                            <li>Kanjirappally, Kottayam</li>
                            <li>Kerala, India</li>
                        </ul>

                        {/* Newsletter - Optional */}
                        <div className="mt-6">
                            <p className="text-sm font-medium mb-2">Stay Updated</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 text-sm rounded-lg"
                                />
                                <motion.button
                                    className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                                    style={{ background: 'var(--gradient-accent)' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FiMail size={16} />
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--neutral-800)]">
                <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[var(--text-muted)] text-sm flex items-center gap-1 flex-wrap justify-center">
                            © {currentYear} Alex Abraham. Made with{' '}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <FiHeart className="text-red-500 inline" />
                            </motion.span>{' '}
                            using React & Tailwind CSS
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            className="p-3 glass rounded-full hover:bg-[var(--primary-500)] transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Scroll to top"
                        >
                            <FiArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
