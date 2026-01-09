
import React from 'react';
import { MOCK_POLLS } from '../constants';
import { BarChart3, Users, CheckCircle, ArrowRight, Lightbulb, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const Vote: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Je donne mon avis</h2>
          <p className="text-slate-500 font-medium">Participez activement aux décisions locales et proposez vos idées.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 text-sm font-black text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95">
            <Lightbulb size={18} className="text-yellow-500" /> Proposer une idée
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-black flex items-center gap-3 text-slate-900">
          <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
          Consultations actives
        </h3>
        
        {MOCK_POLLS.filter(p => p.status === 'active').map(poll => (
          <div key={poll.id} className="bg-white rounded-[48px] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-slate-100 overflow-hidden transition-all hover:shadow-xl group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src={poll.image} alt={poll.question} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Clock size={12} /> Finit dans 3 jours
                  </span>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div>
                  <h4 className="text-3xl font-black text-slate-900 leading-tight">{poll.question}</h4>
                  <p className="text-slate-500 font-medium mt-3 leading-relaxed">{poll.description}</p>
                </div>

                <div className="space-y-3">
                  {poll.options.map((opt, i) => (
                    <button 
                      key={i}
                      className="w-full p-4 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center justify-between group/opt"
                    >
                      <span className="font-bold text-slate-700 group-hover/opt:text-blue-700">{opt.label}</span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover/opt:border-blue-600 transition-colors">
                         <div className="w-2.5 h-2.5 rounded-full bg-blue-600 opacity-0 group-hover/opt:opacity-100 transition-opacity"></div>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="w-full py-5 bg-civio-gradient text-white rounded-[24px] font-black text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all">
                  Valider mon vote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h3 className="text-xl font-black flex items-center gap-3 text-slate-900">
           <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
           Résultats récents
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_POLLS.filter(p => p.status === 'completed').map(poll => (
            <div key={poll.id} className="bg-white p-8 rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 space-y-6">
              <div className="relative h-48 rounded-[32px] overflow-hidden mb-6">
                 <img src={poll.image} className="w-full h-full object-cover grayscale opacity-50" />
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                 <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 border border-emerald-100">
                      <CheckCircle size={10} /> Consulté
                    </span>
                 </div>
              </div>
              
              <div>
                <h4 className="text-xl font-black text-slate-900">{poll.question}</h4>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Total : {poll.options.reduce((acc, o) => acc + o.votes, 0)} citoyens</p>
              </div>

              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={poll.options} layout="vertical" margin={{ left: 0, right: 30 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="label" 
                      type="category" 
                      width={80} 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 800, fill: '#64748b' }} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }} 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="votes" radius={[0, 10, 10, 0]} barSize={20}>
                      {poll.options.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#0055A4' : '#8a5cf5'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                 <p className="text-[10px] text-slate-500 font-bold italic leading-relaxed">
                   "Les services municipaux intègrent ces résultats au plan d'aménagement 2026."
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vote;
