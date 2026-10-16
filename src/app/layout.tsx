import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garena Free Fire - Booyah! | Rasmiy Landing Page",
  description: "Free Fire - Battle Royale o'yini: qahramonlar, qurollar, xaritalar, yangiliklar va yuklab olish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
