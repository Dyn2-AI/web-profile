import { animate, motion } from "framer-motion";

// variant
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of step
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* ngerender 6 motions divs, setiap merepresentasikan setp stair .
  setiap div akan memiliki animasi yang sama dari star  animatiion objek.
  delay dari setiap div akan di hitung dinamikal berdasarkan reverse index
  create a staggered effect with decreasing delay for each subsquent step.
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
