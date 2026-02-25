import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Valkiria Luxury | Vestidos de Gala",
  description: "Tienda exclusiva de vestidos de gala. Elegancia y distinción para tus noches inolvidables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-black min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
