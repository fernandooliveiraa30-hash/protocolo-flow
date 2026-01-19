'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Send, CheckCircle2 } from 'lucide-react';

const QUESTIONS = [
    "Qual seu principal objetivo com este produto?",
    "Em qual nível de experiência você se encontra hoje?",
    "Quais ferramentas você já utiliza no seu dia a dia?",
    "Qual o seu maior desafio atual?",
    "Onde você quer chegar nos próximos 6 meses?"
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
                body: JSON.stringify({ answers: finalAnswers }),
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
            <div className="text-center p-8 glass-card">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Respostas Enviadas!</h2>
                <p className="text-zinc-400">
                    Nossa IA está gerando seu guia personalizado. Em instantes você o receberá no e-mail cadastrado na Kiwify.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="mb-8">
                <div className="h-1 bg-zinc-800 w-full rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                </div>
                <p className="text-sm text-zinc-500 mt-2">Pergunta {step + 1} de {QUESTIONS.length}</p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass-card p-8"
                >
                    <h2 className="text-xl md:text-2xl font-semibold mb-6">{QUESTIONS[step]}</h2>

                    <textarea
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-zinc-100 focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all placeholder:text-zinc-600"
                        placeholder="Digite sua resposta aqui..."
                        rows={4}
                    />

                    <button
                        onClick={handleNext}
                        disabled={!currentAnswer.trim() || isSubmitting}
                        className="mt-6 flex items-center justify-center gap-2 w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            "Processando com IA..."
                        ) : step === QUESTIONS.length - 1 ? (
                            <>Finalizar Guia <Send className="w-4 h-4" /></>
                        ) : (
                            <>Próxima Pergunta <ChevronRight className="w-4 h-4" /></>
                        )}
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
