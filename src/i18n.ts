import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        portfolio: "Portfolio",
        about: "About",
        process: "Process",
        pricing: "Pricing",
        initialize: "Initialize",
        initialize_project: "Initialize Project"
      },
      hero: {
        status: "STATUS: ACTIVE // Q1_2026",
        title_1: "ENGINEERING",
        title_2: "DIGITAL",
        title_3: "SYSTEMS.",
        subtitle: "WE ARCHITECT HIGH-PERFORMANCE DIGITAL INFRASTRUCTURE FOR GLOBAL SCALE, ROOTED IN WEST AFRICAN INNOVATION.",
        cta: "START_PROJECT"
      },
      services: {
        matrix: "Capabilities_Matrix",
        title_1: "ENGINEERING",
        title_2: "SOLUTIONS",
        title_3: "FOR COMPLEX SYSTEMS.",
        subtitle: "WE DEPLOY MULTIDISCIPLINARY TEAMS TO ARCHITECT, BUILD, AND SCALE CRITICAL DIGITAL INFRASTRUCTURE.",
        brand: "Brand Strategy",
        production: "Digital Production",
        web: "Web Engineering",
        experience: "Experience Design",
        fintech: "Fintech & Mobile",
        saas: "SaaS & Enterprise"
      },
      portfolio: {
        label: "Selected_Works",
        title: "SYSTEMS IN PRODUCTION.",
        view: "VIEW_PROJECT"
      },
      process: {
        label: "Execution_Protocol",
        title: "OUR METHODOLOGY.",
        phase_01: "Discovery & Audit",
        phase_02: "System Architecture",
        phase_03: "Engineering",
        phase_04: "Deployment"
      },
      pricing: {
        label: "Resource_Allocation",
        title: "SCALABLE PARTNERSHIPS.",
        monthly: "/MONTH",
        initialize: "Initialize_Plan"
      },
      footer: {
        newsletter: "SYSTEM_UPDATES",
        subscribe: "SUBSCRIBE",
        placeholder: "ENTER_EMAIL",
        rights: "ALL RIGHTS RESERVED.",
        location: "DESIGNED_IN_ACCRA // BUILT_FOR_THE_WORLD"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        services: "Services",
        portfolio: "Portfolio",
        about: "À Propos",
        process: "Processus",
        pricing: "Tarification",
        initialize: "Initialiser",
        initialize_project: "Initialiser le Projet"
      },
      hero: {
        status: "STATUT: ACTIF // T1_2026",
        title_1: "INGÉNIERIE",
        title_2: "SYSTÈMES",
        title_3: "NUMÉRIQUES.",
        subtitle: "NOUS CONCEVONS DES INFRASTRUCTURES NUMÉRIQUES DE HAUTE PERFORMANCE POUR UNE ÉCHELLE MONDIALE, ANCRÉES DANS L'INNOVATION OUEST-AFRICAINE.",
        cta: "DÉMARRER_PROJET"
      },
      services: {
        matrix: "Matrice_de_Capacités",
        title_1: "SOLUTIONS",
        title_2: "D'INGÉNIERIE",
        title_3: "POUR SYSTÈMES COMPLEXES.",
        subtitle: "NOUS DÉPLOYONS DES ÉQUIPES MULTIDISCIPLINAIRES POUR ARCHITECTURER, CONSTRUIRE ET ÉCHELONNER DES INFRASTRUCTURES NUMÉRIQUES CRITIQUES.",
        brand: "Stratégie de Marque",
        production: "Production Numérique",
        web: "Ingénierie Web",
        experience: "Design d'Expérience",
        fintech: "Fintech & Mobile",
        saas: "SaaS & Entreprise"
      },
      portfolio: {
        label: "Travaux_Sélectionnés",
        title: "SYSTÈMES EN PRODUCTION.",
        view: "VOIR_PROJET"
      },
      process: {
        label: "Protocole_d'Exécution",
        title: "NOTRE MÉTHODOLOGIE.",
        phase_01: "Découverte & Audit",
        phase_02: "Architecture Système",
        phase_03: "Ingénierie",
        phase_04: "Déploiement"
      },
      pricing: {
        label: "Allocation_de_Ressources",
        title: "PARTENARIATS ÉVOLUTIFS.",
        monthly: "/MOIS",
        initialize: "Initialiser_Plan"
      },
      footer: {
        newsletter: "MISES_À_JOUR_SYSTÈME",
        subscribe: "S'ABONNER",
        placeholder: "ENTRER_EMAIL",
        rights: "TOUS DROITS RÉSERVÉS.",
        location: "CONÇU_À_ACCRA // CONSTRUIT_POUR_LE_MONDE"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
