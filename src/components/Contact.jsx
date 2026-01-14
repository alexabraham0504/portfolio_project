import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
    FiGithub,
    FiLinkedin,
    FiTwitter,
    FiCheckCircle,
    FiX,
    FiAlertCircle,
} from 'react-icons/fi';

const Contact = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const contactInfo = [
        {
            icon: FiMail,
            label: 'Email',
            value: 'alexyabraham05@gmail.com',
            href: 'mailto:alexyabraham05@gmail.com',
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+91 7034374393',
            href: 'tel:+917034374393',
        },
        {
            icon: FiMapPin,
            label: 'Location',
            value: 'Kanjirappally, Kottayam, Kerala, India',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/alexabraham0504', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/alex-abraham-28b266364', label: 'LinkedIn' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            const result = await emailjs.sendForm(
                'service_ci6jbqe',       // Your EmailJS service ID
                'template_bbvsi5n',      // Your EmailJS template ID
                formRef.current,
                'C7rSylZlHrX7GENly'      // Your EmailJS public key
            );

            if (result.status === 200) {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you soon.',
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.',
            });
        } finally {
            setIsLoading(false);
        }
    };

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
        <section id="contact" className="section">
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
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="section-subtitle">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's talk about your project</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities
                                    to be part of your visions. Feel free to reach out through any of the channels below.
                                </p>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        className="flex items-center gap-4 p-6 glass rounded-xl card-hover"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: 'var(--gradient-accent)' }}
                                        >
                                            <info.icon size={22} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--text-muted)]">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="font-medium hover:text-[var(--primary-400)] transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-sm text-[var(--text-muted)] mb-4">Follow me on</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 glass rounded-xl hover:bg-[var(--primary-500)] transition-colors"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={22} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants} className="lg:col-span-3">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="glass rounded-2xl p-6 md:p-8 space-y-6"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <label htmlFor="name" className="block text-base md:text-lg font-bold mb-4">
                                            <span className="gradient-text">Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full"
                                        />
                                    </motion.div>

                                    {/* Email */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label htmlFor="email" className="block text-base md:text-lg font-bold mb-4">
                                            <span className="gradient-text">Your Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full"
                                        />
                                    </motion.div>
                                </div>

                                {/* Subject */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 }}
                                >
                                    <label htmlFor="subject" className="block text-base md:text-lg font-bold mb-4">
                                        <span className="gradient-text">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Collaboration"
                                        required
                                        className="w-full"
                                    />
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.7 }}
                                >
                                    <label htmlFor="message" className="block text-base md:text-lg font-bold mb-4">
                                        <span className="gradient-text">Message</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        className="w-full resize-none"
                                    />
                                </motion.div>

                                {/* Beautiful Status Popup */}
                                <AnimatePresence>
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                            transition={{ type: 'spring', duration: 0.5 }}
                                            className={`relative overflow-hidden rounded-2xl p-6 ${status.type === 'success'
                                                ? 'bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 border border-emerald-500/30'
                                                : 'bg-gradient-to-r from-red-500/20 via-rose-500/20 to-pink-500/20 border border-red-500/30'
                                                }`}
                                        >
                                            {/* Background Glow Effect */}
                                            <div
                                                className={`absolute inset-0 blur-3xl opacity-20 ${status.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                                                    }`}
                                            />

                                            <div className="relative flex items-start gap-4">
                                                {/* Icon */}
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ type: 'spring', delay: 0.2, duration: 0.6 }}
                                                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${status.type === 'success'
                                                        ? 'bg-gradient-to-br from-emerald-400 to-green-500'
                                                        : 'bg-gradient-to-br from-red-400 to-rose-500'
                                                        }`}
                                                >
                                                    {status.type === 'success' ? (
                                                        <FiCheckCircle size={24} className="text-white" />
                                                    ) : (
                                                        <FiAlertCircle size={24} className="text-white" />
                                                    )}
                                                </motion.div>

                                                {/* Message Content */}
                                                <div className="flex-1">
                                                    <motion.h4
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className={`font-bold text-lg mb-1 ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                                                            }`}
                                                    >
                                                        {status.type === 'success' ? '🎉 Message Sent!' : '❌ Oops!'}
                                                    </motion.h4>
                                                    <motion.p
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4 }}
                                                        className="text-[var(--text-secondary)]"
                                                    >
                                                        {status.message}
                                                    </motion.p>
                                                </div>

                                                {/* Close Button */}
                                                <motion.button
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    onClick={() => setStatus({ type: '', message: '' })}
                                                    className="flex-shrink-0 p-1 rounded-full hover:bg-white/10 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <FiX size={20} className="text-[var(--text-muted)]" />
                                                </motion.button>
                                            </div>

                                            {/* Animated Progress Bar (auto-dismiss indicator) */}
                                            {status.type === 'success' && (
                                                <motion.div
                                                    initial={{ width: '100%' }}
                                                    animate={{ width: '0%' }}
                                                    transition={{ duration: 5, ease: 'linear' }}
                                                    onAnimationComplete={() => setStatus({ type: '', message: '' })}
                                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                                                />
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend /> Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Contact;
