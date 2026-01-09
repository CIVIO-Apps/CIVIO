
import React, { useState } from 'react';
import { MOCK_MERCHANTS } from '../constants';
import { Search, MapPin, Clock, Tag, ExternalLink, Heart, ShoppingBag, Store } from 'lucide-react';

const Merchants: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const filtered = MOCK_MERCHANTS.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.type.toLowerCase().includes(search.toLowerCase())
  );

  // Simple mock function to check if open (always true for the demo, but visually varied)
  const isOpen = (hours: string) => {
    // In a real app, logic would parse 'hours' and check against current time
    return !hours.includes('Fermé');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-600 border border-purple-100">
            <Store size={12} /> Proximité & Qualité
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Nos Commerçants</h2>
          <p className="text-slate-500 font-medium max-w-lg">Soutenez l'économie locale et découvrez le savoir-faire des artisans de votre ville.</p>
        </div>
        <div className="relative group w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par nom ou catégorie..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-[24px] outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-sm font-semibold shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((m) => (
          <div 
            key={m.id} 
            className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] group hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={m.image} 
                alt={m.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              
              {/* Overlay Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                  <Tag size={12} className="text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{m.type}</span>
                </div>
              </div>

              <button className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-all active:scale-90 shadow-md">
                <Heart size={20} />
              </button>

              {/* Status Indicator */}
              <div className="absolute bottom-6 left-6">
                <div className={`px-3 py-1.5 rounded-full backdrop-blur-md text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                  isOpen(m.hours) 
                    ? 'bg-emerald-500/90 text-white border-emerald-400' 
                    : 'bg-red-500/90 text-white border-red-400'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full bg-white ${isOpen(m.hours) ? 'animate-pulse' : ''}`}></span>
                    {isOpen(m.hours) ? 'Ouvert' : 'Fermé'}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {m.name}
                </h3>
              </div>
              
              <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed mb-6 italic">
                "{m.description}"
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                    <Clock size={18} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{m.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{m.address}</span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50">
                 <button className="w-full py-4 bg-slate-900 text-white rounded-[20px] text-xs font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-lg active:scale-95 group/btn">
                   Voir les informations complètes <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-32 bg-slate-100/50 rounded-[48px] border-2 border-dashed border-slate-200">
          <ShoppingBag size={64} className="mx-auto text-slate-300 mb-6" />
          <h4 className="text-xl font-black text-slate-400">Oups ! Aucun commerçant trouvé.</h4>
          <p className="text-slate-400 font-medium mt-2">Essayez avec d'autres mots-clés ou catégories.</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors"
          >
            Réinitialiser la recherche
          </button>
        </div>
      )}
    </div>
  );
};

export default Merchants;
