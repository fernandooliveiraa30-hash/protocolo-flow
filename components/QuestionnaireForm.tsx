'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Send, CheckCircle2, Heart, ShieldCheck } from 'lucide-react';

const QUESTIONS = [
    "Como podemos te chamar?",
    "Qual o seu maior desejo ao buscar uma rotina mais leve?",
    "Qual momento do dia você sente que sua bateria zera?",
    "O que mais rouba sua energia hoje? (ex: celular, falta de sono, muitas tarefas)",
    "Se pudesse mudar apenas uma coisa nos seus próximos 30 dias, o que seria?"
];

export default function QuestionnaireForm() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const handleNext = () => {
        if (!currentAnswer.trim()) return;

        const newAnswers = [...answers, currentAnswer];
        setAnswers(newAnswers);
        setCurrentAnswer('');

        if (step < QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            submitQuestionnaire(newAnswers);
        }
    };

    const submitQuestionnaire = async (finalAnswers: string[]) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/process-questionnaire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: finalAnswers, email: 'teste@exemplo.com' }), // Em produção capturamos o e-mail real
            });

            if (response.ok) {
                setIsFinished(true);
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isFinished) {
        return (
            <div className="text-center p-12 clinic-card animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-800">Seu protocolo está a caminho!</h2>
                <p className="text-slate-500 max-w-sm mx-auto">
                    Nossa inteligência está desenhando cada detalhe do seu plano. Em 2 minutos, ele chegará no e-mail cadastrado na sua compra.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="mb-10">
                <div className="h-1.5 bg-slate-100 w-full rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-sm font-medium text-slate-400">Etapa {step + 1} de {QUESTIONS.length}</p>
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-tighter">Mente Leve</p>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    className="clinic-card p-10 bg-white"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800 leading-tight">
                        {QUESTIONS[step]}
                    </h2>

                    <input
                        autoFocus
                        type="text"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xl text-slate-800 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-300"
                        placeholder="Comece a digitar..."
                    />

                    <button
                        onClick={handleNext}
                        disabled={!currentAnswer.trim() || isSubmitting}
                        className="mt-10 flex items-center justify-center gap-3 w-full btn-mint text-black font-bold py-6 rounded-2xl text-lg transition-all disabled:opacity-30 disabled:grayscale"
                    >
                        {isSubmitting ? (
                            "Construindo seu Guia..."
                        ) : step === QUESTIONS.length - 1 ? (
                            <>Concluir Meu Plano <Send className="w-5 h-5" /></>
                        ) : (
                            <>Próxima Etapa <ChevronRight className="w-5 h-5" /></>
                        )}
                    </button>

                    <p className="text-center mt-6 text-slate-400 text-sm flex items-center justify-center gap-2">
                        Suas respostas são privadas e seguras <ShieldCheck className="w-4 h-4" />
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
