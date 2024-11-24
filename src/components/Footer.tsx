import LocationHours from "./LocationHours";
import SocialMediaFeed from "./SocialMediaFeed";

interface FooterProps {
  companyName?: string;
  bgColor?: string;
  textColor?: string;
  additionalContent?: React.ReactNode;
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
        <div id="location-hours" className="flex-none mb-4 md:mb-0">
          <LocationHours
            address="Les Corts, Barcelona"
            hours="Mon-Sun: 8am-10pm"
          />
        </div>

        <div
          id="newsletter-signup"
          className="flex-grow text-center mx-4 mb-4 md:mb-0"
        >
          {additionalContent}
        </div>

        <div id="social-media-feed" className="flex-none">
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
