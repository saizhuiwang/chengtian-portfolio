import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chengtian-wang-portfolio.saizhui.chatgpt.site"),
  title: {
    default: "Chengtian Wang — Platform Growth, Strategy & Operations",
    template: "%s | Chengtian Wang",
  },
  description:
    "Creator partnerships, platform growth, campaign operations, data-informed strategy, and workflow automation.",
  openGraph: {
    type: "website",
    title: "Chengtian Wang — Platform Growth, Strategy & Operations",
    description:
      "Creative instinct and clear execution across digital platforms and creator ecosystems.",
    images: [
      {
        url: "/og-platform.png",
        width: 1619,
        height: 971,
        alt: "Chengtian Wang — Platform Growth, Strategy and Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chengtian Wang — Platform Growth, Strategy & Operations",
    description:
      "Creative instinct and clear execution across digital platforms and creator ecosystems.",
    images: ["/og-platform.png"],
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
