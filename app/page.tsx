import Link from 'next/link';
import { CheckCircle, Clock, Moon, Zap, ShieldCheck, HeartPulse } from 'lucide-react';

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Barra de Garantia Superior */}
            <div className="bg-slate-50 py-2 border-b border-slate-100">
                <div className="container mx-auto px-4 flex justify-center items-center gap-2 text-xs font-medium text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-green-500" /> Satisfação Garantida ou seu dinheiro de volta em até 7 dias
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                        MÉTODO EXCLUSIVO 2024
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Recupere sua energia com um plano de rotina <span className="text-blue-600">feito sob medida</span> para você
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Chega de se sentir sobrecarregado. Nossa inteligência analisa seu perfil e entrega um guia personalizado para organizar seu dia em menos de 2 minutos.
                    </p>

                    <Link
                        href="/questionnaire"
                        className="btn-mint inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-lg uppercase tracking-wider mb-8"
                    >
                        Gerar Meu Protocolo Mente Leve <Zap className="w-5 h-5" />
                    </Link>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Digital & Instantâneo</span>
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Baseado em Cronobiologia</span>
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> +12.500 Planos Gerados</span>
                    </div>
                </div>
            </section>

            {/* Seção Cronotipo */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seu corpo tem um relógio único</h2>
                        <p className="text-slate-600">O segredo não é trabalhar mais, é trabalhar na hora certa.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="clinic-card p-8 text-center bg-white">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Leão</h3>
                            <p className="text-slate-500 text-sm">Energia explosiva pela manhã. Foco total antes do meio-dia.</p>
                        </div>
                        <div className="clinic-card p-8 text-center bg-white border-blue-200">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HeartPulse className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Urso</h3>
                            <p className="text-slate-500 text-sm">Acompanha o sol. Produtividade constante entre 10h e 16h.</p>
                        </div>
                        <div className="clinic-card p-8 text-center bg-white">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Moon className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Lobo</h3>
                            <p className="text-slate-500 text-sm">O gênio noturno. Criatividade e energia após às 18h.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que vem no PDF */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">O que você receberá em seu e-mail:</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-6 rounded-2xl bg-blue-50">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit"><Clock className="text-blue-600" /></div>
                            <div>
                                <h4 className="font-bold mb-1">Mapa de Foco 24h</h4>
                                <p className="text-sm text-slate-600">Horários exatos para trabalhar, descansar e se exercitar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl bg-green-50">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit"><Moon className="text-green-600" /></div>
                            <div>
                                <h4 className="font-bold mb-1">Guia Higiene do Sono</h4>
                                <p className="text-sm text-slate-600">O ritual para desligar sua mente e acordar renovado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl bg-orange-50">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit"><Zap className="text-orange-600" /></div>
                            <div>
                                <h4 className="font-bold mb-1">Estratégia Anti-Procrastinação</h4>
                                <p className="text-sm text-slate-600">Técnicas personalizadas para vencer seu maior bloqueio.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl bg-slate-100">
                            <div className="bg-white p-3 rounded-xl shadow-sm h-fit"><CheckCircle className="text-slate-600" /></div>
                            <div>
                                <h4 className="font-bold mb-1">Dica de Ouro da IA</h4>
                                <p className="text-sm text-slate-600">Conselho específico para sua maior dificuldade atual.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rodapé CTA */}
            <section className="py-24 px-4 bg-slate-900 text-white text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Pronto para ter uma Mente Leve?</h2>
                <Link
                    href="/questionnaire"
                    className="btn-mint inline-flex items-center gap-3 px-10 py-6 rounded-2xl text-xl uppercase tracking-wider"
                >
                    Gerar Meu Protocolo Agora <Zap className="w-6 h-6" />
                </Link>
                <p className="mt-8 text-slate-400 text-sm">Garantia total de 7 dias • Acesso vitalício ao guia</p>
            </section>
        </main>
    );
}
