"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, MapPin, Phone, Mountain, Clock, Snowflake, Thermometer, Wind, Camera } from "lucide-react";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface CameraItem {
  name: string;
  description: string;
  url: string;
  active: boolean;
  visible: boolean;
}

const defaultCameras: CameraItem[] = [
  { name: "Hotel Adria Ski", description: "Pogled na hotel i podnožje staza", url: "https://g0.ipcamlive.com/player/player.php?alias=adriaski", active: false, visible: true },
  { name: "Sidro / Vučnica", description: "Pogled na ski lift Sidro", url: "https://g0.ipcamlive.com/player/player.php?alias=sidrokamera", active: false, visible: true },
  { name: "Motel Tikvice", description: "Pogled sa vrha staza, 1.560m", url: "https://g0.ipcamlive.com/player/player.php?alias=tikvice", active: false, visible: true },
];

interface WeatherData {
  temperature: number;
  windSpeed: number;
  snowDepth: number;
  weatherCode: number;
}

function getWeatherDescription(code: number): string {
  if (code === 0 || code === 1) return "Vedro";
  if (code === 2) return "Djelomično oblačno";
  if (code === 3) return "Oblačno";
  if (code >= 45 && code <= 48) return "Magla";
  if (code >= 51 && code <= 65) return "Kiša";
  if (code >= 71 && code <= 77) return "Snijeg";
  if (code >= 80 && code <= 82) return "Pljuskovi";
  if (code >= 85 && code <= 86) return "Snježni pljuskovi";
  return "Nepoznato";
}

export default function KameraLivePage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [cameras, setCameras] = useState<CameraItem[]>(defaultCameras);
  const [activeCamera, setActiveCamera] = useState(0);

  // Fetch camera settings from API
  useEffect(() => {
    async function fetchCameraSettings() {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          if (data.cameras) {
            const cams = Object.entries(data.cameras).map(([, val]) => val as CameraItem);
            if (cams.length > 0) setCameras(cams.filter(c => c.visible));
          }
        }
      } catch {}
    }
    fetchCameraSettings();
  }, []);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=43.95&longitude=17.28&current=temperature_2m,wind_speed_10m,weather_code,snow_depth&timezone=Europe%2FBerlin"
        );
        const data = await res.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          windSpeed: Math.round(data.current.wind_speed_10m),
          snowDepth: data.current.snow_depth ? Math.round(data.current.snow_depth * 100) : 0,
          weatherCode: data.current.weather_code,
        });
      } catch {
        setWeather({ temperature: -2, windSpeed: 10, snowDepth: 40, weatherCode: 3 });
      }
    }
    fetchWeather();
  }, []);

  return (
    <main>
      {/* ===== HERO HEADER ===== */}
      <section className="relative h-[40vh] min-h-[280px] md:h-[45vh] overflow-hidden">
        <Image
          src="/images/headerSkijalista.jpg"
          alt="Kamera Live"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42] via-[#0b1d42]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10 pb-10 md:pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 text-red-400 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Uživo
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
                Adria ski uživo
              </h1>
              <p className="mt-3 text-lg text-white/70 max-w-xl">
                3 kamere uživo - pratite trenutne uvjete na skijalištu
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CAMERA SELECTOR + FEED ===== */}
      <section className="py-12 bg-[#0b1d42]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Camera Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            {cameras.map((cam, i) => (
              <button
                key={cam.name}
                onClick={() => setActiveCamera(i)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl text-left transition-all duration-300 flex-1 ${
                  activeCamera === i
                    ? "bg-[#00c0f7] text-white shadow-lg shadow-[#00c0f7]/20"
                    : "bg-white/10 text-white/70 hover:bg-white/15"
                }`}
              >
                {/* Status dot - always visible */}
                <span className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  cam.active
                    ? "bg-green-500 animate-pulse shadow-[0_0_6px_rgba(34,197,94,0.6)]"
                    : "bg-red-500"
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${activeCamera === i ? "text-white" : "text-white/90"}`}>
                      {cam.name}
                    </p>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      cam.active
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      {cam.active ? "Online" : "Offline"}
                    </span>
                  </div>
                  <p className={`text-xs ${activeCamera === i ? "text-white/70" : "text-white/50"}`}>
                    {cam.description}
                  </p>
                </div>
                <Camera className={`w-4 h-4 flex-shrink-0 ${activeCamera === i ? "text-white/60" : "text-white/30"}`} />
              </button>
            ))}
          </motion.div>

          {/* Active Camera Feed */}
          <motion.div
            key={activeCamera}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                {cameras[activeCamera].name}
              </span>
            </div>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10 bg-black">
              <iframe
                src={cameras[activeCamera].url}
                title={`Kamera - ${cameras[activeCamera].name}`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== WEATHER + INFO ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Weather Card */}
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-[#163c6f] to-[#0b1d42] rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-2 mb-6">
                <Snowflake className="w-5 h-5 text-[#00c0f7]" />
                <h2 className="text-xl font-heading font-bold">Trenutni uvjeti</h2>
              </div>

              {weather ? (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="w-4 h-4 text-[#00c0f7]" />
                      <span className="text-sm text-white/60">Temperatura</span>
                    </div>
                    <p className="text-3xl font-heading font-bold">{weather.temperature}°C</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Snowflake className="w-4 h-4 text-[#00c0f7]" />
                      <span className="text-sm text-white/60">Snijeg</span>
                    </div>
                    <p className="text-3xl font-heading font-bold">{weather.snowDepth} cm</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Wind className="w-4 h-4 text-[#00c0f7]" />
                      <span className="text-sm text-white/60">Vjetar</span>
                    </div>
                    <p className="text-3xl font-heading font-bold">{weather.windSpeed} km/h</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Mountain className="w-4 h-4 text-[#00c0f7]" />
                      <span className="text-sm text-white/60">Vrijeme</span>
                    </div>
                    <p className="text-xl font-heading font-bold">{getWeatherDescription(weather.weatherCode)}</p>
                  </div>
                </div>
              ) : (
                <div className="text-white/40 animate-pulse">Učitavanje...</div>
              )}

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-white/40">Podaci: Open-Meteo API · Lokacija: Kupres (43.95°N, 17.28°E)</p>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              {...fadeInUp}
              className="bg-[#f2f3f4] rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Video className="w-5 h-5 text-[#163c6f]" />
                <h2 className="text-xl font-heading font-bold text-[#163c6f]">Informacije</h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163c6f] text-sm">Lokacija</p>
                    <p className="text-[#3d3d3d] text-sm">Kupres Adria Ski, Čajuša bb, 80 320 Kupres</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163c6f] text-sm">Radno vrijeme skijališta</p>
                    <p className="text-[#3d3d3d] text-sm">Svaki dan: 09:00 - 16:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163c6f] text-sm">Kontakt</p>
                    <a href="tel:+38734275100" className="text-[#00c0f7] text-sm hover:underline">+387 (0) 34 275 100</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#163c6f]/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-4 h-4 text-[#163c6f]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#163c6f] text-sm">Kamere</p>
                    <p className="text-[#3d3d3d] text-sm">3 kamere uživo (Hotel, Sidro, Tikvice)</p>
                  </div>
                </div>
              </div>

              <Link
                href="/skijalista"
                className="inline-flex items-center gap-2 mt-6 text-[#00c0f7] text-sm font-semibold hover:gap-3 transition-all duration-300"
              >
                Više o stazama <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-16 bg-[#f2f3f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Skijalište", desc: "Preko 13 km uređenih staza", img: "/images/staze-1.jpg", link: "/skijalista" },
              { title: "Cjenik", desc: "Ski karte i oprema", img: "/images/staze-3.jpg", link: "/cjenik" },
              { title: "Škola skijanja", desc: "Za početnike i napredne", img: "/images/headerSkolaSkijanja.jpg", link: "/skola-skijanja" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.link} className="group block relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
                  <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d42]/80 via-[#0b1d42]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-heading font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-white/70">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-[#00c0f7] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Saznaj više <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
