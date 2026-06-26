import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Changes navbar background on scroll for that premium glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm' 
        : 'bg-slate-50 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Brand Area */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-indigo-200">
                C
              </span>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                CAREER<span className="text-indigo-600">LIFT</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* Career Path Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('careers')}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeDropdown === 'careers' ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Career Paths</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'careers' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'careers' && (
                <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-4 grid gap-2">
                  <a href="/explore" className="flex items-start p-2.5 rounded-xl hover:bg-slate-50 transition group">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 group-hover:bg-indigo-100">🏁</div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-slate-900">Psychometric Discovery</p>
                      <p className="text-xs text-slate-500">Assessments for 10th & 12th standards.</p>
                    </div>
                  </a>
                  <a href="/streams" className="flex items-start p-2.5 rounded-xl hover:bg-slate-50 transition group">
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 group-hover:bg-emerald-100">🌿</div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-slate-900">Stream Mapping</p>
                      <p className="text-xs text-slate-500">Explore engineering, medical, & commerce paths.</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Institutions Dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('colleges')}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeDropdown === 'colleges' ? 'text-indigo-600 bg-indigo-50/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Find Colleges</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'colleges' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'colleges' && (
                <div className="absolute left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-4 grid gap-2">
                  <a href="/colleges" className="flex items-start p-2.5 rounded-xl hover:bg-slate-50 transition group">
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600 group-hover:bg-amber-100">🏫</div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-slate-900">Localized Institutions</p>
                      <p className="text-xs text-slate-500">Discover regional schools matching your cut-offs.</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <a href="/jobs" className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors">
              Jobs & Internships
            </a>
            
            <a href="/dashboard" className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors">
              Progress Tracker
            </a>

          </div>

          {/* Action Call-to-Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm px-3 py-2 rounded-lg transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <span>Ask AI Assistant</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300"></div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay Container */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="space-y-1">
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</p>
            <a href="/explore" className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600">Career Paths</a>
            <a href="/colleges" className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600">Find Colleges</a>
            <a href="/jobs" className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600">Jobs & Placement Opportunities</a>
            <a href="/dashboard" className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-indigo-600">Progress Tracker</a>
          </div>
          
          <hr className="border-slate-200" />
          
          <div className="grid gap-2 pt-2">
            <button className="w-full bg-indigo-50 text-indigo-600 font-bold py-3 px-4 rounded-xl text-center hover:bg-indigo-100 transition-colors">
              🎙️ Open Voice Assistant
            </button>
            <button className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-xl text-center hover:bg-slate-800 transition-colors">
              Sign In Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}