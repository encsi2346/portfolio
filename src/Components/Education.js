import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const education = [
    {
        name: 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
        description: 'Mérnökinformatikus MSc',
        time: '2023. február - Jelenleg',
        extra: 'Szoftverfejlesztés főspecializáció, Felhasználói élmény - UX és interakció mellékspecializáció',
    },
    {
        name: 'Budapesti Műszaki és Gazdaságtudományi Egyetem',
        description: 'Mérnökinformatikus BSc',
        time: '2018. szeptember - 2023. február',
        extra: 'Rendszertervezés specializáció',
    },
    {
        name: 'Zalaegerszegi Zrínyi Miklós Gimnázium',
        description: 'Angol nyelvi előkészítős emelt matematika tagozat',
        time: '2013. szeptember - 2018. június',
        extra: 'Emelt szintű informatika érettségi',
    }
]

const Education = () => {
    return (
        <section className='section' id='education'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 lg:bg-education lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
                    >
                        <h2 className='h2 text-accent mb-6 mt-20'>
                            Tanulmányok
                        </h2>
                    </motion.div>
                    <div className="container">
                        {education.map((school, index) => (
                            <div
                                className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50"
                            >
                                {index % 2 ?
                                    <div className="flex flex-row-reverse md:contents">
                                        <motion.div
                                            variants={fadeIn('right', 0.3)}
                                            initial='hidden'
                                            whileInView={'show'}
                                            viewport={{once: false, amount: 0.3}}
                                            className="box col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
                                        >
                                            <p className='text-sm max-w-sm mb-3'>
                                                {school.time}
                                            </p>
                                            <h3 className="font-semibold text-lg mb-1">
                                                {school.name}
                                            </h3>
                                            <p className="leading-tight text-justify">
                                                {school.description}
                                            </p>
                                            <p className='text-sm max-w-sm mt-3'>
                                                {school.extra}
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            variants={fadeIn('right', 0.3)}
                                            initial='hidden'
                                            whileInView={'show'}
                                            viewport={{once: false, amount: 0.3}}
                                            className="col-start-5 col-end-6 md:mx-auto relative mr-10"
                                        >
                                            <div className="h-full w-6 flex items-center justify-center">
                                                <div className="h-full w-1 bg-white bg-opacity-75 pointer-events-none"/>
                                            </div>
                                            <div
                                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"/>
                                        </motion.div>
                                    </div>
                                    :
                                    <div className="flex md:contents">
                                        <motion.div
                                            variants={fadeIn('left', 0.3)}
                                            initial='hidden'
                                            whileInView={'show'}
                                            viewport={{once: false, amount: 0.3}}
                                            className="col-start-5 col-end-6 mr-10 md:mx-auto relative"
                                        >
                                            <div className="h-full w-6 flex items-center justify-center">
                                                <div className="h-full w-1 bg-white bg-opacity-75 pointer-events-none"/>
                                            </div>
                                            <div
                                                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-white shadow"/>
                                        </motion.div>
                                        <motion.div
                                            variants={fadeIn('left', 0.3)}
                                            initial='hidden'
                                            whileInView={'show'}
                                            viewport={{once: false, amount: 0.3}}
                                            className="box col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
                                        >
                                            <p className='text-sm max-w-sm mb-3'>
                                                {school.time}
                                            </p>
                                            <h3 className="font-semibold text-lg mb-1">
                                                {school.name}
                                            </h3>
                                            <p className="leading-tight text-justify">
                                                {school.description}
                                            </p>
                                            <p className='text-sm max-w-sm mt-3'>
                                                {school.extra}
                                            </p>
                                        </motion.div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;