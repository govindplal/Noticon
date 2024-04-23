import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ConvexClientProvider } from "@/components/convex-provider";
import { ModalProvider } from "@/components/modal-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noticon",
  description: "See(c) inside Notion",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./logo.svg",
        href: "./logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./logo.svg",
        href: "./logo.svg",
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              <ModalProvider/>
              {children}
              <Toaster/>
            </ThemeProvider>
            </ConvexClientProvider>
      </body>
    </html>
  );
}
