import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import ThemeProvider from "./theme-provider";
import { siteConfig } from "./config/site";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: siteConfig.branding.metaTitle,
  description: siteConfig.branding.metaDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>

        {/* GOOGLE ANALYTICS (FORZADO) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KMHHVYQSDE"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
            console.log("🔥 GA CARGANDO...");
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMHHVYQSDE');
          `}
        </Script>

        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}