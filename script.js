// Multilingual content
const content = {
  en: {
    home: "Home",
    about: "About Me",
    services: "Services",
    contact: "Contact",
    welcome: "Welcome to Uno Dogs Tres",
    subtitle: "Professional Dog Training & Behavior Consultation",
    tagline: "Science-based training with compassion and empathy",
    viewServices: "View Services",
    bookNow: "Book Now"
  },
  de: {
    home: "Startseite",
    about: "Über Mich",
    services: "Dienstleistungen",
    contact: "Kontakt",
    welcome: "Willkommen bei Uno Dogs Tres",
    subtitle: "Professionelles Hundetraining & Verhaltensberatung",
    tagline: "Wissenschaftlich fundiertes Training mit Mitgefühl und Empathie",
    viewServices: "Dienstleistungen anzeigen",
    bookNow: "Jetzt buchen"
  },
  es: {
    home: "Inicio",
    about: "Sobre Mí",
    services: "Servicios",
    contact: "Contacto",
    welcome: "Bienvenido a Uno Dogs Tres",
    subtitle: "Entrenamiento Profesional de Perros & Consultoría de Comportamiento",
    tagline: "Entrenamiento basado en ciencia con compasión y empatía",
    viewServices: "Ver Servicios",
    bookNow: "Reservar Ahora"
  }
};

let currentLanguage = 'en';

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);
  location.reload();
}

function getTranslation(key) {
  return content[currentLanguage][key] || key;
}
