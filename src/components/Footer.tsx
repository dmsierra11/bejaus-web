import LocationHours from "./LocationHours";
import SocialMediaFeed from "./SocialMediaFeed";

interface FooterProps {
  companyName?: string;
  bgColor?: string;
  textColor?: string;
  additionalContent?: React.ReactNode;
  showAdditionalContent?: boolean;
}

export default function Footer({
  companyName = "Bejaus",
  bgColor = "bg-primary",
  textColor = "text-background",
  additionalContent,
}: FooterProps) {
  return (
    <footer className={`${bgColor} ${textColor} py-6`}>
      <div className="w-full px-4 flex flex-col md:flex-row justify-between items-start">
        {/* <div
          id="location-contact"
          className="flex-none mb-4 md:mb-0"
          style={{ flexBasis: "20%" }}
        >
          <LocationHours
            address="Carrer de l'Equador, 89, Les Corts, 08029 Barcelona"
            hours="Lun-Vier: 7:30 AM - 9:30 PM"
          />
        </div> */}

        {additionalContent && (
          <div
            id="additional-content"
            className="flex-grow text-center mx-4 mb-4 md:mb-0"
            style={{ flexBasis: "60%" }}
          >
            {additionalContent}
          </div>
        )}

        <div
          id="social-media-feed"
          className="flex-none"
          style={{ flexBasis: "20%" }}
        >
          <SocialMediaFeed instagramHandle="bejauscafe" />
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="mt-4">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
