import React, { useState } from 'react';

export default function Landing() {
    const [selectedUserType, setSelectedUserType] = useState(null);

    const demographics = [
        { id: '10th', icon: '🎒', title: 'Class 10th Students', desc: 'Discover optimal stream selections (Science, Commerce, Arts) based on your natural learning traits.' },
        { id: '12th', icon: '🎓', title: 'Class 12th Students', desc: 'Find targeted engineering, medical, professional degrees, and localized regional college paths.' },
        { id: 'grad', icon: '🏛️', title: 'Graduates', desc: 'Map your specialized college degrees cleanly to market-relevant job domains and upskilling pathways.' },
        { id: 'seeker', icon: '💼', title: 'Job Seekers', desc: 'Access localized vacancy placements, live tracking modules, and personalized entry metrics.' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-indigo-500 selection:text-white pt-20">

            {/* SECTION 1: HERO CONTAINER */}
            <header className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center overflow-hidden">
                {/* Abstract Background Accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />

                <div className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-6 shadow-sm animate-fade-in">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                    </span>
                    AI-Powered Smart Career Guidance System
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.12] font-display">
                    Bridging the Critical Gap Between <br className="hidden md:inline" />
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                        Education and Employment
                    </span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                    Democratizing personalized mentorship. Discover tailored streams, examine regional matching colleges, and connect to structured placements configured exactly to your geographic boundaries.
                </p>

                {/* Action Triggers */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="#get-started"
                        className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-indigo-100 transition-all transform hover:-translate-y-0.5 text-center"
                    >
                        Start Discovery Path
                    </a>
                    <button
                        className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-base px-8 py-4 rounded-xl shadow-sm transition-all text-center flex items-center justify-center gap-2"
                    >
                        🎙️ Talk to AI Assistant
                    </button>
                </div>

                {/* Floating Metrics Badge */}
                <div className="mt-16 pt-8 border-t border-slate-200/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                    <div>
                        <p className="text-3xl font-black text-indigo-600 font-display">98%</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Accuracy Index</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-slate-900 font-display">150+</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Career Streams mapped</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-slate-900 font-display">Low Data</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Bandwidth Adaptive</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-indigo-600 font-display">Regional</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">College Database</p>
                    </div>
                </div>
            </header>

            {/* SECTION 2: INTERACTIVE ONBOARDING SEGMENTS */}
            <section id="get-started" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display">Select Your Current Profile</h2>
                    <p className="mt-3 text-base text-slate-500">
                        Tell us where you are in your educational journey so our structural algorithm can customize your dashboard interface instantly.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {demographics.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedUserType(item.id)}
                            className={`cursor-pointer rounded-2xl p-6 border text-left transition-all duration-300 relative overflow-hidden ${selectedUserType === item.id
                                    ? 'bg-white border-indigo-600 shadow-xl shadow-indigo-50/80 -translate-y-1 ring-2 ring-indigo-600/10'
                                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                                }`}
                        >
                            {selectedUserType === item.id && (
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white p-1.5 rounded-bl-xl text-xs font-bold">
                                    ✓ Selected
                                </div>
                            )}
                            <div className="text-3xl mb-4 p-2.5 bg-slate-50 inline-block rounded-xl border border-slate-100">{item.icon}</div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600">{item.title}</h3>
                            <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {selectedUserType && (
                    <div className="mt-8 text-center animate-fade-in">
                        <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md">
                            Proceed to Personalized Dashboard →
                        </button>
                    </div>
                )}
            </section>

            {/* SECTION 3: SYSTEM ARCHITECTURE ARCHITECTURE MATRIX */}
            <section className="bg-white border-y border-slate-200 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

                        <div className="lg:col-span-5 mb-12 lg:mb-0">
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Built-in Competencies</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mt-2 leading-tight">
                                An Ecosystem Engine Mapped for Execution
                            </h2>
                            <p className="mt-4 text-base text-slate-600 leading-relaxed">
                                The Career Lift platform parses localized parameters to optimize output recommendations. It compiles regional databases with verified entrance standard criteria to yield clear pathways.
                            </p>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-1 bg-indigo-50 text-indigo-600 rounded-md mt-0.5">🧠</div>
                                    <p className="ml-3 text-sm font-semibold text-slate-700">NLP Powered Automated Counseling Chatbot</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-1 bg-indigo-50 text-indigo-600 rounded-md mt-0.5">📶</div>
                                    <p className="ml-3 text-sm font-semibold text-slate-700">Optimized Offline-First Bandwidth Controls</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-1 bg-indigo-50 text-indigo-600 rounded-md mt-0.5">📍</div>
                                    <p className="ml-3 text-sm font-semibold text-slate-700">Regional Distance and Cut-off Matching</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm text-left">
                                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span>📊</span> Psychometric Engine
                                </div>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    Evaluates intrinsic capabilities and skills dynamically to assign optimal candidate alignments.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm text-left">
                                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span>🏫</span> Institution Hub
                                </div>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    Tracks admissions, regional constraints, and accurate eligibility frameworks automatically.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm text-left">
                                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span>🚀</span> Skill Integrations
                                </div>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    Connects directly to continuous learning certifications to map execution milestones seamlessly.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-sm text-left">
                                <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <span>🎙️</span> Natural Voice Input
                                </div>
                                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                                    Allows simplified navigation through direct localized speech queries tailored for accessibility.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 4: CALL TO ACTION FOOTER BANNER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent)] pointer-events-none" />

                    <h3 className="text-2xl sm:text-3xl font-bold font-display max-w-2xl mx-auto leading-snug">
                        Ready to Accelerate Your Career Mapping Milestone?
                    </h3>
                    <p className="text-slate-300 mt-3 text-sm sm:text-base max-w-xl mx-auto font-light">
                        Create an entry node today to map matching paths, access mentorship tracks, and manage placement logs cleanly.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl transition">
                            Get Started Free
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-semibold px-6 py-3 rounded-xl transition">
                            Contact Institution Board
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}