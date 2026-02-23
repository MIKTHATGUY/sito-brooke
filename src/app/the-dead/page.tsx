import Link from "next/link";
import Image from "next/image";
import { PoetrySlider } from "@/components/poetry/PoetrySlider";
import { theDeadPoem } from "@/data/poems";

export default function TheDeadPage() {
    return (
        <div className="min-h-screen px-4 py-8 md:px-8 md:py-12 max-w-[1400px] mx-auto text-[#1a1a1a]">
            {/* Newspaper Header */}
            <header className="border-b-4 border-double border-black pb-4 mb-8">
                <div className="flex items-end justify-between uppercase text-xs tracking-[0.2em] font-bold border-b border-black pb-2 mb-2">
                    <span>LONDON EDITION</span>
                    <span className="hidden sm:inline">WAR POETRY SUPPLEMENT</span>
                    <span>PAGE 3</span>
                </div>
                <div className="text-center">
                    <Link href="/" className="hover:opacity-70 transition-opacity">
                        <span className="text-4xl md:text-6xl font-black uppercase font-display tracking-tight" style={{ transform: "scaleY(1.1)", display: "inline-block" }}>THE BROOKE TIMES</span>
                    </Link>
                </div>
            </header>

            {/* Article Headline */}
            <div className="text-center mb-12">
                <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block italic text-slate-500">Sonnet III</span>
                <h1 className="text-6xl sm:text-8xl md:text-[100px] leading-none font-bold uppercase font-display mb-6 border-b border-black pb-6 inline-block">
                    The Dead
                </h1>
                <h2 className="text-2xl md:text-3xl italic font-serif max-w-3xl mx-auto mt-6 text-slate-800">
                    Il sacrificio della giovinezza come dono supremo e ritorno dei grandi valori morali.
                </h2>
                <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest mb-8">
                    <span className="h-px bg-black w-16"></span>
                    <span>By Rupert Brooke (1887-1915)</span>
                    <span className="h-px bg-black w-16"></span>
                </div>

                {/* Feature Image */}
                <div className="relative w-full max-w-sm mx-auto aspect-[800/1048] border-2 border-black overflow-hidden bg-zinc-200">
                    <Image
                        src="/thedead.jpeg"
                        alt="The Dead illustration"
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
                         <PoetrySlider data={theDeadPoem} className="h-max min-h-full" />
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
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Titolo & Raccolta</strong> The Dead (Terzo sonetto di cinque). Anno 1914, <em>1914 and Other Poems</em>.</p>
                            </div>
                            <div>
                                <p><strong className="uppercase tracking-wider text-white/60 block text-xs">Contesto Storico</strong> Prima guerra mondiale (1914). Nel contesto del reclutamento volontario inglese, questi testi venivano addirittura usati durante i sermoni nelle chiese per spingere i giovani ad arruolarsi, dipingendo l&apos;impresa come eroica e moralmente indispensabile.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Comprensione del Testo */}
                    <section>
                        <h3 className="text-3xl font-display font-bold uppercase border-b-2 border-black pb-2 mb-6">2. Comprensione del Testo</h3>
                        <div className="columns-1 md:columns-2 gap-8 text-lg leading-relaxed text-justify">
                            <p className="first-letter:text-7xl first-letter:font-black first-letter:font-display first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                                Suonate forte le trombe sui morti coraggiosi e generosi! Nessuno di loro era ricco o speciale in vita, ma morendo ci hanno regalato doni immensamente più preziosi dell&apos;oro. Questi uomini hanno messo da parte l&apos;intero mondo; hanno versato il dolce vino rosso della loro giovinezza.
                            </p>
                            <p className="mt-4 indent-8">
                                Hanno rinunciato a tutti gli anni futuri di lavoro, di gioia e a quella pace tranquilla della vecchiaia. Hanno sacrificato persino i figli che avrebbero potuto avere, donando la loro stessa immortalità genetica.
                            </p>
                            <p className="mt-4 indent-8">
                                Suonate ancora le trombe! Attraverso la loro morte noi (i vivi) abbiamo recuperato la santità che mancava da troppo tempo, l&apos;Amore autentico e il Dolore vero. L&apos;Onore è tornato sulla terra come un re e ha ricompensato i suoi sudditi con regali degni della corona; la Nobiltà cammina nuovamente tra noi e noi abbiamo recuperato la nostra vera eredità.
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
                                        Sonetto di guerra. 1 Ottava (8 versi) e 1 Sestetto (6 versi).
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Verso & Rime</strong>
                                        Pentametro giambico (5 piedi, sillaba non accentata seguita da accentata). Rime incrociate (A-B-B-A, C-D-D-C) nell&apos;ottava, rime simili a incatenate (E-F-E, G-F-G) nel sestetto.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Enjambement</strong>
                                        Frequenti, legano indissolubilmente i versi (es. vv. 4-5, vv. 6-7).
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-4">
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Ritmo</strong>
                                        Solenne e maestosamente lento, scandito da molte virgole, esclamazioni e pause, simile a una marcia funebre trionfale.
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Figure Retoriche</strong>
                                        <strong>Apostrofe/Anafora</strong> (&quot;Blow out, you bugles&quot; ripetuto). <strong>Personificazione</strong> (Onore e Nobiltà come monarchi). <strong>Metafora</strong> (Sangue versato diventa &quot;sweet wine of youth&quot;). <strong>Antitesi</strong> (Oscurità pre-sacrificio vs ricchezza radiosa).
                                    </li>
                                    <li className="border-b border-black/10 pb-2">
                                        <strong className="block text-slate-500 uppercase tracking-widest text-xs mb-1">Campo Semantico</strong>
                                        Morte, Sacrificio e Valori morali assoluti. Il vocabolario celebra una transazione suprema: vita fisica per gloria eterna.
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
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Il sacrificio incalcolabile della giovinezza</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    I morti non offrono solo il loro presente, ma rinunciano al loro futuro: il lavoro, la vecchiaia serena e persino la potenziale discendenza (figli mai nati). Il sangue versato è il bene più prezioso.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Il Patriottismo e il ritorno dei Grandi Valori</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    La società, impoverita e priva di morale, viene &quot;salvata&quot; dal sangue dei giovani. La morte riporta la Nobiltà e l&apos;Onore sulla terra.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <h4 className="font-bold text-xl md:w-1/3 flex-shrink-0 border-t-2 border-black pt-2">Il valore trasfigurativo della morte</h4>
                                <p className="text-lg text-justify leading-relaxed md:w-2/3">
                                    La morte in trincea non è fine tragica ma inizio glorioso: è un altare su cui i caduti scambiano la loro vita ordinaria con la Santità universale.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5 & 6. Rappresentazione & Stile */}
                    <section className="grid sm:grid-cols-2 gap-12 border-t-4 border-black pt-8">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">5. La Rappresentazione della Guerra</h3>
                            <p className="text-justify mb-4">
                                <strong>Come appare?</strong> Come una cerimonia aristocratica e divina. Una transazione in cui si paga con la vita per comprare virtù astratte per il proprio Paese.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Immagini:</strong> Lo squillo trionfale delle trombe (bugles), il reame dell&apos;Onore, il &quot;vino&quot; rosso giovanile.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Tono & Figure:</strong> Celebrazione, fierezza e orgoglio incondizionato. Da una parte &quot;Loro&quot; (i morti eroici), dall&apos;altra &quot;Noi&quot; (la società che riceve la loro eredità inestimabile). Nessun accenno ai nemici.
                            </p>
                            <p className="text-justify">
                                <strong>Critica:</strong> Nessuna critica antimilitarista; la poesia è una potentissima apologia del martirio.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">6. Linguaggio e Stile</h3>
                            <p className="text-justify mb-4">
                                <strong>Lessico:</strong> Retorica altissima. Parole-chiave sono holiness, real love, pain, Honour, Nobility, royal. Sostantivi astratti con la maiuscola per indicare concetti assoluti e sacrali.
                            </p>
                            <p className="text-justify mb-4">
                                <strong>Stile dell&apos;autore:</strong> Monumentale e oratorio, strutturato per essere declamato o letto in pubblico durante le funzioni religiose.
                            </p>
                            <p className="text-justify">
                                <strong>Suono:</strong> Suono squillante all&apos;inizio di strofa (come la tromba evocata) e largo, regale nello scorrere dei versi.
                            </p>
                        </div>
                    </section>

                    {/* 7. Messaggio */}
                    <section className="border-t border-black/20 pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-6">7. Messaggio e Interpretazione Personale</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-justify mb-4">
                                    <strong>Visione dell&apos;autore:</strong> Brooke crede fermamente che la guerra sia l&apos;antidoto al declino morale. Solo un tributo di sangue generoso può restaurare le fondamenta spirituali di una nazione.
                                </p>
                                <p className="text-justify">
                                    <strong>Cosa colpisce di più:</strong> L&apos;argomentazione spietatamente logica seppur astratta: i giovani danno il loro futuro non nato affinché concetti come &quot;Onore&quot; possano tornare a &quot;camminare&quot; tra i vivi.
                                </p>
                            </div>
                            <div className="bg-black text-white p-6 relative">
                                <div className="absolute top-2 right-2 text-white/20 font-serif text-6xl">&quot;</div>
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/70">Il Verso Centrale</h3>
                                <blockquote className="font-serif text-2xl leading-tight mb-4 italic">
                                    &quot;They poured out the red sweet wine of youth&quot;
                                </blockquote>
                                <p className="text-sm border-t border-white/20 pt-4 opacity-90 text-justify">
                                    Eleva l&apos;atto cruento della morte per emorragia a un livello eucaristico, un&apos;offerta divina per eccellenza.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 8. Confronto */}
                    <section className="border-t-2 border-black pt-8">
                        <h3 className="text-2xl font-display font-bold uppercase mb-4">8. Confronto: Brooke vs Owen</h3>
                        <p className="text-lg text-justify leading-relaxed">
                            Mentre le &quot;trombe&quot; di Brooke suonano trionfanti e gloriose per evocare santità e onore (&quot;Blow out, you bugles!&quot;), in Owen (<em>Anthem for Doomed Youth</em>) le trombe e le campane suonano per il bestiame destinato al macello, indicando il massacro privo di qualsiasi nobiltà e senso logico.
                        </p>
                    </section>

                </article>
            </main>

            {/* Footer Navigation */}
            <footer className="mt-12 border-t-2 border-black pt-6 text-xs uppercase tracking-[0.2em] font-bold flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/peace" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">&larr; PAGE 2: PEACE</Link>
                <div className="text-slate-400">1914 &amp; OTHER POEMS</div>
                <Link href="/the-dead-iv" className="hover:bg-black hover:text-white px-4 py-2 transition-colors border border-transparent hover:border-black">PAGE 4: THE DEAD (IV) &rarr;</Link>
            </footer>
        </div>
    );
}
