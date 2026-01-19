import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log para depuração (Remover em produção)
        console.log('Webhook Kiwify recebido:', body);

        const { order_status, customer } = body;

        if (order_status === 'paid') {
            const email = customer.email;

            // Aqui você integraria com seu banco de dados para marcar este e-mail como "Autorizado"
            console.log(`Acesso liberado para: ${email}`);

            // Opcional: Enviar e-mail de boas vindas com link do questionário usando Resend aqui

            return NextResponse.json({ message: 'Acesso liberado com sucesso' }, { status: 200 });
        }

        return NextResponse.json({ message: 'Pagamento não processado ou pendente' }, { status: 200 });
    } catch (error) {
        console.error('Erro no Webhook:', error);
        return NextResponse.json({ error: 'Erro interno ao processar webhook' }, { status: 500 });
    }
}
