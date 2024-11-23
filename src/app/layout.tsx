import "./globals.css";
import localFont from "next/font/local";

const geist = localFont({
  src: [
    { path: "./fonts/GeistVF.woff", weight: "400" },
    { path: "./fonts/GeistMonoVF.woff", weight: "400" },
  ],
  variable: "--font-geist",
});

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
    <html lang="en" className={geist.variable}>
      <body className="bg-background text-primary">{children}</body>
    </html>
  );
}
