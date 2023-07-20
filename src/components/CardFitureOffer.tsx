import { motion } from "framer-motion";

const CardFitureOffer = ({ item }: any) => {
  return (
    <div className="flex justify-center md:flex-row flex-col my-8 gap-2 md:gap-10 items-center" key={item.title}>
      <motion.img loading="lazy" whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8, ease: "easeIn" }} src={item.image} alt={item.title} className="md:h-[320px] object-contain w-[225px] h-[180px] md:w-[320px]" />
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.8, ease: "easeIn" }} className=" min-w-[350px] p-4  max-w-[650px] flex flex-col items-start gap-4">
        <h1 className="text-2xl text-start text-yellow-500 font-bold">{item.title}</h1>
        <p>{item.descriptionOne}</p>
        <p>{item.descriptionTwo}</p>
      </motion.div>
    </div>
  );
};

export default CardFitureOffer;
