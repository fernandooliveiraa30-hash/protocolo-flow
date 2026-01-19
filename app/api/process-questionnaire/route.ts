import { NextResponse } from 'next/server';
import { generatePerformancePlan } from '@/lib/gemini';
import { sendPerformancePDF } from '@/lib/resend';
import { PerformancePDF } from '@/lib/pdf-template';
import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';

export async function POST(request: Request) {
    try {
        const { answers, email = 'cliente@exemplo.com' } = await request.json();

        if (!answers || !Array.isArray(answers)) {
            return NextResponse.json({ error: 'Respostas inválidas' }, { status: 400 });
        }

        // 1. Gerar Conteúdo com Gemini
        console.log('Iniciando geração IA...');
        const markdownContent = await generatePerformancePlan(answers);

        // 2. Gerar PDF Buffer
        console.log('Gerando PDF...');
        const pdfElement = React.createElement(PerformancePDF, { content: markdownContent });
        // @ts-ignore
        const pdfBuffer = await renderToBuffer(pdfElement);

        // 3. Enviar E-mail
        console.log('Enviando e-mail...');
        await sendPerformancePDF(email, pdfBuffer);

        return NextResponse.json({
            success: true,
            message: 'Plano gerado e enviado com sucesso!'
        });

    } catch (error: any) {
        console.error('Erro no processamento:', error);
        return NextResponse.json({
            error: 'Erro ao processar respostas. Tente novamente.',
            details: error.message
        }, { status: 500 });
    }
}
