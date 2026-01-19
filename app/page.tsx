'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Moon, HeartPulse, CheckCircle2, ShieldCheck, Mail, ArrowRight, Star } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-deep-mesh selection:bg-cyan-500/30">
            {/* Navegação Minimalista */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 glass border-x-0 border-t-0 bg-black/20">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        MENTE LEVE<span className="text-cyan-500">.</span>AI
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                        <a href="#metodo" className="hover:text-white transition-colors">O Método</a>
                        <a href="#perfis" className="hover:text-white transition-colors">Perfis</a>
                        <Link href="/questionnaire" className="px-4 py-2 glass rounded-lg text-white hover:bg-white/10 transition-colors">
                            Acesso Cliente
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6">
                <div className="glow-orb w-96 h-96 bg-purple-600 top-20 -left-20" />
                <div className="glow-orb w-96 h-96 bg-cyan-600 bottom-0 -right-20" />

                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full text-xs font-bold text-cyan-400 mb-8 tracking-widest uppercase"
                    >
                        <Star className="w-3 h-3 fill-cyan-400" /> A Revolução da Produtividade Humana
                    </motion.div>

                    <motion.h1
                        {...fadeInUp}
                        className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]"
                    >
                        Sua rotina <span className="text-neon-gradient">Recodificada</span> <br />
                        pela Inteligência Artificial.
                    </motion.h1>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Chega de soluções genéricas. Nossa IA analisa seu ritmo biológico, estresse e metas para entregar um mapa tático de 24h em menos de 120 segundos.
                    </motion.p>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/questionnaire"
                            className="btn-glow px-10 py-6 text-white font-bold text-lg flex items-center gap-3 w-full md:w-auto justify-center group"
                        >
                            GERAR MEU PROTOCOLO AGORA
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                                    U{i}
                                </div>
                            ))}
                            <div className="pl-6 text-sm text-slate-500 font-medium">
                                <span className="text-white font-bold">+12k</span> usuários ativos
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Proof Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-24 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
                    >
                        <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck /> IA SEGURA</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Zap /> FAST GEN</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Mail /> RESEND API</div>
                        <div className="flex items-center gap-2 font-bold text-xl">Kiwify Approved</div>
                    </motion.div>
                </div>
            </section>

            {/* Perfis Biológicos - Cards Glassmorphism */}
            <section id="perfis" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">O Fim da Procrastinação Biológica</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Sincronizamos suas tarefas com o horário de pico dos seus hormônios.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "LEÃO", desc: "Produtividade explosiva ao amanhecer.", icon: <Zap className="text-orange-400" />, color: "border-orange-500/30" },
                            { title: "URSO", desc: "Sincronia perfeita com o ritmo solar.", icon: <HeartPulse className="text-cyan-400" />, color: "border-cyan-500/30" },
                            { title: "LOBO", desc: "Alta performance e foco no pôr do sol.", icon: <Moon className="text-purple-400" />, color: "border-purple-500/30" }
                        ].map((perf, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`glass glass-hover p-10 rounded-[2.5rem] border-t-2 ${perf.color}`}
                            >
                                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8">
                                    {perf.icon}
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tighter">{perf.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {perf.desc} Nossa IA detecta esse padrão e aloca suas tarefas difíceis exatamente quando seu cérebro está pronto.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer / CTA final */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="glow-orb w-64 h-64 bg-cyan-500 -top-20 -left-20" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Chega de lutar contra o <br /> seu próprio relógio.</h2>
                    <Link
                        href="/questionnaire"
                        className="btn-glow px-12 py-7 text-white font-bold text-xl inline-flex items-center gap-4"
                    >
                        QUERO MEU PROTOCOLO <Zap className="w-6 h-6" />
                    </Link>
                    <div className="mt-8 flex items-center justify-center gap-4 text-xs font-bold text-slate-500 tracking-widest uppercase">
                        <ShieldCheck className="w-4 h-4 text-green-500" /> GARANTIA DE 7 DIAS • IA DE ALTA PERFORMANCE
                    </div>
                </div>
            </section>
        </div>
    );
}
