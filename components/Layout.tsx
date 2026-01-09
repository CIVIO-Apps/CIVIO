
import React, { useState } from 'react';
import { NavPage } from '../types';
import { PILLARS } from '../constants';
import { User, Bell, Search, LayoutDashboard, Settings, HelpCircle, X, Menu, Send, UserCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: NavPage;
  setPage: (page: NavPage) => void;
}

const CivioIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} flex items-end gap-1.5`}>
    <div className="w-[38%] h-full bg-[#0055A4] rounded-full"></div>
    <div className="w-[38%] h-[72%] bg-[#8A5CF5] rounded-full"></div>
  </div>
);

const CivioLogo = ({ onClick }: { onClick: () => void }) => (
  <div 
    className="flex items-center gap-3 cursor-pointer group select-none"
    onClick={onClick}
  >
    <div className="float-animation">
      <CivioIcon className="w-8 h-8" />
    </div>
    <div className="brand-font text-4xl flex items-baseline tracking-tight">
      <span className="text-[#0055A4] font-extrabold">civ</span>
      <span className="text-[#8A5CF5] font-extrabold">i</span>
      <span className="text-[#0055A4] font-extrabold">o</span>
    </div>
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (page: NavPage) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pb-20 md:pb-0 md:pl-72">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 p-8 z-30 shadow-sm">
        <div className="mb-12">
          <CivioLogo onClick={() => setPage(NavPage.DASHBOARD)} />
        </div>

        <div className="space-y-1 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">Navigation</p>
          <button
            onClick={() => setPage(NavPage.DASHBOARD)}
            className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
              currentPage === NavPage.DASHBOARD 
                ? 'bg-blue-50 text-[#0055A4] font-bold nav-active-glow shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard size={20} className={currentPage === NavPage.DASHBOARD ? 'text-[#0055A4]' : 'text-slate-400 group-hover:text-slate-600'} /> 
            <span className="text-sm font-bold">Tableau de bord</span>
          </button>
          
          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => setPage(p.id)}
              className={`flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                currentPage === p.id 
                  ? 'bg-blue-50 text-[#0055A4] font-bold nav-active-glow shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className={currentPage === p.id ? 'text-[#0055A4]' : 'text-slate-400 group-hover:text-slate-600'}>
                {React.cloneElement(p.icon as React.ReactElement<any>, { size: 20 })}
              </div>
              <span className="text-sm font-bold">{p.label}</span>
            </button>
          ))}

          <div className="pt-8 space-y-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">Services</p>
            <button className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all font-medium">
              <HelpCircle size={20} className="text-slate-400" />
              <span className="text-sm">Centre d'aide</span>
            </button>
            <button className="flex items-center gap-4 w-full px-4 py-3.5 rounded-2xl text-slate-500 hover:bg-slate-50 transition-all font-medium">
              <Settings size={20} className="text-slate-400" />
              <span className="text-sm">Paramètres</span>
            </button>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <button 
            onClick={() => setPage(NavPage.PROFILE)}
            className="flex items-center gap-4 w-full p-2 rounded-2xl hover:bg-slate-50 transition-all group"
          >
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover:bg-civio-gradient group-hover:text-white transition-all shadow-inner">
              <User size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-slate-900">Jean Souplet</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Citoyen Vérifié</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between z-20">
        <div className="md:hidden">
          <CivioLogo onClick={() => setPage(NavPage.DASHBOARD)} />
        </div>
        
        <div className="hidden md:flex flex-grow max-w-xl mx-4">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0055A4] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Rechercher une actualité, un service..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100 border-none rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:bg-white text-sm outline-none transition-all font-medium"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100 group">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Services Actifs</span>
          </button>
          <button className="p-3 text-slate-500 hover:bg-slate-100 rounded-2xl relative transition-all active:scale-90">
            <Bell size={20} />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#8A5CF5] rounded-full border-2 border-white shadow-sm"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 animate-in fade-in slide-in-from-bottom-2 duration-700">
        {children}
      </main>

      {/* Mobile Menu Overlay (The Hub) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white animate-in slide-in-from-bottom duration-300 overflow-y-auto pb-32">
          <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <CivioLogo onClick={() => handleMobileNav(NavPage.DASHBOARD)} />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 active:scale-90 transition-transform"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Services de ma ville</h2>
              <div className="grid grid-cols-2 gap-4">
                {PILLARS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleMobileNav(p.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[32px] border border-slate-100 transition-all text-center ${currentPage === p.id ? 'bg-blue-50 border-blue-200 shadow-inner' : 'bg-slate-50 active:bg-blue-50 active:border-blue-100'}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${currentPage === p.id ? 'bg-[#0055A4] text-white' : 'bg-white text-[#0055A4]'}`}>
                      {React.cloneElement(p.icon as React.ReactElement<any>, { size: 24 })}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 leading-tight">
                      {p.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Assistance & Réglages</h2>
              <div className="grid gap-3">
                 <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                       <HelpCircle size={20} className="text-slate-400" />
                       <span className="text-sm font-bold text-slate-700">Centre d'aide</span>
                    </div>
                 </button>
                 <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3">
                       <Settings size={20} className="text-slate-400" />
                       <span className="text-sm font-bold text-slate-700">Paramètres de l'app</span>
                    </div>
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Bar (The Dock) */}
      <nav className="md:hidden fixed bottom-6 inset-x-6 h-16 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl flex items-center justify-between px-8 z-[60] border border-slate-100">
        <button 
          onClick={() => setPage(NavPage.DASHBOARD)}
          className={`flex flex-col items-center gap-1 transition-all ${currentPage === NavPage.DASHBOARD ? 'text-[#0055A4]' : 'text-slate-400'}`}
        >
          <LayoutDashboard size={22} strokeWidth={currentPage === NavPage.DASHBOARD ? 3 : 2} />
          <span className="text-[8px] font-black uppercase tracking-widest">Accueil</span>
        </button>

        {/* Central CTA: Personal Hub (Profil) */}
        <button 
          onClick={() => setPage(NavPage.PROFILE)}
          className={`relative -top-6 w-16 h-16 rounded-full bg-civio-gradient text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-all active:scale-90 border-4 border-white ${currentPage === NavPage.PROFILE ? 'ring-2 ring-blue-500/20' : ''}`}
        >
          <User size={24} />
        </button>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`flex flex-col items-center gap-1 transition-all ${isMobileMenuOpen ? 'text-[#8A5CF5]' : 'text-slate-400'}`}
        >
          <Menu size={22} strokeWidth={isMobileMenuOpen ? 3 : 2} />
          <span className="text-[8px] font-black uppercase tracking-widest">Menu</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
