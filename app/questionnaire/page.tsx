import QuestionnaireForm from '@/components/QuestionnaireForm';
import { HeartPulse } from 'lucide-react';

export default function QuestionnairePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
            <div className="mb-12 text-center max-w-2xl px-4">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
                    <HeartPulse className="w-5 h-5" /> Clínica de Produtividade Mente Leve
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">O primeiro passo para o seu novo eu</h1>
                <p className="text-slate-500 text-lg">
                    Responda com calma. Nossos especialistas digitais usarão suas respostas para criar o protocolo manual mais completo que você já leu.
                </p>
            </div>

            <QuestionnaireForm />
        </main>
    );
}
