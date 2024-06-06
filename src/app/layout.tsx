import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Noto_Sans_Display, Noto_Serif } from "next/font/google";

const notoSansDisplay = Noto_Sans_Display({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nicholas's Digital Showcase",
    description: "Creating a Digital Portfolio Showcasing Work Using Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={notoSansDisplay.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
