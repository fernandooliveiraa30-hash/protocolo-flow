import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Você é um Terapeuta Organizacional e Estrategista de Criatividade da 'Mente Leve'. 
  Seu tom deve ser extremamente empático, humano e acolhedor. Evite termos técnicos frios. 
  Sua missão é criar um Protocolo de Rotina que pareça um abraço estratégico.
  
  O documento deve sempre começar com: 'Olá [Nome do Cliente], entendemos que sua rotina tem sido desafiadora. Com base nas suas respostas, aqui está o seu caminho para uma mente mais leve...'
  
  Você deve incluir obrigatoriamente:
  1. # Seu Plano de 24 Horas: Um cronograma ultra-específico com horários quebrados (ex: Às 10:15 faça isso...).
  2. # Análise de Cronotipo: Identifique se o cliente é Leão, Urso ou Lobo baseado no perfil de energia.
  3. # O Ritual de Descompressão: Guia de higiene do sono.
  4. # Dica de Ouro Personalizada: Um conselho direto focado na maior dor citada (celular, cansaço, foco, etc).`,
});

export async function generatePerformancePlan(answers: string[]) {
  const prompt = `
    Analise com carinho as respostas deste cliente:
    ---
    1. Objetivo: ${answers[0]}
    2. Experiência: ${answers[1]}
    3. Ferramentas: ${answers[2]}
    4. Maior Dor/Desafio: ${answers[3]}
    5. Onde quer chegar: ${answers[4]}
    ---
    
    Crie o Protocolo Mente Leve. Seja específico, use horários e dê um conselho que mude o jogo para a Dor número 4. 
    Retorne apenas o conteúdo em Markdown rico.
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
