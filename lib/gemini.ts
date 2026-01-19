import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Você é um Consultor de Alta Performance Humana e Estrategista de Negócios. Sua missão é transformar as respostas de um cliente em um plano de ação tático, prático e inspirador. Use formato Markdown rico com títulos, listas e citações. Foco em resultados imediatos e escalabilidade pessoal.",
});

export async function generatePerformancePlan(answers: string[]) {
    const prompt = `
    Analise as respostas deste cliente e crie um plano estratégico personalizado:
    ---
    Perguntas e Respostas:
    ${answers.map((a, i) => `P${i + 1}: ${a}`).join('\n')}
    ---
    O documento deve conter:
    1. # Diagnóstico de Potencial
    2. # Mapa de Gaps Estratégicos
    3. # Plano de 90 Dias (Fase 1: 0-30, Fase 2: 30-60, Fase 3: 60-90)
    4. # Mindset de Elite & Hábitos Críticos
    
    Retorne apenas o conteúdo em Markdown.
  `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}
