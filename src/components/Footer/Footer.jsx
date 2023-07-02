import React from 'react';
import styles from './Footer.module.css';
import logo from './img/1 16.png';
import vk from './img/icon VK.svg';
import wa from './img/icon WA.svg';


const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>

          <div className={styles.docs}>
            <span>ООО Триумф</span>
            <span>ОГРН 1160280055210</span>
            <span>ИНН 0276910328</span>
          </div>
          

          <div className={styles.logo}>
            <img src={logo} alt='logo'></img>
          </div>

          <div className={styles.contacts}>
            <a href='#'><img src={vk} alt='VK'></img></a>
            <a href='#'><img src={wa} alt="What's app"></img></a>
          </div>

        </footer>
    </>
  )
}

export default Footer