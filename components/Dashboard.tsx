
import React from 'react';
import { NavPage } from '../types';
import { PILLARS, MOCK_NEWS } from '../constants';
import { ChevronRight, TrendingUp, Users, AlertCircle, ArrowUpRight, Zap } from 'lucide-react';

interface DashboardProps {
  setPage: (page: NavPage) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setPage }) => {
  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      <section className="relative overflow-hidden p-8 md:p-16 bg-slate-900 rounded-[48px] text-white shadow-2xl shadow-blue-900/20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200" 
            alt="City Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] -mr-32 -mt-32 rounded-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/90">Quoi de neuf aujourd'hui ?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Bonjour, <span className="text-blue-400">Jean</span>. <br />
              Vivez votre ville.
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
              Votre portail citoyen intelligent pour agir, s'informer et participer au futur de Saint-Galmier.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
             <button 
               onClick={() => setPage(NavPage.ACT)}
               className="px-8 py-5 bg-white text-slate-900 rounded-3xl font-black flex items-center justify-between gap-6 hover:scale-105 transition-all shadow-2xl shadow-white/10 active:scale-95 group"
             >
               Signaler un problème <ArrowUpRight size={22} className="text-blue-600 group-hover:rotate-45 transition-transform" />
             </button>
             <button 
               onClick={() => setPage(NavPage.PLAN)}
               className="px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-3xl font-bold flex items-center justify-between gap-6 hover:bg-white/20 transition-all"
             >
               Prendre un RDV <ChevronRight size={18} />
             </button>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <section className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-purple-600 rounded-full"></div>
              Actualités locales
            </h3>
            <button 
              onClick={() => setPage(NavPage.INFORM)}
              className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              Voir tout l'agenda <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid gap-6">
            {MOCK_NEWS.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all hover:shadow-xl group"
              >
                <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col justify-center flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.date}</span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium line-clamp-2">{item.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer hover:translate-x-1 transition-transform">
                    Lire l'article <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
            Flash Info
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500 group-hover:w-2 transition-all"></div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                    <AlertCircle size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Il y a 2h</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Vigilance Orages</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Météo France place la région en vigilance orange. Soyez prudents dans vos déplacements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-2 transition-all"></div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Il y a 5h</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-1">Conseil Municipal</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Diffusion en direct ce soir à 18h30 sur le portail citoyen. Posez vos questions !
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 rounded-2xl bg-slate-100 text-slate-600 font-extrabold text-sm hover:bg-slate-200 transition-all">
              Toutes les alertes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
