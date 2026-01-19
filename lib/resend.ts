import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function sendPerformancePDF(email: string, pdfBuffer: Buffer) {
    return await resend.emails.send({
        from: 'Suporte <seu-email@vendas.com.br>',
        to: [email],
        subject: '🔥 Seu Plano Estratégico de Alta Performance está aqui!',
        html: `
      <h1>Parabéns por dar o primeiro passo!</h1>
      <p>O seu guia personalizado foi gerado pela nossa IA com base nas suas respostas.</p>
      <p>O arquivo PDF está em anexo.</p>
      <p><strong>Vamos pra cima!</strong></p>
    `,
        attachments: [
            {
                filename: 'plano-estrategico.pdf',
                content: pdfBuffer,
            },
        ],
    });
}
