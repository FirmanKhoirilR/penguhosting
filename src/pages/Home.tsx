import { wavesOne } from "../assets";
import { FAQ, FitureOffer, HeroSection, Testimonial } from "../components";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <FitureOffer />
      <Testimonial />
      <FAQ />
      <img src={wavesOne} alt="waves" className="absolute" />
      <div className="text-center flex gap-10 flex-col font-extrabold pt-20 md:pt-40 pb-10 uppercase  text-white bg-black/30">
        <h1 className="text-[26px] md:text-[46px] transition duration-300 hover:text-yellow-500">werde teil der penguhosting community</h1>
        <div className="">
          <a
            target="_blank"
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
