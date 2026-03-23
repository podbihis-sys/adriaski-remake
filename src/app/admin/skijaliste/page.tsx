"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Mountain, Camera, CheckCircle, XCircle, Plus, Trash2, CalendarDays, Save,
} from "lucide-react";
import { useUnsavedChanges } from "@/hooks/useUnsavedChanges";

interface CameraData {
  name: string;
  url: string;
  active: boolean;
  visible: boolean;
  description?: string;
}

interface Settings {
  piste_status: { open: boolean; openingDate?: string };
  cameras: Record<string, CameraData>;
}

function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 ${type === "success" ? "bg-green-600" : "bg-red-600"}`}>
      {type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
      {message}
    </div>
  );
}

export default function AdminSkijalistePage() {
  const [settings, setSettings] = useState<Settings>({ piste_status: { open: false }, cameras: {} });
  const [savedSettings, setSavedSettings] = useState<Settings>({ piste_status: { open: false }, cameras: {} });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [newCam, setNewCam] = useState({ name: "", url: "", description: "" });
  const [showAddCam, setShowAddCam] = useState(false);
  const [openingDate, setOpeningDate] = useState("");
  const [savedOpeningDate, setSavedOpeningDate] = useState("");
  const { hasUnsavedChanges, markDirty, markClean } = useUnsavedChanges();

  const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") || "" : "";

  const fetchSettings = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/settings", { headers: { "x-admin-token": token } });
      if (res.ok) {
        const data = await res.json();
        const s = { piste_status: data.piste_status || { open: false }, cameras: data.cameras || {} };
        setSettings(s);
        setSavedSettings(s);
        setOpeningDate(data.piste_status?.openingDate || "");
        setSavedOpeningDate(data.piste_status?.openingDate || "");
      }
    } catch {
      setToast({ message: "Greška pri dohvaćanju.", type: "error" });
    } finally { setLoading(false); }
  }, [token]);

  useEffect(() => { fetchSettings(); }, [fetchSettings]);

  // Check if anything changed
  const isDirty = JSON.stringify(settings) !== JSON.stringify(savedSettings) || openingDate !== savedOpeningDate;

  useEffect(() => {
    if (isDirty) markDirty();
    else markClean();
  }, [isDirty, markDirty, markClean]);

  async function handleSaveAll() {
    setSaving(true);
    try {
      // Save piste status with opening date
      const pisteVal = { ...settings.piste_status, openingDate };
      const res1 = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ key: "piste_status", value: pisteVal }),
      });

      // Save cameras
      const res2 = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ key: "cameras", value: settings.cameras }),
      });

      if (res1.ok && res2.ok) {
        const newSettings = { ...settings, piste_status: pisteVal };
        setSavedSettings(newSettings);
        setSettings(newSettings);
        setSavedOpeningDate(openingDate);
        markClean();
        setToast({ message: "Sve promjene su spremljene!", type: "success" });
      } else {
        setToast({ message: "Greška pri spremanju.", type: "error" });
      }
    } catch {
      setToast({ message: "Greška.", type: "error" });
    } finally {
      setSaving(false);
    }
  }

  function togglePiste() {
    setSettings(prev => ({ ...prev, piste_status: { ...prev.piste_status, open: !prev.piste_status.open } }));
  }

  function toggleCameraActive(key: string) {
    const cam = settings.cameras[key]; if (!cam) return;
    setSettings(prev => ({ ...prev, cameras: { ...prev.cameras, [key]: { ...cam, active: !cam.active } } }));
  }

  function toggleCameraVisible(key: string) {
    const cam = settings.cameras[key]; if (!cam) return;
    setSettings(prev => ({ ...prev, cameras: { ...prev.cameras, [key]: { ...cam, visible: !cam.visible } } }));
  }

  function addCamera() {
    if (!newCam.name.trim() || !newCam.url.trim()) { setToast({ message: "Ime i URL su obavezni.", type: "error" }); return; }
    const id = newCam.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    setSettings(prev => ({
      ...prev,
      cameras: { ...prev.cameras, [id]: { name: newCam.name, url: newCam.url, description: newCam.description, active: false, visible: true } },
    }));
    setNewCam({ name: "", url: "", description: "" });
    setShowAddCam(false);
  }

  function removeCamera(key: string) {
    if (!confirm(`Obrisati kameru "${settings.cameras[key]?.name}"?`)) return;
    const updated = { ...settings.cameras };
    delete updated[key];
    setSettings(prev => ({ ...prev, cameras: updated }));
  }

  function handleDiscard() {
    setSettings(savedSettings);
    setOpeningDate(savedOpeningDate);
    markClean();
    setToast({ message: "Promjene poništene.", type: "success" });
  }

  if (loading) return <div className="flex items-center justify-center h-64"><div className="w-8 h-8 border-4 border-[#163c6f] border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-6 max-w-4xl w-full">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Header with Save button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Skijalište & Kamere</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          {isDirty && (
            <button
              onClick={handleDiscard}
              className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-medium"
            >
              Poništi
            </button>
          )}
          <button
            onClick={handleSaveAll}
            disabled={!isDirty || saving}
            className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition ${
              isDirty
                ? "bg-[#163c6f] text-white hover:bg-[#1a4a87]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Save className="w-4 h-4" />
            {saving ? "Spremam..." : "Spremi"}
          </button>
        </div>
      </div>

      {/* Unsaved changes banner */}
      {isDirty && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-center gap-2 text-sm text-amber-700">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          Imate nespremljene promjene. Kliknite &quot;Spremi promjene&quot; za primjenu.
        </div>
      )}

      {/* ===== PISTE STATUS ===== */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${settings.piste_status.open ? "bg-green-100" : "bg-red-100"}`}>
            <Mountain className={`w-6 h-6 ${settings.piste_status.open ? "text-green-600" : "text-red-600"}`} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Status staza</h2>
            <p className="text-sm text-gray-500">Vidljivo na cijeloj stranici nakon spremanja</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl mb-4">
          <div>
            <p className="font-semibold text-gray-900">
              Staze: <span className={settings.piste_status.open ? "text-green-600" : "text-red-600"}>
                {settings.piste_status.open ? "OTVORENE" : "ZATVORENE"}
              </span>
            </p>
          </div>
          <button onClick={togglePiste} className={`relative w-16 h-8 rounded-full transition-colors ${settings.piste_status.open ? "bg-green-500" : "bg-red-400"}`}>
            <span className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${settings.piste_status.open ? "left-[calc(100%-1.75rem)]" : "left-1"}`} />
          </button>
        </div>

        {/* Opening Date */}
        <div className="p-4 sm:p-5 bg-blue-50 border border-blue-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <h3 className="font-semibold text-blue-800 text-sm">Datum otvaranja sezone</h3>
          </div>
          <p className="text-xs text-blue-600 mb-3">Ako je manje od 10 dana, prikazuje se countdown na stranici (do 09:00)</p>
          <input
            type="date"
            value={openingDate}
            onChange={e => setOpeningDate(e.target.value)}
            className="w-full max-w-full px-3 sm:px-4 py-2 border border-blue-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none box-border"
          />
          {openingDate && (
            <p className="text-xs text-blue-500 mt-2">Postavljeno: {new Date(openingDate).toLocaleDateString("hr-HR", { day: "numeric", month: "long", year: "numeric" })}</p>
          )}
        </div>
      </div>

      {/* ===== CAMERAS ===== */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00c0f7]/10 flex items-center justify-center">
              <Camera className="w-6 h-6 text-[#00c0f7]" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Kamere</h2>
              <p className="text-sm text-gray-500">Dodajte, uklonite ili upravljajte kamerama</p>
            </div>
          </div>
          <button onClick={() => setShowAddCam(!showAddCam)} className="flex items-center gap-2 bg-[#163c6f] text-white px-4 py-2 rounded-lg hover:bg-[#1a4a87] transition text-sm font-medium">
            <Plus className="w-4 h-4" /> Nova kamera
          </button>
        </div>

        {showAddCam && (
          <div className="mb-6 p-5 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
            <h3 className="font-semibold text-[#163c6f] text-sm">Dodaj novu kameru</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" placeholder="Ime kamere *" value={newCam.name} onChange={e => setNewCam(p => ({ ...p, name: e.target.value }))} className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00c0f7] outline-none" />
              <input type="text" placeholder="Opis (opcionalno)" value={newCam.description} onChange={e => setNewCam(p => ({ ...p, description: e.target.value }))} className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00c0f7] outline-none" />
            </div>
            <input type="text" placeholder="URL kamere (embed URL) *" value={newCam.url} onChange={e => setNewCam(p => ({ ...p, url: e.target.value }))} className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00c0f7] outline-none" />
            <div className="flex gap-2">
              <button onClick={addCamera} className="px-4 py-2 bg-[#163c6f] text-white rounded-lg text-sm font-medium hover:bg-[#1a4a87] transition">Dodaj</button>
              <button onClick={() => setShowAddCam(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition">Odustani</button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {Object.entries(settings.cameras).length === 0 ? (
            <p className="text-gray-400 text-center py-8">Nema kamera.</p>
          ) : (
            Object.entries(settings.cameras).map(([key, cam]) => (
              <div key={key} className={`rounded-xl border transition-all ${cam.visible ? "bg-white border-gray-200" : "bg-gray-50 border-dashed border-gray-300 opacity-50"}`}>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${cam.active ? "bg-green-100" : "bg-red-100"}`}>
                      <Camera className={`w-4 h-4 ${cam.active ? "text-green-600" : "text-red-500"}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-900 text-sm truncate">{cam.name}</p>
                      <p className="text-xs text-gray-500 truncate">{cam.description || cam.url}</p>
                    </div>
                  </div>
                  <button onClick={() => removeCamera(key)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition" title="Obriši">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-4 px-4 pb-4">
                  <div className="flex items-center gap-2 flex-1">
                    <button onClick={() => toggleCameraVisible(key)} className={`relative w-10 h-5 rounded-full transition-colors ${cam.visible ? "bg-[#00c0f7]" : "bg-gray-300"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${cam.visible ? "left-[calc(100%-1.125rem)]" : "left-0.5"}`} />
                    </button>
                    <span className="text-xs text-gray-600">
                      {cam.visible ? "Vidljivo na stranici" : "Skriveno"}
                    </span>
                  </div>
                  <div className="w-px h-5 bg-gray-200" />
                  <div className="flex items-center gap-2 flex-1">
                    <button onClick={() => toggleCameraActive(key)} className={`relative w-10 h-5 rounded-full transition-colors ${cam.active ? "bg-green-500" : "bg-red-400"}`}>
                      <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${cam.active ? "left-[calc(100%-1.125rem)]" : "left-0.5"}`} />
                    </button>
                    <span className={`text-xs font-semibold ${cam.active ? "text-green-600" : "text-red-500"}`}>
                      {cam.active ? "● Online" : "● Offline"}
                    </span>
                  </div>
                </div>
                {!cam.active && cam.visible && (
                  <div className="px-4 pb-3">
                    <p className="text-[10px] text-red-400 bg-red-50 rounded-lg px-3 py-1.5">
                      ⚠ Kamera prikazuje &quot;Offline&quot; na stranici. Stream nije aktivan.
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom save bar */}
      {isDirty && (
        <div className="sticky bottom-4 bg-white border border-gray-200 rounded-xl shadow-lg p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-gray-600">Nespremljene promjene</p>
          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <button onClick={handleDiscard} className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm">
              Poništi
            </button>
            <button onClick={handleSaveAll} disabled={saving} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-5 py-2 bg-[#163c6f] text-white rounded-lg hover:bg-[#1a4a87] transition text-sm font-medium disabled:opacity-50">
              <Save className="w-4 h-4" />
              {saving ? "Spremam..." : "Spremi"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
