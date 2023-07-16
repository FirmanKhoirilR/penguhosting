import { motion } from "framer-motion";

const CardFitureOffer = ({ item }: any) => {
  return (
    <div className="flex justify-center md:flex-row  flex-col my-8 gap-2 md:gap-10 items-center" key={item.title}>
      <motion.img whileInView={{ x: [-300, 0] }} transition={{ duration: 0.8 }} src={item.image} alt={item.title} className="md:h-[260px] w-[150px] h-[150px] md:w-[260px]" />
      <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.8 }} className=" min-w-[350px] p-10  max-w-[700px] flex flex-col items-center gap-4">
        <h1 className="text-2xl text-center text-yellow-500 font-bold">{item.title}</h1>
        <p>{item.descriptionOne}</p>
        <p>{item.descriptionTwo}</p>
      </motion.div>
    </div>
  );
};

export default CardFitureOffer;
