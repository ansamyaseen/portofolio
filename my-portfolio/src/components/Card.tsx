import { motion } from "framer-motion";

const Card = ({style, text, containerRef}) => {
  // return image && !text ?(
  //   <img className="absolute w-15 cursor-grab" src={image}/>
  
  // ):
  return(
    <motion.div 
    className="absolute px-1 py-4 text-xl text-center 
    rounded-full ring ring-gray-700 font-extralight
     bg-gray-700 w-[12rem] cursor-grap text-indigo-200"
    style={style}
    whileHover={{ scale:1.05 }}
    drag
    dragConstraints={containerRef}
    dragElastic={1}
    >
      {text}</motion.div>
    
  )
}

export default Card

