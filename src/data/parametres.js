// ─── DONNÉES DE BASE ──────────────────────────────────────────────────────
// Source : Cahier des charges KÔH-LIV + recherches prix marché 2025-2026
// Niveau de gamme : moyen (durabilité / prix / esthétique moderne)
// Pour ajouter un poste : ajouter une entrée avec les mêmes champs.
// Les coûts sont ajustables dans l'onglet Paramètres sans toucher ce fichier.
// Prix HT, région Toulouse (hors Île-de-France +15%)

export const PARAMETRES_BASE = [

  // ═══════════════════════════════════════════════════════════════════
  // CHAMBRE
  // Corps de métier : carreleur, peintre, électricien, menuisier, plaquiste
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Chambre", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Chambre", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Chambre", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Chambre", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Chambre", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Chambre", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Chambre", poste:"Sols", fourniture:"Lino / vinyle en lé", methode:"m²", fournisseur:"", ref:"", coutHT:12, prestataire:"", moHT:15 },
  { piece:"Chambre", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Chambre", poste:"Sols", fourniture:"Stratifié AC4 (12mm)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:18 },
  { piece:"Chambre", poste:"Sols", fourniture:"Parquet contrecollé chêne", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:28 },
  { piece:"Chambre", poste:"Sols", fourniture:"Carrelage grès cérame (30x60)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:45 },
  { piece:"Chambre", poste:"Sols", fourniture:"Plinthes assorties (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Chambre", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard SAA 120-140 (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Cloison Placo BA13 phonique SAA 120-140 (création)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:32 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Bandes résilientes sous rails", methode:"m²", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Isolant acoustique-Laine de roche", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Isolant acoustique-Laine de verre", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Chambre", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Chambre", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Chambre", poste:"Murs", fourniture:"Papier peint intissé", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:20 },
  { piece:"Chambre", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Chambre", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Chambre", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },
  { piece:"Chambre", poste:"Plafonds", fourniture:"Faux plafond BA13 (isolation phonique)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },

  // ── Menuiseries extérieures ──
  { piece:"Chambre", poste:"Menuiseries ext", fourniture:"Fenêtre PVC DV 1 ventail (60x120)", methode:"forfait", fournisseur:"", ref:"", coutHT:380, prestataire:"", moHT:180 },
  { piece:"Chambre", poste:"Menuiseries ext", fourniture:"Fenêtre PVC DV 2 ventaux (120x120)", methode:"forfait", fournisseur:"", ref:"", coutHT:550, prestataire:"", moHT:220 },
  { piece:"Chambre", poste:"Menuiseries ext", fourniture:"Porte-fenêtre PVC DV 1 ventail", methode:"forfait", fournisseur:"", ref:"", coutHT:580, prestataire:"", moHT:240 },
  { piece:"Chambre", poste:"Menuiseries ext", fourniture:"Porte-fenêtre PVC DV 2 ventaux", methode:"forfait", fournisseur:"", ref:"", coutHT:780, prestataire:"", moHT:280 },
  { piece:"Chambre", poste:"Menuiseries ext", fourniture:"Volet roulant électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Chambre", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Chambre", poste:"Menuiseries int", fourniture:"Serrure connectée / à code", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:60 },
  { piece:"Chambre", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },
  { piece:"Chambre", poste:"Menuiseries int", fourniture:"Sticker numérotation chambre", methode:"forfait", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:0 },

  // ── Électricité ──
  { piece:"Chambre", poste:"Électricité", fourniture:"Point lumineux plafonnier", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:60 },
  { piece:"Chambre", poste:"Électricité", fourniture:"Spot encastré (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:45 },
  { piece:"Chambre", poste:"Électricité", fourniture:"Interrupteur va-et-vient", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Chambre", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Chambre", poste:"Électricité", fourniture:"Prise RJ45 / fibre (data)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },
  { piece:"Chambre", poste:"Électricité", fourniture:"Radiateur à inertie (1000W)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  
  // ── Mobilier & Décoration ──
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Sommier lattes 140x200", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Matelas 140x200", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Couette", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Armoire 150cm double porte + miroir", methode:"forfait", fournisseur:"", ref:"", coutHT:420, prestataire:"", moHT:80 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Bureau 90x50", methode:"forfait", fournisseur:"", ref:"", coutHT:200, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Chaise de bureau", methode:"forfait", fournisseur:"", ref:"", coutHT:100, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Table de chevet", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Lampe de chevet", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Rideaux occultants + tringle", methode:"forfait", fournisseur:"", ref:"", coutHT:90, prestataire:"", moHT:30 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Cadres décoratifs", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:0 },
  { piece:"Chambre", poste:"Mobilier - Déco", fourniture:"Ampoules LED (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // SALLE D'EAU
  // Corps de métier : carreleur, plombier, électricien, plaquiste
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Dépose carrelage sol", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:18 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Dépose faïence murale", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:22 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Dépose douche / baignoire", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:150 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Dépose meuble vasque + WC", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:100 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Évacuation douche / baignoire", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:180 },
  { piece:"Salle d'eau", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Salle d'eau", poste:"Sols", fourniture:"Ragréage / préparation chape", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:15 },
  { piece:"Salle d'eau", poste:"Sols", fourniture:"Étanchéité sous carrelage (SPEC)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:15 },
  { piece:"Salle d'eau", poste:"Sols", fourniture:"Carrelage grès cérame antidérapant (30x60)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:50 },
  { piece:"Salle d'eau", poste:"Sols", fourniture:"Carrelage grand format (60x120)", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:65 },
  { piece:"Salle d'eau", poste:"Sols", fourniture:"Sol vinyle LVT hydro (alternative éco)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },

  // ── Cloisons ──
  { piece:"Salle d'eau", poste:"Cloisons", fourniture:"Cloison Placo Hydrofuge BA13H", methode:"m²", fournisseur:"", ref:"", coutHT:16, prestataire:"", moHT:30 },
  { piece:"Salle d'eau", poste:"Cloisons", fourniture:"Coffrage plomberie / niche déco", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:120 },

  // ── Murs ──
  { piece:"Salle d'eau", poste:"Murs", fourniture:"Étanchéité murale (SPEC zone humide)", methode:"m²", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:15 },
  { piece:"Salle d'eau", poste:"Murs", fourniture:"Faïence murale (20x60)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:50 },
  { piece:"Salle d'eau", poste:"Murs", fourniture:"Carrelage grand format mural (60x120)", methode:"m²", fournisseur:"", ref:"", coutHT:42, prestataire:"", moHT:65 },
  { piece:"Salle d'eau", poste:"Murs", fourniture:"Peinture hydrofuge (zones non carrelées)", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Salle d'eau", poste:"Plafonds", fourniture:"Peinture plafond hydrofuge", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:20 },
  { piece:"Salle d'eau", poste:"Plafonds", fourniture:"Faux plafond hydrofuge (PVC ou BA13H)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:32 },

  // ── Plomberie ──
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Arrivée eau froide + eau chaude", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:200 },
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Siphon de sol douche italienne", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:120 },
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Robinetterie mitigeur douche", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:80 },
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Colonne de douche encastrée", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Robinetterie mitigeur vasque", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:60 },
  { piece:"Salle d'eau", poste:"Plomberie", fourniture:"Siphon + bonde vasque", methode:"forfait", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:40 },

  // ── Équipements ──
  { piece:"Salle d'eau", poste:"Équipements", fourniture:"Receveur douche à poser (80x80)", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:120 },
  { piece:"Salle d'eau", poste:"Équipements", fourniture:"Paroi de douche verre 8mm", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },
  { piece:"Salle d'eau", poste:"Équipements", fourniture:"WC à poser", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:180 },

  // ── Électricité ──
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Point lumineux plafonnier étanche", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:65 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Spot encastré étanche IP65 (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:50 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Applique miroir / hublot", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:50 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Interrupteur (zone hors eau)", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Prise rasoir 2P+T sécurisée", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:35 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"Sèche-serviette électrique (500W)", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:100 },
  { piece:"Salle d'eau", poste:"Électricité", fourniture:"VMC simple flux hygro (bouche)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:80 },

  // ── Mobilier ──
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Meuble vasque suspendu 60cm", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:100 },
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Miroir LED dégivrant 60x80", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:40 },
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Armoire de toilette encastrée", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:60 },
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Étagère murale + accessoires", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:30 },
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Porte-serviettes chauffant", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:40 },
  { piece:"Salle d'eau", poste:"Mobilier - Déco", fourniture:"Accessoires (porte-papier, crochet...)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:20 },

  // ═══════════════════════════════════════════════════════════════════
  // CUISINE
  // Corps de métier : cuisiniste, carreleur, plombier, électricien
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Cuisine", poste:"Démolition", fourniture:"Dépose cuisine existante (meubles + évier)", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:400 },
  { piece:"Cuisine", poste:"Démolition", fourniture:"Dépose carrelage sol", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:18 },
  { piece:"Cuisine", poste:"Démolition", fourniture:"Dépose crédence existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:22 },
  { piece:"Cuisine", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Cuisine", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:15 },
  { piece:"Cuisine", poste:"Sols", fourniture:"Carrelage grès cérame (30x60)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:45 },
  { piece:"Cuisine", poste:"Sols", fourniture:"Sol vinyle LVT hydro", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Cuisine", poste:"Sols", fourniture:"Plinthes carrelage (ml)", methode:"m", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:8 },

  // ── Murs ──
  { piece:"Cuisine", poste:"Murs", fourniture:"Peinture lessivable cuisine (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:15 },
  { piece:"Cuisine", poste:"Murs", fourniture:"Crédence carrelage (20x40)", methode:"m²", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:55 },
  { piece:"Cuisine", poste:"Murs", fourniture:"Crédence verre laqué sur mesure", methode:"m²", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:40 },
  { piece:"Cuisine", poste:"Murs", fourniture:"Crédence inox", methode:"m²", fournisseur:"", ref:"", coutHT:90, prestataire:"", moHT:40 },

  // ── Plafonds ──
  { piece:"Cuisine", poste:"Plafonds", fourniture:"Peinture plafond lessivable", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:18 },

  // ── Plomberie ──
  { piece:"Cuisine", poste:"Plomberie", fourniture:"Arrivée eau froide + eau chaude évier", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:200 },
  { piece:"Cuisine", poste:"Plomberie", fourniture:"Évacuation évier", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:160 },
  { piece:"Cuisine", poste:"Plomberie", fourniture:"Arrivée + évacuation lave-vaisselle", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:120 },
  { piece:"Cuisine", poste:"Plomberie", fourniture:"Mitigeur évier (robinetterie)", methode:"forfait", fournisseur:"", ref:"", coutHT:90, prestataire:"", moHT:60 },

  // ── Électricité ──
  { piece:"Cuisine", poste:"Électricité", fourniture:"Circuit spécialisé plaque cuisson (32A)", methode:"forfait", fournisseur:"", ref:"", coutHT:50, prestataire:"", moHT:120 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Circuit spécialisé four (20A)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:100 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Circuit spécialisé lave-vaisselle", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:100 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Circuit spécialisé réfrigérateur", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Prises plan de travail (lot 4)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:100 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Éclairage sous meubles hauts (LED)", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:60 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"Point lumineux plafonnier / spots", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:60 },
  { piece:"Cuisine", poste:"Électricité", fourniture:"VMC / hotte aspirante (réseau)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:100 },

  // ── Mobilier ──
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Meubles bas (ml)", methode:"m", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Meubles hauts (ml)", methode:"m", fournisseur:"", ref:"", coutHT:220, prestataire:"", moHT:100 },
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Plan de travail stratifié (ml)", methode:"m", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Plan de travail quartz (ml)", methode:"m", fournisseur:"", ref:"", coutHT:350, prestataire:"", moHT:120 },
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Évier inox 1 bac + égouttoir", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Mobilier", fourniture:"Îlot central", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:200 },

  // ── Électroménager ──
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Plaque induction 4 feux encastrable", methode:"forfait", fournisseur:"", ref:"", coutHT:380, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Four encastrable multifonction", methode:"forfait", fournisseur:"", ref:"", coutHT:380, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Hotte aspirante encastrée", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:100 },
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Réfrigérateur intégrable", methode:"forfait", fournisseur:"", ref:"", coutHT:550, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Lave-vaisselle intégrable", methode:"forfait", fournisseur:"", ref:"", coutHT:480, prestataire:"", moHT:80 },
  { piece:"Cuisine", poste:"Électroménager", fourniture:"Micro-ondes encastrable", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:60 },

  // ── Petites fournitures ──
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Couverts (lot 6 pers)", methode:"forfait", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Vaisselle (lot 6 pers)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Verres (lot 12)", methode:"forfait", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Poêles + casseroles (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Couteaux de cuisine (bloc)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Ustensiles cuisine (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Planche à découper", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Bouilloire + grille-pain", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Cuisine", poste:"Petites fournitures", fourniture:"Machine à café", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // SALON
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Salon", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Salon", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Salon", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Salon", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Salon", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Salon", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Salon", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Salon", poste:"Sols", fourniture:"Parquet contrecollé chêne", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:28 },
  { piece:"Salon", poste:"Sols", fourniture:"Carrelage grès cérame (60x60)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Salon", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Salon", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Cloison Placo BA13 phonique (création)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:32 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Bandes résilientes sous rails", methode:"m²", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Isolant acoustique laine de roche", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Salon", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Salon", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Salon", poste:"Murs", fourniture:"Mur accent (peinture couleur / papier peint)", methode:"m²", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:20 },
  { piece:"Salon", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Salon", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Salon", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },
  { piece:"Salon", poste:"Plafonds", fourniture:"Faux plafond BA13 (isolation phonique)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },

  // ── Menuiseries extérieures ──
  { piece:"Salon", poste:"Menuiseries ext", fourniture:"Porte-fenêtre PVC DV 2 ventaux", methode:"forfait", fournisseur:"", ref:"", coutHT:780, prestataire:"", moHT:280 },
  { piece:"Salon", poste:"Menuiseries ext", fourniture:"Baie vitrée coulissante (2m)", methode:"forfait", fournisseur:"", ref:"", coutHT:1400, prestataire:"", moHT:400 },
  { piece:"Salon", poste:"Menuiseries ext", fourniture:"Volet roulant électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Salon", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Salon", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Salon", poste:"Électricité", fourniture:"Point lumineux plafonnier", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:60 },
  { piece:"Salon", poste:"Électricité", fourniture:"Spot encastré (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:45 },
  { piece:"Salon", poste:"Électricité", fourniture:"Interrupteur va-et-vient", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Salon", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Salon", poste:"Électricité", fourniture:"Prise RJ45 / TV / HDMI", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },
  { piece:"Salon", poste:"Électricité", fourniture:"Radiateur à inertie (1500W)", methode:"forfait", fournisseur:"", ref:"", coutHT:350, prestataire:"", moHT:120 },
  { piece:"Salon", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ── Mobilier & Décoration ──
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Canapé d'angle 4/5 places", methode:"forfait", fournisseur:"", ref:"", coutHT:900, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Table basse", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Tapis 200x300", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Luminaire sur pied / applique", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Étagères murales décoratives", methode:"forfait", fournisseur:"", ref:"", coutHT:100, prestataire:"", moHT:30 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Rideaux + tringle", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:30 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Coussins décoratifs (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Plantes + cache-pots", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Cadres + décorations murales", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Salon", poste:"Mobilier - Déco", fourniture:"Ampoules LED (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // SALLE TV
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // Pas de plomberie
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Salle TV", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Salle TV", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Salle TV", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Salle TV", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Salle TV", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Salle TV", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Salle TV", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Salle TV", poste:"Sols", fourniture:"Parquet contrecollé chêne", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:28 },
  { piece:"Salle TV", poste:"Sols", fourniture:"Carrelage grès cérame (60x60)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Salle TV", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Cloison Placo BA13 phonique (création)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:32 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Bandes résilientes sous rails", methode:"m²", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Isolant acoustique laine de roche", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Salle TV", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Salle TV", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Salle TV", poste:"Murs", fourniture:"Mur accent + boiseries déco", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:30 },
  { piece:"Salle TV", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Salle TV", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Salle TV", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },
  { piece:"Salle TV", poste:"Plafonds", fourniture:"Faux plafond BA13 (isolation phonique)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },

  // ── Menuiseries extérieures ──
  { piece:"Salle TV", poste:"Menuiseries ext", fourniture:"Fenêtre PVC DV 2 ventaux (120x120)", methode:"forfait", fournisseur:"", ref:"", coutHT:550, prestataire:"", moHT:220 },
  { piece:"Salle TV", poste:"Menuiseries ext", fourniture:"Volet roulant électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Salle TV", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Salle TV", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Salle TV", poste:"Électricité", fourniture:"Point lumineux plafonnier", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:60 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Spot encastré (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:45 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Interrupteur va-et-vient", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Prise TV + HDMI murale", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Prise RJ45 / fibre (data)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Radiateur à inertie (1000W)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  { piece:"Salle TV", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ── Mobilier & Décoration ──
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"TV 65 pouces 4K + fixation murale", methode:"forfait", fournisseur:"", ref:"", coutHT:700, prestataire:"", moHT:60 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Meuble TV bas suspendu", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Barre de son", methode:"forfait", fournisseur:"", ref:"", coutHT:200, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Fauteuils / canapé 3 places", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Tables d'appoint", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Chromecast / Apple TV", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Rideaux occultants + tringle", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:30 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Tapis", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },
  { piece:"Salle TV", poste:"Mobilier - Déco", fourniture:"Ampoules LED (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // SALLE À MANGER
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // Pas de plomberie
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Salle à manger", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Salle à manger", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Salle à manger", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Salle à manger", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Salle à manger", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Salle à manger", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Salle à manger", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Salle à manger", poste:"Sols", fourniture:"Parquet contrecollé chêne", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:28 },
  { piece:"Salle à manger", poste:"Sols", fourniture:"Carrelage grès cérame (60x60)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Salle à manger", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Cloison Placo BA13 phonique (création)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:32 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Bandes résilientes sous rails", methode:"m²", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Isolant acoustique laine de roche", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Salle à manger", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Salle à manger", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Salle à manger", poste:"Murs", fourniture:"Mur accent (peinture couleur / papier peint)", methode:"m²", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:20 },
  { piece:"Salle à manger", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Salle à manger", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Salle à manger", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },
  { piece:"Salle à manger", poste:"Plafonds", fourniture:"Faux plafond BA13", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },

  // ── Menuiseries extérieures ──
  { piece:"Salle à manger", poste:"Menuiseries ext", fourniture:"Porte-fenêtre PVC DV 2 ventaux", methode:"forfait", fournisseur:"", ref:"", coutHT:780, prestataire:"", moHT:280 },
  { piece:"Salle à manger", poste:"Menuiseries ext", fourniture:"Baie vitrée coulissante (2m)", methode:"forfait", fournisseur:"", ref:"", coutHT:1400, prestataire:"", moHT:400 },
  { piece:"Salle à manger", poste:"Menuiseries ext", fourniture:"Volet roulant électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Salle à manger", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Salle à manger", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Point lumineux plafonnier / lustre", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:60 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Spot encastré (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:45 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Interrupteur va-et-vient", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Prise RJ45 / TV / HDMI", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Radiateur à inertie (1000W)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  { piece:"Salle à manger", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ── Mobilier & Décoration ──
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Table à manger extensible (6-8 pers)", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Chaises × 6", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Banc", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Buffet / bahut", methode:"forfait", fournisseur:"", ref:"", coutHT:450, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Suspension luminaire (au-dessus table)", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:60 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Tapis sous table", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Miroir grand format", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:30 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Cadres + décorations", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Salle à manger", poste:"Mobilier - Déco", fourniture:"Ampoules LED (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // BUANDERIE
  // Corps de métier : plaquiste, carreleur, peintre, plombier, électricien
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Buanderie", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Buanderie", poste:"Démolition", fourniture:"Dépose équipements existants (LL/SL)", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:100 },
  { piece:"Buanderie", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Buanderie", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:15 },
  { piece:"Buanderie", poste:"Sols", fourniture:"Étanchéité sous carrelage (SPEC)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:15 },
  { piece:"Buanderie", poste:"Sols", fourniture:"Carrelage grès antidérapant (30x30)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:45 },
  { piece:"Buanderie", poste:"Sols", fourniture:"Sol vinyle LVT hydro", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:15 },
  { piece:"Buanderie", poste:"Sols", fourniture:"Siphon de sol (évacuation)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:80 },

  // ── Cloisons ──
  { piece:"Buanderie", poste:"Cloisons", fourniture:"Cloison Placo Hydrofuge BA13H (création)", methode:"m²", fournisseur:"", ref:"", coutHT:16, prestataire:"", moHT:30 },
  { piece:"Buanderie", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Buanderie", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Buanderie", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Buanderie", poste:"Murs", fourniture:"Peinture hydrofuge (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },
  { piece:"Buanderie", poste:"Murs", fourniture:"Faïence murale (zone humide)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:50 },

  // ── Plafonds ──
  { piece:"Buanderie", poste:"Plafonds", fourniture:"Peinture plafond hydrofuge", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },
  { piece:"Buanderie", poste:"Plafonds", fourniture:"Faux plafond hydrofuge (PVC ou BA13H)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:32 },

  // ── Menuiseries intérieures ──
  { piece:"Buanderie", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Buanderie", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Plomberie ──
  { piece:"Buanderie", poste:"Plomberie", fourniture:"Arrivée eau froide lave-linge", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:140 },
  { piece:"Buanderie", poste:"Plomberie", fourniture:"Évacuation lave-linge", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:140 },
  { piece:"Buanderie", poste:"Plomberie", fourniture:"Chauffe-eau 200L (fourniture + pose)", methode:"forfait", fournisseur:"", ref:"", coutHT:700, prestataire:"", moHT:300 },
  { piece:"Buanderie", poste:"Plomberie", fourniture:"Arrivée + évacuation chauffe-eau", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:160 },
  { piece:"Buanderie", poste:"Plomberie", fourniture:"Robinetterie eau froide (vanne d'arrêt)", methode:"forfait", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:40 },

  // ── Électricité ──
  { piece:"Buanderie", poste:"Électricité", fourniture:"Point lumineux étanche", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:65 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"Interrupteur", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"Circuit spécialisé lave-linge (20A)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:100 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"Circuit spécialisé sèche-linge (20A)", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:100 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"Évacuation air chaud sèche-linge", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:100 },
  { piece:"Buanderie", poste:"Électricité", fourniture:"VMC simple flux hygro (bouche)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:80 },

  // ── Mobilier ──
  { piece:"Buanderie", poste:"Mobilier", fourniture:"Étagères de rangement", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:40 },
  { piece:"Buanderie", poste:"Mobilier", fourniture:"Plan de travail / table repassage", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },

  // ── Électroménager ──
  { piece:"Buanderie", poste:"Électroménager", fourniture:"Lave-linge 8kg A+++", methode:"forfait", fournisseur:"", ref:"", coutHT:520, prestataire:"", moHT:80 },
  { piece:"Buanderie", poste:"Électroménager", fourniture:"Sèche-linge à condensation 8kg", methode:"forfait", fournisseur:"", ref:"", coutHT:480, prestataire:"", moHT:80 },
  { piece:"Buanderie", poste:"Électroménager", fourniture:"Fer à repasser vapeur", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Buanderie", poste:"Électroménager", fourniture:"Aspirateur balai électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // WC COMMUN
  // Corps de métier : plaquiste, carreleur, plombier, électricien
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"WC commun", poste:"Démolition", fourniture:"Dépose carrelage sol", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:18 },
  { piece:"WC commun", poste:"Démolition", fourniture:"Dépose faïence murale", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:22 },
  { piece:"WC commun", poste:"Démolition", fourniture:"Dépose WC + meuble vasque", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:150 },
  { piece:"WC commun", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"WC commun", poste:"Sols", fourniture:"Ragréage / préparation chape", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:15 },
  { piece:"WC commun", poste:"Sols", fourniture:"Étanchéité sous carrelage (SPEC)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:15 },
  { piece:"WC commun", poste:"Sols", fourniture:"Carrelage grès cérame (30x60)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:50 },

  // ── Cloisons ──
  { piece:"WC commun", poste:"Cloisons", fourniture:"Cloison Placo Hydrofuge BA13H (création)", methode:"m²", fournisseur:"", ref:"", coutHT:16, prestataire:"", moHT:30 },
  { piece:"WC commun", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"WC commun", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"WC commun", poste:"Cloisons", fourniture:"Coffrage bâti-support WC", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:120 },
  { piece:"WC commun", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"WC commun", poste:"Murs", fourniture:"Étanchéité murale (SPEC zone humide)", methode:"m²", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:15 },
  { piece:"WC commun", poste:"Murs", fourniture:"Faïence murale (20x60)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:50 },
  { piece:"WC commun", poste:"Murs", fourniture:"Peinture hydrofuge (zones non carrelées)", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"WC commun", poste:"Plafonds", fourniture:"Peinture plafond hydrofuge", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:20 },
  { piece:"WC commun", poste:"Plafonds", fourniture:"Faux plafond hydrofuge (PVC ou BA13H)", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:32 },

  // ── Menuiseries intérieures ──
  { piece:"WC commun", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"WC commun", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Plomberie ──
  { piece:"WC commun", poste:"Plomberie", fourniture:"Arrivée eau froide WC + vasque", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:180 },
  { piece:"WC commun", poste:"Plomberie", fourniture:"Évacuation WC", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:140 },
  { piece:"WC commun", poste:"Plomberie", fourniture:"Évacuation vasque (siphon + bonde)", methode:"forfait", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:40 },
  { piece:"WC commun", poste:"Plomberie", fourniture:"Robinetterie mitigeur vasque", methode:"forfait", fournisseur:"", ref:"", coutHT:70, prestataire:"", moHT:50 },

  // ── Équipements ──
  { piece:"WC commun", poste:"Équipements", fourniture:"WC suspendu + bâti-support", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:300 },
  { piece:"WC commun", poste:"Équipements", fourniture:"WC à poser (alternative éco)", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:180 },

  // ── Électricité ──
  { piece:"WC commun", poste:"Électricité", fourniture:"Point lumineux plafonnier étanche", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:65 },
  { piece:"WC commun", poste:"Électricité", fourniture:"Applique miroir / hublot", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:50 },
  { piece:"WC commun", poste:"Électricité", fourniture:"Interrupteur (zone hors eau)", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"WC commun", poste:"Électricité", fourniture:"VMC simple flux hygro (bouche)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:80 },

  // ── Mobilier ──
  { piece:"WC commun", poste:"Mobilier", fourniture:"Meuble vasque suspendu 50cm", methode:"forfait", fournisseur:"", ref:"", coutHT:250, prestataire:"", moHT:80 },
  { piece:"WC commun", poste:"Mobilier", fourniture:"Miroir LED", methode:"forfait", fournisseur:"", ref:"", coutHT:100, prestataire:"", moHT:30 },
  { piece:"WC commun", poste:"Mobilier", fourniture:"Étagère murale", methode:"forfait", fournisseur:"", ref:"", coutHT:50, prestataire:"", moHT:20 },
  { piece:"WC commun", poste:"Mobilier", fourniture:"Porte-papier + brosse WC + crochet", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:15 },

  // ═══════════════════════════════════════════════════════════════════
  // DÉGAGEMENTS / COULOIRS
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // Pas de plomberie
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Dégagements", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Dégagements", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Dégagements", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Dégagements", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Dégagements", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Dégagements", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Dégagements", poste:"Sols", fourniture:"Carrelage grès cérame (30x60)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:45 },
  { piece:"Dégagements", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Dégagements", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Dégagements", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Dégagements", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Dégagements", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Dégagements", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Dégagements", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Dégagements", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Dégagements", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Dégagements", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Dégagements", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },

  // ── Menuiseries intérieures ──
  { piece:"Dégagements", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Dégagements", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Dégagements", poste:"Électricité", fourniture:"Point lumineux / détecteur de présence", methode:"forfait", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:65 },
  { piece:"Dégagements", poste:"Électricité", fourniture:"Interrupteur / minuterie", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Dégagements", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Dégagements", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ═══════════════════════════════════════════════════════════════════
  // ENTRÉE
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // Pas de plomberie
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Entrée", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Entrée", poste:"Démolition", fourniture:"Dépose porte d'entrée existante", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:120 },
  { piece:"Entrée", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Entrée", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Entrée", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Entrée", poste:"Sols", fourniture:"Carrelage grès cérame (40x80)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Entrée", poste:"Sols", fourniture:"Sol vinyle LVT clipsable", methode:"m²", fournisseur:"", ref:"", coutHT:22, prestataire:"", moHT:15 },
  { piece:"Entrée", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons ──
  { piece:"Entrée", poste:"Cloisons", fourniture:"Cloison Placo BA13 standard (création)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:28 },
  { piece:"Entrée", poste:"Cloisons", fourniture:"Rails R48-R70-R90", methode:"m²", fournisseur:"", ref:"", coutHT:6, prestataire:"", moHT:0 },
  { piece:"Entrée", poste:"Cloisons", fourniture:"Montants M48-M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Entrée", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:3, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Entrée", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Entrée", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Entrée", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Entrée", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Entrée", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },

  // ── Menuiseries extérieures ──
  { piece:"Entrée", poste:"Menuiseries ext", fourniture:"Porte d'entrée blindée (isolation + sécurité)", methode:"forfait", fournisseur:"", ref:"", coutHT:1200, prestataire:"", moHT:400 },
  { piece:"Entrée", poste:"Menuiseries ext", fourniture:"Serrure connectée / à code", methode:"forfait", fournisseur:"", ref:"", coutHT:200, prestataire:"", moHT:80 },
  { piece:"Entrée", poste:"Menuiseries ext", fourniture:"Visiophone / interphone", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Entrée", poste:"Menuiseries int", fourniture:"Porte isoplane + bâti (pose incluse)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:140 },
  { piece:"Entrée", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Entrée", poste:"Électricité", fourniture:"Point lumineux / applique", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:60 },
  { piece:"Entrée", poste:"Électricité", fourniture:"Interrupteur va-et-vient", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Entrée", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Entrée", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ── Mobilier ──
  { piece:"Entrée", poste:"Mobilier", fourniture:"Meuble entrée (rangement chaussures)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:0 },
  { piece:"Entrée", poste:"Mobilier", fourniture:"Patère / portemanteau mural", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:20 },
  { piece:"Entrée", poste:"Mobilier", fourniture:"Miroir d'entrée", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:20 },
  { piece:"Entrée", poste:"Décoration", fourniture:"Tableau / numéro immeuble", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:0 },

  // ═══════════════════════════════════════════════════════════════════
  // GARAGE
  // Corps de métier : maçon, menuisier, électricien
  // Pas de plomberie, pas de mobilier déco
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Garage", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Garage", poste:"Démolition", fourniture:"Dépose porte de garage existante", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:150 },
  { piece:"Garage", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Garage", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Garage", poste:"Sols", fourniture:"Dalle béton (rattrapage de niveau)", methode:"m²", fournisseur:"", ref:"", coutHT:30, prestataire:"", moHT:35 },
  { piece:"Garage", poste:"Sols", fourniture:"Peinture époxy sol garage", methode:"m²", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:18 },
  { piece:"Garage", poste:"Sols", fourniture:"Carrelage grès cérame (40x40)", methode:"m²", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },

  // ── Murs ──
  { piece:"Garage", poste:"Murs", fourniture:"Peinture murs béton / enduit", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Garage", poste:"Murs", fourniture:"Isolation murs (doublage intérieur)", methode:"m²", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:28 },

  // ── Plafonds ──
  { piece:"Garage", poste:"Plafonds", fourniture:"Peinture plafond béton", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },

  // ── Menuiseries extérieures ──
  { piece:"Garage", poste:"Menuiseries ext", fourniture:"Porte de garage sectionnelle motorisée", methode:"forfait", fournisseur:"", ref:"", coutHT:1800, prestataire:"", moHT:500 },
  { piece:"Garage", poste:"Menuiseries ext", fourniture:"Porte de garage basculante", methode:"forfait", fournisseur:"", ref:"", coutHT:1100, prestataire:"", moHT:400 },

  // ── Menuiseries intérieures ──
  { piece:"Garage", poste:"Menuiseries int", fourniture:"Porte coupe-feu EI30 + bâti", methode:"forfait", fournisseur:"", ref:"", coutHT:500, prestataire:"", moHT:180 },
  { piece:"Garage", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Garage", poste:"Électricité", fourniture:"Tableau électrique secondaire", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:250 },
  { piece:"Garage", poste:"Électricité", fourniture:"Point lumineux / réglette LED", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:60 },
  { piece:"Garage", poste:"Électricité", fourniture:"Interrupteur", methode:"forfait", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:30 },
  { piece:"Garage", poste:"Électricité", fourniture:"Prises 2P+T (lot 4)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:100 },
  { piece:"Garage", poste:"Électricité", fourniture:"Prise recharge véhicule électrique (7kW)", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:400 },

  // ═══════════════════════════════════════════════════════════════════
  // SALLE SPÉCIALE
  // Salle de sport / jeux / musique / lecture
  // Corps de métier : plaquiste, carreleur, peintre, menuisier, électricien
  // Point clé : isolation acoustique renforcée systématique
  // Pas de plomberie (sauf option vestiaire)
  // ═══════════════════════════════════════════════════════════════════

  // ── Démolition ──
  { piece:"Salle spéciale", poste:"Démolition", fourniture:"Dépose revêtement sol existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:12 },
  { piece:"Salle spéciale", poste:"Démolition", fourniture:"Dépose revêtement mural existant", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:15 },
  { piece:"Salle spéciale", poste:"Démolition", fourniture:"Dépose cloison existante", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:20 },
  { piece:"Salle spéciale", poste:"Démolition", fourniture:"Dépose porte + encadrement", methode:"forfait", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:80 },
  { piece:"Salle spéciale", poste:"Démolition", fourniture:"Évacuation gravats (benne)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:0 },

  // ── Sols ──
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Ragréage / préparation support", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Sous-couche acoustique désolidarisante", methode:"m²", fournisseur:"", ref:"", coutHT:12, prestataire:"", moHT:8 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Dalles caoutchouc sport 20mm (fitness / jeux)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:15 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Dalles caoutchouc sport 30mm (musculation)", methode:"m²", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:15 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Parquet contrecollé chêne (lecture / musique)", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:28 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Sol vinyle LVT acoustique", methode:"m²", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:15 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Moquette épaisse (acoustique / lecture)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:12 },
  { piece:"Salle spéciale", poste:"Sols", fourniture:"Plinthes (ml)", methode:"m", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:6 },

  // ── Cloisons (isolation acoustique renforcée) ──
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Cloison Placo BA13 phonique double (création)", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:45 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Membrane masse lourde (renfort acoustique)", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:12 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Rails R70-R90 désolidarisés", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Montants M70-M90", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Bandes résilientes sous rails (anti-pont acoustique)", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Isolant acoustique laine de roche HD (haute densité)", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Cloisons", fourniture:"Fixations et accessoires", methode:"m²", fournisseur:"", ref:"", coutHT:4, prestataire:"", moHT:0 },

  // ── Murs ──
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Rebouchage / enduit de lissage", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:12 },
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Peinture acrylique mate (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:15 },
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Panneaux acoustiques muraux (mousse / tissu)", methode:"m²", fournisseur:"", ref:"", coutHT:45, prestataire:"", moHT:20 },
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Boiseries décoratives / lambris (lecture / musique)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:30 },
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Miroir mural grande surface (sport / danse)", methode:"m²", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:30 },
  { piece:"Salle spéciale", poste:"Murs", fourniture:"Toile de verre + peinture", methode:"m²", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:18 },

  // ── Plafonds ──
  { piece:"Salle spéciale", poste:"Plafonds", fourniture:"Rebouchage / enduit plafond", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:14 },
  { piece:"Salle spéciale", poste:"Plafonds", fourniture:"Faux plafond BA13 phonique désolidarisé", methode:"m²", fournisseur:"", ref:"", coutHT:28, prestataire:"", moHT:40 },
  { piece:"Salle spéciale", poste:"Plafonds", fourniture:"Panneaux acoustiques plafond (absorbants)", methode:"m²", fournisseur:"", ref:"", coutHT:50, prestataire:"", moHT:25 },
  { piece:"Salle spéciale", poste:"Plafonds", fourniture:"Peinture plafond (2 couches)", methode:"m²", fournisseur:"", ref:"", coutHT:7, prestataire:"", moHT:18 },

  // ── Menuiseries extérieures ──
  { piece:"Salle spéciale", poste:"Menuiseries ext", fourniture:"Fenêtre PVC DV acoustique (feuilleté)", methode:"forfait", fournisseur:"", ref:"", coutHT:650, prestataire:"", moHT:240 },
  { piece:"Salle spéciale", poste:"Menuiseries ext", fourniture:"Volet roulant électrique", methode:"forfait", fournisseur:"", ref:"", coutHT:320, prestataire:"", moHT:120 },

  // ── Menuiseries intérieures ──
  { piece:"Salle spéciale", poste:"Menuiseries int", fourniture:"Porte acoustique Rw≥40dB + bâti", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:200 },
  { piece:"Salle spéciale", poste:"Menuiseries int", fourniture:"Joint acoustique périphérique porte", methode:"forfait", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:20 },
  { piece:"Salle spéciale", poste:"Menuiseries int", fourniture:"Poignée de porte", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:20 },

  // ── Électricité ──
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Point lumineux plafonnier / spots encastrés", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:60 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Spot encastré (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:45 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Éclairage LED en bandeau (ambiance)", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:60 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Interrupteur va-et-vient + variateur", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:40 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Prise 2P+T (à l'unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:25 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Prise RJ45 / fibre (data)", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:40 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Prise TV + HDMI murale (jeux / fitness)", methode:"forfait", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:50 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Radiateur à inertie (1000W)", methode:"forfait", fournisseur:"", ref:"", coutHT:280, prestataire:"", moHT:120 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Climatisation réversible split (confort sport)", methode:"forfait", fournisseur:"", ref:"", coutHT:1100, prestataire:"", moHT:550 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"VMC simple flux hygro (bouche)", methode:"forfait", fournisseur:"", ref:"", coutHT:60, prestataire:"", moHT:80 },
  { piece:"Salle spéciale", poste:"Électricité", fourniture:"Détecteur de fumée DAAF", methode:"forfait", fournisseur:"", ref:"", coutHT:25, prestataire:"", moHT:20 },

  // ── Plomberie (optionnel : point d'eau / douche vestiaire) ──
  { piece:"Salle spéciale", poste:"Plomberie", fourniture:"Point d'eau (arrivée EF+EC + évacuation)", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:350 },
  { piece:"Salle spéciale", poste:"Plomberie", fourniture:"Évier / vasque de service", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:80 },
  { piece:"Salle spéciale", poste:"Plomberie", fourniture:"Robinetterie mitigeur", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:50 },

  // ── Mobilier & Équipements ──
  // Salle de sport
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Tapis de course", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Vélo elliptique / rameur", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Rack haltères + poids (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:500, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Barre de traction murale", methode:"forfait", fournisseur:"", ref:"", coutHT:150, prestataire:"", moHT:80 },
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Tapis de sol / de yoga (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements sport", fourniture:"Télé murale 55p + fixation (coaching vidéo)", methode:"forfait", fournisseur:"", ref:"", coutHT:500, prestataire:"", moHT:60 },
  // Salle de musique
  { piece:"Salle spéciale", poste:"Équipements musique", fourniture:"Pied de micro + câblage", methode:"forfait", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements musique", fourniture:"Diffuseurs acoustiques muraux", methode:"forfait", fournisseur:"", ref:"", coutHT:200, prestataire:"", moHT:40 },
  { piece:"Salle spéciale", poste:"Équipements musique", fourniture:"Prises audio XLR / jack encastrées", methode:"forfait", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:80 },
  // Salle de jeux
  { piece:"Salle spéciale", poste:"Équipements jeux", fourniture:"Table de ping-pong", methode:"forfait", fournisseur:"", ref:"", coutHT:400, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements jeux", fourniture:"Babyfoot", methode:"forfait", fournisseur:"", ref:"", coutHT:350, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements jeux", fourniture:"Billard", methode:"forfait", fournisseur:"", ref:"", coutHT:1200, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements jeux", fourniture:"Console gaming + écran 4K", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:0 },
  // Salle de lecture
  { piece:"Salle spéciale", poste:"Équipements lecture", fourniture:"Bibliothèque murale sur mesure", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:200 },
  { piece:"Salle spéciale", poste:"Équipements lecture", fourniture:"Fauteuils de lecture (lot 2)", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements lecture", fourniture:"Canapé lecture 2 places", methode:"forfait", fournisseur:"", ref:"", coutHT:500, prestataire:"", moHT:0 },
  { piece:"Salle spéciale", poste:"Équipements lecture", fourniture:"Luminaires lecture (lampadaire + appliques)", methode:"forfait", fournisseur:"", ref:"", coutHT:250, prestataire:"", moHT:40 },
  // Communs
  { piece:"Salle spéciale", poste:"Mobilier - Déco", fourniture:"Rideaux occultants acoustiques + tringle", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:30 },
  { piece:"Salle spéciale", poste:"Mobilier - Déco", fourniture:"Rangements muraux modulaires", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:60 },
  { piece:"Salle spéciale", poste:"Mobilier - Déco", fourniture:"Ampoules LED (lot)", methode:"forfait", fournisseur:"", ref:"", coutHT:20, prestataire:"", moHT:0 },
  
  // ═══════════════════════════════════════════════════════════════════
  // POSTES TRANSVERSAUX
  // Corps de métier : maçon, charpentier, couvreur, électricien, plombier
  // ═══════════════════════════════════════════════════════════════════

  // ── Gros œuvre ──
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Démolition cloison placo (dépose+évacuation)", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:25 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Démolition cloison brique / parpaing", methode:"m²", fournisseur:"", ref:"", coutHT:0, prestataire:"", moHT:45 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Ouverture mur porteur + IPN", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:3500 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Création cloison Placo BA13", methode:"m²", fournisseur:"", ref:"", coutHT:14, prestataire:"", moHT:30 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Reprise de fondations", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:4500 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Traitement humidité (injection résine)", methode:"forfait", fournisseur:"", ref:"", coutHT:1200, prestataire:"", moHT:2000 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Désamiantage (diagnostic + travaux)", methode:"forfait", fournisseur:"", ref:"", coutHT:2000, prestataire:"", moHT:3000 },
  { piece:"Postes transversaux", poste:"Gros œuvre", fourniture:"Benne à gravats 8m³", methode:"forfait", fournisseur:"", ref:"", coutHT:350, prestataire:"", moHT:0 },

  // ── Toiture / Charpente ──
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Réfection toiture complète (tuiles)", methode:"m²", fournisseur:"", ref:"", coutHT:80, prestataire:"", moHT:90 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Réfection toiture ardoise", methode:"m²", fournisseur:"", ref:"", coutHT:120, prestataire:"", moHT:110 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Réparation toiture partielle", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:1200 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Traitement / consolidation charpente", methode:"forfait", fournisseur:"", ref:"", coutHT:1000, prestataire:"", moHT:2500 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Nettoyage + hydrofuge toiture", methode:"m²", fournisseur:"", ref:"", coutHT:8, prestataire:"", moHT:12 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Gouttières PVC (ml)", methode:"m", fournisseur:"", ref:"", coutHT:12, prestataire:"", moHT:22 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Isolation combles soufflée", methode:"m²", fournisseur:"", ref:"", coutHT:18, prestataire:"", moHT:12 },
  { piece:"Postes transversaux", poste:"Toiture / Charpente", fourniture:"Fenêtre de toit Velux", methode:"forfait", fournisseur:"", ref:"", coutHT:800, prestataire:"", moHT:400 },

  // ── Façade ──
  { piece:"Postes transversaux", poste:"Façade", fourniture:"Ravalement enduit projeté", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:55 },
  { piece:"Postes transversaux", poste:"Façade", fourniture:"Peinture façade", methode:"m²", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:28 },
  { piece:"Postes transversaux", poste:"Façade", fourniture:"ITE (isolation thermique extérieure)", methode:"m²", fournisseur:"", ref:"", coutHT:70, prestataire:"", moHT:80 },
  { piece:"Postes transversaux", poste:"Façade", fourniture:"Nettoyage haute pression façade", methode:"m²", fournisseur:"", ref:"", coutHT:5, prestataire:"", moHT:10 },

  // ── Escaliers ──
  { piece:"Postes transversaux", poste:"Escaliers", fourniture:"Rénovation escalier béton (ragréage + peinture)", methode:"forfait", fournisseur:"", ref:"", coutHT:400, prestataire:"", moHT:1200 },
  { piece:"Postes transversaux", poste:"Escaliers", fourniture:"Rénovation escalier bois (ponçage + vitrification)", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:1000 },
  { piece:"Postes transversaux", poste:"Escaliers", fourniture:"Remplacement garde-corps / rampe", methode:"forfait", fournisseur:"", ref:"", coutHT:600, prestataire:"", moHT:800 },
  { piece:"Postes transversaux", poste:"Escaliers", fourniture:"Revêtement marches (vinyle / carrelage)", methode:"m²", fournisseur:"", ref:"", coutHT:35, prestataire:"", moHT:55 },

  // ── Électricité générale ──
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Tableau électrique TGBT principal", methode:"forfait", fournisseur:"", ref:"", coutHT:900, prestataire:"", moHT:700 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Mise à la terre + liaison équipotentielle", methode:"forfait", fournisseur:"", ref:"", coutHT:250, prestataire:"", moHT:350 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Câblage général (refonte complète)", methode:"forfait", fournisseur:"", ref:"", coutHT:1800, prestataire:"", moHT:3500 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Compteurs individuels par lot", methode:"forfait", fournisseur:"", ref:"", coutHT:180, prestataire:"", moHT:250 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Réseau VDI fibre + ethernet", methode:"forfait", fournisseur:"", ref:"", coutHT:500, prestataire:"", moHT:700 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Box internet partagée + switch réseau", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:80 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Interphone / visiophone central", methode:"forfait", fournisseur:"", ref:"", coutHT:350, prestataire:"", moHT:250 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Éclairage parties communes (détecteur)", methode:"forfait", fournisseur:"", ref:"", coutHT:300, prestataire:"", moHT:350 },
  { piece:"Postes transversaux", poste:"Électricité générale", fourniture:"Système alarme incendie SSI", methode:"forfait", fournisseur:"", ref:"", coutHT:1200, prestataire:"", moHT:600 },

  // ── Plomberie générale ──
  { piece:"Postes transversaux", poste:"Plomberie générale", fourniture:"Colonnes montantes (refonte)", methode:"forfait", fournisseur:"", ref:"", coutHT:1200, prestataire:"", moHT:2500 },
  { piece:"Postes transversaux", poste:"Plomberie générale", fourniture:"Compteurs eau individuels par lot", methode:"forfait", fournisseur:"", ref:"", coutHT:250, prestataire:"", moHT:350 },
  { piece:"Postes transversaux", poste:"Plomberie générale", fourniture:"Réseau évacuation général (EP + EU)", methode:"forfait", fournisseur:"", ref:"", coutHT:1000, prestataire:"", moHT:2000 },
  { piece:"Postes transversaux", poste:"Plomberie générale", fourniture:"Adoucisseur d'eau centralisé", methode:"forfait", fournisseur:"", ref:"", coutHT:700, prestataire:"", moHT:350 },
  { piece:"Postes transversaux", poste:"Plomberie générale", fourniture:"Fosse septique / raccordement égout", methode:"forfait", fournisseur:"", ref:"", coutHT:3000, prestataire:"", moHT:3000 },

  // ── Chauffage / VMC / Climatisation ──
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Chaudière gaz à condensation", methode:"forfait", fournisseur:"", ref:"", coutHT:2800, prestataire:"", moHT:1400 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Pompe à chaleur air/air (multi-split)", methode:"forfait", fournisseur:"", ref:"", coutHT:3500, prestataire:"", moHT:1800 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Pompe à chaleur air/eau", methode:"forfait", fournisseur:"", ref:"", coutHT:7500, prestataire:"", moHT:2800 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Plancher chauffant hydraulique", methode:"m²", fournisseur:"", ref:"", coutHT:40, prestataire:"", moHT:45 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Réseau de radiateurs (remplacement)", methode:"forfait", fournisseur:"", ref:"", coutHT:2500, prestataire:"", moHT:3000 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"VMC simple flux hygro (centrale)", methode:"forfait", fournisseur:"", ref:"", coutHT:450, prestataire:"", moHT:600 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"VMC double flux (centrale)", methode:"forfait", fournisseur:"", ref:"", coutHT:2800, prestataire:"", moHT:1600 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Climatisation réversible split (unité)", methode:"forfait", fournisseur:"", ref:"", coutHT:1100, prestataire:"", moHT:550 },
  { piece:"Postes transversaux", poste:"Chauffage / VMC / Clim", fourniture:"Gaines + réseaux aérauliques", methode:"forfait", fournisseur:"", ref:"", coutHT:900, prestataire:"", moHT:1400 },

  // ── Honoraires & Marges ──
  { piece:"Postes transversaux", poste:"Honoraires & Marges", fourniture:"Honoraires MOE (%)", methode:"%", fournisseur:"", ref:"", coutHT:10, prestataire:"", moHT:0 },
  { piece:"Postes transversaux", poste:"Honoraires & Marges", fourniture:"Imprévus (%)", methode:"%", fournisseur:"", ref:"", coutHT:15, prestataire:"", moHT:0 },
  { piece:"Postes transversaux", poste:"Honoraires & Marges", fourniture:"Assurance dommages-ouvrage", methode:"forfait", fournisseur:"", ref:"", coutHT:3500, prestataire:"", moHT:0 },
  { piece:"Postes transversaux", poste:"Honoraires & Marges", fourniture:"Bureau de contrôle (Socotec...)", methode:"forfait", fournisseur:"", ref:"", coutHT:2000, prestataire:"", moHT:0 },
  { piece:"Postes transversaux", poste:"Honoraires & Marges", fourniture:"Diagnostic DPE + amiante + plomb", methode:"forfait", fournisseur:"", ref:"", coutHT:400, prestataire:"", moHT:0 },

].map((p, i) => ({ ...p, id: i }));
