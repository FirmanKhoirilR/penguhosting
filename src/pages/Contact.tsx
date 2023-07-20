import { useGlobalContext } from "../hooks/StateContext";
import Email from "../assets/email.webp";
import emailjs from "@emailjs/browser";
import { wavesOne } from "../assets";
import AlertReact from "react-popup-alert";
import { useEffect, useRef } from "react";

const Contact = () => {
  const divRef = useRef<HTMLDivElement | any>(null);
  const { formEmail, setFormEmail, alert, setAlert, setLoadingEmailSubmit, loadingEmailSubmit } = useGlobalContext();

  const handleSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingEmailSubmit(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: formEmail.name,
          to_name: "PenguHosting Team",
          from_email: formEmail.email,
          to_email: "kontakt@penguhosting.com",
          message: formEmail.message,
        },
        import.meta.env.VITE_APP_EMAIL_PUBLIC_ID
      )
      .then(() => {
        setLoadingEmailSubmit(false),
          setAlert({
            type: "success",
            text: `Thank you ${formEmail.name}. We will get back to you as soon as possible`,
            show: true,
          });
        setFormEmail({ ...formEmail, name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setLoadingEmailSubmit(false),
          setAlert({
            type: "error",
            text: `Thank you ${formEmail.name}. We will get back to you as soon as possible`,
            show: true,
          });
        setFormEmail({ ...formEmail, name: "", email: "", subject: "", message: "" });
      });
  };

  const onCloseAlert = () => {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
  };

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={divRef} className="w-full h-full">
      <div className="fixed right-0 md:right-0 md:left-0 z-10 bg-white">
        <AlertReact
          header={`PenguHosting Team`}
          btnText={"Close"}
          text={alert.text}
          type={alert.type}
          show={alert.show}
          onClosePress={onCloseAlert}
          pressCloseOnOutsideClick={true}
          showBorderBottom={true}
          alertStyles={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
          headerStyles={{
            fontWeight: 600,
            fontSize: "25px",
          }}
          textStyles={{}}
          buttonStyles={{
            padding: "8px",
            color: "white",
            marginTop: "10rem",
            backgroundColor: "#00aaff",
            borderRadius: "4px",
          }}
        />
      </div>
      <div className="text-center bg-black/30 h-[40vh] flex flex-col justify-center text-white">
        <h1 className="font-extrabold text-[30px] md:text-[46px] uppercase text-yellow-400">Über uns</h1>
        <h2 className="font-semibold text-[24px] md:text-[36px]">Nicht nur Gutes Design sondern auch Leistungstarke Server</h2>
      </div>

      <div className="bg-background text-white pb-20">
        <div className="text-center leading-8 md:leading-[50px] py-10 font-semibold">
          <p className="text-yellow-500 uppercase">Kontakt</p>
          <h2 className="text-3xl mb-1">Kontaktiere uns hier über E-Mail</h2>
          <span className="text-[15px] text-white/80">Ihr könnt uns aber auch über Twitter, Instagram oder Discord kontaktieren!</span>
        </div>
        <form onSubmit={handleSubmitEmail} className="bg-blue-50 shadow-xl text-black flex flex-row px-12 py-6 min-h-[70vh] min-w-[340px] mx-3 rounded-md md:mx-auto max-w-[900px] gap-2 ">
          <div className="flex flex-col w-full md:w-[50%] gap-3">
            <div className="mb-4 font-semibold">
              <p className="uppercase text-black/50">Get In Touch</p>
              <h1 className="font-extrabold text-[40px]">Kontakt.</h1>
            </div>

            <div className="flex font-semibold flex-col gap-2">
              <label className="text-sm text-black/70">Your Name</label>
              <input required type="text" value={formEmail.name} onChange={(e) => setFormEmail({ ...formEmail, name: e.target.value })} placeholder="What's your name?" className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg" />
            </div>
            <div className="flex font-semibold flex-col gap-2">
              <label className="text-sm text-black/70">Your email</label>
              <input
                required
                type="email"
                value={formEmail.email}
                onChange={(e) => setFormEmail({ ...formEmail, email: e.target.value })}
                placeholder="example@gmail.com"
                className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg"
              />
            </div>
            <div className="flex font-semibold flex-col gap-2">
              <label className="text-sm text-black/70">Subject</label>
              <input
                required
                type="text"
                value={formEmail.subject}
                onChange={(e) => setFormEmail({ ...formEmail, subject: e.target.value })}
                placeholder="Subject Email"
                className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg"
              />
            </div>
            <div className="flex font-semibold flex-col gap-2">
              <label className="text-sm text-black/70">Your Message</label>
              <textarea
                required
                value={formEmail.message}
                rows={4}
                onChange={(e) => setFormEmail({ ...formEmail, message: e.target.value })}
                placeholder="What do you want to say?"
                className="font-normal py-2 px-4 outline-none bg-blue-100 rounded-lg"
              ></textarea>
            </div>
            <button type="submit" name="buttonSend" aria-label="buttonSend" className="w-[130px] mt-6 bg-blue-200 transition font-semibold duration-300 shadow-lg py-2 rounded-lg hover:bg-yellow-400">
              {loadingEmailSubmit ? "Sending..." : "Send"}
            </button>
          </div>
          <div className="hidden md:flex justify-center h-[500px] items-center w-[50%]">
            <img src={Email} alt="Email" height={200} width={350} />
          </div>
        </form>
      </div>
      <img src={wavesOne} alt="waves Blue" className="absolute" />
      <div className="text-center flex gap-10 flex-col font-extrabold pt-20 md:pt-40 pb-10 uppercase  text-white bg-black/30">
        <h1 className="text-[26px] md:text-[46px] transition duration-300 hover:text-yellow-500">werde teil der penguhosting community</h1>
        <div className="">
          <a
            href="https://discord.gg/rxRhb7msbs"
            className="py-4 px-6 mb-4 rounded-lg bg-gradient-to-r  hover:bg-blue-600 transition duration-300 to-sky-400  from-blue-500 text-[25px] hover:text-white/70 tracking-wide md:text-[26px] shadow-lg"
          >
            starte jetzt
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
