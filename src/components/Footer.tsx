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
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {additionalContent}
          <p className="mt-4">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
