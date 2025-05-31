import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import "@fontsource/jetbrains-mono";
import MatrixBackground from "@/components/MatrixBackground"
import Navbar from '@/components/Navbar'
import { Toaster } from "sonner";

const myFont = localFont({
    src: '../public/VictorMonoNFMNerdFont-Regular.ttf'
})

export const metadata: Metadata = {
    title: "Abdullah's Portfolio",
    description: "Abdullah Shoaib's terminal powered Portfolio page",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={myFont.className}>
            <body className="antialiased bg-black" >
                <MatrixBackground />
                <Navbar />
                {children}
                <Toaster theme="dark" richColors={true} />
            </body>
        </html>
    );
}
