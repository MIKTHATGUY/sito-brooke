import Link from "next/link";
import Image from "next/image";
import { PoetrySlider } from "@/components/poetry/PoetrySlider";
import { theSoldierPoem } from "@/data/poems";

export default function TheSoldierPage() {
    return (
        <div className="min-h-screen px-4 py-8 md:px-8 md:py-12 max-w-[1400px] mx-auto text-[#1a1a1a]">
            {/* Newspaper Header */}
            <header className="border-b-4 border-double border-black pb-4 mb-8">
                <div className="flex items-end justify-between uppercase text-xs tracking-[0.2em] font-bold border-b border-black pb-2 mb-2">
                    <span>LONDON EDITION</span>
                    <span className="hidden sm:inline">WAR POETRY SUPPLEMENT</span>
                    <span>PAGE 1</span>
                </div>
                <div className="text-center">
                    <Link href="/" className="hover:opacity-70 transition-opacity">
                        <span className="text-4xl md:text-6xl font-black uppercase font-display tracking-tight" style={{ transform: "scaleY(1.1)", display: "inline-block" }}>THE BROOKE TIMES</span>
                    </Link>
                </div>
            </header>

            {/* Article Headline */}
            <div className="text-center mb-12">
                <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block italic text-slate-500">Sonnet V</span>
                <h1 className="text-6xl sm:text-8xl md:text-[100px] leading-none font-bold uppercase font-display mb-6 border-b border-black pb-6 inline-block">
                    The Soldier
                </h1>
                <h2 className="text-2xl md:text-3xl italic font-serif max-w-3xl mx-auto mt-6 text-slate-800">
                    L&apos;identificazione totale con la patria e l&apos;immortalità dell&apos;anima.
                </h2>
                <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="h-px bg-black w-16"></span>
                    <span>By Rupert Brooke (1887-1915)</span>
                    <span className="h-px bg-black w-16"></span>
                </div>

                {/* Feature Image */}
                <div className="relative w-full max-w-3xl mx-auto aspect-[1080/621] border-2 border-black overflow-hidden bg-zinc-200">
                    <Image
                        src="/thesoldier.jpeg"
                        alt="The Soldier illustration"
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
                         <PoetrySlider data={theSoldierPoem} className="h-max min-h-full" />
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
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Titolo & Raccolta</strong> The Soldier. Anno 1914, inserito nella raccolta <em>1914 and Other Poems</em>.</p>
                            </div>
                            <div>
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Contesto Storico</strong> Inizio della Prima Guerra Mondiale. In Gran Bretagna dominava un forte entusiasmo patriottico e l&apos;arruolamento era visto come una nobile impresa eroica.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Comprensione del Testo */}
                    <section>
                        <h3 className="text-3xl font-display font-bold uppercase border-b-2 border-black pb-2 mb-6">2. Comprensione del Testo</h3>
                        <div className="columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-justify">
                            <p className="first-letter:text-7xl first-letter:font-black first-letter:font-display first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                                Se dovessi morire in battaglia, voglio che tu pensi solo a una cosa di me: che c&apos;è un punto specifico in una terra straniera che apparterrà all&apos;Inghilterra per sempre. In quel terreno ci sarà un corpo nascosto, molto più &quot;ricco&quot; della terra che lo circonda, perché quel corpo è un pezzo dell&apos;Inghilterra stessa.
                            </p>
                            <p className="mt-4 indent-8">
                                L&apos;Inghilterra mi ha partorito, ha plasmato il mio carattere e mi ha dato la consapevolezza. Il mio Paese mi ha dato i suoi fiori da amare e i suoi sentieri da percorrere. Io sono un corpo che appartiene all&apos;Inghilterra, che respira aria inglese, lavato dai fiumi inglesi e benedetto dal sole inglese.
                            </p>
                            <p className="mt-4 indent-8">
                                E considera questo: il mio cuore, purificato da ogni male attraverso la morte, diventerà un battito continuo all&apos;interno della mente di Dio (la &quot;Mente Eterna&quot;). Da lì, restituirà all&apos;universo tutti i pensieri e le esperienze che l&apos;Inghilterra mi ha donato. Restituirò le immagini e i suoni della mia casa; i bei sogni che erano felici come i giorni; le risate condivise con gli amici e un senso di gentilezza. Tutto questo continuerà a vivere in un cuore che finalmente è in pace, sotto un paradiso inglese.
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
                                        Sonetto. 2 strofe (un&apos;ottava e una sestina).
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Verso & Rime</strong>
                                        Pentametro giambico (verso di dieci/undici sillabe diviso in 5 piedi). Rime alternate e ripetute: ABAB CDCD nell&apos;ottava ed EFG EFG nella sestina.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Enjambement</strong>
                                        Sì, molto significativi. Ad esempio ai vv. 1-2 (&quot;If I should die...&quot;), che sposta l&apos;attenzione dal pensiero angosciante della morte alla destinazione gloriosa del corpo. Un altro tra i versi 11-12, dove l&apos;interruzione isola e imprime nella mente del lettore l&apos;immagine dell&apos;<em>English heaven</em>.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-4">
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Ritmo & Figure Retoriche</strong>
                                        Inizialmente solenne e regolare, diventa più incalzante e spirituale nella sestina finale. <strong>Allitterazione</strong>: crea musicalità. <strong>Personificazione</strong>: L&apos;Inghilterra come Madre. <strong>Metafora</strong>: Il battito nella mente eterna rappresenta l&apos;anima immortale. <strong>Anafora</strong>: Ripetizione martellante di &quot;English/England&quot;.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Campo Semantico</strong>
                                        Natura unita alla Patria. Parole come <em>dust, field, flowers, ways, suns, rivers, air</em> si fondono con il concetto di Inghilterra, rendendo il soldato e la terra un&apos;unica entità sacra.
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
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">L&apos;idealismo patriottico e la &quot;Madre&quot; Inghilterra</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    La patria è una madre assoluta che ha nutrito lo spirito del poeta. Il sacrificio non è una tragedia, ma il naturale adempimento di un dovere verso chi gli ha dato la vita e la gioia.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Il legame tra Uomo e Terra (Identità)</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    Il corpo del soldato non è un individuo isolato, ma pura terra inglese (&quot;un corpo d&apos;Inghilterra&quot;). Morendo, egli conquista simbolicamente quel frammento di campo straniero, rendendolo inglese per l&apos;eternità.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Il sacrificio come purificazione</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    La morte non porta con sé dolore fisico o fango, ma lava via ogni male (&quot;all evil shed away&quot;), purificando il soldato.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">L&apos;immortalità dell&apos;anima e trasfigurazione</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    Oltre la morte fisica, l&apos;essenza del soldato sopravvive come puro spirito, unendosi alla mente universale di Dio, restituendo alla creazione l&apos;amore e la pace ricevuti in vita.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5 & 6. Rappresentazione & Stile */}
                    <section className="grid sm:grid-cols-2 gap-12 border-t-4 border-black pt-8">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">5. La Rappresentazione della Guerra</h3>
                            <p className="text-justify mb-4">
                                <strong>Come appare?</strong> Simbolica, spirituale e profondamente idealizzata. Mancano del tutto fango, orrore o violenza.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Immagini:</strong> L&apos;immagine centrale non è la battaglia, ma il &quot;campo straniero&quot; (foreign field) trasformato in terra consacrata dalla sepoltura del soldato.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Tono & Figure:</strong> Sereno, fiducioso, orgoglioso e solenne. Manca ogni traccia di paura. L&apos;io lirico domina la scena; non ci sono né commilitoni, né nemici, né civili.
                            </p>
                            <p className="text-justify">
                                <strong>Critica:</strong> Nessuna. La guerra è nobilitata e giustificata come sommo atto eroico.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">6. Linguaggio e Stile</h3>
                            <p className="text-justify mb-4">
                                <strong>Lessico:</strong> Alto, religioso e spirituale (honour, peace, eternal mind). Assenza totale di termini tecnici militari.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Stile:</strong> Solenne, armonioso e controllato, incorniciato in modo rigoroso e rassicurante dalla struttura del sonetto classico.
                            </p>
                            <p className="text-justify">
                                <strong>Suono:</strong> La regolarità del pentametro giambico e lo schema rigido delle rime infondono un ritmo dolce e pacifico, simile a una preghiera.
                            </p>
                        </div>
                    </section>

                    {/* 7. Messaggio */}
                    <section className="border-t border-black/20 pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-6">7. Messaggio e Interpretazione Personale</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-justify mb-4">
                                    <strong>Visione dell&apos;autore:</strong> La guerra è l&apos;occasione perfetta per affermare i valori supremi. Donandosi alla patria, l&apos;uomo trova il senso ultimo della propria esistenza.
                                </p>
                                <p className="text-justify">
                                    <strong>Cosa colpisce di più:</strong> L&apos;assoluta e quasi ingenua rimozione di qualsiasi bruttura legata al conflitto reale, testimonianza preziosa dell&apos;entusiasmo pre-trincea.
                                </p>
                            </div>
                            <div className="bg-black text-white p-6 relative">
                                <div className="absolute top-2 right-2 text-white/20 font-serif text-6xl">&quot;</div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/70">Il Verso Centrale</h3>
                                <blockquote className="font-serif text-2xl leading-tight mb-4 italic">
                                    &quot;If I should die, think only this of me...&quot;
                                </blockquote>
                                <p className="text-sm border-t border-white/20 pt-4 opacity-90 text-justify">
                                    Stabilisce un patto di &quot;memoria selettiva&quot;: il poeta chiede che venga ricordato non lo scempio della morte, ma solo la gloria dell&apos;ideale.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 8. Confronto */}
                    <section className="border-t-2 border-black pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-4">8. Confronto: Brooke vs Owen</h3>
                        <p className="text-lg text-justify leading-relaxed">
                            <strong>Somiglianze:</strong> Entrambi pongono al centro il soldato nella Prima Guerra Mondiale.
                        </p>
                        <p className="text-lg text-justify leading-relaxed mt-2">
                            <strong>Differenze:</strong> Brooke è l&apos;idealista della prima ora: esalta il sacrificio patriottico velando la morte di santità. Owen (es. <em>Dulce et Decorum Est</em>) è il realista tragico: denuncia l&apos;inganno della propaganda, mostrando la carne straziata e l&apos;inutile orrore del conflitto.
                        </p>
                    </section>

                </article>
            </main>

            {/* Footer Navigation */}
            <footer className="mt-12 border-t-2 border-black pt-6 text-xs uppercase tracking-[0.2em] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">&larr; FRONT PAGE</Link>
                <div className="text-slate-400">1914 &amp; OTHER POEMS</div>
                <Link href="/peace" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">PAGE 2: PEACE &rarr;</Link>
            </footer>
        </div>
    );
}
