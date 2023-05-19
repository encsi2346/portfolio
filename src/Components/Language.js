import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Language = () => {
    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>
                                Nyelvtudás <br />
                            </h2>
                        </div>
                    </motion.div>
                    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                        <motion.div
                            variants={fadeIn('right', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
                            className='flex'
                        >
                            <div style={{ width: 250, height: 250 }}>
                                <CircularProgressbar value={75} text={`${75}%`} />
                            </div>
                            <h3 className='h3 mb-4'>
                                Angol B2
                            </h3>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('left', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.3}}
                            className='flex'
                        >
                            <div style={{ width: 250, height: 250 }}>
                                <CircularProgressbar value={70} text={`${70}%`} />
                            </div>
                            <h3 className='h3 mb-4'>
                                Német B2
                            </h3>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Language;