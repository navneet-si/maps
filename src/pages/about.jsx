import { FaMapMarkedAlt, FaLayerGroup, FaGlobe, FaTools, FaCodeBranch } from "react-icons/fa";
import { motion } from "framer-motion";
import videoSrc from '../assets/main.mp4'; 

export default function About() {
  const features = [
    { icon: <FaMapMarkedAlt />, title: "Accurate Spatial Data", desc: "Integrates precise coordinates for real-world alignment, aiding in analysis, navigation, and planning." },
    { icon: <FaLayerGroup />, title: "Enhanced Usability", desc: "Designed for GIS applications, supporting multiple data layers for better decision-making." },
    { icon: <FaGlobe />, title: "Versatile Applications", desc: "Ideal for architects, engineers, and researchers in terrain analysis, site selection, and spatial visualization." },
    { icon: <FaTools />, title: "Seamless Integration", desc: "Compatible with QGIS, ArcGIS, and Google Earth for easy spatial data manipulation." },
    { icon: <FaCodeBranch />, title: "Customizable Layers", desc: "Allows users to add and modify data layers, tailoring the map to specific projects." },
  ];

  return (
    
    <div className="relative w-screen h-screen z-0 overflow-y-auto">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full  overflow-hidden">
        <video 
          className="w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
        {/* Overlay for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Content (Ensured Above the Video) */}
      <div className="relative z-10 max-w-4xl mx-auto p-6 text-center mt-16 text-white">
        <motion.h1 
          className="text-3xl  mb-4 text-white font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
         <u> About the Georeferenced Map</u>
        </motion.h1>
        <p className="mb-6 font-semibold text-teal-200">
          This georeferenced map is designed for high-accuracy spatial analysis, supporting various GIS applications and decision-making processes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 gap-x-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-black bg-opacity-90 shadow-md rounded-2xl text-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-teal-800 text-3xl">{feature.icon}</div>
              <div>
                <h2 className="text-lg text-teal-500 font-semibold">{feature.title}</h2>
                <p className="text-sm text-teal-200">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
