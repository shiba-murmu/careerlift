import React, { useState } from 'react';

const INITIAL_OPPORTUNITIES = [
    {
        id: 'opp-1',
        title: 'Junior Full-Stack Software Engineer',
        company: 'Apex Digital Solutions',
        type: 'Full-Time Job',
        location: 'Bengaluru, KA (Hybrid)',
        salary: '₹6,50,000 - ₹8,00,000 / year',
        domain: 'Development',
        matchScore: 94,
        posted: '2 days ago',
        experience: '0 - 2 Years (Entry Level)',
        vacancies: 4,
        skills: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'RESTful APIs', 'Git/GitHub'],
        description: 'Collaborate with cross-functional software teams to design, code, and deploy user-facing web applications. Perfect for entry-level engineering students with solid JavaScript fundamentals.',
        responsibilities: [
            'Develop clean, maintainable, and reusable UI components using React.js.',
            'Build secure, optimized backend endpoints using Express and Node.js.',
            'Integrate application data layers cleanly with MongoDB collections.',
            'Participate in agile sprint assemblies and collaborative code reviews.'
        ],
        aiAnalysis: {
            reason: 'Your Psychometric test shows an exceptional analytical affinity for logic construction, and your Stream Mapping records verify complete standard criteria in Full Stack technologies.',
            strengths: ['Strong structural layout score', 'Excellent JavaScript foundations matching target criteria'],
            gaps: ['Prior cloud deployment tooling exposure (AWS/Docker) is missing']
        },
        status: 'Available'
    },
    {
        id: 'opp-2',
        title: 'Data & Business Intelligence Intern',
        company: 'Vanguard Analytics Corp',
        type: 'Internship',
        location: 'Remote (India)',
        salary: '₹25,000 / month',
        domain: 'Analytics',
        matchScore: 88,
        posted: '1 day ago',
        experience: 'Final Year Students',
        vacancies: 2,
        skills: ['Python', 'SQL', 'Tableau', 'Excel Analytics', 'Data Visualisation'],
        description: 'Clean raw enterprise datasets, map metrics, and translate operations performance indicators into clean, visual analytical dashboards for academic and corporate stakeholders.',
        responsibilities: [
            'Write optimized SQL transactional queries to retrieve operational tracking arrays.',
            'Design interactive analytical executive reporting dashboards inside Tableau.',
            'Clean raw multi-source business data using Python Pandas libraries.',
            'Present quantitative findings to product group administrators weekly.'
        ],
        aiAnalysis: {
            reason: 'Matches your quantitative aptitude marks from your engineering core metrics and profile analytics preferences.',
            strengths: ['High statistical data-mapping scores', 'SQL criteria matches baseline'],
            gaps: ['Advanced predictive modelling tool sets are not mapped']
        },
        status: 'Available'
    },
    {
        id: 'opp-3',
        title: 'Associate Product Manager',
        company: 'EduLift Innovations',
        type: 'Full-Time Job',
        location: 'Mumbai, MH (On-site)',
        salary: '₹7,00,000 - ₹9,50,000 / year',
        domain: 'Product',
        matchScore: 72,
        posted: '5 days ago',
        experience: '0 - 1 Year / Freshers',
        vacancies: 1,
        skills: ['Agile Roadmap', 'User Research', 'Wireframing', 'Jira', 'Product Analytics'],
        description: 'Own the execution lifecycle of localized learner features. Transform research insights into interactive functional blueprints for technical sprint development schedules.',
        responsibilities: [
            'Conduct extensive qualitative discovery studies with targeted learners.',
            'Author comprehensive functional product specification references.',
            'Manage backlog sequencing timelines using Jira frameworks.',
            'Coordinate multi-team milestones between designers and engineers.'
        ],
        aiAnalysis: {
            reason: 'Your evaluation tracks highlight excellent leadership metrics and verbal reasoning coefficients, though technical architecture requirements show minor mismatches.',
            strengths: ['Top-tier communication parameters', 'Strong situational design reasoning'],
            gaps: ['Lacks active engineering code infrastructure experience background']
        },
        status: 'Available'
    }
];

export default function JobsInternships() {
    const [opportunities, setOpportunities] = useState(INITIAL_OPPORTUNITIES);
    const [selectedOpp, setSelectedOpp] = useState(INITIAL_OPPORTUNITIES[0]);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState('All');
    const [domainFilter, setDomainFilter] = useState('All');

    // Detailed Section Tab Manager
    const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'ai-fit', 'track'

    // Application Guided Modal Window Controls
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [resumeAttached, setResumeAttached] = useState(true);
    const [coverLetterText, setCoverLetterText] = useState('');

    // Filter Logic Configuration
    const filteredOpportunities = opportunities.filter(opp => {
        const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            opp.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesType = typeFilter === 'All' || opp.type.includes(typeFilter);
        const matchesDomain = domainFilter === 'All' || opp.domain === domainFilter;
        return matchesSearch && matchesType && matchesDomain;
    });

    const handleOppSelection = (opp) => {
        setSelectedOpp(opp);
        setActiveTab('overview'); // Reset tab view on selection change
    };

    const triggerModalFlow = () => {
        setModalStep(1);
        setIsModalOpen(true);
    };

    const executeFinalSubmission = () => {
        setOpportunities(prev => prev.map(opp => {
            if (opp.id === selectedOpp.id) {
                const updated = { ...opp, status: 'Applied' };
                setSelectedOpp(updated);
                return updated;
            }
            return opp;
        }));
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">

            {/* Top Interactive Metric Summary Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
                                Career Placement Portal
                            </span>
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 font-display mt-2 sm:text-4xl">
                                Verified Vacancies Hub
                            </h1>
                            <p className="mt-2 text-base text-slate-500 max-w-2xl font-body">
                                Apply directly to roles calibrated against your real-time psychometric evaluation profiles, stream models, and AI performance markers.
                            </p>
                        </div>

                        {/* Fast Aggregate Counters */}
                        <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-200 rounded-2xl self-start lg:self-center">
                            <div className="px-3">
                                <span className="block text-2xl font-black text-slate-900">{filteredOpportunities.length}</span>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Available</span>
                            </div>
                            <div className="w-[1px] h-8 bg-slate-200"></div>
                            <div className="px-3">
                                <span className="block text-2xl font-black text-indigo-600">
                                    {opportunities.filter(o => o.status === 'Applied').length}
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Applications</span>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Control Form Controls Row */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 pt-6 border-t border-slate-100">
                        <div className="relative lg:col-span-6">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm">
                                🔍
                            </span>
                            <input
                                type="text"
                                placeholder="Filter jobs by specific technologies, job roles, or company criteria..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-body"
                            />
                        </div>
                        <div className="lg:col-span-3">
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 focus:outline-none"
                            >
                                <option value="All">All Classifications</option>
                                <option value="Full-Time Job">Full-Time Jobs</option>
                                <option value="Internship">Internships</option>
                            </select>
                        </div>
                        <div className="lg:col-span-3">
                            <select
                                value={domainFilter}
                                onChange={(e) => setDomainFilter(e.target.value)}
                                className="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 focus:outline-none"
                            >
                                <option value="All">All Domains</option>
                                <option value="Development">Software Development</option>
                                <option value="Analytics">Data & Analytics</option>
                                <option value="Product">Product Frameworks</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Natural Layout Flow Grid (No Nested Scrollbars) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT LIST PANEL */}
                    <div className="lg:col-span-5 space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Matching Openings ({filteredOpportunities.length})
                        </h3>

                        {filteredOpportunities.length === 0 ? (
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
                                <p className="text-xl">⚠️</p>
                                <p className="text-sm font-bold text-slate-700 mt-2">No matching items located.</p>
                            </div>
                        ) : (
                            filteredOpportunities.map((opp) => (
                                <div
                                    key={opp.id}
                                    onClick={() => handleOppSelection(opp)}
                                    className={`p-6 bg-white rounded-2xl border transition-all cursor-pointer shadow-sm relative hover:shadow-md ${selectedOpp.id === opp.id
                                        ? 'border-indigo-600 ring-2 ring-indigo-600/20 bg-indigo-50/5'
                                        : 'border-slate-200 hover:border-slate-300'
                                        }`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <span className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md mb-2 ${opp.type.includes('Job') ? 'bg-indigo-50 text-indigo-700 border border-indigo-100' : 'bg-purple-50 text-purple-700 border border-purple-100'}`}>
                                                {opp.type}
                                            </span>
                                            <h4 className="text-base font-bold text-slate-900 font-display group-hover:text-indigo-600">
                                                {opp.title}
                                            </h4>
                                            <p className="text-sm font-semibold text-slate-600 mt-0.5">{opp.company}</p>
                                        </div>
                                        <span className={`text-xs font-black px-2.5 py-1 rounded-full whitespace-nowrap ${opp.matchScore >= 85 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'}`}>
                                            {opp.matchScore}% Fit
                                        </span>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-400">
                                        <span className="font-medium">📍 {opp.location}</span>
                                        <div className="flex items-center gap-2">
                                            {opp.status === 'Applied' && (
                                                <span className="text-emerald-600 font-bold flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Applied
                                                </span>
                                            )}
                                            <span>🕒 {opp.posted}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* RIGHT DETAIL PRESENTATION CONTAINER */}
                    <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

                        {/* Dynamic Top Information Matrix Header */}
                        <div className="p-6 sm:p-8 bg-slate-50/70 border-b border-slate-200">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-600 text-white shadow-sm shadow-indigo-100">
                                        {selectedOpp.domain} Track
                                    </span>
                                    <h2 className="text-2xl font-extrabold text-slate-900 font-display mt-3">
                                        {selectedOpp.title}
                                    </h2>
                                    <p className="text-base font-bold text-slate-500 mt-0.5">{selectedOpp.company}</p>
                                </div>

                                <div className="bg-white p-3 border border-slate-200 rounded-xl flex items-center gap-3 self-start shadow-sm">
                                    <div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-black text-xs flex items-center justify-center">
                                        {selectedOpp.matchScore}%
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Profile Match</p>
                                        <p className="text-xs font-bold text-slate-700">AI Verified Fit</p>
                                    </div>
                                </div>
                            </div>

                            {/* Supplementary Metadata Metrics Array */}
                            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-white border border-slate-200/80 p-4 rounded-xl">
                                <div>
                                    <p className="text-slate-400 font-medium">Compensation</p>
                                    <p className="font-bold text-slate-800 mt-0.5">{selectedOpp.salary}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 font-medium">Experience Level</p>
                                    <p className="font-bold text-slate-800 mt-0.5">{selectedOpp.experience}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 font-medium">Target Location</p>
                                    <p className="font-bold text-slate-800 mt-0.5">{selectedOpp.location}</p>
                                </div>
                                <div>
                                    <p className="text-slate-400 font-medium">Open Positions</p>
                                    <p className="font-bold text-slate-800 mt-0.5">{selectedOpp.vacancies} Openings</p>
                                </div>
                            </div>

                            {/* Clean Layout Control Tabs Section */}
                            <div className="mt-8 flex border-b border-slate-200 gap-2">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    Role Overview
                                </button>
                                <button
                                    onClick={() => setActiveTab('ai-fit')}
                                    className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all ${activeTab === 'ai-fit' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    AI Profile Alignment
                                </button>
                                <button
                                    onClick={() => setActiveTab('track')}
                                    className={`pb-3 px-4 font-bold text-sm border-b-2 transition-all ${activeTab === 'track' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                                >
                                    Hiring Lifecycle Track
                                </button>
                            </div>
                        </div>

                        {/* Interactive Tab Content Block */}
                        <div className="p-6 sm:p-8 font-body min-h-[24rem]">

                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Job Context & Scope</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed font-body">{selectedOpp.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Primary Work Responsibilities</h4>
                                        <ul className="space-y-2">
                                            {selectedOpp.responsibilities.map((r, i) => (
                                                <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                                    <span className="text-indigo-500 mt-0.5">▹</span> <span>{r}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Key Technical Competencies Needed</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedOpp.skills.map((s, i) => (
                                                <span key={i} className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                                                    ⚡ {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'ai-fit' && (
                                <div className="space-y-6 bg-indigo-50/30 p-6 rounded-2xl border border-indigo-100/50">
                                    <div>
                                        <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900/60 mb-2">Automated Match Synthesis</h4>
                                        <p className="text-sm text-indigo-950/80 leading-relaxed font-body">{selectedOpp.aiAnalysis.reason}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-indigo-100/60">
                                        <div>
                                            <h5 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">Profile Strengths</h5>
                                            <div className="space-y-1.5">
                                                {selectedOpp.aiAnalysis.strengths.map((s, i) => (
                                                    <p key={i} className="text-xs text-emerald-700 font-medium">✓ {s}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">Upskilling Goals</h5>
                                            <div className="space-y-1.5">
                                                {selectedOpp.aiAnalysis.gaps.map((g, i) => (
                                                    <p key={i} className="text-xs text-amber-700 font-medium">⚠ {g}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'track' && (
                                <div className="py-6 max-w-md mx-auto">
                                    <div className="relative border-l-2 border-slate-200 pl-6 space-y-8 ml-4">
                                        <div className="relative">
                                            <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-indigo-600 border-4 border-white ring-2 ring-indigo-600"></div>
                                            <h5 className="text-sm font-bold text-slate-900">Step 1: Metric Verification Summary</h5>
                                            <p className="text-xs text-slate-400 mt-0.5">Your profile parameters and psychometric reports are packaged automatically.</p>
                                        </div>
                                        <div className="relative">
                                            <div className={`absolute -left-[31px] top-0 h-4 w-4 rounded-full border-4 border-white ring-2 ${selectedOpp.status === 'Applied' ? 'bg-indigo-600 ring-indigo-600' : 'bg-slate-200 ring-slate-200'}`}></div>
                                            <h5 className="text-sm font-bold text-slate-900">Step 2: Corporate Review Queue</h5>
                                            <p className="text-xs text-slate-400 mt-0.5">HR teams match performance distributions against criteria.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-slate-200 border-4 border-white ring-2 ring-slate-200"></div>
                                            <h5 className="text-sm font-bold text-slate-400">Step 3: Interview Routing Sequence</h5>
                                            <p className="text-xs text-slate-400 mt-0.5">Live coordination sessions are mapped to matching candidates.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Sticky Action Footer Area */}
                        <div className="p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <span className="text-xs text-slate-400 font-medium">
                                Data is handled according to university deployment protocols.
                            </span>

                            {selectedOpp.status === 'Applied' ? (
                                <button disabled className="w-full sm:w-auto bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold px-6 py-3 rounded-xl cursor-not-allowed text-center text-sm">
                                    ✓ Application Dispatched
                                </button>
                            ) : (
                                <button
                                    onClick={triggerModalFlow}
                                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md text-center transform hover:-translate-y-0.5"
                                >
                                    Apply For This Position
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* GUIDED MULTI-STEP WORKFLOW MODAL WINDOW */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full overflow-hidden shadow-2xl transition-all">

                        <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                            <div>
                                <h3 className="font-extrabold text-slate-900 font-display text-lg">Application Wizard</h3>
                                <p className="text-xs text-slate-400">Reviewing application metrics for {selectedOpp.company}</p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-lg">
                                ✕
                            </button>
                        </div>

                        <div className="p-6 font-body">
                            {modalStep === 1 && (
                                <div className="space-y-4">
                                    <p className="text-sm font-bold text-slate-800">Confirm Linked Documents:</p>
                                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">📄</span>
                                            <div>
                                                <p className="text-xs font-bold text-slate-800">Verified_Academic_Profile.pdf</p>
                                                <p className="text-[10px] text-slate-400">Generated automatically by Career Lift</p>
                                            </div>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={resumeAttached}
                                            onChange={(e) => setResumeAttached(e.target.checked)}
                                            className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500/20"
                                        />
                                    </div>
                                    <p className="text-xs text-slate-400 leading-normal">
                                        This file bundles your engineering core scores, stream mapping metrics, and psychometric evaluation summaries cleanly for corporate view access.
                                    </p>
                                </div>
                            )}

                            {modalStep === 2 && (
                                <div className="space-y-3">
                                    <p className="text-sm font-bold text-slate-800">Add an Optional Note to the Recruiter:</p>
                                    <textarea
                                        rows="4"
                                        value={coverLetterText}
                                        onChange={(e) => setCoverLetterText(e.target.value)}
                                        placeholder="Explain briefly why this operational domain aligns perfectly with your structural goals..."
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-body"
                                    ></textarea>
                                </div>
                            )}
                        </div>

                        {/* Modal Action Area */}
                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                            {modalStep === 1 ? (
                                <>
                                    <div></div>
                                    <button
                                        onClick={() => setModalStep(2)}
                                        disabled={!resumeAttached}
                                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl disabled:opacity-50"
                                    >
                                        Proceed to Note
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setModalStep(1)}
                                        className="text-slate-600 hover:text-slate-900 text-xs font-bold"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={executeFinalSubmission}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
                                    >
                                        Dispatch Application
                                    </button>
                                </>
                            )}
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}