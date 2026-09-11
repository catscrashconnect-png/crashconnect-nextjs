import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'CrashConnect — Intelligent Road Safety, In Real Time',
  description:
    'CrashConnect builds CATS — an AI-powered crash detection and emergency response system that connects vehicles, people, and emergency services in real time.',
icons: {
  icon: "/icon.png",
  shortcut: "/favicon.png",
  apple: "/icon.png",
},
  metadataBase: new URL('https://crashconnect.in'),
};

export const viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
