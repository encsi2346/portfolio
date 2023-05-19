import React, { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonFill, BsGlobe } from 'react-icons/bs';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const languages = [
    {
        code: 'hu',
        name: 'Magyar',
        country_code: 'hu',
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
]

const Header = ({ onThemeClick }) => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])

    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    useEffect(() => {
        const html = document.querySelector('html');
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
        onThemeClick();
    };

    const changeLanguage = (code) => {
        i18next.changeLanguage(code);
        cookies.set('i18next', code);
    };

    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <div/>
                    <div className="flex gap-x-6">
                        <button className='btn text-white p-4 w-12 h-12 flex justify-center items-center' onClick={handleThemeSwitch}>
                            {theme  === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
                        </button>
                        <div className="language-select">
                            <div className="d-flex justify-content-end align-items-center language-select-root">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-link dropdown-toggle text-white p-4 w-12 h-12 flex justify-center items-center"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <BsGlobe />
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <span className="dropdown-item-text">{t('language')}</span>
                                    </li>
                                    {languages.map(({ code, name, country_code }) => (
                                        <li key={country_code}>
                                            <a
                                                href="#"
                                                className={classNames('dropdown-item', {
                                                    disabled: currentLanguageCode === code,
                                                })}
                                                onClick={() => changeLanguage(code)}
                                            >
                                            <span className={`flag-icon flag-icon-${country_code} mx-2`}
                                                style={{
                                                    opacity: currentLanguageCode === code ? 0.5 : 1,
                                                }}
                                            />
                                                {name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;