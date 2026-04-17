// src/config/restaurant.ts
// Fichier de configuration centralisé du restaurant.
// Toutes les valeurs sont surchargées par des variables d'environnement NEXT_PUBLIC_*.
// Pour configurer un nouveau restaurant, définissez ces variables dans votre .env.local

export const restaurantConfig = {
  name: process.env.NEXT_PUBLIC_RESTAURANT_NAME ?? "Planet Food",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://planet-food.example.com",

  // Contact
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  // Localisation
  address: process.env.NEXT_PUBLIC_RESTAURANT_ADDRESS ?? "[Adresse du restaurant]",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "https://maps.google.com",

  // Réseaux sociaux
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  tripadvisorUrl: process.env.NEXT_PUBLIC_TRIPADVISOR_URL ?? "https://www.tripadvisor.com",

  // Horaires (personnalisables)
  hours: {
    weekday: {
      lunch: process.env.NEXT_PUBLIC_HOURS_WEEKDAY_LUNCH ?? "12:00 - 14:00",
      dinner: process.env.NEXT_PUBLIC_HOURS_WEEKDAY_DINNER ?? "18:00 - 22:00",
    },
    weekend: {
      dinner: process.env.NEXT_PUBLIC_HOURS_WEEKEND_DINNER ?? "18:00 - 22:30",
    },
  },
};
