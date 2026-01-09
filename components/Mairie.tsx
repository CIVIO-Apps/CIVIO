
import React from 'react';
import { Landmark, Sun, Thermometer, Cloud, Wind, Phone, Mail, MapPin, Quote, ExternalLink } from 'lucide-react';

const Mairie: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="relative overflow-hidden p-10 md:p-14 bg-civio-gradient rounded-[48px] text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] -mr-40 -mt-40 rounded-full"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-white/20 p-2 rounded-[40px] shrink-0 border border-white/30 backdrop-blur-md">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400" 
              alt="Le Maire" 
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">
               Le Mot du Maire
             </div>
             <div className="relative">
                <Quote className="absolute -left-8 -top-4 text-white/20 w-16 h-16 -z-10" />
                <h3 className="text-2xl md:text-3xl font-extrabold italic leading-tight">
                  "Construire ensemble une ville plus verte, plus solidaire et résolument tournée vers l'avenir."
                </h3>
             </div>
             <div>
                <p className="text-lg font-bold">Jean-Pierre Lambert</p>
                <p className="text-white/60 font-medium">Maire de Saint-Galmier depuis 2020</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <section className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-3">
                 <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                    <Landmark size={20} />
                 </div>
                 Informations Administratives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Horaires d'ouverture</p>
                    <ul className="space-y-2">
                       {['Lun - Ven : 08:30 - 17:00', 'Samedi : 09:00 - 12:00', 'Dimanche : Fermé'].map((h, i) => (
                         <li key={i} className="text-sm font-bold text-slate-700 flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> {h}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Contact Direct</p>
                    <div className="space-y-3">
                       <a href="tel:0477000000" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                          <Phone size={16} className="text-slate-300" /> 04 77 00 00 00
                       </a>
                       <a href="mailto:mairie@saint-galmier.fr" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                          <Mail size={16} className="text-slate-300" /> mairie@saint-galmier.fr
                       </a>
                       <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                          <MapPin size={16} className="text-slate-300" /> 1 Place de l'Hôtel de Ville
                       </div>
                    </div>
                 </div>
              </div>
              <div className="pt-6 border-t border-slate-50">
                 <button className="w-full py-4 bg-slate-50 text-slate-600 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                   Organigramme des services <ExternalLink size={14} />
                 </button>
              </div>
           </section>
        </div>

        <div className="space-y-8">
           <section className="bg-slate-900 p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <Cloud className="absolute top-10 right-10 w-24 h-24" />
                 <Sun className="absolute bottom-10 left-10 w-32 h-32" />
              </div>
              <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-6">Météo Locale</p>
              <Sun size={64} className="text-yellow-400 mb-4 animate-pulse" />
              <div className="space-y-1">
                 <h4 className="text-5xl font-black leading-none">21°C</h4>
                 <p className="text-slate-400 font-bold">Ensoleillé</p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full mt-10">
                 <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                    <div className="flex items-center justify-center gap-2 text-blue-400 mb-1">
                       <Thermometer size={14} />
                       <span className="text-[10px] font-black uppercase">Max</span>
                    </div>
                    <p className="text-lg font-bold">24°</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-3xl border border-white/10">
                    <div className="flex items-center justify-center gap-2 text-teal-400 mb-1">
                       <Wind size={14} />
                       <span className="text-[10px] font-black uppercase">Vent</span>
                    </div>
                    <p className="text-lg font-bold">12km/h</p>
                 </div>
              </div>
              <p className="text-[9px] text-slate-500 font-bold uppercase mt-8 tracking-widest">Dernière mise à jour : 14:30</p>
           </section>
        </div>
      </div>
    </div>
  );
};

export default Mairie;
