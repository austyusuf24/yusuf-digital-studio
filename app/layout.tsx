import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuf Digital Studio | Website Development & Design",

  description:
    "Professional Website Development, AI Solutions, Graphic Design and Video Editing Services in Puducherry. Helping businesses grow through modern technology and creative design.",

  keywords: [
    "Yusuf Digital Studio",
    "Website Development",
    "Web Designer Puducherry",
    "Full Stack Developer",
    "AI Solutions",
    "Graphic Design",
    "Video Editing",
    "E-Commerce Website",
    "Puducherry Web Development",
  ],

  authors: [
    {
      name: "Mohamed Yusuf",
    },
  ],

  creator: "Mohamed Yusuf",

  metadataBase: new URL("https://yusufdigitalstudio.com"),

  openGraph: {
    title: "Yusuf Digital Studio",
    description:
      "Website Development, AI Solutions, Graphic Design and Video Editing Services.",
    siteName: "Yusuf Digital Studio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}