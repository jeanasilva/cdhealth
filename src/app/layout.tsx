import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carla Dinamarães | Premium Medical Spaces",
  description: "Plataforma de coworking médico premium. Consultórios por hora com gestão integrada para profissionais de saúde.",
  keywords: ["coworking médico", "consultório por hora", "espaço médico", "clínica", "saúde"],
  authors: [{ name: "Carla Dinamarães" }],
  openGraph: {
    title: "Carla Dinamarães | Premium Medical Spaces",
    description: "O novo padrão em coworking médico. Saúde de alta performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
