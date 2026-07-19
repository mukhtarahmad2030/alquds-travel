import "./globals.css";

export const metadata = {
  title: "Al-Quds Travel Limited",
  description: "Your trusted travel partner in Uganda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

        <a
          href="https://wa.me/256702423393?text=Hello%20Al-Quds%20Travel%20Limited"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp"
          aria-label="Chat with Al-Quds Travel on WhatsApp"
        >
          💬
        </a>

        <footer>
          <p>© 2026 Al-Quds Travel Limited</p>
        </footer>

      </body>
    </html>
  );
}