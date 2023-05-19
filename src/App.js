import React, { useState } from 'react';
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Language from "./Components/Language";

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const handleThemeChange = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    return (
        <div className={`bg-${theme === 'dark' ? 'siteDark' : 'siteLight'} bg-no-repeat bg-cover overflow-hidden`}>
            <Header onThemeClick={handleThemeChange}/>
            <Banner/>
            <Navbar/>
            <About/>
            <Skills/>
            <Language/>
            <Work/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default App;