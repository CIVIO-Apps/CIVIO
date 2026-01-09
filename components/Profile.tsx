
import React from 'react';
import { User, Shield, Bell, LogOut, ChevronRight, MapPin, CreditCard } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 bg-slate-200 rounded-full overflow-hidden border-4 border-white shadow-lg">
             <img 
               src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" 
               alt="Jean Souplet" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-civio-blue rounded-full border-4 border-white flex items-center justify-center text-white">
            <CheckCircle size={14} fill="currentColor" className="text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Jean Souplet</h2>
        <p className="text-slate-500 flex items-center gap-1 text-sm">
          <MapPin size={14} /> 12 Rue des Lilas, Saint-Galmier
        </p>
        <div className="flex gap-4 mt-6 w-full">
           <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Signalements</p>
              <p className="text-lg font-bold text-civio-blue">14</p>
           </div>
           <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Votes</p>
              <p className="text-lg font-bold text-civio-violet">8</p>
           </div>
           <div className="flex-1 bg-slate-50 p-3 rounded-2xl">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Points CIVIC</p>
              <p className="text-lg font-bold text-yellow-600">450</p>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-50 font-bold text-slate-400 text-xs uppercase tracking-wider">Paramètres</div>
        <div className="divide-y divide-slate-50">
          <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 bg-blue-50 text-civio-blue rounded-xl flex items-center justify-center">
              <User size={20} />
            </div>
            <div className="flex-grow text-left">
              <p className="font-bold text-sm">Informations personnelles</p>
              <p className="text-[10px] text-slate-400">Modifier nom, adresse, email</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
          
          <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 bg-violet-50 text-civio-violet rounded-xl flex items-center justify-center">
              <CreditCard size={20} />
            </div>
            <div className="flex-grow text-left">
              <p className="font-bold text-sm">Mes Factures & Paiements</p>
              <p className="text-[10px] text-slate-400">Cantine, périscolaire, stationnement</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>

          <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
              <Bell size={20} />
            </div>
            <div className="flex-grow text-left">
              <p className="font-bold text-sm">Notifications</p>
              <p className="text-[10px] text-slate-400">Alertes travaux, météo, actualités</p>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>

          <button className="w-full p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
            <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center">
              <Shield size={20} />
            </div>
            <div className="flex-grow text-left">
              <p className="font-bold text-sm">FranceConnect</p>
              <p className="text-[10px] text-slate-400 text-green-600 font-semibold">Compte vérifié</p>
            </div>
            <CheckCircle size={18} className="text-green-500" />
          </button>
        </div>
      </div>

      <button className="w-full p-4 flex items-center justify-center gap-2 text-red-500 font-bold bg-white rounded-2xl border border-red-100 hover:bg-red-50 transition-colors">
        <LogOut size={20} /> Déconnexion
      </button>

      <div className="text-center pb-8">
        <p className="text-[10px] text-slate-400 font-medium">CIVIO Edition 2025 - Version 1.4.0</p>
        <p className="text-[10px] text-slate-400 mt-1">Conçu pour renforcer le lien civique.</p>
      </div>
    </div>
  );
};

const CheckCircle = ({ size, className, fill }: { size: number, className?: string, fill?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default Profile;
