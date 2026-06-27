import React, { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 font-sans antialiased pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP PANEL: BRANDING & NEWSLETTER INTEGRATION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">

                    {/* Brand Presentation Column */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-900">
                                C
                            </span>
                            <span className="text-lg font-extrabold tracking-tight text-white font-display">
                                CAREER<span className="text-indigo-500">LIFT</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            An AI-powered institutional mapping engine and guidance ecosystem designed to bridge the gap between regional stream learning metrics and active market employment.
                        </p>
                        {/* System Performance Badge (Low Bandwidth indicator) */}
                        <div className="inline-flex items-center space-x-2 bg-slate-800/60 border border-slate-700/50 rounded-lg px-3 py-1.5 text-xs text-emerald-400 font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>System Status: Core Node Active (Optimized for 2G/3G)</span>
                        </div>
                    </div>

                    {/* Newsletter Input Form Block */}
                    <div className="lg:col-span-7 space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-display">
                            Subscribe to Placement & Stream Updates
                        </h4>
                        <p className="text-xs text-slate-400 max-w-md">
                            Receive direct notifications regarding regional cut-off releases, government vocational training timelines, and job alert aggregates.
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row max-w-md gap-2">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter student or corporate institutional email"
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition shadow-md whitespace-nowrap"
                            >
                                {subscribed ? 'Subscribed ✓' : 'Join Node'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* MIDDLE PANEL: NAVIGATION LINKS CATEGORIZED BY ARCHITECTURE */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-sm">

                    {/* Category 1: Diagnosis & Testing */}
                    <div className="space-y-3">
                        <h5 className="font-bold tracking-wider text-slate-200 uppercase text-xs font-display">Assessment Engine</h5>
                        <ul className="space-y-2">
                            <li><a href="/psychometric" className="hover:text-white transition-colors">Psychometric Discovery</a></li>
                            <li><a href="/stream-mapping" className="hover:text-white transition-colors">Class 10th Stream Test</a></li>
                            <li><a href="/aptitude" className="hover:text-white transition-colors">Aptitude Diagnosis Matrix</a></li>
                            <li><a href="/skill-audit" className="hover:text-white transition-colors">Continuous Skill Audits</a></li>
                        </ul>
                    </div>

                    {/* Category 2: Institutional Infrastructure */}
                    <div className="space-y-3">
                        <h5 className="font-bold tracking-wider text-slate-200 uppercase text-xs font-display">Institutions</h5>
                        <ul className="space-y-2">
                            <li><a href="/colleges" className="hover:text-white transition-colors">Localized College Database</a></li>
                            <li><a href="/cutoffs" className="hover:text-white transition-colors">Cut-off Verification Hub</a></li>
                            <li><a href="/admissions" className="hover:text-white transition-colors">Admission Tracking Frameworks</a></li>
                            <li><a href="/scholarships" className="hover:text-white transition-colors">Regional Scholarship Maps</a></li>
                        </ul>
                    </div>

                    {/* Category 3: Employment Pipelines */}
                    <div className="space-y-3">
                        <h5 className="font-bold tracking-wider text-slate-200 uppercase text-xs font-display">Employment Node</h5>
                        <ul className="space-y-2">
                            <li><a href="/jobs" className="hover:text-white transition-colors">Localized Vacancy Placements</a></li>
                            <li><a href="/internships" className="hover:text-white transition-colors">Apprenticeship Vectors</a></li>
                            <li><a href="/tracker" className="hover:text-white transition-colors">Progress Log Dashboard</a></li>
                            <li><a href="/certifications" className="hover:text-white transition-colors">Partner Integrations</a></li>
                        </ul>
                    </div>

                    {/* Category 4: Assistant & Legal Operations */}
                    <div className="space-y-3">
                        <h5 className="font-bold tracking-wider text-slate-200 uppercase text-xs font-display">System System</h5>
                        <ul className="space-y-2">
                            <li><a href="/ai-counselor" className="hover:text-white transition-colors">NLP AI Conversation Unit</a></li>
                            <li><a href="/offline-mode" className="hover:text-white transition-colors">Low-Bandwidth Documentation</a></li>
                            <li><a href="/privacy" className="hover:text-white transition-colors">Data Privacy Protocol</a></li>
                            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Operations</a></li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM PANEL: INSTITUTION METADATA & COPYRIGHT MARKS */}
                <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center text-xs gap-4 text-center md:text-left">

                    {/* B.Tech Project Group & Institution Recognition */}
                    <div className="space-y-1">
                        <p className="text-slate-500 font-normal">
                            Designed as a professional engineering implementation under the Computer Science & Engineering Division.
                        </p>
                        <p className="text-slate-400 font-semibold">
                            Maryland Institute of Technology and Management (MITM), Jamshedpur, Jharkhand.
                        </p>
                    </div>

                    {/* Standard Timestamp Copyright */}
                    <div className="text-slate-500 whitespace-nowrap">
                        &copy; {new Date().getFullYear()} Career Lift System. All Rights Reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
}