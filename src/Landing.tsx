import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, } from "framer-motion";
import {
    ShieldCheck,
    Droplets,
    Footprints,
    Flame,
    Hammer,
    Wind,
    Phone,
    MessageCircle,
    ArrowRight,
    Sparkles,
    Factory,
    Zap,
    Target,
    Award,
    Clock,
    Users,
    TrendingUp,
    Menu,
    X,
} from "lucide-react";

/**
 * SAFETY-BOOT LANDING PAGE - VERSION BLUE THEME & NAVBAR FIXE
 * Design avec background bleu dégradé et contenu blanc
 */

// ======== CONFIGURATION ========
const BRAND_NAME = "SunuShield";
const TAGLINE = "Chaussures de sécurité pro — confort, résistance, style.";
const PRODUCT_NAME = "S3 SteelGuard Pro";
const CONTACT_WHATSAPP = "https://wa.me/221769315441";
const CONTACT_PHONE = "+221 76 931 54 41";
const PRODUCT_IMG = "/images/chaussure1.png";

export default function Landing() {
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 18,
        mass: 0.5,
    });

    return (
        <div className="relative min-h-screen text-white antialiased bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Enhanced progress bar */}
            <motion.div
                style={{ scaleX: progress }}
                className="fixed left-0 top-0 h-[4px] w-full origin-left bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 z-[60] shadow-lg"
            />

            <EnhancedNoiseBackdrop />
            <EnhancedNav />

            <main className="relative">
                <EnhancedHero />
                <StatsSection />
                <EnhancedStickyShowcase />
                <EnhancedBenefits />
                <EnhancedSpecs />
                <EnhancedIndustries />
                <EnhancedCTA />
            </main>

            <EnhancedFooter />
        </div>
    );
}

// ======== ENHANCED NAVBAR ========
function EnhancedNav() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-blue-900/90 border-b border-blue-700/60 shadow-2xl"
                    : "bg-blue-900/95 backdrop-blur-md border-b border-blue-700/40"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
                {/* Brand with animation */}
                <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 grid place-items-center shadow-lg"
                    >
                        <ShieldCheck className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="font-bold tracking-tight text-xl text-white">
                        {BRAND_NAME}
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <motion.a
                        href="#specs"
                        className="text-white/80 hover:text-white transition-colors font-medium text-sm"
                        whileHover={{ y: -1 }}
                    >
                        Spécifications
                    </motion.a>
                    <motion.a
                        href="#benefits"
                        className="text-white/80 hover:text-white transition-colors font-medium text-sm"
                        whileHover={{ y: -1 }}
                    >
                        Avantages
                    </motion.a>
                    <motion.a
                        href="#industries"
                        className="text-white/80 hover:text-white transition-colors font-medium text-sm"
                        whileHover={{ y: -1 }}
                    >
                        Métiers
                    </motion.a>
                </div>

                {/* Enhanced Actions */}
                <div className="flex items-center gap-3">
                    <motion.a
                        href={CONTACT_WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-white/20 transition-all duration-300"
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                        >
                            <MessageCircle className="w-4 h-4" />
                        </motion.div>
                        <span>WhatsApp</span>
                    </motion.a>

                    <motion.a
                        href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                        whileHover={{ scale: 1.05, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-sky-400 hover:to-blue-400"
                    >
                        <Phone className="w-4 h-4" />
                        Appeler
                    </motion.a>

                    {/* Mobile menu button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-blue-800/95 backdrop-blur-lg border-t border-blue-700/40"
                >
                    <div className="px-4 py-4 space-y-3">
                        <a href="#specs" className="block text-white/80 hover:text-white transition-colors py-2">
                            Spécifications
                        </a>
                        <a href="#benefits" className="block text-white/80 hover:text-white transition-colors py-2">
                            Avantages
                        </a>
                        <a href="#industries" className="block text-white/80 hover:text-white transition-colors py-2">
                            Métiers
                        </a>
                        <div className="pt-2 border-t border-blue-700/40">
                            <a
                                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-2"
                            >
                                <Phone className="w-4 h-4" />
                                {CONTACT_PHONE}
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

// ======== ENHANCED HERO ========
function EnhancedHero() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 15, y: y * -10 });
    };

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center pt-20">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-sky-500/20"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-blue-500/30"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Enhanced Copy */}
                    <motion.div
                        className="py-8 relative z-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white shadow-lg mb-6"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-4 h-4" />
                            </motion.div>
                            <span>Nouveau modèle 2024</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                        >
                            {PRODUCT_NAME}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-300"
                            >
                                sécurité premium
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="mt-4 text-blue-100 max-w-xl leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            {TAGLINE} Conçue pour les professionnels exigeants : embout acier renforcé,
                            semelle anti-perforation triple densité, et confort optimal.
                        </motion.p>

                        <motion.div
                            className="mt-6 flex flex-wrap items-center gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.a
                                href={CONTACT_WHATSAPP}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:from-sky-400 hover:to-blue-400"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Commander sur WhatsApp
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>

                            <motion.a
                                href="#specs"
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-white/20 transition-all"
                            >
                                Voir spécifications
                            </motion.a>
                        </motion.div>

                        {/* Enhanced Trust Badges */}
                        <motion.div
                            className="mt-8 flex flex-wrap items-center gap-4 text-xs text-blue-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            {[
                                { icon: ShieldCheck, text: "Norme S3" },
                                { icon: Footprints, text: "Anti-glisse SRC" },
                                { icon: Hammer, text: "Embout acier 200J" },
                                { icon: Wind, text: "Mesh respirant" },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <item.icon className="w-3 h-3 text-sky-300" />
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Visual */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <motion.div
                            style={{ y, scale, rotate }}
                            onMouseMove={onMouseMove}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => { setIsHovering(false); setTilt({ x: 0, y: 0 }); }}
                            className="relative aspect-square rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden group cursor-grab"
                        >
                            <motion.img
                                src={PRODUCT_IMG}
                                alt={`${PRODUCT_NAME} — chaussure de sécurité`}
                                className="absolute inset-0 w-full h-full object-contain p-6 select-none"
                                style={{
                                    transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${isHovering ? 1.05 : 1})`,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                draggable={false}
                            />

                            {/* Enhanced Glow Effects */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-24 -left-24 h-48 w-48 rounded-full blur-3xl bg-sky-400/30"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ======== STATS SECTION ========
function StatsSection() {
    const stats = [
        { icon: Users, value: "5000+", label: "Professionnels équipés" },
        { icon: ShieldCheck, value: "99%", label: "Satisfaction clients" },
        { icon: Clock, value: "2 ans", label: "Garantie complète" },
        { icon: TrendingUp, value: "24h", label: "Livraison express" },
    ];

    return (
        <section className="relative py-12 bg-white/5 backdrop-blur-sm border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center text-white"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg mb-3"
                            >
                                <stat.icon className="w-6 h-6" />
                            </motion.div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-blue-200">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ======== ENHANCED STICKY SHOWCASE ========
function EnhancedStickyShowcase() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.1, 1.05, 0.9]);
    const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
    const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                        Découvrez chaque{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-300">
                            détail
                        </span>
                    </h2>
                    <p className="mt-3 text-blue-200 max-w-2xl mx-auto">
                        Faites défiler pour explorer les caractéristiques techniques de nos chaussures de sécurité.
                    </p>
                </motion.div>

                {/* Compact Sticky Viewport */}
                <div className="relative h-[120vh]">
                    <div className="sticky top-20">
                        <div className="relative grid place-items-center">
                            <motion.div
                                style={{ scale, rotate, y }}
                                className="relative"
                            >
                                <motion.img
                                    src={PRODUCT_IMG}
                                    alt={`${PRODUCT_NAME} en rotation`}
                                    className="w-[60vw] max-w-[600px] mx-auto drop-shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Enhanced Scroll Explainers */}
                    <div className="absolute inset-0 pointer-events-none">
                        <EnhancedScrollExplainers />
                    </div>
                </div>
            </div>
        </section>
    );
}

function EnhancedScrollExplainers() {
    const items = [
        { id: 1, label: "Embout acier 200J", icon: Hammer, color: "text-orange-300" },
        { id: 2, label: "Semelle anti-perforation", icon: ShieldCheck, color: "text-green-300" },
        { id: 3, label: "Anti-glisse SRC", icon: Footprints, color: "text-blue-300" },
        { id: 4, label: "Résistante aux huiles", icon: Droplets, color: "text-cyan-300" },
        { id: 5, label: "Résistance chaleur 300°C", icon: Flame, color: "text-red-300" },
    ];

    return (
        <div className="relative h-full">
            <div className="sticky top-[20vh]">
                <div className="grid gap-3 max-w-md mx-auto px-4">
                    {items.map((it, idx) => (
                        <EnhancedTimedBadge
                            key={it.id}
                            index={idx}
                            Icon={it.icon}
                            label={it.label}
                            color={it.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function EnhancedTimedBadge({ index, Icon, label, color }: {
    index: number;
    Icon: React.ComponentType<{ className?: string }>;
    label: string;
    color: string;
}) {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.8 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }}
            whileHover={{ x: 10, scale: 1.05 }}
            className="pointer-events-auto inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                className={`p-2 rounded-xl bg-white/20 shadow-sm group-hover:shadow-md transition-shadow ${color}`}
            >
                <Icon className="w-4 h-4" />
            </motion.div>
            <span className="font-semibold text-white text-sm group-hover:text-white transition-colors">
                {label}
            </span>
        </motion.div>
    );
}

// ======== ENHANCED BENEFITS ========
function EnhancedBenefits() {
    const benefits = [
        {
            title: "Norme S3 complète",
            desc: "Embout acier, semelle anti-perforation, absorption d'énergie.",
            Icon: ShieldCheck,
            gradient: "from-green-400 to-emerald-500"
        },
        {
            title: "Anti-glisse SRC",
            desc: "Adhérence maximale sur sols humides et gras.",
            Icon: Footprints,
            gradient: "from-blue-400 to-cyan-500"
        },
        {
            title: "Résiste aux huiles",
            desc: "Semelle résistante aux hydrocarbures.",
            Icon: Droplets,
            gradient: "from-cyan-400 to-sky-500"
        },
        {
            title: "Résistance chaleur",
            desc: "Semelle HRO résistante jusqu'à 300°C.",
            Icon: Flame,
            gradient: "from-orange-400 to-red-500"
        },
        {
            title: "Confort respirant",
            desc: "Tige mesh technique pour un confort optimal.",
            Icon: Wind,
            gradient: "from-sky-400 to-blue-500"
        },
        {
            title: "Robustesse testée",
            desc: "Approuvée sur les chantiers exigeants.",
            Icon: Factory,
            gradient: "from-purple-400 to-indigo-500"
        },
    ];

    return (
        <section id="benefits" className="relative py-16 md:py-20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                        Avantages{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-300">
                            techniques
                        </span>
                    </h2>
                    <p className="mt-3 text-blue-200 max-w-2xl mx-auto">
                        Des fonctionnalités conçues pour votre sécurité et votre confort au quotidien.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`mb-4 h-12 w-12 rounded-2xl grid place-items-center bg-gradient-to-br ${b.gradient} text-white shadow-lg`}
                            >
                                <b.Icon className="w-5 h-5" />
                            </motion.div>

                            <h3 className="font-bold text-lg text-white mb-2">{b.title}</h3>
                            <p className="text-blue-200 text-sm leading-relaxed">{b.desc}</p>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                                className={`h-0.5 bg-gradient-to-r ${b.gradient} mt-3 rounded-full`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ======== ENHANCED SPECS ========
function EnhancedSpecs() {
    const cols = [
        { k: "Norme", v: "EN ISO 20345:2011 S3 SRC HRO", icon: Award },
        { k: "Embout", v: "Acier 200J résistance", icon: Hammer },
        { k: "Semelle", v: "Anti-perforation + anti-glisse SRC", icon: ShieldCheck },
        { k: "Tige", v: "Mesh respirant + renforts cuir", icon: Wind },
        { k: "Résistances", v: "Huiles, hydrocarbures, chaleur 300°C", icon: Flame },
        { k: "Poids", v: "~620g (pointure 42)", icon: Target },
    ];

    return (
        <section id="specs" className="relative py-16 md:py-20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Enhanced Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-last lg:order-first"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden group"
                        >
                            <motion.img
                                src={PRODUCT_IMG}
                                alt="Zoom semelle & renforts"
                                className="absolute scale-110 -rotate-3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] drop-shadow-2xl group-hover:scale-115 transition-transform duration-700"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl md:text-4xl font-extrabold tracking-tight text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Spécifications{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-300">
                                techniques
                            </span>
                        </motion.h2>

                        <motion.p
                            className="mt-3 text-blue-200"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Caractéristiques techniques de haute précision pour une protection optimale.
                        </motion.p>

                        <motion.div
                            className="mt-6 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <dl className="divide-y divide-white/20">
                                {cols.map((r, index) => (
                                    <motion.div
                                        key={r.k}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                                        className="grid grid-cols-4 gap-3 px-5 md:px-6 py-4 transition-all duration-300"
                                    >
                                        <dt className="col-span-1 flex items-center gap-2 text-sm font-semibold text-white">
                                            <r.icon className="w-4 h-4 text-sky-300" />
                                            {r.k}
                                        </dt>
                                        <dd className="col-span-3 text-sm text-blue-200 font-medium">{r.v}</dd>
                                    </motion.div>
                                ))}
                            </dl>
                        </motion.div>

                        <motion.div
                            className="mt-4 flex items-center gap-2 text-sm text-blue-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                        >
                            <Zap className="w-4 h-4 text-amber-300" />
                            Livraison express • Devis pro sur demande
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ======== ENHANCED INDUSTRIES ========
function EnhancedIndustries() {
    const items = [
        { title: "BTP & Chantiers", Icon: Hammer, color: "from-orange-400 to-red-500" },
        { title: "Usines & Maintenance", Icon: Factory, color: "from-blue-400 to-cyan-500" },
        { title: "Logistique & Entrepôts", Icon: Footprints, color: "from-green-400 to-emerald-500" },
        { title: "Stations & Ateliers", Icon: Flame, color: "from-purple-400 to-pink-500" },
    ];

    return (
        <section id="industries" className="relative py-16 md:py-20 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                        Pour tous les{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-300">
                            métiers
                        </span>
                    </h2>
                    <p className="mt-3 text-blue-200 max-w-2xl mx-auto">
                        Adaptée à tous les environnements professionnels exigeants.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((it, i) => (
                        <motion.div
                            key={it.title}
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 shadow-lg hover:shadow-xl text-center transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${it.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`mx-auto mb-3 h-12 w-12 rounded-2xl grid place-items-center bg-gradient-to-br ${it.color} text-white shadow-lg`}
                            >
                                <it.Icon className="w-5 h-5" />
                            </motion.div>

                            <div className="text-sm font-semibold text-white relative z-10">
                                {it.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ======== ENHANCED CTA ========
function EnhancedCTA() {
    return (
        <section className="relative py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 border border-white/20 shadow-2xl"
                >
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <div className="p-6 md:p-8 relative z-10">
                            <motion.h3
                                className="text-2xl md:text-3xl font-extrabold tracking-tight text-white"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Prêt à équiper votre équipe ?
                            </motion.h3>
                            <motion.p
                                className="mt-2 text-blue-100 max-w-xl"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Contactez-nous pour une commande ou un devis personnalisé.
                                Réponse sous 15 minutes.
                            </motion.p>
                            <motion.div
                                className="mt-6 flex flex-wrap items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.a
                                    href={CONTACT_WHATSAPP}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-white text-blue-900 px-5 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Écrire sur WhatsApp
                                </motion.a>
                                <motion.a
                                    href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-3 text-sm font-semibold hover:bg-white/30 transition-all duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    {CONTACT_PHONE}
                                </motion.a>
                            </motion.div>
                        </div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.img
                                src={PRODUCT_IMG}
                                alt="Chaussure mise en avant"
                                className="relative z-10 w-full max-w-sm mx-auto lg:translate-x-6 translate-y-2 rotate-[-8deg] drop-shadow-2xl"
                                whileHover={{
                                    rotate: [-8, -12, -8],
                                    transition: { duration: 0.5 }
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ======== ENHANCED FOOTER ========
function EnhancedFooter() {
    return (
        <footer className="relative border-t border-white/10 bg-blue-900/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-6 w-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 grid place-items-center shadow-md">
                            <ShieldCheck className="w-3 h-3 text-white" />
                        </div>
                        <div className="font-bold text-white">{BRAND_NAME}</div>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-4 text-xs text-blue-300 flex-wrap justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <a href="#specs" className="hover:text-white transition-colors">
                            Spécifications
                        </a>
                        <a href="#benefits" className="hover:text-white transition-colors">
                            Avantages
                        </a>
                        <a href="#industries" className="hover:text-white transition-colors">
                            Métiers
                        </a>
                        <a href={CONTACT_WHATSAPP} className="hover:text-white transition-colors">
                            WhatsApp
                        </a>
                    </motion.div>

                    <motion.div
                        className="text-xs text-blue-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        © {new Date().getFullYear()} {BRAND_NAME}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}

// ======== ENHANCED NOISE BACKDROP ========
function EnhancedNoiseBackdrop() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(600px_circle_at_90%_30%,rgba(37,99,235,0.12),transparent_55%)]" />

            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\" viewBox=\"0 0 200 200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.5\"/></svg>')",
                }}
            />
        </div>
    );
}