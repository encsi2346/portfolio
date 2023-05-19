import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l0jfl3m', 'template_ebikkte', form.current, 'EkdNOoi494VdYxUum')
        e.target.reset();
    };

    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex justify-start items-center'
                    >
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                                Keress meg
                            </h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Dolgozzunk<br /> együtt!
                            </h2>
                        </div>
                    </motion.div>
                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='text'
                            name='name'
                            placeholder='Név'
                            required
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='text'
                            name='email'
                            placeholder='Email cím'
                            required
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            name='message'
                            placeholder='Üzenet'
                            required
                        />
                        <button type='submit' className='btn btn-lg'>
                            Üzenet küldése
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;