import React from "react";

interface LocationHoursProps {
  address: string;
  hours: string;
  mapLink?: string;
}

const LocationHours: React.FC<LocationHoursProps> = ({
  address,
  hours,
  mapLink,
}) => {
  return (
    <section id="location-hours" className="location-hours">
      <h4 className="font-bold">Dónde y Horarios</h4>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Hours:</strong> {hours}
      </p>
      {mapLink && (
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      )}
    </section>
  );
};

export default LocationHours;
