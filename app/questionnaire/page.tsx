import QuestionnaireForm from '@/components/QuestionnaireForm';

export default function QuestionnairePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0a0a0a]">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold gradient-text mb-4">Personalize sua Jornada</h1>
                <p className="text-zinc-400 max-w-lg mx-auto">
                    Responda estas 5 perguntas para que nossa IA de alta performance crie seu plano estratégico personalizado.
                </p>
            </div>

            <QuestionnaireForm />
        </main>
    );
}
