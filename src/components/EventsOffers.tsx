import React from "react";

interface Event {
  title: string;
  date: string;
}

interface EventsOffersProps {
  events: Event[];
}

const EventsOffers: React.FC<EventsOffersProps> = ({ events }) => {
  return (
    <section id="events-offers" className="events-offers">
      <h2>Events & Offers</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EventsOffers;
