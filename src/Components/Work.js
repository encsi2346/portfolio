import React, {useState} from 'react';
import { motion} from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from '../Assets/autsoft.webp';
import Img2 from '../Assets/piller.jpg';
import Img3 from '../Assets/mvm.jpg';

const Work = () => {

    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
                    >
                        <div>
                            <h2 className='h2 leading-tight text-accent'>
                                Tapasztalat
                            </h2>
                            <p className='max-w-sm mb-16'>
                                Az egyetemei féléveim alatt mindig dolgoztam a tanulás mellett,
                                hiszen úgy gondolom, hogy az elméletet a gyakorlatban lehet igazán elsajátítani.
                            </p>
                        </div>
                        <div className='cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl' onClick={()=> window.open("https://pillerkft.hu/#piller", "_blank")}>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img2}
                                alt=''
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                                <span className='text-xl text-white'>
                                    Pillér Informatikai Kft.
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50'>
                                <span className='text-2xl text-gradient'>
                                    Java Backend Fejlesztő Gyakornok
                                </span>
                            </div>
                        </div>
                    </motion.div>
                     <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-10'>
                        <div className='cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl' onClick={()=> window.open("https://autsoft.net/", "_blank")}>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img1}
                                alt=''
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                                <span className='text-xl text-white'>
                                    AutSoft Zrt.
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50'>
                                <span className='text-2xl text-gradient'>
                                    Junior Szoftverfejlesztő
                                </span>
                            </div>
                        </div>
                        <div className='cursor-pointer group relative overflow-hidden border-2 border-white/50 rounded-xl' onClick={()=> window.open("https://informatika.mvm.hu/", "_blank")}>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img
                                className='group-hover:scale-125 transition-all duration-500'
                                src={Img3}
                                alt=''
                            />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
                                <span className='text-xl text-white'>
                                    MVMI Zrt.
                                </span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50'>
                                <span className='text-2xl text-gradient'>
                                    IT Projekt Adminisztrátor
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;