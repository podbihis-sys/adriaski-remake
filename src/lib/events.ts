export interface Event {
  slug: string;
  title: string;
  date: string;
  image: string;
  summary: string;
  body: string;
  contact?: string;
  pinned?: boolean;
}

export const events: Event[] = [
  {
    slug: "otvaramo-skijasku-sezonu-2026",
    title: "Otvaramo skijašku sezonu 2026",
    date: "30. prosinac 2025.",
    image: "/images/adriaski-staze-2026.jpg",
    summary: "Službeno otvaramo skijašku sezonu! U pogonu staza S i Dvosjed, lift dvosjed i četverosjed.",
    body: `U petak 2.1.2026. godine službeno otvaramo skijašku sezonu na Adria Ski i s veseljem dočekujemo prve skijaše i bordere ove zime!

U pogonu će biti staza S i staza Dvosjed, kao i lift dvosjed i lift četverosjed.

Staze su pripremljene, snijeg je spreman, a naša ekipa je tu kako bi vam osigurala siguran i odličan dan na planini.

Radno vrijeme || 9 do 16 sati

Pozovite prijatelje i vidimo se na stazi – neka sezona počne!`,
    pinned: true,
  },
  {
    slug: "docek-nove-godine",
    title: "Doček Nove godine",
    date: "27. prosinac 2024.",
    image: "/images/adriaski-docek-2025.jpg",
    summary: "Nezaboravan doček uz Romea Nikolića! Piće dobrodošlice, večera, nagrade i zdravica u ponoć!",
    body: `Nezaboravan doček Nove godine uz Romea Nikolića!

Rezervirajte svoje mjesto na vrijeme i dočekajte 2025. godinu u Hotelu Adria Ski!
Pripremili smo vam piće dobrodošlice, ukusnu večeru, bogate nagrade i zdravicu u ponoć!`,
    contact: "+387 34 275 100, recepcija@adriaski.net",
  },
  {
    slug: "adria-ski-cup-2024",
    title: 'Uskoro počinje turnir za male nogometaše „Adria Ski Cup 2024."',
    date: "5. kolovoz 2024.",
    image: "/images/adriaski-cup-2024.jpeg",
    summary: "Međunarodni turnir u nogometu za djecu od 9. do 11. kolovoza na Kupresu.",
    body: `Po prvi puta ove godine od 9. do 11. kolovoza na Kupresu u ŠRC Adria Ski održat će se međunarodni turnir u nogometu „Adria Ski Cup 2024." za djecu.

Organizator je udruga „Adria Cup" na čelu s predsjednikom udruge Markom Ćerdićem, nogometašem i kapetanom HNK Tomislav i Ivanom Raićem – Ićom, predsjednikom HNK Kupres 97 koji su željeli pokrenuti novu priču za mlade nogometaše.

„Ideja je krenula od nas nekolicine nogometnih entuzijasta koji želimo na Kupres dovesti jednu dobru priču. Kako bismo i oživjeli kupreški kraj u ovom periodu godine odlučili smo organizirati ovakav turnir", rekao je Ivan Raić Ića.

U realizaciju projekta krenulo se prije pola godine, a organizatori su zadovoljni odazivom.

Turnir će se igrati u tri kategorije: 2012, 2014 i 2015 godište, a očekuje se oko 1000 djece iz BiH, Hrvatske i Crne Gore koji će biti raspoređeni u više od 50 ekipa.

Organizatori pozivaju sve ljubitelje nogometa i zabave da se odazovu i podrže sve ove male nogometaše.`,
  },
  {
    slug: "obavijest-fis-natjecanje",
    title: "Obavijest zbog Fis natjecanja!",
    date: "22. siječanj 2024.",
    image: "/images/kupres-skijanje_59541773.jpg",
    summary: "Staza S neće raditi 23.01. zbog Fis natjecanja. Vuk staza neće raditi 24. i 25.01.",
    body: `Sutra 23.01. staza S neće raditi zbog Fis natjecanja, ali staza Vuk i staza dvosjeda i baby lift rade!

24.01. i 25.01. neće raditi Vuk staza iz istog razloga, ali staza S i dvosjed i baby lift će raditi.`,
  },
  {
    slug: "jednodnevni-izleti-iz-splita",
    title: "JEDNODNEVNI IZLETI IZ SPLITA",
    date: "12. siječanj 2024.",
    image: "/images/top-1-22.jpg",
    summary: "Jednodnevni izleti autobusom svake subote i nedjelje iz Splita do skijališta.",
    body: `Jednodnevni izleti autobusom svake subote i nedjelje!

Naš dugogodišnji partner Delminium travel i ove godine nudi Vam mogućnost izleta iz Splita do skijališta.

Za sve ljubitelje snijega, snježnih radosti i zimskog ugođaja, izleti autobusom visoke klase iz Splita subotom i nedjeljom dok traje zimska sezona.

JEDNODNEVNO PUTOVANJE: SPLIT – KUPRES – SPLIT
TERMINI PUTOVANJA: subotom i nedjeljom dok traje zimska sezona
OKUPLJANJE: SPLIT, autobusna stanica u Sukoišanskoj ulici od 6.15 sati
Polazak: 6.30 sati

PROGRAM IZLETA
6:30 – Polazak iz Splita
9:00 – Dolazak u Kupres, skijalište Čajuša (kod hotela Adria ski)
slobodno vrijeme
17:00 – Polazak iz Kupresa za Split
19:30 – Dolazak u Split

CIJENA ARANŽMANA NA OSNOVI MINIMALNO 40 PUTNIKA
- ODRASLI – 19 eura
- DJECA (0-10 godina) – 17 eura`,
  },
  {
    slug: "docek-nove-godine-2024",
    title: "Doček Nove godine 2024. godine",
    date: "25. studeni 2023.",
    image: "/images/romeo-nikolic-prvi-ples1.jpg",
    summary: "Doček Nove godine uz Romea Nikolića i bend Prvi Ples u Hotelu Adria Ski!",
    body: `DRAGI GOSTI!

KAO I SVAKE GODINE POZIVAMO VAS DA NAM SE PRIDRUŽITE I DA S NAMA U VESELJU I KROZ ZABAVU UĐETE U NOVU 2024. GODINU.

VEĆ ZNATE DA ZA VAS PRIPREMAMO BOGATU TRPEZU SA PROVJERENIM SPECIJALITETIMA.

UZ DOBRU GLAZBU ROMEA NIKOLIĆA I GRUPE PRVI PLES, DOČEKAJMO ZAJEDNO PRVO JUTRO NOVE GODINE!

SVE INFORMACIJE NA TELEFON +387 34 275 100 ILI NA INFO@ADRIASKI.NET`,
    contact: "+387 34 275 100, info@adriaski.net",
  },
  {
    slug: "docek-hotel-jezero-2024",
    title: "Dočekajte Novu 2024. godinu u hotelu Jezero",
    date: "25. studeni 2023.",
    image: "/images/toni-pecic-1.jpg",
    summary: "Doček Nove godine u Hotelu Jezero uz Tonija Pecića.",
    body: `DRAGI GOSTI!

POZIVAMO VAS DA NAM SE PRIDRUŽITE I DA S NAMA U VESELJU I KROZ ZABAVU UĐETE U NOVU 2024. GODINU.

ZA VAS PRIPREMAMO BOGATU TRPEZU SA PROVJERENIM SPECIJALITETIMA.

UZ DOBRU GLAZBU ZADUŽEN JE TONI PECIĆ, ZAJEDNO U PRVO JUTRO NOVE GODINE!

SVE INFORMACIJE NA TELEFON ILI NA INFO@ADRIASKI.NET`,
    contact: "info@adriaski.net",
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export async function fetchEvents(): Promise<Event[]> {
  try {
    const res = await fetch('/api/events', { next: { revalidate: 60 } });
    if (res.ok) return res.json();
  } catch {
    // fallback to local
  }
  return events;
}
