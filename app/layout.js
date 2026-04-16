import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script"; // 👈 IMPORTANTE
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KMHHVYQSDE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KMHHVYQSDE');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}