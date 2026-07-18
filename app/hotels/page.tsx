export default function HotelsPage() {
  return (
    <main>
      <section>
        <h1>Hotel Reservations</h1>

        <p>
          We help you find suitable hotels for business trips, holidays,
          family travel, Hajj and Umrah.
        </p>

        <div className="services">
          <article>
            <h3>Business Hotels</h3>
            <p>Comfortable hotels for meetings and corporate travel.</p>
          </article>

          <article>
            <h3>Holiday Hotels</h3>
            <p>Affordable and family-friendly accommodation options.</p>
          </article>

          <article>
            <h3>Umrah Hotels</h3>
            <p>Hotels near Masjid al-Haram and Masjid an-Nabawi.</p>
          </article>

          <article>
            <h3>Group Bookings</h3>
            <p>Hotel arrangements for families, groups and organisations.</p>
          </article>
        </div>

        <a
          className="button"
          href="https://wa.me/256702423393?text=Hello%20Al-Quds%20Travel%2C%20I%20need%20help%20booking%20a%20hotel."
          target="_blank"
          rel="noreferrer"
        >
          Ask About Hotels on WhatsApp
        </a>
      </section>
    </main>
  );
}