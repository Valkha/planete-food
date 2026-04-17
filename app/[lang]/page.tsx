import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { restaurantConfig } from "@/config/restaurant";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || 'fr';
  const name = restaurantConfig.name;

  if (lang === 'en') {
    return { title: `Home | ${name}` };
  } else if (lang === 'es') {
    return { title: `Inicio | ${name}` };
  }

  return { title: `Accueil | ${name}` };
}

export default function HomePage() {
  return <HomeClient />;
}
