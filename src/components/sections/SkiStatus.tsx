"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Wind, Snowflake, Mountain, Clock } from "lucide-react";
import { usePathTranslations } from "@/lib/use-path-locale";

interface WeatherData {
  temperature: number;
  windSpeed: number;
  snowDepth: number;
  weatherCode: number;
  isDay: boolean;
}

function getWeatherIcon(code: number): string {
  if (code === 0 || code === 1) return "☀️";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";
  if (code >= 45 && code <= 48) return "🌫️";
  if (code >= 51 && code <= 65) return "🌧️";
  if (code >= 71 && code <= 77) return "🌨️";
  if (code >= 80 && code <= 82) return "🌦️";
  if (code >= 85 && code <= 86) return "❄️";
  if (code >= 95) return "⛈️";
  return "🌤️";
}

export default function SkiStatus() {
  const t = usePathTranslations("ski_status");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [pisteOpen, setPisteOpen] = useState(false);
  const [openingDate, setOpeningDate] = useState("");
  const [countdown, setCountdown] = useState("");
  const [, setCameraCount] = useState({ online: 0, total: 0 });

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch("/api/settings");
        if (res.ok) {
          const data = await res.json();
          setPisteOpen(data.piste_status?.open ?? false);
          setOpeningDate(data.piste_status?.openingDate || "");
          if (data.cameras) {
            const cams = Object.values(data.cameras) as { active: boolean; visible: boolean }[];
            const visible = cams.filter(c => c.visible);
            const online = visible.filter(c => c.active);
            setCameraCount({ online: online.length, total: visible.length });
          }
        }
      } catch {}
    }
    fetchSettings();
  }, []);

  useEffect(() => {
    if (!openingDate || pisteOpen) { setCountdown(""); return; }
    const target = new Date(openingDate + "T09:00:00");
    const now = new Date();
    const diffDays = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays > 10 || diffDays < 0) { setCountdown(""); return; }

    function update() {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { setCountdown(""); return; }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${d}d ${h}h ${m}m ${s}s`);
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [openingDate, pisteOpen]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=43.95&longitude=17.28&current=temperature_2m,wind_speed_10m,weather_code,is_day,snow_depth&timezone=Europe%2FBerlin"
        );
        const data = await res.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          windSpeed: Math.round(data.current.wind_speed_10m),
          snowDepth: data.current.snow_depth ? Math.round(data.current.snow_depth * 100) : 0,
          weatherCode: data.current.weather_code,
          isDay: data.current.is_day === 1,
        });
      } catch {
        // API failed — show no weather data instead of fake values
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, []);

  function getWeatherDescription(code: number): string {
    const key = `weather_${code}`;
    const val = t(key);
    return val !== key ? val : t("weather_unknown");
  }

  if (loading) {
    return (
      <div className="bg-[#0b1d42] py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="text-white/50 text-sm animate-pulse">{t("loading")}</div>
        </div>
      </div>
    );
  }

  const weatherItems = weather ? [
    { icon: null, emoji: getWeatherIcon(weather.weatherCode), text: getWeatherDescription(weather.weatherCode) },
    { icon: Thermometer, emoji: null, text: `${weather.temperature}°C` },
    { icon: Snowflake, emoji: null, text: `${t("snow")}: ${weather.snowDepth} cm` },
    { icon: Wind, emoji: null, text: `${t("wind")}: ${weather.windSpeed} km/h` },
    { icon: Clock, emoji: null, text: `9:00 - 16:00` },
  ] : [];

  const countdownItem = countdown && !pisteOpen ? `⏱ ${t("opening_in")}: ${countdown}` : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#0b1d42] via-[#163c6f] to-[#0b1d42]"
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-x-3 lg:gap-x-4">
            <div className="flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 text-white/70" />
              <span className="text-white/70 text-[13px]">{t("ski_resort")}:</span>
              <span className={`text-[13px] font-bold flex items-center gap-1.5 ${pisteOpen ? "text-green-400" : "text-red-400"}`}>
                <span className={`w-2 h-2 rounded-full ${pisteOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                {pisteOpen ? t("open") : t("closed")}
              </span>
            </div>

            {countdownItem && (
              <>
                <div className="w-px h-4 bg-white/15" />
                <span className="text-yellow-400 text-[13px] font-bold tabular-nums whitespace-nowrap">{countdownItem}</span>
              </>
            )}

            {weatherItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-px h-4 bg-white/15 mr-1" />
                  {item.emoji && <span className="text-[13px]">{item.emoji}</span>}
                  {Icon && <Icon className="w-3.5 h-3.5 text-[#00c0f7]" />}
                  <span className="text-white text-[13px] font-semibold whitespace-nowrap">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center px-3 py-2.5 gap-3">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Mountain className="w-3.5 h-3.5 text-white/70" />
            <span className={`text-[12px] font-bold flex items-center gap-1 ${pisteOpen ? "text-green-400" : "text-red-400"}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${pisteOpen ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
              {pisteOpen ? t("open") : t("closed")}
            </span>
          </div>

          <div className="w-px h-4 bg-white/15 flex-shrink-0" />

          <div className="overflow-hidden flex-1">
            <div className="animate-ticker whitespace-nowrap inline-flex">
              {[0, 1].map((setIndex) => (
                <div key={setIndex} className="inline-flex items-center gap-5 px-5" style={{ minWidth: "max-content" }}>
                  {countdownItem && (
                    <span className="text-yellow-400 text-[12px] font-bold tabular-nums inline-block w-[195px]">{countdownItem}</span>
                  )}
                  {weatherItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <span key={`${setIndex}-${i}`} className="inline-flex items-center gap-1 text-white text-[12px]">
                        {item.emoji && <span>{item.emoji}</span>}
                        {Icon && <Icon className="w-3 h-3 text-[#00c0f7] flex-shrink-0" />}
                        <span className="font-semibold">{item.text}</span>
                      </span>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
