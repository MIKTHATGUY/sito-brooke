import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toUpperCase();

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 md:py-12 max-w-[1400px] mx-auto text-[#1a1a1a]">
      {/* Top Utility Bar */}
      <header className="border-b border-black pb-2 mb-6 flex justify-between uppercase text-xs tracking-widest font-bold">
        <span>LONDON EDITION</span>
        <span className="hidden sm:inline">WAR POETRY SUPPLEMENT</span>
        <span>ONE PENNY</span>
      </header>

      {/* Masthead */}
      <div className="text-center mb-6">
        <h1 className="text-6xl sm:text-8xl md:text-[140px] leading-none font-bold tracking-tight uppercase font-display mb-4" style={{ transform: "scaleY(1.1)" }}>
          THE BROOKE TIMES
        </h1>
        <div className="border-y-2 border-black py-2 my-4 flex justify-between items-center text-sm font-bold uppercase tracking-widest">
          <span>NO. 42, 1914</span>
          <span>{currentDate}</span>
          <span>LATE LONDON EDITION</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b-2 border-black pb-8">

        {/* Left Column (Main Article) */}
        <section className="md:col-span-8 flex flex-col gap-6">
          <Link href="/peace" className="group block border-b border-gray-400 pb-6 transition-opacity hover:opacity-80">
            <h2 className="text-center text-5xl sm:text-6xl font-display font-bold mb-4 uppercase leading-tight">
              Peace: Into Cleanness Leaping
            </h2>
            <h3 className="text-center text-xl italic mb-6 font-serif">
              L&apos;anima si purifica nel sacrificio. La pace eterna trovata nella morte in battaglia.
            </h3>
            <div className="relative w-full aspect-[16/9] bg-zinc-200 overflow-hidden mb-6 border border-black">
              <Image
                src="/home.jpg"
                alt="Swimmer leaping into water"
                fill
                className="object-cover object-top grayscale sepia-[.3] contrast-125"
              />
            </div>
            <div className="columns-1 sm:columns-2 gap-8 text-justify text-lg leading-relaxed">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1 font-display">
                Non appare come un conflitto armato, ma come una liberazione morale e spirituale. È un evento atteso che rompe la monotonia della vita quotidiana borghese. La guerra è vista come un&apos;acqua che lava via lo sporco della pace.
              </p>
              <p className="mt-4 sm:mt-0">
                Emerge la gioventù collettiva. Sono giovani che prima erano addormentati e ora sono svegli, forti e pronti. C&apos;è un senso di gratitudine e di sollievo, quasi come se il poeta avesse scampato un pericolo per trovarne uno migliore.
              </p>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
            <Link href="/the-dead" className="group block border-r-0 border-b sm:border-b-0 sm:border-r border-gray-400 sm:pr-8 pb-6 sm:pb-0 transition-opacity hover:opacity-80">
              <h2 className="text-4xl font-display font-bold mb-3 uppercase leading-none">
                The Dead
              </h2>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 italic">Sonnet III</h4>
              <p className="text-justify leading-relaxed">
                Coloro che sono caduti sono santificati. La loro morte non è vana, ma un atto di dedizione suprema. Strutturata come uno scambio commerciale sacro, la guerra toglie la vita fisica ma restituisce valori spirituali eterni.
              </p>
            </Link>

            <Link href="/the-soldier" className="group block transition-opacity hover:opacity-80">
              <h2 className="text-4xl font-display font-bold mb-3 uppercase leading-none">
                The Soldier
              </h2>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 italic">Sonnet V</h4>
              <p className="text-justify leading-relaxed">
                L&apos;identificazione totale con la patria. Il soldato diventa un pezzo d&apos;Inghilterra per sempre, trasformato in parte del paesaggio e della storia. Una visione idillica e immortale del sacrificio in suolo straniero.
              </p>
            </Link>
          </div>
        </section>

        {/* Right Column (Sidebar) */}
        <aside className="md:col-span-4 border-t-2 md:border-t-0 md:border-l-2 border-black pt-6 md:pt-0 md:pl-8 flex flex-col gap-6">
          <div className="border border-black p-4 bg-[#eeebe2]">
            <h3 className="text-2xl font-display font-bold uppercase text-center mb-2 border-b border-black pb-2">
              Ultime Notizie
            </h3>
            <ul className="space-y-4 mt-4">
              <li className="border-b border-gray-400 pb-4">
                <span className="font-bold uppercase text-xs tracking-widest block mb-1">Esteri</span>
                <p className="leading-snug">Ha inizio la Grande Guerra. Le nazioni si mobilitano mentre le campagne di reclutamento dilagano in tutto l&apos;impero.</p>
              </li>
              <li className="border-b border-gray-400 pb-4">
                <span className="font-bold uppercase text-xs tracking-widest block mb-1">Notizie Letterarie</span>
                <p className="leading-snug">Rupert Brooke pubblica i suoi sonetti, catturando il fervore patriottico dei giovani volontari.</p>
              </li>
              <li>
                <span className="font-bold uppercase text-xs tracking-widest block mb-1">Editoriale</span>
                <p className="leading-snug">È la guerra la purificazione definitiva di una società stagnante? Leggi la nostra analisi esclusiva.</p>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-3xl font-display font-bold uppercase text-center mb-4">
              Directory
            </h3>
            <nav className="flex flex-col gap-2 font-bold uppercase tracking-widest text-sm text-center">
              <Link href="/" className="border-y border-black py-2 hover:bg-black hover:text-[#f4f1ea] transition-colors">Front Page</Link>
              <Link href="/peace" className="border-b border-black py-2 hover:bg-black hover:text-[#f4f1ea] transition-colors">Peace</Link>
              <Link href="/the-dead" className="border-b border-black py-2 hover:bg-black hover:text-[#f4f1ea] transition-colors">The Dead</Link>
              <Link href="/the-soldier" className="border-b border-black py-2 hover:bg-black hover:text-[#f4f1ea] transition-colors">The Soldier</Link>
            </nav>
          </div>
        </aside>
      </main>

      <footer className="mt-6 text-center text-xs uppercase tracking-widest font-bold">
        <p>Printed and Published by RUPERT BROOKE SONNETS MEDIA GROUP. DESIGNED IN LONDON.</p>
      </footer>
    </div>
  );
}
