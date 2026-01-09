
import React, { useState } from 'react';
import { MOCK_NEWS } from '../constants';
import { Search, Calendar, MapPin, Share2, Heart } from 'lucide-react';

const Inform: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [likedItems, setLikedItems] = useState<Record<string, { count: number, isLiked: boolean }>>(
    MOCK_NEWS.reduce((acc, item) => ({
      ...acc,
      [item.id]: { count: item.likes, isLiked: false }
    }), {})
  );

  const categories = ['All', 'Sport', 'Événement', 'Environnement', 'Culture', 'Économie', 'Travaux'];

  const filteredNews = filter === 'All' ? MOCK_NEWS : MOCK_NEWS.filter(n => n.category === filter);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedItems(prev => {
      const current = prev[id];
      const isLiked = !current.isLiked;
      return {
        ...prev,
        [id]: {
          isLiked,
          count: isLiked ? current.count + 1 : current.count - 1
        }
      };
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Je m'informe</h2>
          <p className="text-slate-500 font-medium">L'essentiel de la vie locale, des alertes et des événements.</p>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Chercher une actualité..." 
            className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm outline-none w-full md:w-80 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
          />
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              filter === cat 
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' 
                : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {cat === 'All' ? 'Tous' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.map((news) => (
          <article 
            key={news.id} 
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                  {news.category}
                </span>
              </div>
              <button 
                onClick={(e) => toggleLike(e, news.id)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-90 ${
                  likedItems[news.id]?.isLiked 
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
                    : 'bg-white/90 text-slate-400 hover:text-red-500'
                }`}
              >
                <Heart size={20} fill={likedItems[news.id]?.isLiked ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-500" /> {news.date}</span>
                <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
                <span className="flex items-center gap-1.5 text-slate-900">
                  <Heart size={14} className={likedItems[news.id]?.isLiked ? "text-red-500" : "text-slate-300"} fill={likedItems[news.id]?.isLiked ? "currentColor" : "none"} /> 
                  {likedItems[news.id]?.count} Intéressés
                </span>
              </div>
              <h3 className="text-2xl font-black mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">{news.title}</h3>
              <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-8 leading-relaxed">{news.summary}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <button className="text-blue-600 text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Voir les détails <span>→</span>
                </button>
                <div className="flex gap-2">
                  <button className="p-3 bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-24 bg-slate-50 rounded-[48px] border-2 border-dashed border-slate-200">
           <Search size={48} className="mx-auto text-slate-300 mb-6" />
           <p className="text-xl font-black text-slate-400">Aucune actualité trouvée dans cette catégorie.</p>
           <button 
             onClick={() => setFilter('All')}
             className="mt-6 text-blue-600 font-bold hover:underline"
           >
             Afficher tout le flux
           </button>
        </div>
      )}
    </div>
  );
};

export default Inform;
