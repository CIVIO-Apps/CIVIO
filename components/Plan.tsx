
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronRight, FileText, MapPin, ArrowLeft, Upload, CheckCircle2, GraduationCap, Library } from 'lucide-react';

type ViewState = 'DOMAINS' | 'SERVICES' | 'BOOKING';

interface SubService {
  id: string;
  title: string;
  time: string;
  docs: string[];
}

interface Domain {
  id: string;
  title: string;
  icon: React.ReactNode | string;
  image: string;
  description: string;
  subServices: SubService[];
}

const DOMAINS: Domain[] = [
  {
    id: 'logement',
    title: 'Logement',
    icon: '🏠',
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: 'Aides, PLU et gestion de votre habitat.',
    subServices: [
      { id: 'aide', title: 'Aide au logement (APL/FSL)', time: '30 min', docs: ['RIB', 'Dernier avis d\'imposition', 'Contrat de bail'] },
      { id: 'plu', title: 'Consultation du PLU', time: '45 min', docs: ['Plan de situation', 'Numéro de parcelle'] },
      { id: 'social', title: 'Demande de logement social', time: '40 min', docs: ['Pièce d\'identité', 'Livret de famille', '2 derniers bulletins de salaire'] },
    ]
  },
  {
    id: 'identite',
    title: 'Identité',
    icon: '👤',
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    description: 'Passeports, cartes d\'identité et titres.',
    subServices: [
      { id: 'cni', title: 'Carte Nationale d\'Identité', time: '20 min', docs: ['Photo d\'identité de -6 mois', 'Justificatif de domicile', 'Ancienne CNI'] },
      { id: 'pass', title: 'Passeport Biométrique', time: '25 min', docs: ['Photo d\'identité', 'Timbres fiscaux', 'Justificatif de domicile'] },
    ]
  },
  {
    id: 'etudiant',
    title: 'Étudiant & Jeunesse',
    icon: <GraduationCap size={40} />,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    description: 'Bourses, Pass Culture et jobs d\'été.',
    subServices: [
      { id: 'bourse', title: 'Bourse municipale', time: '25 min', docs: ['Notification CROUS', 'Certificat de scolarité', 'RIB'] },
      { id: 'culture', title: 'Pass Culture / Sport', time: '15 min', docs: ['Justificatif de domicile', 'Pièce d\'identité'] },
      { id: 'jobs', title: 'Jobs d\'été Mairie', time: '30 min', docs: ['CV à jour', 'Lettre de motivation', 'Certificat de scolarité'] },
    ]
  },
  {
    id: 'citoyennete',
    title: 'Citoyenneté',
    icon: <Library size={40} />,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    description: 'Élections, recensement et état civil.',
    subServices: [
      { id: 'recensement', title: 'Recensement Citoyen (16 ans)', time: '15 min', docs: ['Livret de famille', 'Pièce d\'identité du mineur'] },
      { id: 'elections', title: 'Inscription Listes Électorales', time: '10 min', docs: ['Justificatif de domicile -3 mois', 'Pièce d\'identité'] },
      { id: 'legalisation', title: 'Légalisation de signature', time: '20 min', docs: ['Document à signer (sur place)', 'Pièce d\'identité'] },
      { id: 'actes', title: 'Demande d\'acte (Naissance/Mariage)', time: '15 min', docs: ['Pièce d\'identité', 'Livret de famille'] },
    ]
  },
  {
    id: 'urbanisme',
    title: 'Urbanisme',
    icon: '🏗️',
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: 'Permis de construire et déclarations.',
    subServices: [
      { id: 'permis', title: 'Permis de construire', time: '60 min', docs: ['Plans de masse', 'Cerfa rempli', 'Photos du terrain'] },
      { id: 'prev', title: 'Déclaration préalable', time: '30 min', docs: ['Plan cadastral', 'Description des travaux'] },
    ]
  },
  {
    id: 'famille',
    title: 'Famille',
    icon: '🎒',
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
    description: 'Écoles, crèches et périscolaire.',
    subServices: [
      { id: 'creche', title: 'Inscription Crèche', time: '30 min', docs: ['Carnet de santé', 'Attestation CAF', 'Justificatif de domicile'] },
      { id: 'cantine', title: 'Dossier Cantine / Garderie', time: '20 min', docs: ['Attestation d\'assurance scolaire', 'Fiche sanitaire'] },
    ]
  }
];

const Plan: React.FC = () => {
  const [view, setView] = useState<ViewState>('DOMAINS');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);

  const handleSelectDomain = (domain: Domain) => {
    setSelectedDomain(domain);
    setView('SERVICES');
  };

  const handleSelectSubService = (sub: SubService) => {
    setSelectedSubService(sub);
    setView('BOOKING');
  };

  const goBack = () => {
    if (view === 'BOOKING') setView('SERVICES');
    else if (view === 'SERVICES') setView('DOMAINS');
  };

  const renderIcon = (icon: React.ReactNode | string) => {
    if (typeof icon === 'string') return icon;
    return icon;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Je planifie</h2>
          <p className="text-slate-500 font-medium">Gérez vos démarches administratives en toute simplicité.</p>
        </div>
        <div className="hidden md:flex p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
          <CalendarIcon size={24} />
        </div>
      </div>

      {/* Domain Selection View */}
      {view === 'DOMAINS' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {DOMAINS.map((domain) => (
            <button
              key={domain.id}
              onClick={() => handleSelectDomain(domain)}
              className="relative bg-white rounded-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all group aspect-[4/5]"
            >
              <div className="absolute inset-0 z-0">
                <img src={domain.image} alt={domain.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>

              <div className="relative z-10 mt-auto p-8 text-left space-y-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20 mb-2">
                  {renderIcon(domain.icon)}
                </div>
                <h3 className="font-black text-2xl text-white">{domain.title}</h3>
                <p className="text-sm text-white/80 font-medium leading-relaxed">{domain.description}</p>
                <div className="flex items-center gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest pt-2 group-hover:gap-4 transition-all">
                  Explorer les {domain.subServices.length} démarches <ChevronRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Sub-Service Selection View */}
      {view === 'SERVICES' && selectedDomain && (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux domaines
          </button>
          
          <div className="bg-slate-900 p-10 rounded-[48px] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img src={selectedDomain.image} className="w-full h-full object-cover opacity-20 blur-sm" />
            </div>
            <div className="relative z-10 text-6xl p-6 bg-white/10 rounded-[32px] backdrop-blur-md border border-white/20">
              {renderIcon(selectedDomain.icon)}
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black">{selectedDomain.title}</h3>
              <p className="text-blue-400 font-medium mt-1">Choisissez le motif de votre rendez-vous.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {selectedDomain.subServices.map((sub) => (
              <button
                key={sub.id}
                onClick={() => handleSelectSubService(sub)}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6 hover:shadow-xl hover:border-blue-500/20 transition-all group text-left"
              >
                <div className="flex-grow">
                  <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{sub.title}</h4>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <Clock size={14} className="text-blue-500" /> {sub.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <FileText size={14} className="text-blue-500" /> {sub.docs.length} pièces requises
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ChevronRight size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking and Documents View */}
      {view === 'BOOKING' && selectedSubService && selectedDomain && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={goBack}
            className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} /> Retour aux services {selectedDomain.title}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-slate-50">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl">
                    {renderIcon(selectedDomain.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{selectedSubService.title}</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Planification de votre créneau</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h4 className="font-black text-slate-900 flex items-center gap-3">
                      <CalendarIcon size={20} className="text-blue-600" />
                      Choisir une date
                    </h4>
                    <div className="grid grid-cols-7 gap-1 text-center bg-slate-50 p-4 rounded-3xl">
                      {['L','M','M','J','V','S','D'].map(d => <span key={d} className="text-[10px] text-slate-400 font-black py-2">{d}</span>)}
                      {Array.from({length: 31}, (_, i) => (
                        <button 
                          key={i} 
                          className={`p-2.5 rounded-xl text-xs font-bold transition-all ${i + 1 === 15 ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-blue-100 text-slate-600'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="font-black text-slate-900 flex items-center gap-3">
                      <Clock size={20} className="text-blue-600" />
                      Créneaux disponibles
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['09:00', '10:00', '11:00', '14:30', '15:30', '16:30'].map(time => (
                        <button key={time} className="py-3.5 px-2 rounded-2xl border border-slate-100 text-xs font-black text-slate-700 hover:border-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                          {time}
                        </button>
                      ))}
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-2xl flex items-start gap-3">
                      <MapPin size={18} className="text-emerald-600 shrink-0" />
                      <div>
                        <p className="text-xs font-black text-emerald-900 uppercase tracking-tighter">Lieu de RDV</p>
                        <p className="text-[11px] text-emerald-700 font-bold leading-tight">Hôtel de Ville — Service {selectedDomain.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full"></div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <h4 className="text-lg font-black">Pièces à fournir</h4>
                </div>

                <div className="space-y-4">
                  {selectedSubService.docs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-colors">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-medium text-slate-300 leading-snug">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="p-6 border-2 border-dashed border-white/20 rounded-[32px] text-center space-y-3 cursor-pointer hover:bg-white/5 hover:border-blue-500/50 transition-all group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto text-blue-400 group-hover:scale-110 transition-transform">
                      <Upload size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest">Scanner / Déposer</p>
                      <p className="text-[10px] text-slate-500 mt-1">PDF, JPG (Max 5Mo)</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-5 bg-civio-gradient text-white rounded-[28px] font-black text-lg shadow-2xl shadow-blue-500/30 active:scale-95 transition-all">
                Finaliser le RDV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
