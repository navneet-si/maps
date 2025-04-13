import { Card } from "./card";
import current from "../assets/current.png";
import routing from "../assets/routing.png";
import live from "../assets/live.png";
import trav from "../assets/ani.webm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Features() {
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
      <div className="w-[95%]  m-auto h-screen  bg-[white] flex items-center justify-between relative">
        <h1 className="text-4xl font-bold absolute left-[42.5%] top-8 text-teal-800"><u>Features Provided :</u></h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 w-[750px] gap-y-4">
        <Card title="Live Tracking" bgimg={live.toString() }description="Keep track while moving" />
        <Card title="Current Location" bgimg={current.toString()}description="Check Your Current Location"/>
        <Card title="Routing" bgimg={routing.toString()} description="Navigate between Places"/>
      </div>
      <div className="flex mr-40 items-center h-full">
        <video className="rounded-lg" src={trav} width="250px" height="300px" autoPlay loop muted />
      </div>
    </div>
</motion.div>
  );
}
