
import React, { useState } from 'react';
import { 
  Camera, MapPin, Send, CheckCircle2, AlertCircle, Clock, 
  ShieldAlert, Flame, PhoneCall, ChevronRight, Activity, 
  Landmark, Radio, BellRing, Gavel
} from 'lucide-react';
import { IncidentReport } from '../types';

const Act: React.FC = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [transmitToAuthority, setTransmitToAuthority] = useState<string[]>([]);

  const handleNext = () => setStep(step + 1);
  const handleReset = () => {
    setStep(1);
    setType('');
    setDescription('');
    setTransmitToAuthority([]);
  };

  const toggleAuthority = (id: string) => {
    setTransmitToAuthority(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const incidentTypes = [
    { id: 'voirie', label: 'Voirie & Route', icon: '🛣️' },
    { id: 'proprete', label: 'Propreté & Déchets', icon: '🗑️' },
    { id: 'eclairage', label: 'Éclairage Public', icon: '💡' },
    { id: 'espaces-verts', label: 'Espaces Verts', icon: '🌳' },
    { id: 'nuisance', label: 'Nuisances Sonores', icon: '📢' },
    { id: 'voisinage', label: 'Voisinage', icon: '🏘️' },
    { id: 'vandalisme', label: 'Vandalisme / Tags', icon: '🎨' },
    { id: 'accessibilite', label: 'Accessibilité', icon: '♿' },
    { id: 'eau', label: 'Eau & Fuites', icon: '💧' },
    { id: 'animaux', label: 'Animaux Errants', icon: '🐾' },
    { id: 'mobilier', label: 'Mobilier Urbain', icon: '🪑' },
    { id: 'autre', label: 'Autre', icon: '❓' },
  ];

  const recentReports: IncidentReport[] = [
    { id: '1', type: 'nuisance', label: 'Nuisance sonore nocturne', loc: 'Place de l\'Église', date: '12/04/2025', status: 'in_progress', statusLabel: 'En cours', image: 'https://images.unsplash.com/photo-1514525253361-bee243870d22?auto=format&fit=crop&q=80&w=200' },
    { id: '2', type: 'voirie', label: 'Nid de poule dangereux', loc: 'Avenue de la Gare', date: '10/04/2025', status: 'resolved', statusLabel: 'Validé', image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=200' },
    { id: '3', type: 'voisinage', label: 'Conflit de haie mitoyenne', loc: 'Rue des Lilas', date: '08/04/2025', status: 'pending', statusLabel: 'Reçu', image: 'https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=200' },
    { id: '4', type: 'vandalisme', label: 'Tags sur le mur du gymnase', loc: 'Rue du Stade', date: '14/04/2025', status: 'pending', statusLabel: 'Reçu', image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=200' },
  ];

  const emergencyContacts = [
    { id: 'police', name: 'Police', number: '17', icon: <ShieldAlert size={22} />, color: 'bg-blue-600', desc: 'Urgence & Troubles' },
    { id: 'pompiers', name: 'Pompiers', number: '18', icon: <Flame size={22} />, color: 'bg-red-600', desc: 'Incendie & Secours' },
    { id: 'samu', name: 'SAMU', number: '15', icon: <Activity size={22} />, color: 'bg-emerald-600', desc: 'Urgences Médicales' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-12">
      <div className="text-left space-y-2">
        <h2 className="text-5xl font-black text-slate-900 tracking-tight">J'agis</h2>
        <p className="text-slate-500 font-medium max-w-2xl text-lg">Améliorez la qualité de vie à Saint-Galmier en signalant les anomalies ou en contactant les services d'urgence.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white rounded-[56px] p-8 md:p-16 shadow-[0_30px_80px_rgb(0,0,0,0.04)] border border-slate-100">
            {step === 1 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-slate-900">Type de signalement</h3>
                  <p className="text-slate-400 font-medium text-xl">Sélectionnez la catégorie qui correspond le mieux à votre constat.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {incidentTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`flex flex-col items-center justify-center gap-6 p-10 rounded-[48px] border-2 transition-all group aspect-square ${
                        type === t.id 
                          ? 'border-blue-600 bg-blue-50 shadow-2xl shadow-blue-500/10 scale-105' 
                          : 'border-slate-50 bg-slate-50 hover:border-blue-200 hover:bg-white hover:shadow-2xl'
                      }`}
                    >
                      <span className="text-6xl group-hover:scale-125 transition-transform duration-500">{t.icon}</span>
                      <span className="text-[12px] font-black uppercase tracking-[0.15em] text-slate-500 group-hover:text-blue-700 text-center leading-tight">
                        {t.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    disabled={!type}
                    onClick={handleNext}
                    className="w-full py-7 bg-civio-gradient text-white rounded-[32px] font-black text-2xl disabled:opacity-20 disabled:grayscale shadow-2xl shadow-blue-500/30 active:scale-[0.98] transition-all"
                  >
                    Continuer le signalement
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{incidentTypes.find(t => t.id === type)?.icon}</span>
                    <h3 className="text-4xl font-black text-slate-900">{incidentTypes.find(t => t.id === type)?.label}</h3>
                  </div>
                  <p className="text-slate-400 font-medium text-xl">Détaillez la situation pour une intervention rapide.</p>
                </div>
                
                <div className="space-y-10">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Où et quoi exactement ? Ex: 'Grosse fuite d'eau au croisement de la rue des lilas...'"
                    className="w-full h-64 p-10 rounded-[48px] bg-slate-50 border-2 border-transparent outline-none focus:ring-8 focus:ring-blue-500/5 focus:bg-white focus:border-blue-100 resize-none text-slate-700 font-bold text-xl transition-all shadow-inner"
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <button className="flex flex-col items-center justify-center gap-4 p-10 rounded-[40px] border-2 border-dashed border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all font-black group bg-slate-50/50">
                      <Camera size={40} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs uppercase tracking-[0.25em]">Prendre une Photo</span>
                    </button>
                    <button className="flex flex-col items-center justify-center gap-4 p-10 rounded-[40px] border-2 border-dashed border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all font-black group bg-slate-50/50">
                      <MapPin size={40} className="group-hover:scale-110 transition-transform" />
                      <span className="text-xs uppercase tracking-[0.25em]">Localisation GPS</span>
                    </button>
                  </div>

                  <div className="p-10 bg-slate-900 rounded-[48px] text-white space-y-8 shadow-2xl">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                      <Radio size={24} className="text-blue-400 animate-pulse" />
                      <h4 className="text-lg font-black uppercase tracking-widest">Alerte aux Autorités</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <label className="flex items-center justify-between p-6 bg-white/5 rounded-[32px] border border-white/10 cursor-pointer hover:bg-white/10 hover:border-blue-500 transition-all group">
                        <div className="flex items-center gap-4">
                          <ShieldAlert size={22} className="text-blue-400" />
                          <span className="font-bold text-sm">Police</span>
                        </div>
                        <input 
                          type="checkbox" 
                          className="w-7 h-7 rounded-xl border-white/20 bg-transparent text-blue-500 focus:ring-offset-slate-900"
                          checked={transmitToAuthority.includes('police')}
                          onChange={() => toggleAuthority('police')}
                        />
                      </label>
                      <label className="flex items-center justify-between p-6 bg-white/5 rounded-[32px] border border-white/10 cursor-pointer hover:bg-white/10 hover:border-red-500 transition-all group">
                        <div className="flex items-center gap-4">
                          <Flame size={22} className="text-red-400" />
                          <span className="font-bold text-sm">Pompiers</span>
                        </div>
                        <input 
                          type="checkbox" 
                          className="w-7 h-7 rounded-xl border-white/20 bg-transparent text-red-500 focus:ring-offset-slate-900"
                          checked={transmitToAuthority.includes('pompiers')}
                          onChange={() => toggleAuthority('pompiers')}
                        />
                      </label>
                      <label className="flex items-center justify-between p-6 bg-white/5 rounded-[32px] border border-white/10 cursor-pointer hover:bg-white/10 hover:border-teal-500 transition-all group">
                        <div className="flex items-center gap-4">
                          <Landmark size={22} className="text-teal-400" />
                          <span className="font-bold text-sm">Services Mairie</span>
                        </div>
                        <input 
                          type="checkbox" 
                          className="w-7 h-7 rounded-xl border-white/20 bg-transparent text-teal-500 focus:ring-offset-slate-900"
                          checked={transmitToAuthority.includes('mairie')}
                          onChange={() => toggleAuthority('mairie')}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-6 bg-slate-100 text-slate-500 rounded-[28px] font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition-all"
                  >
                    Revenir au choix
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-[2] py-6 bg-civio-gradient text-white rounded-[28px] font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-blue-500/20"
                  >
                    Envoyer maintenant
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-24 space-y-12 animate-in zoom-in-95 duration-700">
                <div className="w-40 h-40 bg-emerald-100 text-emerald-600 rounded-[56px] flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle2 size={80} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-5xl font-black text-slate-900">Rapport Validé !</h3>
                  <p className="text-slate-500 font-medium text-2xl max-w-xl mx-auto">Votre contribution a été enregistrée avec succès.</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-16 py-6 bg-slate-900 text-white rounded-[32px] font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-2xl"
                >
                  Faire un autre signalement
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-10 lg:sticky lg:top-32">
           <section className="bg-slate-900 p-8 rounded-[56px] text-white shadow-2xl space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full"></div>
              
              <div className="text-center space-y-4 relative z-10">
                 <h3 className="text-3xl font-black tracking-tight">Urgences</h3>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">PC de régulation actif</p>
              </div>

              <div className="space-y-4 relative z-10">
                 {emergencyContacts.map((contact) => (
                   <a key={contact.id} href={`tel:${contact.number}`} className="group block">
                      <div className="p-6 bg-white/5 rounded-[40px] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-6">
                        {/* Numéro mis en avant sur la gauche */}
                        <div className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors w-16 shrink-0">
                          {contact.number}
                        </div>
                        
                        {/* Infos centrales */}
                        <div className="flex-grow">
                           <p className="font-black text-sm text-white group-hover:translate-x-1 transition-transform">{contact.name}</p>
                           <p className="text-[9px] font-black text-white/30 uppercase tracking-[0.1em]">{contact.desc}</p>
                        </div>

                        {/* Bouton d'action à droite */}
                        <div className={`w-12 h-12 ${contact.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                           <PhoneCall size={20} className="text-white" />
                        </div>
                      </div>
                   </a>
                 ))}
              </div>
              
              <div className="pt-6 border-t border-white/5 text-center relative z-10">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Géolocalisation activée pour les secours</p>
              </div>
           </section>

           <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm space-y-8">
              <h4 className="text-xl font-black text-slate-900 flex items-center gap-3">
                <Gavel size={20} className="text-slate-400" />
                Démarches Justice
              </h4>
              <div className="space-y-4">
                 <button className="w-full flex items-center justify-between p-5 bg-slate-50 rounded-3xl group hover:bg-blue-600 transition-all">
                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest group-hover:text-white">Pré-plainte en ligne</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-white" />
                 </button>
                 <button className="w-full flex items-center justify-between p-5 bg-slate-50 rounded-3xl group hover:bg-red-600 transition-all">
                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest group-hover:text-white">Signaler un Cambriolage</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-white" />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Act;
