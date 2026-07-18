export default function ContactPage() {
  return (
    <main>
      <section>
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Contact Al-Quds Travel Limited using any
          of the details below.
        </p>

        <div className="services">
          <article>
            <h3>📍 Office Address</h3>
            <p>
              Seeta, Mukono District
              <br />
              Uganda
            </p>
          </article>

          <article>
            <h3>📞 Phone</h3>
            <p>+256 702 423393</p>
          </article>

          <article>
            <h3>✉️ Email</h3>
            <p>
              <a
                href="mailto:alqudstoursandtravel@gmail.com"
                style={{ color: "#222", textDecoration: "none" }}
              >
                alqudstoursandtravel@gmail.com
              </a>
            </p>
          </article>

          <article>
            <h3>🕒 Working Hours</h3>
            <p>
              Monday - Saturday
              <br />
              8:00 AM - 6:00 PM
            </p>
          </article>
        </div>

        <a
          className="button"
          href="https://wa.me/256702423393?text=Hello%20Al-Quds%20Travel%20Limited,%20I%20need%20assistance."
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}