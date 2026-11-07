// Questionnaires de demande de devis : un par univers. Chaque réponse arrive dans Netlify Forms
// (formulaire « nom »), avec une notification par e-mail à l'agence.

export type Question =
  | { type: 'choix'; nom: string; question: string; aide?: string; options: string[] }
  | { type: 'multi'; nom: string; question: string; aide?: string; options: string[] }
  | { type: 'texte'; question: string; aide?: string; champs: { nom: string; label: string; requis?: boolean; placeholder?: string }[] };

export type Questionnaire = { nom: string; titre: string; intro: string; sujet: string; questions: Question[] };

export const QUESTIONNAIRES = {
  particuliers: {
    nom: 'devis-particuliers',
    sujet: 'particuliers',
    titre: 'Votre devis en 1 minute',
    intro: 'Quatre questions, puis un conseiller vous rappelle avec une proposition.',
    questions: [
      { type: 'choix', nom: 'besoin', question: 'Que souhaitez-vous assurer ?', options: ['Ma voiture', 'Mon logement', 'Ma santé', 'Mes revenus et ma famille (prévoyance)', 'Mon prêt immobilier', 'Faire le point sur tous mes contrats'] },
      { type: 'choix', nom: 'logement', question: 'Pour votre logement, vous êtes…', options: ['Propriétaire occupant', 'Locataire', 'Propriétaire bailleur', 'Hébergé ou autre'] },
      { type: 'choix', nom: 'echeance', question: 'Quand votre contrat actuel arrive-t-il à échéance ?', aide: 'Après un an de contrat, la plupart des assurances auto et habitation se résilient à tout moment.', options: ['Dans moins d’un mois', 'Dans 1 à 3 mois', 'Dans plus de 3 mois', 'Je n’ai pas de contrat'] },
      { type: 'texte', question: 'Où habitez-vous ?', champs: [{ nom: 'commune', label: 'Commune', requis: true, placeholder: 'Narbonne' }] },
    ],
  },
  patrimoine: {
    nom: 'bilan-patrimoine',
    sujet: 'epargne-retraite',
    titre: 'Votre bilan patrimonial',
    intro: 'Quelques questions pour préparer votre rendez-vous avec un agent général.',
    questions: [
      { type: 'choix', nom: 'objectif', question: 'Quel est votre objectif principal ?', options: ['Faire fructifier mon épargne', 'Préparer ma retraite', 'Réduire mes impôts', 'Protéger mes proches', 'Préparer la transmission', 'Faire un bilan complet'] },
      { type: 'choix', nom: 'situation', question: 'Vous êtes…', options: ['Salarié', 'Chef d’entreprise ou indépendant', 'Profession libérale', 'Retraité'] },
      { type: 'choix', nom: 'montant', question: 'Quel montant envisagez-vous de placer ?', options: ['Moins de 10 000 €', '10 000 à 50 000 €', '50 000 à 150 000 €', 'Plus de 150 000 €', 'Des versements réguliers', 'Je préfère en parler'] },
      { type: 'choix', nom: 'horizon', question: 'Dans combien de temps aurez-vous besoin de cet argent ?', options: ['Moins de 3 ans', '3 à 8 ans', 'Plus de 8 ans', 'À la retraite'] },
    ],
  },
  entreprises: {
    nom: 'devis-entreprises',
    sujet: 'entreprises',
    titre: 'Faites auditer vos contrats',
    intro: 'Décrivez votre entreprise en une minute : nous revenons vers vous avec une première analyse.',
    questions: [
      { type: 'choix', nom: 'secteur', question: 'Votre secteur d’activité', options: ['Viticulture et négoce', 'Artisan, bâtiment', 'Commerce, restauration', 'Transport, logistique', 'Profession libérale', 'Autre activité'] },
      { type: 'choix', nom: 'effectif', question: 'Combien de salariés ?', options: ['Aucun', '1 à 5', '6 à 20', '21 à 50', 'Plus de 50'] },
      { type: 'multi', nom: 'besoins', question: 'Que souhaitez-vous assurer ?', aide: 'Plusieurs réponses possibles.', options: ['Locaux, matériel, stock', 'Responsabilité civile', 'Décennale', 'Véhicules, flotte', 'Santé et prévoyance des salariés', 'Protection du dirigeant', 'Tout revoir'] },
      { type: 'texte', question: 'Votre entreprise', champs: [{ nom: 'entreprise', label: 'Nom de l’entreprise', requis: true }, { nom: 'commune', label: 'Commune', requis: true, placeholder: 'Narbonne' }] },
    ],
  },
  passion: {
    nom: 'devis-passion',
    sujet: 'passion',
    titre: 'Assurez votre passion',
    intro: 'Quatre questions, puis un conseiller vous rappelle avec une proposition adaptée.',
    questions: [
      { type: 'choix', nom: 'vehicule', question: 'Que souhaitez-vous assurer ?', options: ['Voiture de collection', 'Camping-car ou van', 'Moto ou scooter', 'Bateau', 'Trottinette ou vélo électrique'] },
      { type: 'texte', question: 'Parlez-nous de lui', champs: [{ nom: 'modele', label: 'Marque et modèle', requis: true }, { nom: 'annee', label: 'Année', placeholder: '1972' }] },
      { type: 'choix', nom: 'usage', question: 'Comment l’utilisez-vous ?', options: ['Sorties occasionnelles', 'Régulièrement', 'Au quotidien', 'Longs voyages'] },
      { type: 'choix', nom: 'valeur', question: 'Sa valeur approximative', options: ['Moins de 5 000 €', '5 000 à 20 000 €', '20 000 à 50 000 €', 'Plus de 50 000 €'] },
    ],
  },
} satisfies Record<string, Questionnaire>;
