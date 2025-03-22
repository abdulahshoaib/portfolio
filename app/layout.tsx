import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/jetbrains-mono";
import MatrixBackground from "@/components/MatrixBackground"
import Navbar from '@/components/Navbar'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`} >
                <MatrixBackground />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
