
import React from 'react';
import { Info, Send, Calendar, MessageSquare, ShoppingBag, Landmark } from 'lucide-react';
import { NavPage, NewsItem, Poll, Merchant } from './types';

export const PILLARS = [
  { id: NavPage.INFORM, label: "Je m'informe", icon: <Info size={24} />, color: "bg-blue-600", desc: "Actualités et alertes" },
  { id: NavPage.ACT, label: "J'agis", icon: <Send size={24} />, color: "bg-red-500", desc: "Signaler un incident" },
  { id: NavPage.PLAN, label: "Je planifie", icon: <Calendar size={24} />, color: "bg-green-600", desc: "Rendez-vous mairie" },
  { id: NavPage.VOTE, label: "Je participe", icon: <MessageSquare size={24} />, color: "bg-yellow-500", desc: "Sondages et idées" },
  { id: NavPage.MERCHANTS, label: "Commerçants", icon: <ShoppingBag size={24} />, color: "bg-purple-600", desc: "Vie économique locale" },
  { id: NavPage.MAIRIE, label: "Ma Mairie", icon: <Landmark size={24} />, color: "bg-teal-600", desc: "Services et élus" },
];

export const MOCK_MERCHANTS: Merchant[] = [
  {
    id: 'm1',
    name: "Boulangerie du Centre",
    type: "Alimentation",
    hours: "06:30 - 19:30",
    address: "5 Place de l'Église",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
    description: "Pains bio et pâtisseries artisanales cuites au feu de bois."
  },
  {
    id: 'm2',
    name: "Le Petit Potager",
    type: "Primeur",
    hours: "08:00 - 18:00",
    address: "12 Rue de la République",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800",
    description: "Fruits et légumes de saison en direct des producteurs locaux."
  },
  {
    id: 'm3',
    name: "Librairie L'Odyssée",
    type: "Culture",
    hours: "10:00 - 19:00",
    address: "3 Avenue des Arts",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    description: "Grand choix de romans, BD et coin jeunesse chaleureux."
  },
  {
    id: 'm4',
    name: "L'Atelier Floral",
    type: "Fleuriste",
    hours: "09:00 - 19:00",
    address: "8 Rue de la Paix",
    image: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?auto=format&fit=crop&q=80&w=800",
    description: "Compositions florales uniques pour tous vos événements."
  },
  {
    id: 'm5',
    name: "Le Bistrot de la Mairie",
    type: "Restauration",
    hours: "11:30 - 22:30",
    address: "2 Place de l'Hôtel de Ville",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    description: "Cuisine traditionnelle avec produits du terroir dans un cadre historique."
  },
  {
    id: 'm6',
    name: "Ciseaux et Style",
    type: "Coiffeur",
    hours: "09:00 - 18:30",
    address: "15 Rue des Lilas",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
    description: "Salon de coiffure mixte et barbier spécialisé en soins naturels."
  },
  {
    id: 'm7',
    name: "Épicerie Fine Italienne",
    type: "Alimentation",
    hours: "10:00 - 20:00",
    address: "22 Avenue Gambetta",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
    description: "Le meilleur de l'Italie : fromages, charcuteries et pâtes fraîches."
  },
  {
    id: 'm8',
    name: "La Quincaillerie Moderne",
    type: "Bricolage",
    hours: "08:30 - 18:30",
    address: "40 Boulevard Carnot",
    image: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=800",
    description: "Outils, quincaillerie et conseils pour tous vos projets de rénovation."
  },
  {
    id: 'm9',
    name: "Bio & Cie",
    type: "Santé / Bien-être",
    hours: "09:30 - 19:00",
    address: "18 Rue Saint-Jean",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=800",
    description: "Magasin bio, compléments alimentaires et cosmétiques écologiques."
  },
  {
    id: 'm10',
    name: "Aux Milles Couleurs",
    type: "Mode",
    hours: "10:00 - 19:00",
    address: "6 Rue de la Liberté",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
    description: "Prêt-à-porter féminin et accessoires de créateurs indépendants."
  },
  {
    id: 'm11',
    name: "Le Comptoir des Bières",
    type: "Bar / Cave",
    hours: "17:00 - 00:00",
    address: "10 Rue des Forges",
    image: "https://images.unsplash.com/photo-1538481199705-c730424b69ff?auto=format&fit=crop&q=80&w=800",
    description: "Dégustation de bières artisanales locales et d'ailleurs."
  },
  {
    id: 'm12',
    name: "Pâtisserie Royale",
    type: "Alimentation",
    hours: "08:00 - 19:00",
    address: "12 Place Royale",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800",
    description: "Spécialités de macarons et entremets fins pour gourmets."
  },
  {
    id: 'm13',
    name: "Optique Vision",
    type: "Santé",
    hours: "09:00 - 19:00",
    address: "25 Rue du Commerce",
    image: "https://images.unsplash.com/photo-1511732351157-187146be1d1e?auto=format&fit=crop&q=80&w=800",
    description: "Examen de vue et large choix de montures optiques et solaires."
  },
  {
    id: 'm14',
    name: "Au Fil du Temps",
    type: "Bijouterie",
    hours: "10:00 - 18:30",
    address: "3 Rue de l'Horloge",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    description: "Création et réparation de bijoux et horlogerie ancienne."
  },
  {
    id: 'm15',
    name: "Le Coin des Sportifs",
    type: "Sport",
    hours: "09:30 - 19:30",
    address: "45 Avenue de la Gare",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    description: "Tout pour le running, le fitness et les sports collectifs."
  },
  {
    id: 'm16',
    name: "Galerie d'Art",
    type: "Culture",
    hours: "14:00 - 19:00",
    address: "7 Rue des Artistes",
    image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&q=80&w=800",
    description: "Expositions mensuelles d'artistes peintres et sculpteurs régionaux."
  },
  {
    id: 'm17',
    name: "Le Petit Chausson",
    type: "Mode / Enfance",
    hours: "10:00 - 18:30",
    address: "9 Rue du Faubourg",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    description: "Chaussures et vêtements pour enfants de 0 à 12 ans."
  },
  {
    id: 'm18',
    name: "Thé & Chocolat",
    type: "Alimentation",
    hours: "10:00 - 19:00",
    address: "14 Rue de la Monnaie",
    image: "https://images.unsplash.com/photo-1544787210-2211d24715ec?auto=format&fit=crop&q=80&w=800",
    description: "Salon de thé cosy et chocolaterie artisanale haut de gamme."
  },
  {
    id: 'm19',
    name: "La Fromagerie du Pont",
    type: "Alimentation",
    hours: "08:30 - 19:30",
    address: "1 Rue du Pont de Pierre",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=800",
    description: "Fromages affinés AOP et conseils en accords vins & fromages."
  },
  {
    id: 'm20',
    name: "Pharmacie Verte",
    type: "Santé",
    hours: "08:30 - 20:00",
    address: "30 Place du Marché",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&q=80&w=800",
    description: "Pharmacie, parapharmacie et espace dédié à l'herboristerie."
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: "Tanguy Tripot sacré champion de tennis !",
    category: "Sport",
    date: "Hier",
    summary: "Le tournoi annuel de tennis s'est clôturé sur une victoire éclatante. Bravo à Tanguy Tripot pour son parcours exemplaire et sa persévérance !",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&q=80&w=800",
    likes: 248
  },
  {
    id: 'n2',
    title: "La Sainte Catherine arrive : Préparez les fêtes !",
    category: "Événement",
    date: "À venir",
    summary: "Les célèbres fêtes du village approchent. Foire artisanale, animations pour enfants et grand banquet au programme pour toute la famille.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    likes: 185
  },
  {
    id: 'n3',
    title: "La Roseraie municipale ouvre ses portes",
    category: "Environnement",
    date: "Aujourd'hui",
    summary: "Venez découvrir les nouvelles variétés de roses dans un cadre bucolique. Entrée gratuite tout le week-end pour tous les habitants.",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
    likes: 312
  },
  {
    id: 'n4',
    title: "L'art atypique de Jim Carsey s'expose",
    category: "Culture",
    date: "En ce moment",
    summary: "Plongez dans l'univers singulier de Jim Carsey à la Galerie d'Art. Une exposition immersive qui bouscule les codes traditionnels.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
    likes: 124
  },
  {
    id: 'n5',
    title: "Rendez-vous des Commerçants au Café Théâtre",
    category: "Économie",
    date: "25 Avril",
    summary: "Moment d'échange privilégié entre les entrepreneurs locaux pour dynamiser le centre-ville et créer des synergies.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    likes: 56
  },
  {
    id: 'n6',
    title: "Bienvenue à G.APERO chez Margot !",
    category: "Nouveau Commerce",
    date: "Nouveauté",
    summary: "Un nouveau restaurant ouvre ses portes ! Venez découvrir les planches apéritives et les cocktails créations de Margot.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    likes: 278
  },
  {
    id: 'n7',
    title: "Travaux Boulevard de la République",
    category: "Travaux",
    date: "En cours",
    summary: "Réfection complète de la chaussée prévue du 15 au 22 Avril. Circulation alternée et parkings temporaires mis en place.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800",
    likes: 18
  }
];

export const MOCK_POLLS: Poll[] = [
  {
    id: 'p1',
    question: "Nouvelle piste cyclable ?",
    description: "Souhaitez-vous l'aménagement d'une piste cyclable bidirectionnelle sur l'Avenue des Pins ?",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c4b282?auto=format&fit=crop&q=80&w=800",
    options: [
      { label: "Oui, tout à fait", votes: 145 },
      { label: "Plutôt oui", votes: 89 },
      { label: "Non, pas prioritaire", votes: 42 }
    ],
    status: 'active'
  },
  {
    id: 'p2',
    question: "Poubelles à compost",
    description: "Évaluation du projet pilote de compostage collectif en centre-ville.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    options: [
      { label: "Succès total", votes: 210 },
      { label: "À améliorer", votes: 120 },
      { label: "Inutile", votes: 15 }
    ],
    status: 'completed'
  },
  {
    id: 'p3',
    question: "Un gymnase pour nos collégiens ?",
    description: "Faut-il construire un nouveau complexe sportif dédié aux établissements scolaires ?",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    options: [
      { label: "Oui, priorité absolue", votes: 342 },
      { label: "Oui, si budget partagé", votes: 156 },
      { label: "Non, rénover l'actuel", votes: 48 }
    ],
    status: 'completed'
  },
  {
    id: 'p4',
    question: "Reboisement du parc municipal",
    description: "Quel plan de plantation préférez-vous pour le Parc des Lilas ?",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    options: [
      { label: "500 arbres fruitiers", votes: 198 },
      { label: "Forêt urbaine dense", votes: 275 },
      { label: "Arbres + zones de jeux", votes: 142 }
    ],
    status: 'completed'
  },
  {
    id: 'p5',
    question: "Arrêt des flyers papier ?",
    description: "Souhaitez-vous que la mairie cesse la distribution de flyers pour passer au 100% numérique ?",
    image: "https://images.unsplash.com/photo-1532153322671-297dc7f65b56?auto=format&fit=crop&q=80&w=800",
    options: [
      { label: "Oui, pour l'écologie", votes: 412 },
      { label: "Garder une version PDF", votes: 85 },
      { label: "Non, garder le papier", votes: 31 }
    ],
    status: 'completed'
  }
];
