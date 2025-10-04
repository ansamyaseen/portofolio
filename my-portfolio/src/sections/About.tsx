import '../index.css'
import Card from '../components/Card';
import { motion } from 'framer-motion'
import { useRef } from 'react'; // <-- add this import
import {Globe} from "../components/Globe";
import CopyEmailButton from '../components/CopyEmailButton';
import { FrameWork } from '../components/FrameWork';
export default function About(){
    const grid2Container = useRef();
    return(
        
         <section className="c-space section-spacing px-4 "style={{ margin: '0% 15%' }} >
            <h2 className="text-heading text-3xl text-stone-50"style={{ margin: '0rem 0rem 2rem 0rem' }}> About Me</h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[10rem] mt-12'>
                {/*  11111111111111111111 Large card: top left (2x2) */}
                <motion.div
    className="border border-white/20 bg-white/10 shadow-lg backdrop-filter backdrop-blur-md rounded-xl shadow-2xl md:col-span-2 md:row-span-3 col-span-2 relative flex flex-col items-center justify-start md:justify-center overflow-hidden"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 1.05 }}
>
    <img 
        src='../../public/assets/me.png'
        className='w-20 mt-4 mb-2 md:w-28 md:absolute md:top-2 md:right-4 md:mb-0 md:mt-0 z-0 opacity-90'
        alt="computer"
    />
    <div className='z-10 relative flex flex-col justify-end h-full w-full px-4 text-center pb-8 md:pb-12'>
        <p className='headtext font-bold text-stone-50 text-start'>Hi, I'm Ansam Yaseen</p>
         <div className='z-10 relative flex flex-col justify-end h-full w-full px-4 text-center pb-8 md:pb-12'>
        <p className='headtext font-bold text-stone-50 text-start'> I hold a Bachelor’s degree in Computer Science with a Very Good grade 🎓.
That’s the academic side — now, and over the last 2 years, I’ve been using it to craft fast, clean, and visually engaging web experiences ✨

💻 Over the past 2 years, I’ve focused on building beautiful and functional web applications.

I specialize in React.js, creating fast, responsive, and accessible user interfaces.

I work with popular libraries like Bootstrap and Tailwind CSS, ensuring consistent design across devices and screen sizes.

I pay close attention to performance optimization, always aiming to deliver the best possible user ✨</p>
       
    </div>

    </div>
    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
</motion.div>




                {/* 22222222222222Top right: two stacked cards (1x1 each) */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 1.05 }}
                className="bg-[#23243a] rounded-xl shadow-2xl md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-1 col-span-2">
                    <div ref={grid2Container} className='relative flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-center text-3xl text-gray-500'>Not just code. It's an experience</p>
                        <Card 
                            style={{ position: "absolute",
                                 width: "105px",
                                  height: "28px",
                                   fontSize: "0.85rem",
                                    transform: "rotate(75deg)", top: "30%", left: "20%", 
                                    display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    lineHeight: "30px", // ensures vertical centering for single-line text
                                    padding: 0}} 
                            text="Design Patterns"
                            containerRef={grid2Container}
                             />
                        <Card 
                            style={{ position: "absolute",
                                 width: "90px",
                                  height: "28px",
                                   fontSize: "0.85rem",
                                    transform: "rotate(-30deg)", top: "60%", left: "45%",
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                lineHeight: "30px", // ensures vertical centering for single-line text
                                padding: 0 }} 
                            text="Clean Code" 
                              containerRef={grid2Container}
                            />
                        <Card 
                            style={{ position: "absolute",
                                 width: "90px",
                                  height: "28px",
                                   fontSize: "0.85rem",
                                    transform: "rotate(90deg)", top: "30%", left: "70%", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                lineHeight: "30px", // ensures vertical centering for single-line text
                                padding: 0}} 
                            text="Intuitive UX" 
                              containerRef={grid2Container}
                            />
                        <Card 
                            style={{ position: "absolute",
                                 width: "90px",
                                  height: "28px",
                                   fontSize: "0.85rem",
                                    transform: "rotate(-45deg)", top: "55%", left: "0%", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                lineHeight: "30px", // ensures vertical centering for single-line text
                                padding: 0}} 
                            text="Scalability"
                              containerRef={grid2Container}
                               />
                        <Card 
                            style={{ 
                                position: "absolute", 
                                width: "90px", 
                                height: "30px", 
                                fontSize: "0.85rem", 
                                transform: "rotate(20deg)", 
                                top: "10%", 
                                left: "38%", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center", 
                                lineHeight: "30px", // ensures vertical centering for single-line text
                                padding: 0 // remove default padding if any
                            }} 
                            text="Speed" 
                            containerRef={grid2Container}/>
                    </div>
                </motion.div>



                 {/* 333333333333Top right: two stacked cards (1x1 each) */}
              <motion.div 
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 1.05 }}
              className="relative overflow-hidden bg-[#23243a] rounded-xl shadow-2xl md:col-start-3 md:row-start-2 md:col-span-2 md:row-span-2 col-span-2 p-4 pb-8 md:pb-12
        w-full min-h-[20rem] flex flex-col justify-center items-center
        md:w-auto md:min-h-0"
>
    <div className='z-10 w-full md:w-auto md:absolute md:top-4 md:left-4 text-left'>
        <p className='headtext text-stone-50'>Teck Stack</p>
    </div>
    <div className='absolute inset-y-0 w-full h-full md:inset-y-9 start-[10%] md:scale-95'>
        <FrameWork/>
    </div>      
    {/* <figure className="absolute top-11 left-12 w-128 h-128 z-0">
        <Globe />
    </figure>   */}
</motion.div>

                {/*44444444444444 Bottom left: small card (1x1, purple for demo) */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 1.05 }}
                className="bg-[#7c5cff] rounded-xl shadow-2xl col-span-2 w-full md:col-start-1 md:row-start-4 md:col-span-4 md:row-span-1">
                    <div className='flex flex-col items-center justify-center gap-4 size-full'>
                      <p className='text-center headtext  text-stone-50'>Do you want to start a project together ? 
                      </p>  
                      <CopyEmailButton />
                    </div>
                </motion.div>

            </div>
            
         </section>
    );
};