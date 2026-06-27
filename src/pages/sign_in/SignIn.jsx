import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ROTATING_SIGNIN_MOTIVATIONS = [
    {
        quote: "Your path to career clarity begins with a single step. Connect your unique credentials and unveil personalized opportunities.",
        pillar: "Smart Guidance Pipeline"
    },
    {
        quote: "Bridging the gap between standard engineering parameters and enterprise market placements requires precise data metrics. Log in to synchronize your profile.",
        pillar: "Placement Optimization Matrix"
    },
    {
        quote: "Democratizing expert-level career counseling means building robust analytical systems accessible anytime, anywhere.",
        pillar: "AI Inclusivity Framework"
    }
];

export default function SignIn() {
    // --- State Management ---
    const [userRole, setUserRole] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrorMessage, setFormErrorMessage] = useState('');
    const [motivationIdx, setMotivationIdx] = useState(0);

    // Continuous dynamic ticker to rotate background insights
    useEffect(() => {
        const interval = setInterval(() => {
            setMotivationIdx((prev) => (prev + 1) % ROTATING_SIGNIN_MOTIVATIONS.length);
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    // Form Event Management Handler
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormErrorMessage('');

        if (!email.trim() || !password.trim()) {
            setFormErrorMessage('Verification parameters incomplete. Please supply valid email and password records.');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            console.log("Authentication authorized:", { userRole, email, rememberMe });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col justify-between">

            {/* Primary Main Interactive Wrapper Frame */}
            <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full mx-auto min-h-[calc(100vh-4rem)]">

                {/* COLUMN 1: LEFT SIDE BRAND VISUAL (Now fills full screen height consistently without layout gaps) */}
                <section className="hidden lg:flex lg:col-span-5 relative p-12 flex-col justify-between text-white overflow-hidden border-r border-slate-200">

                    {/* Immersive Full-Bleed Background Image Cover Setup */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                            alt="Technical Analytics Processing Platform Workspace View"
                            className="w-full h-full object-cover filter brightness-[0.25] contrast-105"
                        />
                        {/* Smooth blueish-indigo overlay layer to make it seamlessly match the brand identity */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-slate-950/90 to-slate-950/80 blend-multiply"></div>
                        {/* Background systemic wireframe grid detailing data flow maps */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
                    </div>

                    {/* Top Anchor: Academic Institutional Registry Branding */}
                    <div className="relative z-10 space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🚀</span>
                            <span className="font-extrabold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-indigo-200">
                                Career Lift System
                            </span>
                        </div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">
                            MITM, Jamshedpur • CSE Platform Init
                        </p>
                    </div>

                    {/* Middle Anchor: Automated Sliding Text Content directly overlaid onto the background canvas */}
                    <div className="relative z-10 max-w-md mx-auto text-center space-y-4 my-auto bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                        <div className="min-h-[100px] flex flex-col justify-center">
                            <p className="text-sm italic font-medium text-slate-200 leading-relaxed tracking-wide transition-all duration-500">
                                "{ROTATING_SIGNIN_MOTIVATIONS[motivationIdx].quote}"
                            </p>
                            <p className="text-[11px] uppercase tracking-wider font-bold text-indigo-400 mt-3">
                                Component Area: {ROTATING_SIGNIN_MOTIVATIONS[motivationIdx].pillar}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Anchor: Compliant Engineering Subtext Indicator
                    <div className="relative z-10 text-[11px] text-slate-400 font-medium">
                        Session Scope: 2021 - 2025 B.Tech Technical Project Suite. External Database Handshakes TLS-secured.
                    </div> */}
                </section>

                {/* COLUMN 2: RIGHT SIDE AUTHENTICATION ENGINE INTERFACE PANEL */}
                <section className="col-span-1 lg:col-span-7 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 bg-slate-50">
                    <div className="w-full max-w-md space-y-8 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">

                        {/* Column Header Metadata Titles Block */}
                        <div className="space-y-2 text-center lg:text-left">
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                                Identity Synchronization
                            </h1>
                            <p className="text-sm text-slate-500 font-normal">
                                Authenticate context profiles to fetch localized mappings, resumes, or portal insights.
                            </p>
                        </div>

                        {/* Interactive Profile Role Categorization Tab Toggles Matrix */}
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                                Choose Profile Gateway Segment
                            </label>
                            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
                                <button
                                    type="button"
                                    onClick={() => setUserRole('student')}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all duration-200 ${userRole === 'student'
                                            ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                                        }`}
                                >
                                    🎓 Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserRole('seeker')}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all duration-200 ${userRole === 'seeker'
                                            ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                                        }`}
                                >
                                    💼 Job Seeker
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserRole('faculty')}
                                    className={`py-2 text-xs font-bold rounded-lg transition-all duration-200 ${userRole === 'faculty'
                                            ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                                        }`}
                                >
                                    🏛️ Admin
                                </button>
                            </div>
                        </div>

                        {/* Conditional Verification Alert Status Messages Banner */}
                        {formErrorMessage && (
                            <div className="bg-rose-50 border border-rose-200 text-rose-700 rounded-xl p-3.5 text-xs flex items-start gap-2.5 font-medium">
                                <span className="text-base shrink-0">⚠️</span>
                                <p className="leading-relaxed">{formErrorMessage}</p>
                            </div>
                        )}

                        {/* Primary Sign-In Secure Data Matrix Form Wrapper */}
                        <form onSubmit={handleFormSubmit} className="space-y-5">

                            {/* Email Input */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                                    Email Identifier Address
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none text-sm">
                                        ✉️
                                    </span>
                                    <input
                                        type="email"
                                        autoComplete="email"
                                        placeholder="name@institution.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition duration-150"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide block">
                                        Security Access Key
                                    </label>
                                    <a href="#forgot" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition">
                                        Forgot Key Reset?
                                    </a>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 select-none text-sm">
                                        🔒
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl pl-10 pr-12 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition duration-150 font-mono tracking-widest"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 h-8 px-2 text-xs font-bold text-slate-400 hover:text-slate-600 transition uppercase tracking-tighter"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {/* Options Segment Row */}
                            <div className="flex items-center">
                                <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 transition cursor-pointer"
                                    />
                                    <span className="text-xs text-slate-600 font-medium group-hover:text-slate-800 transition">
                                        Retain token state criteria on this localized machine node.
                                    </span>
                                </label>
                            </div>

                            {/* Action Execution Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-sm hover:shadow shadow-indigo-600/10 flex items-center justify-center gap-2 mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        <span>Synchronizing Network Verification...</span>
                                    </>
                                ) : (
                                    <span>Execute Secure Sign-In</span>
                                )}
                            </button>
                        </form>

                        {/* Supplementary Prompt Route Links Navigation */}
                        <div className="pt-6 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
                            First session allocation context scenario?{' '}
                            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-bold underline transition">
                                Provision New Profile Registry
                            </Link>
                        </div>

                    </div>
                </section>

            </main>

           

        </div>
    );
}