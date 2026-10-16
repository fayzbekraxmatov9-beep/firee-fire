"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Download,
  ShieldAlert,
  Crosshair,
  Users,
  Trophy,
  Sparkles,
  Gamepad2,
  Play,
  ChevronRight,
  Menu,
  X,
  Zap,
  Smartphone,
  Monitor,
  Star
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const characters = [
    {
      id: "alok",
      name: "DJ Alok",
      role: "Support / Healer",
      skill: "Drop The Beat",
      desc: "5 metr radiusda harakatlanish tezligini 15% ga oshiradigan va 5 soniya davomida 5 HP/s tiklaydigan aura hosil qiladi.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=600&q=80",
      tag: "Mashhur",
    },
    {
      id: "chronos",
      name: "Chrono",
      role: "Defense",
      skill: "Time Turner",
      desc: "Dushmanning 800 ta o'qini to'xtatuvchi qudratli himoya maydoni yaratadi. Jamoani himoyalashda tengsiz.",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
      tag: "Taktik",
    },
    {
      id: "kelly",
      name: "Kelly «The Swift»",
      role: "Assault / Rusher",
      skill: "Deadly Velocity",
      desc: "Yugurish tezligini 6% ga oshiradi. O'q otish paytida birinchi zarba kuchini 106% ga yetkazadi.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      tag: "Tezkor",
    },
    {
      id: "wukong",
      name: "Wukong",
      role: "Stealth / Infiltrator",
      skill: "Camouflage",
      desc: "Butaga aylanib yashirinadi va dushman nishoniga tushishni imkonsiz qiladi. Dushmanni yo'q qilgach qayta tiklanadi.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      tag: "Yashirin",
    },
  ];

  const weapons = [
    {
      name: "MP40 - Predatory Cobra",
      type: "SMG",
      damage: 82,
      rateOfFire: 95,
      range: 48,
      desc: "Yaqin masofadagi janglarda eng yuqori otish tezligiga ega afsonaviy qurol.",
      badge: "S-Tier",
    },
    {
      name: "AWM - Duke Swallowtail",
      type: "Sniper",
      damage: 98,
      rateOfFire: 27,
      range: 96,
      desc: "Bir zarba bilan raqibni maydondan chiqarish qobiliyatiga ega snayper.",
      badge: "Godlike",
    },
    {
      name: "M1887 - One Punch Man",
      type: "Shotgun",
      damage: 100,
      rateOfFire: 42,
      range: 35,
      desc: "Eng yuqori kuchga ega 2 ta o'qli daxshatli miltiq.",
      badge: "One Shot",
    },
    {
      name: "AK47 - Blue Flame Draco",
      type: "Assault Rifle",
      damage: 88,
      rateOfFire: 75,
      range: 78,
      desc: "Alovli dragon effekti va yuqori shikast yetkazish quvvati.",
      badge: "Evo Gun",
    },
  ];

  const gameModes = [
    {
      title: "Battle Royale (Klassik)",
      players: "50 o'yinchi",
      time: "10-15 daqiqa",
      desc: "Parashyutda orolga sakrab, qurollar yig'ing va oxirgi tirik qolgan jangchi bo'lib BOOYAH! qozoning.",
      icon: Trophy,
    },
    {
      title: "Clash Squad (4v4)",
      players: "4 vs 4 Tarkib",
      time: "5-7 daqiqa",
      desc: "Raundma-raund strategik jang. Har raundda qurol sotib olib, 4 ta g'alabaga birinchi yetgan jamoa yutadi.",
      icon: Crosshair,
    },
    {
      title: "Lone Wolf (1v1 / 2v2)",
      players: "Yakka yakkaga",
      time: "3-5 daqiqa",
      desc: "O'z mahoratingizni to'g'ridan-to'g'ri duellarda sinang. Hech qanday tasodif yo'q, faqat sof aql va aim.",
      icon: ShieldAlert,
    },
  ];

  const maps = [
    {
      name: "Bermuda",
      type: "Asosiy orol",
      desc: "Pochinok, Clock Tower, Peak va Factory kabi afsonaviy jang maydonlari joylashgan orol.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Purgatory",
      type: "Tog'li hudud",
      desc: "Keng ko'llar, zaryadlangan daryolar va tog'lar ustidagi taktika jangi.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Kalahari",
      type: "Cho'l maydoni",
      desc: "Quruq cho'l, chuqur kanyonlar va vertikal manyovrlar maydoni.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 selection:bg-orange-600 selection:text-white">
      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-linear-to-b from-orange-600/15 via-red-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090d]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-linear-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider uppercase bg-linear-to-r from-white via-zinc-200 to-orange-400 bg-clip-text text-transparent">
                FREE FIRE
              </span>
              <span className="block text-[10px] tracking-widest text-orange-400 font-bold -mt-1 uppercase">
                Uzbekistan Arena
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#about" className="hover:text-orange-400 transition-colors">O&apos;yin haqida</a>
            <a href="#characters" className="hover:text-orange-400 transition-colors">Qahramonlar</a>
            <a href="#weapons" className="hover:text-orange-400 transition-colors">Qurollar</a>
            <a href="#modes" className="hover:text-orange-400 transition-colors">Rejimlar</a>
            <a href="#maps" className="hover:text-orange-400 transition-colors">Xaritalar</a>
            <a href="#community" className="hover:text-orange-400 transition-colors">Turnirlar</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 font-bold text-sm text-black shadow-lg shadow-orange-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Yuklab Olish
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-[#0c0d14] border-b border-zinc-800 space-y-3">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-zinc-300 hover:text-orange-400 font-medium"
            >
              O&apos;yin haqida
            </a>
            <a
              href="#characters"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-zinc-300 hover:text-orange-400 font-medium"
            >
              Qahramonlar
            </a>
            <a
              href="#weapons"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-zinc-300 hover:text-orange-400 font-medium"
            >
              Qurollar
            </a>
            <a
              href="#modes"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-zinc-300 hover:text-orange-400 font-medium"
            >
              Rejimlar
            </a>
            <a
              href="#maps"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-zinc-300 hover:text-orange-400 font-medium"
            >
              Xaritalar
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-600 text-black font-bold"
            >
              <Download className="w-4 h-4" />
              Yuklab Olish
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Flame className="w-4 h-4 animate-bounce" />
                <span>YANGI MAVSUM 2026: RANGED BATTLE CHIQDI</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase">
                Jangga Kirish. <br />
                <span className="bg-linear-to-r from-orange-500 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  BOOYAH QOZON!
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                50 nafar o&apos;yinchi, 10 daqiqalik daxshatli jang va yagona g&apos;olib. Free Fire — mobil dunyodagi eng ommabop Battle Royale o&apos;yini. O&apos;z qahramoningni tanla, mahoratingni ko&apos;rsat!
              </p>

              {/* CTAS */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#download"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-black font-black uppercase text-base tracking-wider shadow-xl shadow-orange-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  Hozir Bepul O&apos;yna
                </a>
                <a
                  href="#modes"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 hover:border-orange-500/40 bg-zinc-900/60 hover:bg-zinc-800/80 font-bold text-zinc-200 transition-all"
                >
                  <Play className="w-4 h-4 fill-orange-500 text-orange-500" />
                  Rejimlar bilan tanish
                </a>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">1B+</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider">Yuklab olishlar</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-orange-400">10 Daq</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider">Tezkor Janglar</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">50+</div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider">Noyob Qahramon</div>
                </div>
              </div>
            </div>

            {/* HERO CARD / PREVIEW */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl p-1 bg-linear-to-b from-orange-500/50 via-zinc-800 to-zinc-900 shadow-2xl shadow-orange-500/20">
                <div className="rounded-[22px] overflow-hidden bg-zinc-950 p-6 space-y-6">
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
                      alt="Battle arena"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-md bg-orange-600 font-bold text-xs text-black uppercase">
                        Jonli Turnir
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-zinc-300 bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        84,210 kuzatuvchi
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-xl text-white">FF UZBEKISTAN CUP</h3>
                      <span className="text-amber-400 font-bold text-sm">$10,000 Sovrin</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      O&apos;zbekiston bo&apos;ylab eng sara jamoalar o&apos;rtasidagi ochiq chempionatga ro&apos;yxatdan o&apos;tish davom etmoqda.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all">
                      <Trophy className="w-4 h-4 text-orange-400" />
                      Ro&apos;yxatdan o&apos;tish
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY FREE FIRE FEATURES */}
      <section id="about" className="py-20 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange-400">Nega aynan Free Fire?</h2>
            <p className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Tezkor, Qiziqarli va Har Qanday Qurilmada Ravon
            </p>
            <p className="text-zinc-400 text-sm sm:text-base">
              Maxsus optimallashtirilgan dvigatel tufayli hatto o&apos;rta toifadagi smartfonlarda ham 60 FPS silliq o&apos;yin kafolatlanadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10 Daqiqalik Janglar</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Ortiqcha kutilmalar yo&apos;q! Qisqa vaqt ichida to&apos;liq adrenalin hissini tuying. Har bir daqiqa jang va taktika bilan boyitilgan.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jamoaviy Ovozli Chat</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                4 kishilik squad bilan qulay ovozli aloqa o&apos;rnatib, dushmanga qarshi birgalikda kuchli strategiyalar tuzing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Noyob Skill va Ko&apos;nikmalar</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Har bir qahramon o&apos;ziga xos mahoratga ega: tezlik oshirish, qalqon yaratish, yashirinish yoki jamoani davolash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTERS SHOWCASE */}
      <section id="characters" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Jangchilar</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Mashhur Qahramonlar
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
                O&apos;zingizga mos jang uslubini tanlang. Qahramonlarning faol va passiv qobiliyatlari g&apos;alaba kalitidir.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium">Hammasi: 50+ personaj mavjud</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((char) => (
              <div
                key={char.id}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-72 w-full overflow-hidden bg-zinc-800">
                  <img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-orange-600 text-black uppercase">
                      {char.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider block">
                      {char.role}
                    </span>
                    <h3 className="text-xl font-black text-white">{char.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-zinc-950">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Skill: {char.skill}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {char.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500 uppercase">Bo&apos;lim</span>
                    <span className="text-xs text-zinc-300 font-bold">Faol Qobiliyat</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAPONS ARSENAL */}
      <section id="weapons" className="py-20 bg-zinc-950/70 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Arsenal</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Qurollar va Darajalar
            </h2>
            <p className="text-zinc-400 text-sm">
              Har bir qurol o&apos;ziga xos zarba kuchi, tezlik va masofaga ega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weapons.map((gun, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-orange-500/30 transition-all space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{gun.type}</span>
                    <h3 className="text-lg font-black text-white mt-1">{gun.name}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-md text-xs font-black bg-linear-to-r from-orange-600 to-amber-500 text-black">
                    {gun.badge}
                  </span>
                </div>

                <p className="text-xs text-zinc-400">{gun.desc}</p>

                {/* Stat bars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>Zarba Kuchi (Damage)</span>
                      <span className="text-white font-bold">{gun.damage}</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full"
                        style={{ width: `${gun.damage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>Otish Tezligi (Rate of Fire)</span>
                      <span className="text-white font-bold">{gun.rateOfFire}</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-amber-400 to-orange-500 rounded-full"
                        style={{ width: `${gun.rateOfFire}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-zinc-400 mb-1">
                      <span>Masofa (Range)</span>
                      <span className="text-white font-bold">{gun.range}</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-zinc-400 to-zinc-200 rounded-full"
                        style={{ width: `${gun.range}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAME MODES */}
      <section id="modes" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Jang Maydonlari</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              O&apos;yin Rejimlari
            </h2>
            <p className="text-zinc-400 text-sm">
              Keng ko&apos;lamli survival o&apos;yinidan tortib, qizg&apos;in 4v4 taktik janglargacha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gameModes.map((mode, i) => {
              const IconComp = mode.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-8 bg-zinc-900/50 border border-white/5 hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{mode.desc}</p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{mode.players}</span>
                    <span className="text-orange-400 font-bold">{mode.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAPS GALLERY */}
      <section id="maps" className="py-20 bg-zinc-950/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Lokatsiyalar</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Afsonaviy Xaritalar
            </h2>
            <p className="text-zinc-400 text-sm">
              Har bir xarita alohida strategiya, pozitsiya va hujum taktikasini talab qiladi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maps.map((map, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all h-80"
              >
                <img
                  src={map.image}
                  alt={map.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">{map.type}</span>
                  <h3 className="text-2xl font-black text-white">{map.name}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{map.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY / ESPORTS */}
      <section id="community" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 bg-linear-to-r from-orange-950/40 via-zinc-900 to-zinc-950 p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-600/20 text-orange-400 text-xs font-bold border border-orange-500/30 uppercase">
                <Trophy className="w-4 h-4" />
                Kibersport Jamiyati
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                O&apos;zbekiston Kibersport Ligasiga Qo&apos;shiling
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Har haftalik scrimlar, oylik katta turnirlar va 100,000,000 so&apos;mlik sovrin jamg&apos;armalari. Jamongizni yig&apos;ing va o&apos;z nomingizni tarixga yozing!
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#download"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 font-bold text-black text-sm uppercase transition-all"
                >
                  Turnirga Qo&apos;shilish
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm transition-all"
                >
                  Telegram Jamiyat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="download" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Bepul Yuklab Olish</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Booyah Qozonishga Tayyormisiz?
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              O&apos;yin Android, iOS hamda PC (Google Play Games / Emulator) platformalarida to&apos;liq bepul mavjud.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.dts.freefireth"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-zinc-800/80 transition-all text-left"
            >
              <Smartphone className="w-8 h-8 text-orange-400" />
              <div>
                <span className="text-[10px] text-zinc-400 uppercase block">Yuklab oling</span>
                <span className="text-base font-bold text-white">Google Play</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/app/garena-free-fire/id1300146617"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-zinc-800/80 transition-all text-left"
            >
              <Smartphone className="w-8 h-8 text-orange-400" />
              <div>
                <span className="text-[10px] text-zinc-400 uppercase block">Yuklab oling</span>
                <span className="text-base font-bold text-white">App Store</span>
              </div>
            </a>

            <a
              href="https://ff.garena.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-white/10 hover:border-orange-500/50 hover:bg-zinc-800/80 transition-all text-left"
            >
              <Monitor className="w-8 h-8 text-orange-400" />
              <div>
                <span className="text-[10px] text-zinc-400 uppercase block">PC versiya</span>
                <span className="text-base font-bold text-white">Windows Emulator</span>
              </div>
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center gap-6 text-xs text-zinc-500">
            <span>Hajmi: ~1.2 GB</span>
            <span>•</span>
            <span>Talab: Android 5.0+ / iOS 11.0+</span>
            <span>•</span>
            <span>Versiya: v1.109.1</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#06070a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-orange-600 flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-white tracking-wider">FREE FIRE UZ</span>
          </div>

          <p className="text-xs text-zinc-500 text-center">
            © 2026 Garena Free Fire Fan Community Uzbekistan. Barcha huquqlar himoyalangan.
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <a href="#" className="hover:text-orange-400 transition-colors">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Foydalanish shartlari</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Aloqa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
