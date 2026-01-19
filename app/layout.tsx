import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Mente Leve | Seu Plano de Produtividade Personalizado",
    description: "Recupere sua energia com um plano de rotina feito sob medida para você pela nossa IA.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans antialiased text-slate-900">{children}</body>
        </html>
    );
}
