import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ChevronUp, ChevronDown, Lock, Unlock } from 'lucide-react';
import { chapters } from './data';

export default function App() {
  const [activeChapterId, setActiveChapterId] = useState(chapters[0].id);
  const [activeSection, setActiveSection] = useState(chapters[0].subSections[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [unlockedChapters, setUnlockedChapters] = useState<string[]>([]);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];
  const isLocked = activeChapter.password && !unlockedChapters.includes(activeChapter.id);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      if (isScrollingRef.current) return;

      const sectionElements = activeChapter.subSections.map(s => document.getElementById(s.id));
      let currentSectionId = activeChapter.subSections[0]?.id;
      
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom && sectionElements.length > 0) {
        currentSectionId = sectionElements[sectionElements.length - 1]?.id || currentSectionId;
      } else {
        for (const el of sectionElements) {
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150) {
              currentSectionId = el.id;
            }
          }
        }
      }
      
      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeChapter]);

  const handleChapterClick = (chapterId: string) => {
    if (activeChapterId !== chapterId) {
      setActiveChapterId(chapterId);
      setPasswordInput('');
      setPasswordError(false);
      const chapter = chapters.find(c => c.id === chapterId);
      if (chapter && chapter.subSections.length > 0) {
        setActiveSection(chapter.subSections[0].id);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeChapter.password === passwordInput) {
      setUnlockedChapters([...unlockedChapters, activeChapter.id]);
      setPasswordError(false);
      setPasswordInput('');
    } else {
      setPasswordError(true);
    }
  };

  const handleSectionClick = (chapterId: string, sectionId: string) => {
    isScrollingRef.current = true;
    setActiveSection(sectionId);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Re-enable scroll listener after animation completes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);

    if (activeChapterId !== chapterId) {
      setActiveChapterId(chapterId);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-indigo-200 selection:text-indigo-900">
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="font-bold text-lg text-indigo-900 truncate pr-4">バーニングマウス症候群（舌痛症）</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 -mr-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-white pt-16 pb-4 px-4 overflow-y-auto"
          >
            <nav className="space-y-2">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-4 px-3">目次</div>
              {chapters.map((chapter) => (
                <div key={`mobile-chapter-${chapter.id}`} className="space-y-1">
                  <button
                    onClick={() => handleChapterClick(chapter.id)}
                    className={`w-full text-left px-3 py-3 rounded-lg flex items-center justify-between transition-colors font-medium ${
                      activeChapterId === chapter.id
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-3 ${activeChapterId === chapter.id ? 'text-indigo-600' : 'text-gray-400'}`}>
                        {chapter.icon}
                      </span>
                      <span className="text-sm line-clamp-2">{chapter.title}</span>
                    </div>
                    {activeChapterId === chapter.id ? (
                      <ChevronDown className="w-4 h-4 text-indigo-400 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {activeChapterId === chapter.id && (!chapter.password || unlockedChapters.includes(chapter.id)) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-10 pr-2 space-y-1"
                      >
                        {chapter.subSections.map((section) => (
                          <button
                            key={`mobile-section-${section.id}`}
                            onClick={() => handleSectionClick(chapter.id, section.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                              activeSection === section.id 
                                ? 'bg-indigo-100 text-indigo-800 font-medium' 
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {section.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-80 shrink-0 sticky top-0 h-screen overflow-y-auto border-r border-gray-200 bg-white/50 backdrop-blur-sm py-8 pl-8 pr-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-indigo-900 leading-tight">
              バーニングマウス症候群<br/>
              <span className="text-lg text-indigo-600">（舌痛症）解説</span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">専門医の見解とアプローチ</p>
          </div>
          
          <nav className="space-y-2 pb-12">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">目次</div>
            {chapters.map((chapter) => (
              <div key={`desktop-chapter-${chapter.id}`} className="space-y-1">
                <button
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg flex items-start justify-between transition-all duration-200 group font-medium ${
                    activeChapterId === chapter.id
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'text-gray-800 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-start">
                    <span className={`mr-3 mt-0.5 shrink-0 transition-colors duration-200 ${
                      activeChapterId === chapter.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-400'
                    }`}>
                      {chapter.icon}
                    </span>
                    <span className="text-sm leading-snug">{chapter.title}</span>
                  </div>
                  <div className="mt-1 shrink-0 ml-2">
                    {activeChapterId === chapter.id ? (
                      <ChevronDown className={`w-4 h-4 ${activeChapterId === chapter.id ? 'text-indigo-400' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    ) : (
                      <ChevronRight className={`w-4 h-4 ${activeChapterId === chapter.id ? 'text-indigo-400' : 'text-gray-400 group-hover:text-gray-600'}`} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeChapterId === chapter.id && (!chapter.password || unlockedChapters.includes(chapter.id)) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-10 pr-2 space-y-1"
                    >
                      {chapter.subSections.map((section) => (
                        <button
                          key={`desktop-section-${section.id}`}
                          onClick={() => handleSectionClick(chapter.id, section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            activeSection === section.id 
                              ? 'bg-indigo-100 text-indigo-800 font-medium shadow-sm' 
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-8 px-4 md:px-12 lg:px-16 pb-32">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 md:hidden">
              <h1 className="text-3xl font-bold text-indigo-900 leading-tight mb-2">
                バーニングマウス症候群（舌痛症）解説
              </h1>
              <p className="text-gray-600">専門医の見解とアプローチ</p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                {/* Chapter Header */}
                {activeChapter.id !== 'chapter-cover' && (
                  <div className="border-b-2 border-indigo-100 pb-4 mb-8">
                    <div className="flex items-center">
                      <div className="bg-indigo-100 p-3 rounded-xl text-indigo-700 mr-4 shadow-sm">
                        {isLocked ? <Lock className="w-6 h-6" /> : activeChapter.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-indigo-900 leading-tight">
                        {activeChapter.title}
                      </h2>
                    </div>
                  </div>
                )}

                {isLocked ? (
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center max-w-md mx-auto mt-12">
                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">パスワード保護されたコンテンツ</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      この章を閲覧するにはパスワードを入力してください。
                    </p>
                    <form onSubmit={handleUnlock} className="space-y-4">
                      <div>
                        <input
                          type="password"
                          value={passwordInput}
                          onChange={(e) => {
                            setPasswordInput(e.target.value);
                            if (passwordError) setPasswordError(false);
                          }}
                          placeholder="パスワードを入力"
                          className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors ${
                            passwordError 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50' 
                              : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                          }`}
                        />
                        {passwordError && (
                          <p className="text-red-500 text-sm mt-2 text-left">
                            パスワードが正しくありません。
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                      >
                        <Unlock className="w-5 h-5 mr-2" />
                        ロックを解除
                      </button>
                    </form>
                  </div>
                ) : (
                  activeChapter.subSections.map((section) => (
                    <section 
                      key={section.id} 
                      id={section.id}
                      className="scroll-mt-24"
                    >
                      {activeChapter.id !== 'chapter-cover' && (
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
                          {section.title}
                        </h3>
                      )}
                      <div className="text-gray-800">
                        {section.content}
                      </div>
                    </section>
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            {/* Next Chapter Navigation */}
            {chapters.findIndex(c => c.id === activeChapter.id) < chapters.length - 1 && (
              <div className="mt-24 pt-8 border-t border-gray-200">
                <button
                  onClick={() => handleChapterClick(chapters[chapters.findIndex(c => c.id === activeChapter.id) + 1].id)}
                  className="w-full group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all text-left"
                >
                  <div>
                    <span className="text-sm text-gray-500 font-medium block mb-1">次の章へ</span>
                    <span className="text-lg font-bold text-indigo-900 group-hover:text-indigo-700 transition-colors">
                      {chapters[chapters.findIndex(c => c.id === activeChapter.id) + 1].title}
                    </span>
                  </div>
                  <div className="bg-indigo-50 p-3 rounded-full group-hover:bg-indigo-100 transition-colors shrink-0 ml-4">
                    <ChevronRight className="w-6 h-6 text-indigo-600" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-40 transition-colors"
            aria-label="トップへ戻る"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

