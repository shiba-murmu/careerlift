import React, { useState, useMemo } from 'react';

// Comprehensive localized mock data matching regional structures
const MOCK_COLLEGES = [
    {
        id: 1,
        name: "Maryland Institute of Technology and Management (MITM)",
        location: "Jamshedpur, Jharkhand",
        type: "Private",
        rating: 4.2,
        streams: ["Engineering", "Technology"],
        degrees: ["B.Tech (CSE)", "B.Tech (ECE)", "B.Tech (ME)"],
        fees: 85000, // Per Annum
        cutoff: 65,   // Min 12th board percentage required
        scholarship: "Available for top 10% or merit-cum-means",
        placementRate: "78%",
        avgPackage: "4.5 LPA",
        image: "🏫"
    },
    {
        id: 2,
        name: "National Institute of Technology (NIT)",
        location: "Jamshedpur, Jharkhand",
        type: "Government",
        rating: 4.8,
        streams: ["Engineering", "Science"],
        degrees: ["B.Tech (CSE)", "B.Tech (MME)", "M.Sc (Physics)"],
        fees: 145000,
        cutoff: 92,
        scholarship: "Central & State sponsored schemes fully supported",
        placementRate: "94%",
        avgPackage: "12.2 LPA",
        image: "🏛️"
    },
    {
        id: 3,
        name: "Xavier School of Management (XLRI)",
        location: "Jamshedpur, Jharkhand",
        type: "Private",
        rating: 4.9,
        streams: ["Management", "Commerce"],
        degrees: ["PGDM (BM)", "PGDM (HRM)", "Executive Fellow"],
        fees: 1300000,
        cutoff: 95,
        scholarship: "Corporate fellowships and bank loans available",
        placementRate: "100%",
        avgPackage: "32.7 LPA",
        image: "💎"
    },
    {
        id: 4,
        name: "Jamshedpur Women's University",
        location: "Jamshedpur, Jharkhand",
        type: "Government",
        rating: 4.0,
        streams: ["Commerce", "Arts", "Science"],
        degrees: ["B.Com", "B.Sc (IT)", "BA (English)"],
        fees: 22000,
        cutoff: 55,
        scholarship: "E-Kalyan state scholarship integrated",
        placementRate: "52%",
        avgPackage: "3.2 LPA",
        image: "👩‍🎓"
    },
    {
        id: 5,
        name: "Arka Jain University",
        location: "Gamharia, Jharkhand",
        type: "Private",
        rating: 3.9,
        streams: ["Engineering", "Commerce", "Management"],
        degrees: ["BBA", "B.Tech", "B.Com (Hons)"],
        fees: 70000,
        cutoff: 60,
        scholarship: "Sports quota and regional marks discounts",
        placementRate: "71%",
        avgPackage: "3.8 LPA",
        image: "🏢"
    }
];

export default function Colleges() {
    // --- State Management ---
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedStream, setSelectedStream] = useState("All");
    const [maxBudget, setMaxBudget] = useState(1500000);
    const [userScore, setUserScore] = useState(""); // Cut-off sandbox predictor parameter
    const [comparisonList, setComparisonList] = useState([]);
    const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

    // Dynamic stream lists compilation
    const allStreams = useMemo(() => {
        const streamsSet = new Set();
        MOCK_COLLEGES.forEach(c => c.streams.forEach(s => streamsSet.add(s)));
        return ["All", ...Array.from(streamsSet)];
    }, []);

    // --- Core Filter Orchestration Logic ---
    const filteredColleges = useMemo(() => {
        return MOCK_COLLEGES.filter(college => {
            const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                college.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStream = selectedStream === "All" || college.streams.includes(selectedStream);
            const matchesBudget = college.fees <= maxBudget;

            // If user score is typed into the system sandbox, filter by cutoff entry parameters
            const scoreNum = parseFloat(userScore);
            const matchesScore = isNaN(scoreNum) || college.cutoff <= scoreNum;

            return matchesSearch && matchesStream && matchesBudget && matchesScore;
        });
    }, [searchQuery, selectedStream, maxBudget, userScore]);

    // --- Comparison Drawer Operations ---
    const handleToggleComparison = (college) => {
        if (comparisonList.some(item => item.id === college.id)) {
            setComparisonList(comparisonList.filter(item => item.id !== college.id));
        } else {
            if (comparisonList.length >= 3) {
                alert("You can compare up to 3 institutions concurrently.");
                return;
            }
            setComparisonList([...comparisonList, college]);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans antialiased">

            {/* Header Platform Showcase Banner */}
            <header className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
                            Localized Institutions Matrix
                        </h1>
                        <p className="mt-2 text-slate-300 max-w-xl text-sm sm:text-base">
                            Discover regional institutes, analyze entry limits, match cutoffs, and review fee structures optimized to bridge the education gap.
                        </p>
                    </div>

                    {/* Predictor Core Utility Panel */}
                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 max-w-sm w-full">
                        <label className="block text-xs font-bold uppercase tracking-wider text-indigo-200 mb-1">
                            🎯 Quick Cut-off Checker
                        </label>
                        <p className="text-xs text-slate-300 mb-3">Input your 12th board % to find matches:</p>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder="e.g. 75"
                                value={userScore}
                                onChange={(e) => setUserScore(e.target.value)}
                                className="w-full bg-white text-slate-900 font-bold px-4 py-2.5 rounded-xl text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {userScore && (
                                <button
                                    onClick={() => setUserScore("")}
                                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Interactive Workplace Grid Layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* 1. Control Parameters Column (Sidebar Filters) */}
                <aside className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-6 sticky top-24">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h2 className="font-bold text-base text-slate-900">Refine Catalog</h2>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedStream("All");
                                    setMaxBudget(1500000);
                                    setUserScore("");
                                }}
                                className="text-xs text-indigo-600 hover:text-indigo-800 font-bold"
                            >
                                Reset All
                            </button>
                        </div>

                        {/* Search Input Filter Container */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Institution Name</label>
                            <input
                                type="text"
                                placeholder="Search by name, city..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                            />
                        </div>

                        {/* Custom Academic Streams Selection */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Academic Domain</label>
                            <div className="flex flex-wrap gap-1.5">
                                {allStreams.map(stream => (
                                    <button
                                        key={stream}
                                        onClick={() => setSelectedStream(stream)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedStream === stream
                                                ? 'bg-indigo-600 text-white shadow-sm'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                    >
                                        {stream}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Budget Multi-step Cap Slider */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <span>Max Fee Cap</span>
                                <span className="text-indigo-600 font-extrabold text-xs">
                                    ₹{maxBudget >= 1000000 ? `${(maxBudget / 1000000).toFixed(1)}M` : maxBudget.toLocaleString('en-IN')}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="20000"
                                max="1500000"
                                step="10000"
                                value={maxBudget}
                                onChange={(e) => setMaxBudget(Number(e.target.value))}
                                className="w-full accent-indigo-600 cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                                <span>₹20K</span>
                                <span>₹1.5M / yr</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* 2. Primary Registry Presentation Area */}
                <section className="lg:col-span-3 space-y-4">

                    {/* Live Statistics Bar */}
                    <div className="flex items-center justify-between text-sm text-slate-500 px-1">
                        <p>Found <span className="font-bold text-slate-900">{filteredColleges.length}</span> institutions matching criteria</p>

                        {comparisonList.length > 0 && (
                            <button
                                onClick={() => setIsCompareModalOpen(true)}
                                className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 hover:bg-indigo-100 transition"
                            >
                                📊 Review Comparison Drawer ({comparisonList.length}/3)
                            </button>
                        )}
                    </div>

                    {/* Empty Search Fallback */}
                    {filteredColleges.length === 0 && (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
                            <span className="text-4xl block mb-2">🔍</span>
                            <h3 className="font-bold text-slate-800 text-lg">No Matching Institutes Found</h3>
                            <p className="text-slate-500 text-sm max-w-sm mx-auto mt-1">
                                Try widening your fee slider range, lowering your cut-off percentage parameter, or shifting selection streams.
                            </p>
                        </div>
                    )}

                    {/* Infinite Interactive Card Framework list layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredColleges.map((college) => {
                            const isAddedToCompare = comparisonList.some(item => item.id === college.id);
                            const userPassesCutoff = userScore ? college.cutoff <= parseFloat(userScore) : true;

                            return (
                                <div
                                    key={college.id}
                                    className={`bg-white rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between shadow-sm hover:shadow-md ${userScore && userPassesCutoff ? 'border-emerald-400 ring-2 ring-emerald-50' : 'border-slate-200/80'
                                        } ${userScore && !userPassesCutoff ? 'opacity-60' : ''}`}
                                >
                                    <div>
                                        {/* Header Identity Row */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex gap-3">
                                                <div className="text-3xl p-2.5 bg-slate-50 border border-slate-100 rounded-xl h-fit">
                                                    {college.image}
                                                </div>
                                                <div>
                                                    <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide mb-1 ${college.type === "Government" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-purple-50 text-purple-700 border border-purple-200"
                                                        }`}>
                                                        {college.type}
                                                    </span>
                                                    <h3 className="font-bold text-slate-900 text-sm leading-snug tracking-tight hover:text-indigo-600 transition">
                                                        {college.name}
                                                    </h3>
                                                    <p className="text-xs text-slate-400 font-medium mt-0.5">{college.location}</p>
                                                </div>
                                            </div>
                                            <div className="bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-xs font-black flex items-center gap-1 border border-amber-100">
                                                ⭐ {college.rating}
                                            </div>
                                        </div>

                                        {/* Stream Tags Grid block mapping */}
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {college.streams.map((s, idx) => (
                                                <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-xs font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Quantitative Performance Specifications */}
                                        <div className="grid grid-cols-2 gap-3 bg-slate-50 rounded-xl p-3 mt-4 border border-slate-100">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Est Annual Fee</p>
                                                <p className="font-extrabold text-slate-900 text-sm mt-0.5">₹{college.fees.toLocaleString('en-IN')}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Eligibility Limit</p>
                                                <p className={`font-extrabold text-sm mt-0.5 ${userScore && !userPassesCutoff ? 'text-rose-600' : 'text-slate-900'}`}>
                                                    {college.cutoff}% in 12th
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Avg Placement Pack</p>
                                                <p className="font-bold text-emerald-600 text-sm mt-0.5">{college.avgPackage}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Placement Track</p>
                                                <p className="font-bold text-slate-700 text-sm mt-0.5">{college.placementRate}</p>
                                            </div>
                                        </div>

                                        {/* Secondary Degree Offerings breakdown */}
                                        <div className="mt-4 text-xs">
                                            <span className="font-bold text-slate-500">Popular Paths:</span>{' '}
                                            <span className="text-slate-700 font-medium">{college.degrees.join(" • ")}</span>
                                        </div>
                                    </div>

                                    {/* Footer Control Actions Container */}
                                    <div className="flex gap-2 border-t border-slate-100 pt-3 mt-4">
                                        <button
                                            onClick={() => handleToggleComparison(college)}
                                            className={`flex-1 font-bold py-2 px-3 rounded-xl text-xs transition border ${isAddedToCompare
                                                    ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                                }`}
                                        >
                                            {isAddedToCompare ? '❌ Remove Compare' : '📊 Compare'}
                                        </button>
                                        <a
                                            href={`tel:${college.id}`}
                                            onClick={(e) => { e.preventDefault(); alert(`Counselor desk line linked for ${college.name}. Ready for backend execution pipeline.`); }}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl text-xs text-center transition shadow-sm shadow-indigo-100"
                                        >
                                            Connect Desk
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>

            {/* 3. Deep Matrix Comparison Comparison Modal */}
            {isCompareModalOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 flex flex-col">

                        {/* Modal Navigation Top-Bar */}
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-3xl">
                            <div>
                                <h2 className="text-xl font-extrabold text-slate-900 font-display">Multi-Institutional Matrix Analyzer</h2>
                                <p className="text-xs text-slate-500 mt-0.5">Analyzing platform criteria vectors side by side</p>
                            </div>
                            <button
                                onClick={() => setIsCompareModalOpen(false)}
                                className="p-2 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 rounded-xl transition border border-slate-200/60"
                            >
                                ✕ Close Matrix
                            </button>
                        </div>

                        {/* Comparative Breakdown Interface Column Elements */}
                        <div className="p-6 overflow-x-auto">
                            {comparisonList.length === 0 ? (
                                <p className="text-center text-slate-400 text-sm py-8">Select institutes down in the primary view to begin visualization matrix data metrics.</p>
                            ) : (
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            <th className="pb-4 w-1/4">Key Metrics</th>
                                            {comparisonList.map(c => (
                                                <th key={c.id} className="pb-4 px-4 w-1/4 text-indigo-900 font-extrabold">{c.name}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-sm">
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Sector Classification</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 font-semibold text-slate-800">{c.type}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Geographic Region</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 text-slate-600">{c.location}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Estimated Annual Fees</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 font-extrabold text-slate-900">₹{c.fees.toLocaleString('en-IN')}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Min Cut-off Constraint</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 font-bold text-indigo-600">{c.cutoff}% in 12th</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Average Placement Record</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 font-bold text-emerald-600">{c.avgPackage} ({c.placementRate} Placed)</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-3.5 font-bold text-slate-400 text-xs uppercase tracking-wider">Scholarship Inclusions</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-3.5 px-4 text-xs text-slate-500 italic font-medium">{c.scholarship}</td>
                                            ))}
                                        </tr>
                                        <tr>
                                            <td className="py-4 font-bold text-slate-400 text-xs uppercase tracking-wider">Management Control</td>
                                            {comparisonList.map(c => (
                                                <td key={c.id} className="py-4 px-4">
                                                    <button
                                                        onClick={() => handleToggleComparison(c)}
                                                        className="text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-100 px-2.5 py-1 rounded-lg transition"
                                                    >
                                                        Drop Column
                                                    </button>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}