import QuestionnaireForm from '@/components/QuestionnaireForm';

export default function QuestionnairePage() {
    return (
        <main className="min-h-screen bg-white py-20">
            <div className="container mx-auto">
                <header className="text-center mb-16">
                    <div className="inline-block px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-4">
                        Análise de Perfil Mente Leve
                    </div>
                </header>

                <QuestionnaireForm />
            </div>
        </main>
    );
}
