import { Geist, Geist_Mono, Italianno } from "next/font/google";
import "./globals.css";

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  weight: "400",
  subsets: ["latin"],
});

// ✅ Server-side metadata export is allowed here
export const metadata = {
  title: "Ristorante Pizzeria Schützenhof | Authentische italienische Küche",
  description:
    "Genießen Sie echte italienische Spezialitäten, Holzofenpizza und ausgewählte Weine im Ristorante Pizzeria Schützenhof. Ein Stück Italien – direkt in Ihrer Nähe.",
  keywords: [
    "Italienisches Restaurant",
    "Pizzeria Schützenhof",
    "Italienisches Essen",
    "Holzofenpizza",
    "Hausgemachte Pasta",
    "Italienische Küche",
    "Restaurant in der Nähe",
    "Beste Pizza der Stadt",
    "Pizza Lieferservice",
    "Italienisches Lokal",
    "Mediterrane Spezialitäten",
    "Pasta und Pizza",
    "Schützenhof Restaurant",
    "Essen gehen in Hessen",
    "Italienisches Abendessen",
    "Familienfreundliches Restaurant",
    "Romantisches Dinner",
    "Italienische Weine",
    "Essen zum Mitnehmen",
    "Italienisches Restaurant mit Terrasse",
  ],
  authors: [{ name: "Ristorante Pizzeria Schützenhof" }],
openGraph: {
  title: "Ristorante Pizzeria Schützenhof | Authentische italienische Küche",
  description:
    "Erleben Sie den Geschmack Italiens im Ristorante Pizzeria Schützenhof – mit hausgemachter Pasta, Holzofenpizza und erlesenen Weinen. Perfekt für Familienessen, romantische Abende und besondere Anlässe.",
  url: "https://www.ristorantepizzeriaschtzenhof.de", 
  siteName: "Ristorante Pizzeria Schützenhof",
  images: [
    {
      url: "https://www.ristorantepizzeriaschtzenhof.de/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Innenansicht des Restaurants und italienische Gerichte",
    },
  ],
  locale: "de_DE", 
  type: "website", 
},

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italianno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
