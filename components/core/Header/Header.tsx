import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';

import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul className={styles.headerWrapper}>
          <Link href="/">
            <a className={styles.siteTitle}>
              <Image
                src="https://res.cloudinary.com/dnboci3v7/image/upload/v1663853715/leslieville-aprons/leslieville-apron-side-logo_z4ji1c.png"
                alt="home page"
                width={194}
                height={75}
              />
            </a>
          </Link>
          <div className={styles.headerRight}>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
