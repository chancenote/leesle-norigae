import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEESLE | Norigae Making Experience",
  description:
    "Book a traditional Korean Norigae making experience at LEESLE. Create your own handcrafted accessory with expert artisans.",
  openGraph: {
    title: "LEESLE | Norigae Making Experience",
    description:
      "Create your own traditional Korean Norigae accessory with our expert artisans.",
    siteName: "LEESLE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-warm-white text-charcoal min-h-screen font-body antialiased">
        {children}
      </body>
    </html>
  );
}
