import React, { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [ showMediaIcons, SetshowMediaIcons ]= useState(false);
    return (
        <header>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container">
                <div className="nav-bar">
                    <Link href="/" className="DP"><a><Image src="/images/logo.png" height={36} width={170} /></a></Link>

                    <div className={showMediaIcons ? "menu menu-mobile-view" : "menu"}>
                        <ul className="menu-list">
                            <li>
                                <Link href='/about'><a>About</a></Link>
                            </li>
                            <li>
                                <Link href="/projects"><a>Projects</a></Link>
                            </li>
                            <li>
                                <Link href="/clients"><a>Clientele</a></Link>
                            </li>
                            <li>
                                <Link href="/shop"><a>Shop</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Blog</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hamberger-menu">
                        <a href='#' onClick={() => SetshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div>
                </div>
                
            </div>
        </header>

    )
}
