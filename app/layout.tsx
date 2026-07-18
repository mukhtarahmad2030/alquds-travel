import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Quds Travel Limited",
  description:
    "Air ticketing, hotels, Uganda tours, Hajj and Umrah travel services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Al-Quds Travel Limited</h1>
          <p>Your trusted travel partner in Uganda</p>
        </header>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/flights">Flights</a>
          <a href="/hotels">Hotels</a>
          <a href="/tours">Tours</a>
          <a href="/umrah">Umrah</a>
          <a href="/contact">Contact</a>
        </nav>

        {children}

        <footer>
          <p>© 2026 Al-Quds Travel Limited</p>
        </footer>
      </body>
    </html>
  );
}