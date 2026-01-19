import Link from 'next/link';
import { Rocket, ShieldCheck, Mail } from 'lucide-react';

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-blue-600 to-purple-600" />

            <div className="flex items-center gap-2 text-zinc-500 mb-8 uppercase tracking-widest text-xs font-bold">
                <ShieldCheck className="w-4 h-4" /> Acesso Verificado Kiwify
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Seu Futuro de <span className="gradient-text">Alta Performance</span> Começa Aqui.
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl mb-10">
                Bem-vindo ao portal exclusivo. Se você acaba de adquirir seu produto na Kiwify, valide seu e-mail para desbloquear o motor de IA e gerar seu guia personalizado.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                    <input
                        type="email"
                        placeholder="Seu e-mail da compra"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    />
                </div>
                <Link
                    href="/questionnaire"
                    className="bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                    Acessar Portal <Rocket className="w-4 h-4" />
                </Link>
            </div>

            <p className="mt-8 text-sm text-zinc-600 italic">
                * Acesso instantâneo para pagamentos aprovados.
            </p>
        </main>
    );
}
