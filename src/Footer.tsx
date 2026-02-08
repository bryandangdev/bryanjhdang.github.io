interface FooterProps {
  linkedInUrl: string;
  linkedInText?: string;
}

function Footer({ linkedInUrl, linkedInText = "LINKEDIN" }: FooterProps) {
  return (
    <footer className="mt-auto px-8 py-8">
      <div className="max-w-7xl mx-auto flex justify-end">
        <a 
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0077b5] hover:text-[#005582] hover:underline"
        >
          {linkedInText}
        </a>
      </div>
    </footer>
  );
}

export default Footer;