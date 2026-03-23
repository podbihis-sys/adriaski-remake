const BASE_URL = "https://adriaski.net";

interface PageMeta {
  title: string;
  description: string;
  image?: string;
}

type LocaleKey = "hr" | "en" | "de" | "it";

const meta: Record<string, Record<LocaleKey, PageMeta>> = {
  "": {
    hr: { title: "Hotel Adria Ski | Premium Ski & Wellness Resort | Kupres, BiH", description: "Hotel Adria Ski u Kupresu nudi premium smještaj, skijalište, wellness, bazen i restoran. Idealna destinacija za zimski i ljetni odmor.", image: "/images/headerAdriaSki.jpg" },
    en: { title: "Hotel Adria Ski | Premium Ski & Wellness Resort | Kupres, BiH", description: "Hotel Adria Ski in Kupres offers premium accommodation, ski resort, wellness, pool and restaurant. The ideal destination for winter and summer holidays.", image: "/images/headerAdriaSki.jpg" },
    de: { title: "Hotel Adria Ski | Premium Ski- & Wellness-Resort | Kupres, BiH", description: "Hotel Adria Ski in Kupres bietet Premium-Unterkunft, Skigebiet, Wellness, Pool und Restaurant. Ideales Ziel für Winter- und Sommerurlaub.", image: "/images/headerAdriaSki.jpg" },
    it: { title: "Hotel Adria Ski | Resort Sci & Wellness Premium | Kupres, BiH", description: "Hotel Adria Ski a Kupres offre alloggi premium, stazione sciistica, wellness, piscina e ristorante. Destinazione ideale per vacanze invernali e estive.", image: "/images/headerAdriaSki.jpg" },
  },
  "hotel-adria-ski": {
    hr: { title: "Hotel Adria Ski | Smještaj u Kupresu", description: "Udobne sobe i apartmani u hotelu Adria Ski na Kupresu. Premium smještaj uz skijalište.", image: "/images/hotel1.jpg" },
    en: { title: "Hotel Adria Ski | Accommodation in Kupres", description: "Comfortable rooms and apartments at Hotel Adria Ski in Kupres. Premium accommodation next to the ski resort.", image: "/images/hotel1.jpg" },
    de: { title: "Hotel Adria Ski | Unterkunft in Kupres", description: "Komfortable Zimmer und Apartments im Hotel Adria Ski in Kupres. Premium-Unterkunft direkt am Skigebiet.", image: "/images/hotel1.jpg" },
    it: { title: "Hotel Adria Ski | Alloggio a Kupres", description: "Camere e appartamenti confortevoli all'Hotel Adria Ski a Kupres. Alloggio premium vicino alla stazione sciistica.", image: "/images/hotel1.jpg" },
  },
  "motel-tikvice": {
    hr: { title: "Motel Tikvice | Kupres", description: "Motel Tikvice u Kupresu — pristupačan smještaj uz prirodu i skijališta.", image: "/images/headerTikvice.jpg" },
    en: { title: "Motel Tikvice | Kupres", description: "Motel Tikvice in Kupres — affordable accommodation surrounded by nature and ski slopes.", image: "/images/headerTikvice.jpg" },
    de: { title: "Motel Tikvice | Kupres", description: "Motel Tikvice in Kupres — erschwingliche Unterkunft inmitten der Natur und Skipisten.", image: "/images/headerTikvice.jpg" },
    it: { title: "Motel Tikvice | Kupres", description: "Motel Tikvice a Kupres — alloggio conveniente circondato dalla natura e dalle piste da sci.", image: "/images/headerTikvice.jpg" },
  },
  "skijalista": {
    hr: { title: "Skijalište Kupres | Adria Ski", description: "Preko 13 km staza, 5 ski liftova i topovi za snijeg. Skijalište na Kupresu za cijelu obitelj.", image: "/images/adriaski-staze-2026.jpg" },
    en: { title: "Kupres Ski Resort | Adria Ski", description: "Over 13 km of slopes, 5 ski lifts and snow cannons. Ski resort in Kupres for the whole family.", image: "/images/adriaski-staze-2026.jpg" },
    de: { title: "Skigebiet Kupres | Adria Ski", description: "Über 13 km Pisten, 5 Skilifte und Schneekanonen. Skigebiet in Kupres für die ganze Familie.", image: "/images/adriaski-staze-2026.jpg" },
    it: { title: "Stazione Sciistica Kupres | Adria Ski", description: "Oltre 13 km di piste, 5 impianti di risalita e cannoni da neve. Stazione sciistica a Kupres per tutta la famiglia.", image: "/images/adriaski-staze-2026.jpg" },
  },
  "skola-skijanja": {
    hr: { title: "Škola skijanja | Adria Ski Kupres", description: "Profesionalna škola skijanja za početnike i napredne skijaše na Kupresu.", image: "/images/headerSkiSkola.jpg" },
    en: { title: "Ski School | Adria Ski Kupres", description: "Professional ski school for beginners and advanced skiers in Kupres.", image: "/images/headerSkiSkola.jpg" },
    de: { title: "Skischule | Adria Ski Kupres", description: "Professionelle Skischule für Anfänger und Fortgeschrittene in Kupres.", image: "/images/headerSkiSkola.jpg" },
    it: { title: "Scuola di sci | Adria Ski Kupres", description: "Scuola di sci professionale per principianti e sciatori avanzati a Kupres.", image: "/images/headerSkiSkola.jpg" },
  },
  "bazen": {
    hr: { title: "Bazen | Hotel Adria Ski Kupres", description: "Unutarnji bazen od 25 metara u hotelu Adria Ski. Wellness i opuštanje u Kupresu.", image: "/images/headerBazen.jpg" },
    en: { title: "Pool | Hotel Adria Ski Kupres", description: "25-meter indoor pool at Hotel Adria Ski. Wellness and relaxation in Kupres.", image: "/images/headerBazen.jpg" },
    de: { title: "Schwimmbad | Hotel Adria Ski Kupres", description: "25-Meter-Hallenbad im Hotel Adria Ski. Wellness und Entspannung in Kupres.", image: "/images/headerBazen.jpg" },
    it: { title: "Piscina | Hotel Adria Ski Kupres", description: "Piscina coperta di 25 metri all'Hotel Adria Ski. Wellness e relax a Kupres.", image: "/images/headerBazen.jpg" },
  },
  "fitness": {
    hr: { title: "Fitness | Hotel Adria Ski Kupres", description: "Moderna fitness dvorana u hotelu Adria Ski na Kupresu.", image: "/images/headerFitness.jpg" },
    en: { title: "Fitness | Hotel Adria Ski Kupres", description: "Modern fitness center at Hotel Adria Ski in Kupres.", image: "/images/headerFitness.jpg" },
    de: { title: "Fitness | Hotel Adria Ski Kupres", description: "Modernes Fitnesscenter im Hotel Adria Ski in Kupres.", image: "/images/headerFitness.jpg" },
    it: { title: "Fitness | Hotel Adria Ski Kupres", description: "Centro fitness moderno all'Hotel Adria Ski a Kupres.", image: "/images/headerFitness.jpg" },
  },
  "gastro-ponuda": {
    hr: { title: "Gastro ponuda | Hotel Adria Ski", description: "Bogata gastronomska ponuda u hotelu Adria Ski — domaća i internacionalna kuhinja.", image: "/images/headerGastro.jpg" },
    en: { title: "Gastro Offer | Hotel Adria Ski", description: "Rich gastronomic offer at Hotel Adria Ski — local and international cuisine.", image: "/images/headerGastro.jpg" },
    de: { title: "Gastro-Angebot | Hotel Adria Ski", description: "Reichhaltiges Gastronomie-Angebot im Hotel Adria Ski — heimische und internationale Küche.", image: "/images/headerGastro.jpg" },
    it: { title: "Offerta Gastronomica | Hotel Adria Ski", description: "Ricca offerta gastronomica all'Hotel Adria Ski — cucina locale e internazionale.", image: "/images/headerGastro.jpg" },
  },
  "restoran-ognjista": {
    hr: { title: "Restoran Ognjišta | Hotel Adria Ski", description: "Restoran Ognjišta — tradicionalna bosanska kuhinja u rustikalnom ambijentu.", image: "/images/headerOgnjista.jpg" },
    en: { title: "Restaurant Ognjišta | Hotel Adria Ski", description: "Restaurant Ognjišta — traditional Bosnian cuisine in a rustic setting.", image: "/images/headerOgnjista.jpg" },
    de: { title: "Restaurant Ognjišta | Hotel Adria Ski", description: "Restaurant Ognjišta — traditionelle bosnische Küche in rustikalem Ambiente.", image: "/images/headerOgnjista.jpg" },
    it: { title: "Ristorante Ognjišta | Hotel Adria Ski", description: "Ristorante Ognjišta — cucina tradizionale bosniaca in un ambiente rustico.", image: "/images/headerOgnjista.jpg" },
  },
  "svadbeni-salon": {
    hr: { title: "Svadbeni salon | Hotel Adria Ski", description: "Elegantni svadbeni salon za do 500 gostiju u hotelu Adria Ski.", image: "/images/headerSvadba.jpg" },
    en: { title: "Wedding Hall | Hotel Adria Ski", description: "Elegant wedding hall for up to 500 guests at Hotel Adria Ski.", image: "/images/headerSvadba.jpg" },
    de: { title: "Hochzeitssaal | Hotel Adria Ski", description: "Eleganter Hochzeitssaal für bis zu 500 Gäste im Hotel Adria Ski.", image: "/images/headerSvadba.jpg" },
    it: { title: "Salone matrimoni | Hotel Adria Ski", description: "Elegante salone matrimoni per fino a 500 ospiti all'Hotel Adria Ski.", image: "/images/headerSvadba.jpg" },
  },
  "sportske-pripreme": {
    hr: { title: "Sportske pripreme | Hotel Adria Ski", description: "Profesionalni uvjeti za sportske pripreme na 1200 m nadmorske visine u Kupresu.", image: "/images/headerSportskePripreme.jpg" },
    en: { title: "Sports Training Camps | Hotel Adria Ski", description: "Professional conditions for sports training at 1200m altitude in Kupres.", image: "/images/headerSportskePripreme.jpg" },
    de: { title: "Sportliche Vorbereitungen | Hotel Adria Ski", description: "Professionelle Bedingungen für Sportvorbereitungen auf 1200m Höhe in Kupres.", image: "/images/headerSportskePripreme.jpg" },
    it: { title: "Preparazione sportiva | Hotel Adria Ski", description: "Condizioni professionali per la preparazione sportiva a 1200m di altitudine a Kupres.", image: "/images/headerSportskePripreme.jpg" },
  },
  "seminari": {
    hr: { title: "Seminari i konferencije | Hotel Adria Ski", description: "Moderna konferencijska dvorana za seminare, team-building i korporativne događaje.", image: "/images/headerSeminari.jpg" },
    en: { title: "Seminars & Conferences | Hotel Adria Ski", description: "Modern conference hall for seminars, team-building and corporate events.", image: "/images/headerSeminari.jpg" },
    de: { title: "Seminare & Konferenzen | Hotel Adria Ski", description: "Moderner Konferenzsaal für Seminare, Teambuilding und Firmenveranstaltungen.", image: "/images/headerSeminari.jpg" },
    it: { title: "Seminari e conferenze | Hotel Adria Ski", description: "Moderna sala conferenze per seminari, team-building e eventi aziendali.", image: "/images/headerSeminari.jpg" },
  },
  "brdski-biciklizam": {
    hr: { title: "Brdski biciklizam | Kupres", description: "Mountain bike staze na Kupresu — avantura za ljubitelje biciklizma.", image: "/images/headerBiciklizam.jpg" },
    en: { title: "Mountain Biking | Kupres", description: "Mountain bike trails in Kupres — adventure for cycling enthusiasts.", image: "/images/headerBiciklizam.jpg" },
    de: { title: "Mountainbiking | Kupres", description: "Mountainbike-Strecken in Kupres — Abenteuer für Radsportbegeisterte.", image: "/images/headerBiciklizam.jpg" },
    it: { title: "Mountain Bike | Kupres", description: "Percorsi di mountain bike a Kupres — avventura per gli appassionati di ciclismo.", image: "/images/headerBiciklizam.jpg" },
  },
  "planinarenje": {
    hr: { title: "Planinarenje | Kupres", description: "Planinarenje na Kupresu — staze kroz netaknutu prirodu Bosne i Hercegovine.", image: "/images/headerPlaninarenje.jpg" },
    en: { title: "Hiking | Kupres", description: "Hiking in Kupres — trails through the untouched nature of Bosnia and Herzegovina.", image: "/images/headerPlaninarenje.jpg" },
    de: { title: "Wandern | Kupres", description: "Wandern in Kupres — Wege durch die unberührte Natur Bosniens und Herzegowinas.", image: "/images/headerPlaninarenje.jpg" },
    it: { title: "Escursionismo | Kupres", description: "Escursionismo a Kupres — sentieri nella natura incontaminata della Bosnia ed Erzegovina.", image: "/images/headerPlaninarenje.jpg" },
  },
  "ramsko-jezero": {
    hr: { title: "Ramsko jezero | Kupres", description: "Izleti na Ramsko jezero — vožnje brodom, ribolov i kupanje.", image: "/images/headerRamskoJezero.jpg" },
    en: { title: "Rama Lake | Kupres", description: "Trips to Rama Lake — boat rides, fishing and swimming.", image: "/images/headerRamskoJezero.jpg" },
    de: { title: "Rama-See | Kupres", description: "Ausflüge zum Rama-See — Bootsfahrten, Angeln und Schwimmen.", image: "/images/headerRamskoJezero.jpg" },
    it: { title: "Lago di Rama | Kupres", description: "Gite al Lago di Rama — giri in barca, pesca e nuoto.", image: "/images/headerRamskoJezero.jpg" },
  },
  "jahanje": {
    hr: { title: "Jahanje | Kupres", description: "Jahanje na kupreškim livadama — avantura za sve uzraste.", image: "/images/headerJahanje.jpg" },
    en: { title: "Horse Riding | Kupres", description: "Horse riding on the meadows of Kupres — adventure for all ages.", image: "/images/headerJahanje.jpg" },
    de: { title: "Reiten | Kupres", description: "Reiten auf den Wiesen von Kupres — Abenteuer für jedes Alter.", image: "/images/headerJahanje.jpg" },
    it: { title: "Equitazione | Kupres", description: "Equitazione sui prati di Kupres — avventura per tutte le età.", image: "/images/headerJahanje.jpg" },
  },
  "enduro-turizam": {
    hr: { title: "Enduro turizam | Kupres", description: "Enduro staze na Kupresu — off-road avantura za motocikliste.", image: "/images/headerEnduro.jpg" },
    en: { title: "Enduro Tourism | Kupres", description: "Enduro trails in Kupres — off-road adventure for motorcyclists.", image: "/images/headerEnduro.jpg" },
    de: { title: "Enduro-Tourismus | Kupres", description: "Enduro-Strecken in Kupres — Offroad-Abenteuer für Motorradfahrer.", image: "/images/headerEnduro.jpg" },
    it: { title: "Enduro Turismo | Kupres", description: "Percorsi enduro a Kupres — avventura fuoristrada per motociclisti.", image: "/images/headerEnduro.jpg" },
  },
  "kamera-live": {
    hr: { title: "Kamera Live | Adria Ski Kupres", description: "Live kamere sa skijališta i hotela Adria Ski u Kupresu.", image: "/images/headerKamera.jpg" },
    en: { title: "Live Camera | Adria Ski Kupres", description: "Live cameras from the ski resort and Hotel Adria Ski in Kupres.", image: "/images/headerKamera.jpg" },
    de: { title: "Live-Kamera | Adria Ski Kupres", description: "Live-Kameras vom Skigebiet und Hotel Adria Ski in Kupres.", image: "/images/headerKamera.jpg" },
    it: { title: "Camera Live | Adria Ski Kupres", description: "Telecamere live dalla stazione sciistica e dall'Hotel Adria Ski a Kupres.", image: "/images/headerKamera.jpg" },
  },
  "cjenik": {
    hr: { title: "Cjenik | Hotel Adria Ski Kupres", description: "Cijene smještaja, ski karata i usluga u hotelu Adria Ski.", image: "/images/headerCjenik.jpg" },
    en: { title: "Pricing | Hotel Adria Ski Kupres", description: "Prices for accommodation, ski passes and services at Hotel Adria Ski.", image: "/images/headerCjenik.jpg" },
    de: { title: "Preise | Hotel Adria Ski Kupres", description: "Preise für Unterkunft, Skipässe und Dienstleistungen im Hotel Adria Ski.", image: "/images/headerCjenik.jpg" },
    it: { title: "Prezzi | Hotel Adria Ski Kupres", description: "Prezzi per alloggio, skipass e servizi all'Hotel Adria Ski.", image: "/images/headerCjenik.jpg" },
  },
  "kontakt": {
    hr: { title: "Kontakt | Hotel Adria Ski Kupres", description: "Kontaktirajte Hotel Adria Ski — adresa, telefon, e-mail i obrazac za upit.", image: "/images/headerRecepcija.jpg" },
    en: { title: "Contact | Hotel Adria Ski Kupres", description: "Contact Hotel Adria Ski — address, phone, email and inquiry form.", image: "/images/headerRecepcija.jpg" },
    de: { title: "Kontakt | Hotel Adria Ski Kupres", description: "Kontaktieren Sie Hotel Adria Ski — Adresse, Telefon, E-Mail und Anfrageformular.", image: "/images/headerRecepcija.jpg" },
    it: { title: "Contatto | Hotel Adria Ski Kupres", description: "Contatta l'Hotel Adria Ski — indirizzo, telefono, e-mail e modulo di richiesta.", image: "/images/headerRecepcija.jpg" },
  },
  "dogadanja": {
    hr: { title: "Događanja | Hotel Adria Ski Kupres", description: "Aktualna događanja, turniri i proslave u hotelu Adria Ski.", image: "/images/adriaski-staze-2026.jpg" },
    en: { title: "Events | Hotel Adria Ski Kupres", description: "Current events, tournaments and celebrations at Hotel Adria Ski.", image: "/images/adriaski-staze-2026.jpg" },
    de: { title: "Veranstaltungen | Hotel Adria Ski Kupres", description: "Aktuelle Veranstaltungen, Turniere und Feiern im Hotel Adria Ski.", image: "/images/adriaski-staze-2026.jpg" },
    it: { title: "Eventi | Hotel Adria Ski Kupres", description: "Eventi attuali, tornei e celebrazioni all'Hotel Adria Ski.", image: "/images/adriaski-staze-2026.jpg" },
  },
};

const localeMap: Record<string, string> = {
  hr: "bs_BA",
  en: "en_US",
  de: "de_DE",
  it: "it_IT",
};

export function getPageMetadata(slug: string, locale: string) {
  const localeKey = (locale as LocaleKey) || "hr";
  const pageMeta = meta[slug]?.[localeKey] || meta[""]?.[localeKey] || meta[""]["hr"];
  const path = slug ? `/${slug}` : "";

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      type: "website" as const,
      locale: localeMap[locale] || "bs_BA",
      siteName: "Hotel Adria Ski",
      url: `${BASE_URL}/${locale}${path}`,
      images: pageMeta.image
        ? [{ url: `${BASE_URL}${pageMeta.image}`, width: 1200, height: 630, alt: pageMeta.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageMeta.title,
      description: pageMeta.description,
      images: pageMeta.image ? [`${BASE_URL}${pageMeta.image}`] : undefined,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}${path}`,
      languages: Object.fromEntries(
        (["hr", "en", "de", "it"] as const).map((l) => [l, `${BASE_URL}/${l}${path}`])
      ),
    },
  };
}
