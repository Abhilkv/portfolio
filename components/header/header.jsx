import React, { useState } from 'react';
import ReactDrawer from 'react-drawer';
import Image from 'next/image'

import Logo from '../../public/header/logo.png';
import Styles from './header.module.css';

const links = [{
    name: 'ABOUT',
    id: '#about'
},
{
    name: 'CONTACT',
    id: '#contact'
},
{
    name: 'SKILLS',
    id: '#skills'
},
{
    name: 'EXPERIENCE',
    id: '#home'
},
{
    name: 'PROJECTS',
    id: '#projects'
}
]

const Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
      <>
        <div className={Styles.headerContainer} id="top">
            <a className={Styles.iconContainer} href="#home">
                <Image src={Logo} alt="Abhil" width={50} height={50} />
            </a>
            <>
                <div className={Styles.menuBar}>
                    {links.map((link) => (
                        <a href={link.id} key={link.id} className={Styles.links}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div onClick={() => {setBurgerMenu(prev => !prev)}}  className={Styles.hambergerMenue}>
                    <div className= {!burgerMenu ? Styles.lines : Styles.cross1}></div>
                    <div className={!burgerMenu ? Styles.lines_two : Styles.hidden}></div>
                    <div className={!burgerMenu ? Styles.lines : Styles.cross2}></div>
                </div>
            </>
        </div>
        <div className={burgerMenu ? `${Styles.closedDrawer} ${Styles.openDrawer}` : Styles.closedDrawer} onTouchMove={() => { setBurgerMenu(false); }}>
            {links.map((link) => (
                <a href={link.id} key={link.id} className={Styles.BurgerLinks}>
                    {link.name}
                </a>
            ))}
        </div>
      </>
    );
};

export default Header;
