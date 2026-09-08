import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chengtianwang.com"),
  title: {
    default: "Chengtian Wang — Growth, Operations & Partnerships",
    template: "%s | Chengtian Wang",
  },
  description:
    "Growth strategy, business development, partnership operations, and workflow automation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Chengtian Wang — Growth, Operations & Partnerships",
    description:
      "Strategic thinking and practical execution across growth, operations, and partnerships.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Chengtian Wang — Growth, Operations and Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chengtian Wang — Growth, Operations & Partnerships",
    description:
      "Strategic thinking and practical execution across growth, operations, and partnerships.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
