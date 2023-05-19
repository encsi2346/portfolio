import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
    return (
        <section className='section' id='skills'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 pt-20'
                    >
                        <div className="w-full px-4  lg:w-10/16">
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    JavaScript
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div>
                               <a href='#' download className='text-gradient btn-link'>
                                   TypeScript
                               </a>
                               <div className="mb-8">
                                   <div className="bg-light relative h-4 w-full rounded-2xl">
                                       <div className="bg-secondary absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                           70%
                                       </div>
                                   </div>
                               </div>
                           </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    HTML
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            70%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    CSS
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            70%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    Java
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[80%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    C#
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[60%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            60%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    Figma
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[70%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            70%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a href='#' download className='text-gradient btn-link'>
                                    Adobe Photoshop
                                </a>
                                <div className="mb-8">
                                    <div className="bg-light relative h-4 w-full rounded-2xl">
                                        <div className="bg-secondary absolute top-0 left-0 flex h-full w-[60%] items-center justify-center rounded-2xl text-xs font-semibold text-white" >
                                            60%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1'
                    >
                        <h2 className='h2 text-accent'>
                            Készségek
                        </h2>
                        <h3 className='h3 mb-4'>
                            Szeretem megérteni, hogy működnek a dolgok.
                        </h3>
                        <p className='mb-6'>
                            Nagyon nyitott és kíváncsi embernek tartom magam, igyekszem minél több dolgot megtanulni.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;