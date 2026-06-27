import React, { useState, useEffect } from 'react';

// Live system workflow parameters representing your algorithmic modules
const SYSTEM_MECHANICS = [
    {
        step: "01",
        title: "Adaptive Psychometric Profiling",
        description: "Evaluates behavioral characteristics, hidden logical aptitudes, and core technical competencies using structured scientific evaluation models to capture raw potential rather than just past marks.",
        badge: "AI Engine Core",
        icon: "🧠",
        color: "from-blue-500 to-indigo-600"
    },
    {
        step: "02",
        title: "Localized College & Industry Mapping",
        description: "Aligns your profile with state-integrated databases (including fee caps, explicit cutoff percentages, and scholarship rules like E-Kalyan) mapped around regional tiers and economic criteria.",
        badge: "Data Matrix",
        icon: "📍",
        color: "from-indigo-500 to-purple-600"
    },
    {
        step: "03",
        title: "NLP Conversational Counselling Desk",
        description: "A continuous conversational interface providing immediate answers, resume diagnostics, and interview advice customized to remove infrastructure and guidance gaps.",
        badge: "Natural Language AI",
        icon: "💬",
        color: "from-purple-500 to-pink-600"
    },
    {
        step: "04",
        title: "Placement Tracking & Skill Integration",
        description: "Bridges the gap to the employment sector by recommending tailored upskilling paths and linking candidate profiles directly to corporate standard vacancy dashboards.",
        badge: "Employment Pipeline",
        icon: "🚀",
        color: "from-pink-500 to-rose-600"
    }
];

// Interactive motivational parameters to build visitor trust and engagement
const MOTIVATIONAL_QUOTES = [
    {
        quote: "The best way to predict your future is to create it. True empowerment begins when your academic trajectory matches your natural technical callings.",
        author: "Platform Guidance Vision",
        context: "Bridging the Skill Gap"
    },
    {
        quote: "Education is not just the filling of a pail, but the lighting of a fire. Do not let localized resource limitations narrow your career boundaries.",
        author: "Academic Core Values",
        context: "Democratizing Opportunity"
    },
    {
        quote: "Your background or your region doesn't define your capacity. With the right roadmap and smart data pipelines, local talent achieves global impact.",
        author: "Tech-Ed Integration Pillar",
        context: "Empowering Rural Minds"
    }
];

export default function Landing() {
    // --- State Management for Interactive Mechanics and Animations ---
    const [activeTab, setActiveTab] = useState(0);
    const [currentQuote, setCurrentQuote] = useState(0);
    const [simulatedQuery, setSimulatedQuery] = useState("");
    const [isSimulating, setIsSimulating] = useState(false);
    const [simulationOutput, setSimulationOutput] = useState("");

    // Automatically rotate motivational quotes to establish a dynamic, responsive UI feel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    // Simulates live NLP processing for users to test page mechanics interactively
    const handleRunSimulation = (e) => {
        e.preventDefault();
        if (!simulatedQuery.trim()) return;
        
        setIsSimulating(true);
        setSimulationOutput("Analyzing natural language data framework structural tokens...");
        
        setTimeout(() => {
            setSimulationOutput("Extracting key target intents: [Domain: Software Engineering], [Regional Tier: Jamshedpur/Jharkhand], [Score Range: 75-85%]. Matching local institutions and internship frames...");
            setIsSimulating(false);
        }, 2500);
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden">
            
            {/* 1. HERO HEROIC SHOWCASE SECTION (Dual-Source Balance: Platform Ad + Value Prop) */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background decorative grids representing data structures */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
                
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                    {/* Left Column: Mission Narrative Statement */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-4 py-1.5 text-xs font-semibold text-indigo-300 tracking-wide">
                            ✨ AI-Powered Educational Ecosystem
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                            Elevate Your Potential with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Career Lift System</span>
                        </h1>
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                            An advanced intelligence ecosystem dedicated to bridging the critical education-to-employment gap. Get smart psychometric tracking, localized college selection metrics, and conversational guidance tailored to your unique profile.
                        </p>
                        
                        {/* Hero CTA Layout */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <button 
                                onClick={() => document.getElementById('working-mechanics').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/20 transform hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide"
                            >
                                Explore System Mechanics
                            </button>
                            <button 
                                onClick={() => document.getElementById('simulation-sandbox').scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/10 font-bold px-8 py-4 rounded-xl backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide"
                            >
                                Try Live AI Simulator
                            </button>
                        </div>

                        {/* Development Acknowledgement Footnote Badge */}
                        <div className="pt-6 border-t border-slate-800 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
                            <div>📍 Origin: <span className="text-slate-200">MITM, Jamshedpur</span></div>
                            <div>🔬 Department: <span className="text-slate-200">Computer Science & Engineering</span></div>
                            <div>🛡️ Project Status: <span className="text-emerald-400 font-bold">Production Ready</span></div>
                        </div>
                    </div>

                    {/* Right Column: Visual Component Composition Showcase */}
                    <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
                        <div className="relative group">
                            {/* Neon glowing backdrop border */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
                            
                            {/* Primary High-Resolution Professional Placeholder Image Frame */}
                            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                                    alt="Students Collaborating on Technological Interface" 
                                    className="w-full h-64 object-cover opacity-80 filter brightness-90 hover:scale-105 transition-transform duration-700"
                                />
                                {/* System Overview Mini Stat Display Float */}
                                <div className="p-5 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40 border-t border-slate-800">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Live Metrics Matrix</span>
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                                            <p className="text-lg font-black text-white">94%</p>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-tight">Match Precision</p>
                                        </div>
                                        <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                                            <p className="text-lg font-black text-white">Low</p>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-tight">Bandwidth Ready</p>
                                        </div>
                                        <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50">
                                            <p className="text-lg font-black text-white">NLP</p>
                                            <p className="text-[10px] uppercase text-slate-400 font-bold tracking-tight">Voice Enabled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CORE VALUE STATEMENT: WHAT IS THIS WEBSITE USED FOR? */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600">Platform Objective Framework</h2>
                    <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Engineered to Maximize Structural Guidance
                    </p>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        The Career Lift System operates as an inclusive, scalable AI architecture designed to support students and job seekers, particularly navigating regional ecosystems with varying infrastructure access levels.
                    </p>
                </div>

                {/* Core Utility Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Pillar 1 */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="h-12 w-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                            📊
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Analyzing Complex Paths</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Simplifies tracking multi-tiered academic options and vocational sectors. Translates intricate requirements into a clear visual timeline.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="h-12 w-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                            🛠️
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Targeted Upskilling Pipelines</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Pinpoints exact deficiencies in candidate skill profiles compared to market requirements and connects users with tailored developmental courses.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="h-12 w-12 bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                            🌍
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Regional Inclusivity Matrix</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Optimizes visual scripts and API response parameters so students in low-connectivity areas can fetch essential counseling assets smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. SYSTEM WORKING MECHANICS: HOW DOES THIS WEBSITE WORK? (Tabbed Blueprint Architecture) */}
            <section id="working-mechanics" className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Left Info Control Block */}
                        <div className="lg:col-span-5 space-y-6">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block">Algorithmic Breakdown</span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How the Platform Executes Data Flows</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Behind the interface lies a series of integrated operational steps. Select a stage to explore how data moves from assessment to placement.
                            </p>

                            {/* Tab Selection Row Buttons */}
                            <div className="space-y-3 pt-4">
                                {SYSTEM_MECHANICS.map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`w-full flex items-center gap-4 text-left p-3.5 rounded-xl border font-semibold transition-all duration-200 ${
                                            activeTab === idx 
                                                ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/10 scale-[1.01]' 
                                                : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800/70 hover:text-slate-200'
                                        }`}
                                    >
                                        <span className={`h-7 w-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                            activeTab === idx ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                                        }`}>
                                            {item.step}
                                        </span>
                                        <span className="text-sm">{item.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Detail Visualization Dynamic Frame */}
                        <div className="lg:col-span-7">
                            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative min-h-[340px] flex flex-col justify-between shadow-2xl">
                                <div className="absolute top-0 right-0 p-6 opacity-5 text-7xl font-black select-none">
                                    {SYSTEM_MECHANICS[activeTab].step}
                                </div>
                                
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs px-3 py-1 rounded-md font-semibold tracking-wide">
                                            {SYSTEM_MECHANICS[activeTab].badge}
                                        </span>
                                        <span className="text-3xl">{SYSTEM_MECHANICS[activeTab].icon}</span>
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 tracking-tight">
                                        {SYSTEM_MECHANICS[activeTab].title}
                                    </h3>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                                        {SYSTEM_MECHANICS[activeTab].description}
                                    </p>
                                </div>

                                {/* Simulated Architectural Code Visualization Block */}
                                <div className="mt-8 border-t border-slate-800/80 pt-4 bg-black/30 rounded-xl p-3 font-mono text-[11px] text-indigo-300/90 space-y-1">
                                    <p><span className="text-pink-400">import</span> Engine Core <span className="text-pink-400">from</span> <span className="text-emerald-400">'@careerlift/backend'</span>;</p>
                                    <p><span className="text-purple-400">const</span> diagnosticVector = Engine.computeProfile(stage_{SYSTEM_MECHANICS[activeTab].step});</p>
                                    <p><span className="text-slate-400">// Status: Operational • Matrix synchronization locked</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. HIGH-FIDELITY LIVE INTERACTIVE CONTEXT SIMULATOR SANDBOX */}
            <section id="simulation-sandbox" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column: Conceptual Educational Secondary Image */}
                    <div className="lg:col-span-5 order-last lg:order-first">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                            <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
                                <img 
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
                                    alt="Professional Data Infrastructure Interface View" 
                                    className="w-full h-72 object-cover"
                                />
                                <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium italic text-center">
                                    Real-time simulation modeling running across responsive localized parameters.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Interactive Sandbox Component */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">Sandbox Preview</span>
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Test the Natural Language Core</h2>
                            <p className="text-slate-500 text-sm mt-2">
                                Simulate an query directly inside the sandbox down below to experience how the system filters metadata profiles and resolves student parameters.
                            </p>
                        </div>

                        {/* Interactive Testing Terminal Card */}
                        <form onSubmit={handleRunSimulation} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Type Your Academic Goal Statement</label>
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        placeholder="e.g., I passed 12th with 82% in Jamshedpur, find local computer courses..."
                                        value={simulatedQuery}
                                        onChange={(e) => setSimulatedQuery(e.target.value)}
                                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    />
                                    <button 
                                        type="submit"
                                        disabled={isSimulating}
                                        className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold px-5 py-3 rounded-xl text-sm transition shadow-sm shrink-0"
                                    >
                                        {isSimulating ? "Processing..." : "Compile Input"}
                                    </button>
                                </div>
                            </div>

                            {/* Preset sample injection triggers for easy user clicks */}
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="text-slate-400 font-semibold">Sample Triggers:</span>
                                <button 
                                    type="button"
                                    onClick={() => setSimulatedQuery("I have a 78% score and limited budget for B.Tech in Jamshedpur.")}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg font-medium transition"
                                >
                                    B.Tech Budget Match
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setSimulatedQuery("Show me top commerce paths with high placement records in Jharkhand.")}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg font-medium transition"
                                >
                                    Commerce Vectors
                                </button>
                            </div>

                            {/* Simulation Runtime Display Terminal */}
                            {simulationOutput && (
                                <div className="bg-slate-950 text-slate-200 font-mono text-xs rounded-xl p-4 border border-slate-800 space-y-2 animate-fadeIn">
                                    <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-2">
                                        <span>SYSTEM COMPILER LOG OUTPUT</span>
                                        <span className={isSimulating ? "text-amber-400 animate-pulse" : "text-emerald-400"}>
                                            {isSimulating ? "● EXECUTING VECTORS" : "● RUNTIME SUCCESS"}
                                        </span>
                                    </div>
                                    <p className="leading-relaxed text-indigo-200">{simulationOutput}</p>
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </section>

            {/* 5. DYNAMIC INTERACTIVE MOTIVATIONAL QUOTE CONTAINER */}
            <section className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-600/10 mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <span className="text-[10px] bg-white/10 border border-white/10 text-indigo-200 font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                        {MOTIVATIONAL_QUOTES[currentQuote].context}
                    </span>
                    
                    {/* Display animated shifting quotation parameters */}
                    <div className="min-h-[100px] flex items-center justify-center">
                        <p className="text-xl sm:text-2xl font-medium italic text-slate-100 leading-relaxed tracking-wide transition-all duration-500 animate-fadeIn">
                            "{MOTIVATIONAL_QUOTES[currentQuote].quote}"
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-bold text-white tracking-wide">{MOTIVATIONAL_QUOTES[currentQuote].author}</p>
                        <p className="text-xs text-slate-400 mt-0.5">Career Lift Strategic System Anchor</p>
                    </div>

                    {/* Manual Quote Navigation Control Pips */}
                    <div className="flex justify-center gap-2 pt-2">
                        {MOTIVATIONAL_QUOTES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentQuote(idx)}
                                className={`h-2 transition-all duration-300 rounded-full ${
                                    currentQuote === idx ? 'w-6 bg-indigo-400' : 'w-2 bg-white/20 hover:bg-white/40'
                                }`}
                                aria-label={`Maps to quotation index layout card ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SYSTEM FOOTER PLATFORM MATRIX ACKNOWLEDGEMENTS */}
            <footer className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="space-y-1">
                        <p className="font-bold text-slate-900 text-sm tracking-tight">Career Lift System Dashboard</p>
                        <p className="font-medium">Designed in compliance with advanced digital structural layout rules.</p>
                        <p className="text-slate-400">Session Integration: 2021 - 2025 • Technical Core Blueprint Registry.</p>
                    </div>
                    <div className="text-center md:text-right space-y-1 font-medium">
                        <p className="text-slate-700 font-semibold">Maryland Institute of Technology and Management</p>
                        <p>Department of Computer Science and Engineering</p>
                        <p className="text-slate-400">Jamshedpur, East Singhbhum, Jharkhand</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}