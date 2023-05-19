import React from 'react';
import Image from '../Assets/me2.png';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {Link} from "react-scroll";

const Banner = () => {
    return (
        <div className='min-h-[85vh] lg:min-h-[60vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
                        >
                            Szabó<span> Enikő</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
                        >
                            <TypeAnimation
                                sequence={['Mérnökinformatikus', 2000]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                        >
                            Ambíciózus mesterszakos mérnökinformatikus hallgató vagyok,
                            aki szereti a kihívásokat.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                        >
                            <Link
                                to='contact'
                                activeClass='active'
                                smooth={true}
                                spy={true}
                                offset={-200}
                                className='cursor-pointer btn btn-lg flex items-center justify-center'
                            >
                                Üzenet
                            </Link>
                            <a href='./src/Assets/Szabó_Enikő_Önéletrajz.pdf' download className='text-gradient btn-link'>
                                Önéletrajzom
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
                    >
                        <img src={Image} alt='' />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;