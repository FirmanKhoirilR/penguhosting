import { FAQ, FitureOffer, HeroSection, Testimonial } from "../components";

const Home = () => {
  return (
    <section className="hero__background">
      <HeroSection />
      <FitureOffer />
      <Testimonial />
      <FAQ />
      <div className="text-center flex gap-10 flex-col font-extrabold pt-20 md:pt-40 pb-10 uppercase  text-white bg-black/30">
        <h1 className="text-[40px] md:text-[56px]">werde teil der penguhosting community</h1>
        <div className="">
          <a
            href="https://discord.gg/rxRhb7msbs"
            className="py-4 px-6 mb-4 rounded-lg bg-gradient-to-r  hover:bg-blue-600 transition duration-300 to-sky-400  from-blue-500 text-[25px] hover:text-white/70 tracking-wide md:text-[26px] shadow-lg"
          >
            starte jetzt
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
