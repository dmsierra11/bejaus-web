import React from "react";

interface SocialMediaFeedProps {
  instagramHandle: string;
}

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({
  instagramHandle,
}) => {
  return (
    <section id="social-media-feed" className="social-media-feed">
      <h2>Follow Us on Instagram</h2>
      <a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        @{instagramHandle}
      </a>
    </section>
  );
};

export default SocialMediaFeed;
