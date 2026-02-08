interface FooterProps {
  linkedInUrl: string;
  linkedInText?: string;
  centerText?: string;
}

function Footer({
  linkedInUrl,
  linkedInText = "LinkedIn",
}: FooterProps) {
  return (
    <footer className="mt-auto px-8 py-8">
      <div className="text-center flex-1 text-lg md:text-xl lg:text-2xl max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-right flex-1">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F16D34] hover:text-[#FF986A] hover:underline"
          >
            {linkedInText}
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
