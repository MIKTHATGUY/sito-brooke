import Link from "next/link";
import Image from "next/image";
import { PoetrySlider } from "@/components/poetry/PoetrySlider";
import { peacePoem } from "@/data/poems";

export default function PeacePage() {
    return (
        <div className="min-h-screen px-4 py-8 md:px-8 md:py-12 max-w-[1400px] mx-auto text-[#1a1a1a]">
            {/* Newspaper Header */}
            <header className="border-b-4 border-double border-black pb-4 mb-8">
                <div className="flex items-end justify-between uppercase text-xs tracking-[0.2em] font-bold border-b border-black pb-2 mb-2">
                    <span>LONDON EDITION</span>
                    <span className="hidden sm:inline">WAR POETRY SUPPLEMENT</span>
                    <span>PAGE 2</span>
                </div>
                <div className="text-center">
                    <Link href="/" className="hover:opacity-70 transition-opacity">
                        <span className="text-4xl md:text-6xl font-black uppercase font-display tracking-tight" style={{ transform: "scaleY(1.1)", display: "inline-block" }}>THE BROOKE TIMES</span>
                    </Link>
                </div>
            </header>

            {/* Article Headline */}
            <div className="text-center mb-12">
                <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block italic text-slate-500">Sonnet I</span>
                <h1 className="text-6xl sm:text-8xl md:text-[100px] leading-none font-bold uppercase font-display mb-6 border-b border-black pb-6 inline-block">
                    Peace
                </h1>
                <h2 className="text-2xl md:text-3xl italic font-serif max-w-3xl mx-auto mt-6 text-slate-800">
                    L&apos;inizio della guerra come risveglio spirituale e liberazione dall&apos;apatia.
                </h2>
                <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="h-px bg-black w-16"></span>
                    <span>By Rupert Brooke (1887-1915)</span>
                    <span className="h-px bg-black w-16"></span>
                </div>

                {/* Feature Image */}
                <div className="relative w-full max-w-xl mx-auto aspect-[721/794] border-2 border-black overflow-hidden bg-zinc-200">
                    <Image
                        src="/peace.jpeg"
                        alt="Peace illustration"
                        fill
                        className="object-cover grayscale sepia-[.2] contrast-125 hover:scale-105 transition-transform duration-1000"
                    />
                </div>
            </div>

            {/* Side-by-Side Layout: Poetry | Analysis */}
            <main className="flex flex-col lg:flex-row gap-12">
                
                {/* Left Column: The Interactive Poem */}
                <aside className="lg:w-[45%] xl:w-[40%] flex-shrink-0 relative">
                    <div className="sticky top-8 border-y-2 border-black bg-white/50 h-[60vh] lg:h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide">
                         <PoetrySlider data={peacePoem} className="h-max min-h-full" />
                    </div>
                </aside>

                {/* Right Column: Deep Analysis (Newspaper columns) */}
                <article className="lg:w-[55%] xl:w-[60%] flex-grow space-y-12 pb-16">
                    
                    {/* 1. Dati Generali */}
                    <section className="bg-black text-white p-8">
                        <h3 className="text-xl font-display font-bold uppercase tracking-widest border-b border-white/20 pb-4 mb-6">1. Dati Generali</h3>
                        <div className="grid sm:grid-cols-2 gap-6 text-sm leading-relaxed">
                            <div>
                                <p className="mb-2"><strong className="uppercase tracking-wider text-white/60 block text-xs">Autore</strong> Rupert Brooke (1887-1915).</p>
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Titolo & Raccolta</strong> Peace I (Primo sonetto di cinque). Anno 1914, <em>1914 and Other Poems</em>.</p>
                            </div>
                            <div>
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Contesto Storico</strong> Scoppio della Prima Guerra Mondiale. Nella Gran Bretagna dei primi mesi prevaleva l&apos;entusiasmo. Brooke vive e rappresenta la guerra come occasione di purificazione morale contro una società pre-bellica avvertita come decadente e noiosa. Morirà nel 1915, senza conoscere la logorante guerra di trincea.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Comprensione del Testo */}
                    <section>
                        <h3 className="text-3xl font-display font-bold uppercase border-b-2 border-black pb-2 mb-6">2. Comprensione del Testo</h3>
                        <div className="columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-justify">
                            <p className="first-letter:text-7xl first-letter:font-black first-letter:font-display first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                                Ringraziamo Dio che ci ha fatto vivere in questo momento storico, che ha preso la nostra giovinezza e ci ha svegliati dal torpore, rendendoci forti, sicuri e pronti a tuffarci, come nuotatori, verso qualcosa di puro.
                            </p>
                            <p className="mt-4 indent-8">
                                Siamo felici di lasciare un mondo diventato vecchio e stanco, di allontanarci da cuori malati senza vero onore, dagli uomini mediocri e dalle loro canzoni tristi e sporche, e dall&apos;amore superficiale e vuoto.
                            </p>
                            <p className="mt-4 indent-8">
                                Noi che abbiamo provato vergogna abbiamo trovato lì la libertà, un luogo dove non esistono malattie o dolore, ma solo un sonno che guarisce. Nulla viene distrutto se non il corpo, e si perde solo il respiro. Nulla può disturbare la lunga pace del cuore se non il dolore, che però finirà. E la morte, che sembra un nemico, diventa quasi un&apos;amica.
                            </p>
                        </div>
                    </section>

                    {/* 3. Struttura e Forma */}
                    <section className="bg-[#eeebe2] p-8 border border-black/20">
                        <h3 className="text-2xl font-display font-bold uppercase text-center border-b border-black/20 pb-4 mb-6">3. Struttura e Forma</h3>
                        <div className="grid sm:grid-cols-2 gap-8 text-base">
                            <div>
                                <ul className="space-y-4">
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Genere & Strofe</strong>
                                        Sonetto di tipo Petrarchesco (14 versi). 2 strofe (ottava + sestina).
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Verso & Rime</strong>
                                        Pentametro giambico. Rime alternate (ABAB CDCD) nell&apos;ottava e ripetute (EFG EFG) nella sestina.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Enjambement</strong>
                                        Molto frequenti per mantenere fluido il senso verbale (es. vv. 1-2 &quot;matched us with His hour, / And caught...&quot;, vv. 3-4 &quot;sharpened power, / To turn...&quot;, vv. 4-5, 12-13).
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-4">
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Ritmo</strong>
                                        Solenne, calmo, fluido e non agitato. Dà alla guerra le sembianze di una missione positiva.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Figure Retoriche</strong>
                                        <strong>Allitterazione</strong> (&quot;Swimmers, sleeping&quot;) per dare solennità. <strong>Similitudine</strong> (soldati paragona a nuotatori in acque pure). <strong>Metafora</strong> (&quot;World grown old&quot; descrive la corruzione). <strong>Personificazione</strong> (&quot;Death&quot; ed &quot;Honour&quot; come entità vive). <strong>Antitesi/Ossimoro</strong> (&quot;Worst friend and enemy&quot;).
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Campo Semantico</strong>
                                        Netta divisione tra Religione/Salvezza (God, Peace, cleanness) e Guerra/Morte materiale (Death, body, agony).
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 4. Temi e Nuclei Significativi */}
                    <section>
                        <h3 className="text-3xl font-display font-bold uppercase border-b-2 border-black pb-2 mb-6">4. Temi e Nuclei Significativi</h3>
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">La guerra come forza purificatrice</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    La guerra è accolta con gioia: è l&apos;evento catartico che lava le scorie dei difetti umani, rendendo i giovani migliori e pronti all&apos;azione eroica.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Giovinezza e risveglio</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    I giovani, prima privi di scopo, sono &quot;svegliati&quot; dal conflitto, che dona loro un autentico motivo per cui vivere e lottare.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Critica alla società pre-bellica</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    Il mondo civile abbandonato è aspramente descritto come vecchio, senza onore, colmo di amori vuoti e canzoni sporche. La guerra salva dalla mediocrità.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5 & 6. Rappresentazione & Stile */}
                    <section className="grid sm:grid-cols-2 gap-12 border-t-4 border-black pt-8">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">5. La Rappresentazione della Guerra</h3>
                            <p className="text-justify mb-4">
                                <strong>Come appare?</strong> Simbolica, spirituale, irrealistica. È un&apos;esperienza di rinascita e liberazione dall&apos;apatia moderna.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Immagini:</strong> I nuotatori che si tuffano verso la purezza, il &quot;sonno&quot; come quiete suprema, la morte come luogo di guarigione e amica inaspettata.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Tono & Figure:</strong> Entusiasmo idealistico infuso di gratitudine religiosa. Nessuna disillusione. Emergono i giovani soldati (un &quot;noi&quot; generazionale) e l&apos;io lirico. Civili o scene di battaglia sono totalmente assenti.
                            </p>
                            <p className="text-justify">
                                <strong>Critica:</strong> Dura critica rivolta <em>non</em> alla guerra (vista positivamente), ma alla società borghese civile, considerata ipocrita e stanca.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">6. Linguaggio e Stile</h3>
                            <p className="text-justify mb-4">
                                <strong>Lessico:</strong> Dominano parole legate alla sfera religiosa e alla purezza (God, peace, honour, cleanness, clear eye). Il registro è sacrale. Nessun termine militare.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Stile dell&apos;autore:</strong> Lirico, armonioso, compatto (grazie al sonetto). Un inno corale, non diaristico né frammentario.
                            </p>
                            <p className="text-justify">
                                <strong>Suono:</strong> Le rime regolari e i parallelismi strutturali generano l&apos;effetto di una preghiera incantatoria.
                            </p>
                        </div>
                    </section>

                    {/* 7. Messaggio */}
                    <section className="border-t border-black/20 pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-6">7. Messaggio e Interpretazione Personale</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-justify mb-4">
                                    <strong>Visione dell&apos;autore:</strong> La pace interiore (Peace) si ottiene paradossalmente solo imbracciando le armi per una giusta causa. La morte del corpo non scalfisce la salvezza dell&apos;anima.
                                </p>
                                <p className="text-justify">
                                    <strong>Cosa colpisce di più:</strong> L&apos;energia positiva ed euforica scaturita dall&apos;inizio della guerra. Il contrasto tra la sanguinosa realtà trinceale che verrà e questo slancio immacolato è spiazzante.
                                </p>
                            </div>
                            <div className="bg-black text-white p-6 relative">
                                <div className="absolute top-2 right-2 text-white/20 font-serif text-6xl">&quot;</div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/70">Il Verso Centrale</h3>
                                <blockquote className="font-serif text-2xl leading-tight mb-4 italic">
                                    &quot;As swimmers into cleanness leaping&quot;
                                </blockquote>
                                <p className="text-sm border-t border-white/20 pt-4 opacity-90 text-justify">
                                    Traduce l&apos;ingresso in un conflitto mortale in un atto rinfrescante, volontario e sportivo, quasi liberatorio.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 8. Confronto */}
                    <section className="border-t-2 border-black pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-4">8. Confronto: Brooke vs Owen</h3>
                        <p className="text-lg text-justify leading-relaxed">
                            <strong>Somiglianze:</strong> Condividono l&apos;attenzione rivolta all&apos;esperienza del giovane soldato al fronte.
                        </p>
                        <p className="text-lg text-justify leading-relaxed mt-2">
                            <strong>Differenze:</strong> Mentre per Brooke il soldato è un &quot;nuotatore&quot; che si purifica nel sacrificio volontario, per Owen il soldato sta annegando (literalmente, nel gas) e la morte è uno spreco indegno, non una guarigione.
                        </p>
                    </section>

                </article>
            </main>

            {/* Footer Navigation */}
            <footer className="mt-12 border-t-2 border-black pt-6 text-xs uppercase tracking-[0.2em] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/the-soldier" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">&larr; PAGE 1: THE SOLDIER</Link>
                <div className="text-slate-400">1914 &amp; OTHER POEMS</div>
                <Link href="/the-dead" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">PAGE 3: THE DEAD (III) &rarr;</Link>
            </footer>
        </div>
    );
}
