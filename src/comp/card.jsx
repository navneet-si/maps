import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Card({ title, bgimg, description }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // adjust this to control when the animation starts
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex mb-1">
        <h6 className="font-bold text-xl z-10 text-teal-900">{title}</h6>
      </div>

      <div
        className="w-[350px] h-[180px] shadow-md rounded-lg px-2 flex items-center justify-center bg-black relative group"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

        <div className="relative flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="teal"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-teal-500 font-semibold">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
