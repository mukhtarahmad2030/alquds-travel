
  import Image from "next/image";

export default function Home() {
  return (
    <main>
     <div className="hero">
  <Image
    src="/images/banner.jpg"
    alt="Al-Quds Travel Banner"
    width={1600}
    height={900}
    
    className="hero-image"
    priority
  />
</div>
      <section id="home">
        <h2>Welcome to Al-Quds Travel Limited</h2>

        <p>
          We provide air ticketing, hotel reservations, Uganda tours,
          Hajj and Umrah travel services.
        </p>

        <a
          className="button"
          href="https://wa.me/256702423393"
          target="_blank"
          rel="noreferrer"
        >
          Contact us on WhatsApp
        </a>
      </section>

      <section id="services">
        <h2>Our Services</h2>

        <div className="services">
          <article>
            <h3>Air Ticketing</h3>
            <p>Domestic and international flight booking services.</p>
          </article>

          <article>
            <h3>Hotel Reservations</h3>
            <p>Hotel bookings for holidays, business trips and religious travel.</p>
          </article>

          <article>
            <h3>Uganda Tours</h3>
            <p>Tour packages to Uganda's beautiful destinations.</p>
          </article>

          <article>
            <h3>Hajj and Umrah</h3>
            <p>Flights, hotels, transport and travel assistance.</p>
          </article>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>

        <p><strong>Phone:</strong> +256 702 423 393</p>
        <p><strong>Phone:</strong> +256 760 445 560</p>
        <p><strong>Email:</strong> alqudstoursandtravel@gmail.com</p>
        <p>
          <strong>Address:</strong> Plot 2723, Block Jinja 110,
          Jinja Road, Seeta, Mukono, Uganda
        </p>
      </section>
    </main>
  );
}