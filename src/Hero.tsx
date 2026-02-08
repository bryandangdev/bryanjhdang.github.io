interface HeroProps {
  title?: string;
  subtitle?: string;
}

function Hero({ 
  title = "Under Construction", 
  subtitle = "Coming Soon" 
}: HeroProps) {
  return (
    <section className="border border-red-500 flex justify-center px-8 py-16 text-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default Hero;