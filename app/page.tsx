import Link from 'next/link';

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            <div className="max-w-3xl w-full text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
                        Sua mente merece paz. <br />
                        Sua rotina merece ordem.
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Descubra como a Inteligência Artificial pode organizar seu dia com base no seu ritmo biológico. Responda 3 perguntas e receba seu protocolo personalizado.
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/questionnaire"
                        className="btn-black px-12 py-6 text-xl inline-block hover:opacity-90 shadow-2xl"
                    >
                        Começar Agora
                    </Link>
                </div>

                <div className="pt-12 flex items-center justify-center gap-8 border-t border-zinc-100 opacity-40 grayscale">
                    <span className="text-xs font-bold uppercase tracking-widest">IA Monitorada</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Privacidade Total</span>
                    <span className="text-xs font-bold uppercase tracking-widest">Método Bio-Rítmico</span>
                </div>
            </div>

            <footer className="absolute bottom-8 text-zinc-300 text-[10px] font-bold tracking-[0.3em] uppercase">
                Mente Leve AI • 2024
            </footer>
        </main>
    );
}
