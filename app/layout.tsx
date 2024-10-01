import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const calSans = localFont({
  src: './fonts/CalSans-SemiBold.woff',
  variable: '--font-cal-sans',
});

export const metadata: Metadata = {
  title: 'Crip in Tech',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${calSans.variable} antialiased`}>
        <div className="py-16 px-8 lg:py-20 lg:px-24">{children}</div>
      </body>
    </html>
  );
}
