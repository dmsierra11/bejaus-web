import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Bejaus - Coffee & Brunch in Barcelona",
  description: "Specialty coffee and brunch café in Les Corts, Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bri8nqg.css" />
      </head>
      <body className="bg-background text-primary">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
