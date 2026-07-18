"use client";

import { FormEvent, useState } from "react";

export default function FlightsPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [travelClass, setTravelClass] = useState("Economy");

  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `
Hello Al-Quds Travel Limited,

I would like to request a flight quotation.

Full Name: ${fullName}
Phone Number: ${phone}
From: ${from}
Destination: ${destination}
Departure Date: ${departureDate}
Return Date: ${returnDate || "One-way trip"}
Passengers: ${passengers}
Travel Class: ${travelClass}
    `.trim();

    const whatsappUrl = `https://wa.me/256702423393?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <section>
        <h1>Flight Booking</h1>

        <p>
          Complete the form below and our team will contact you with available
          flight options.
        </p>

        <form className="booking-form" onSubmit={sendToWhatsApp}>
          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              placeholder="+256..."
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>

          <label>
            From
            <input
              type="text"
              placeholder="For example: Entebbe"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              required
            />
          </label>

          <label>
            Destination
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              required
            />
          </label>

          <label>
            Departure Date
            <input
              type="date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
              required
            />
          </label>

          <label>
            Return Date
            <input
              type="date"
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
            />
          </label>

          <label>
            Passengers
            <input
              type="number"
              min="1"
              value={passengers}
              onChange={(event) => setPassengers(event.target.value)}
              required
            />
          </label>

          <label>
            Travel Class
            <select
              value={travelClass}
              onChange={(event) => setTravelClass(event.target.value)}
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </label>

          <button className="button" type="submit">
            Send Enquiry on WhatsApp
          </button>
        </form>
      </section>
    </main>
  );
}