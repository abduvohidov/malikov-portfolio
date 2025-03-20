import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/global.css";
import { ThemeProvider } from "../shared/providers/ThemeProvider";
import { TheHeader } from "@/widgets/TheHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutTypeProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutTypeProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TheHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
