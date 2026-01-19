'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Send, Heart, Zap, ShieldCheck } from 'lucide-react';

const QUESTIONS = [
    "Para começarmos, qual o seu primeiro nome?",
    "Seu objetivo principal hoje: Recuperar energia ou parar de procrastinar?",
    "Qual o horário do dia em que você sente que seu foco simplesmente desaparece?",
    "O que mais te atrapalha hoje? (Celular, excesso de tarefas ou sono ruim)",
    "Em 30 dias, como você quer estar se sentindo ao acordar?"
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
                body: JSON.stringify({ answers: finalAnswers, email: 'teste@exemplo.com' }),
            });
            if (response.ok) setIsFinished(true);
        } catch (error) {
            console.error('Erro:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isFinished) {
        return (
            <div className="text-center p-12 glass rounded-[3rem] animate-in fade-in zoom-in duration-700 max-w-lg mx-auto">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-8 border-cyan-500/50">
                    <Heart className="w-10 h-10 text-cyan-400 animate-pulse" />
                </div>
                <h2 className="text-4xl font-black mb-4 tracking-tighter">PROTOCOLO ATIVO!</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Nossos servidores estão processando seu mapa 24h. Verifique sua caixa de entrada em instantes.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="mb-12">
                <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-600"
                        animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="glass p-12 md:p-16 rounded-[3.5rem] border-white/10"
                >
                    <span className="text-cyan-500 font-bold text-xs tracking-widest uppercase mb-4 block">Pergunta {step + 1}/5</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight leading-none text-white">
                        {QUESTIONS[step]}
                    </h2>

                    <input
                        autoFocus
                        type="text"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-2xl text-white focus:ring-4 focus:ring-cyan-500/20 focus:outline-none transition-all placeholder:text-white/10"
                        placeholder="Sua resposta..."
                    />

                    <button
                        onClick={handleNext}
                        disabled={!currentAnswer.trim() || isSubmitting}
                        className="mt-12 flex items-center justify-center gap-4 w-full btn-glow text-white font-bold py-7 rounded-2xl text-xl transition-all"
                    >
                        {isSubmitting ? (
                            "RECODIFICANDO SUA ROTINA..."
                        ) : step === QUESTIONS.length - 1 ? (
                            <>FINALIZAR MEU PROTOCOLO <Send className="w-6 h-6" /></>
                        ) : (
                            <>PRÓXIMA ETAPA <ChevronRight className="w-6 h-6" /></>
                        )}
                    </button>

                    <div className="mt-8 flex justify-center items-center gap-6 opacity-40">
                        <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase"><ShieldCheck className="w-4 h-4" /> IA Encrypt</div>
                        <div className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase"><Zap className="w-4 h-4" /> Fast AI</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
