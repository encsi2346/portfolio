import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsBriefcaseFill, BsChatSquare, BsMortarboardFill, BsLaptopFill, BsAirplane } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className="container mx-auto">
                <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
                    <Link
                        to='home'
                        activeClass='active'
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BiHomeAlt/>
                    </Link>
                    <Link to='about'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <HiUser/>
                    </Link>
                    <Link to='skills'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BsLaptopFill/>
                    </Link>
                    <Link to='language'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BsAirplane/>
                    </Link>
                    <Link to='work'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BsBriefcaseFill/>
                    </Link>
                    <Link to='education'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BsMortarboardFill/>
                    </Link>
                    <Link to='contact'
                          activeClass='active'
                          smooth={true}
                          spy={true}
                          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
                    >
                        <BsChatSquare/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;