import React from 'react';
import styles from './Header.module.css';
import bg from './img/DSC01745 1.png'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <span>CLASSIC CHILDREN SANDALII</span>
        <button>Buy on Wildberries</button>
        <button>Buy on OZON</button>
      </header>
    </>
  )
};

export default Header;