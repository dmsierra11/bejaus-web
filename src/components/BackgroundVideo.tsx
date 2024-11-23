"use client";

export default function BackgroundVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      controls
    >
      <source src="/coffee1.mp4" type="video/mp4" />
    </video>
  );
}
