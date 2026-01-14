import { useState, useEffect } from 'react';
// Deploy trigger comment
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiCode } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = navLinks.map(link => link.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-2'
                : 'py-4'
                }`}
        >
            {/* Navbar Container with Centered Pill Design */}
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    className={`flex items-center justify-between transition-all duration-500 ${scrolled
                        ? 'bg-[var(--bg-primary)]/70 backdrop-blur-xl border border-[var(--primary-500)]/30 rounded-full px-6 py-3 shadow-xl'
                        : 'bg-transparent backdrop-blur-sm px-6 py-3'
                        }`}
                    layout
                >
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center gap-2 cursor-pointer group"
                        whileHover={{ scale: 1.02 }}
                        onClick={(e) => handleLinkClick(e, '#home')}
                    >
                        {/* Logo Text */}
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary-400)] via-[var(--accent-400)] to-[var(--primary-400)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Alex Abraham
                            </span>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className={`relative px-12 py-6 rounded-full font-bold text-base transition-all duration-300 ${isActive
                                        ? 'text-white'
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Active Background */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                                            }}
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        className="ml-4 relative w-12 h-12 rounded-full overflow-hidden group"
                        style={{
                            background: 'linear-gradient(135deg, var(--primary-500)/20, var(--accent-500)/20)',
                            border: '1px solid var(--primary-500)/30',
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle theme"
                    >
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={false}
                            animate={{
                                rotate: theme === 'dark' ? 0 : 180,
                                scale: 1
                            }}
                            transition={{ duration: 0.5, type: 'spring' }}
                        >
                            {theme === 'dark' ? (
                                <FiSun size={20} className="text-yellow-400" />
                            ) : (
                                <FiMoon size={20} className="text-[var(--primary-400)]" />
                            )}
                        </motion.div>
                        {/* Glow Effect */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                                background: theme === 'dark'
                                    ? 'radial-gradient(circle, rgba(250, 204, 21, 0.3) 0%, transparent 70%)'
                                    : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                            }}
                        />
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary-500)/20, var(--accent-500)/20)',
                                border: '1px solid var(--primary-500)/30',
                            }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FiSun size={18} className="text-yellow-400" /> : <FiMoon size={18} className="text-[var(--primary-400)]" />}
                        </motion.button>

                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-full relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                            }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <FiX size={20} className="text-white" /> : <FiMenu size={20} className="text-white" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden mt-4 mx-4"
                    >
                        <div
                            className="rounded-3xl overflow-hidden border border-[var(--primary-500)]/20 shadow-2xl"
                            style={{
                                background: 'var(--bg-primary)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            {/* Mobile Nav Header Gradient */}
                            <div
                                className="h-1 w-full"
                                style={{
                                    background: 'linear-gradient(90deg, var(--primary-500), var(--accent-500), var(--primary-500))',
                                }}
                            />

                            <div className="py-6 px-6 flex flex-col gap-2">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.replace('#', '');
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleLinkClick(e, link.href)}
                                            className={`relative px-4 py-3 rounded-xl font-medium transition-all ${isActive
                                                ? 'text-white'
                                                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                                                }`}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.08, duration: 0.3 }}
                                            style={isActive ? {
                                                background: 'linear-gradient(135deg, var(--primary-500), var(--accent-500))',
                                            } : {}}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-[var(--primary-500)]'}`} />
                                                {link.name}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </motion.nav >
    );
};

export default Navbar;
