import QuestionnaireForm from '@/components/QuestionnaireForm';
import { Zap } from 'lucide-react';

export default function QuestionnairePage() {
    return (
        <main className="min-h-screen bg-deep-mesh flex flex-col items-center justify-center py-20 relative overflow-hidden">
            <div className="glow-orb w-[500px] h-[500px] bg-cyan-600/20 top-0 -right-40" />
            <div className="glow-orb w-[500px] h-[500px] bg-purple-600/20 bottom-0 -left-40" />

            <div className="mb-16 text-center z-10 px-6">
                <div className="inline-flex items-center gap-2 text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                    <Zap className="w-4 h-4 fill-cyan-500" /> Analisador Biométrico IA
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                    CRIANDO SEU <br /> <span className="text-neon-gradient">PROTOCOLO</span>.
                </h1>
                <p className="text-slate-500 max-w-sm mx-auto font-medium">
                    Dê as informações corretas para que nossa IA gere o plano mais preciso que você já usou.
                </p>
            </div>

            <div className="w-full z-10">
                <QuestionnaireForm />
            </div>

            <footer className="mt-20 text-[10px] font-bold text-slate-700 tracking-[0.5em] uppercase z-10">
                Mente Leve AI v2.0 • Protocolo Seguro
            </footer>
        </main>
    );
}
