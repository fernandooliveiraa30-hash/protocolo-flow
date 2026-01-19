'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const STEPS = [
    {
        question: "Como você se sente ao acordar na maioria dos dias?",
        options: ["Energizado e pronto", "Cansado, preciso de café", "Confuso e sem rumo", "Completamente exausto"]
    },
    {
        question: "Qual o seu maior 'ladrão de tempo' hoje?",
        options: ["Redes Sociais/Celular", "Procrastinação", "Muitas reuniões", "Desorganização total"]
    },
    {
        question: "Qual o seu principal objetivo com o Mente Leve?",
        options: ["Mais produtividade", "Menos estresse", "Dormir melhor", "Ter tempo para hobbies"]
    }
];

export default function QuestionnaireForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleOptionClick = (option: string) => {
        const newAnswers = [...answers, option];
        setAnswers(newAnswers);

        if (currentStep < STEPS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            startProcessing();
        }
    };

    const startProcessing = () => {
        setIsProcessing(true);
        // Simulação de progresso da IA para gerar valor percebido
        let interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 98) {
                    clearInterval(interval);
                    completeQuestionnaire();
                    return 98;
                }
                return prev + 1;
            });
        }, 50);
    };

    const completeQuestionnaire = async () => {
        // Aqui enviaríamos os dados para a API e redirecionaríamos para o checkout
        console.log("Finalizado!", answers);
        // Simulação de delay final
        setTimeout(() => {
            window.location.href = "https://pay.kiwify.com.br/G27PtZp";
        }, 1500);
    };

    if (isProcessing) {
        return (
            <div className="max-w-md mx-auto text-center py-20 px-6">
                <Loader2 className="w-12 h-12 animate-spin mx-auto mb-6 text-zinc-900" />
                <h2 className="text-3xl font-bold mb-2">Processando seu perfil...</h2>
                <p className="text-zinc-500 mb-8">Nossa IA está cruzando seus dados com padrões de cronobiologia.</p>

                <div className="progress-bar w-full">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">{progress}% Concluído</p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto px-6">
            <div className="mb-12">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-4 text-zinc-400 text-center">
                    Passo {currentStep + 1} de {STEPS.length}
                </p>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight">
                        {STEPS[currentStep].question}
                    </h2>

                    <div className="grid gap-4">
                        {STEPS[currentStep].options.map((option, idx) => (
                            <div
                                key={idx}
                                onClick={() => handleOptionClick(option)}
                                className="option-card group flex justify-between items-center"
                            >
                                <span className="text-xl font-medium text-zinc-600 group-hover:text-black transition-colors">
                                    {option}
                                </span>
                                <div className="w-6 h-6 rounded-full border border-zinc-200 group-hover:border-black group-hover:bg-black transition-all" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="mt-12 text-center">
                <p className="text-xs text-zinc-300 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-3 h-3" /> Suas respostas são anônimas e protegidas
                </p>
            </div>
        </div>
    );
}
