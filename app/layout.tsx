import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "dylanbai.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = new URL("/og.png", origin).toString();

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Dylan Bai — Field Notes",
      template: "%s — Dylan Bai",
    },
    description: "Notes on AI, Brazilian jiu-jitsu, building projects, and living deliberately.",
    openGraph: {
      title: "Dylan Bai — Field Notes",
      description: "Notes from the mat, the model, and the messy middle.",
      type: "website",
      siteName: "Dylan Bai — Field Notes",
      images: [{ url: socialImage, width: 1732, height: 909, alt: "Dylan Bai Field Notes" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Dylan Bai — Field Notes",
      description: "Notes from the mat, the model, and the messy middle.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
