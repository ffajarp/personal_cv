import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Fajar Permana | CV",
  description: "Payment System & Integration Specialist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  )
}