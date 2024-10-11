import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notion Publisher Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-[800px] mx-auto py-4">{children}</div>
      </body>
    </html>
  );
}
