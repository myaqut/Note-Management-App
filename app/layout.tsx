import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Note App",
  description: "Manage your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
                <nav>
            <Link href="/">
              Notes
            </Link>
          </nav>
      <body className='main'>{children}</body>
    </html>
  );
}
