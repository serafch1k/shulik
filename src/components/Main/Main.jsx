import React from 'react';
import styles from './Main.module.css';
import sandali1 from './img/DSC01900 копия 1.png';
import sandali2 from './img/DSC01938 копия.png';
import sandali3 from './img/DSC01950 копия 1.png';
import sandali4 from './img/DSC01995 копия.png';
import sandali5 from './img/DSC02024 копия 1.png';
import sandali6 from './img/белые 20-24.png';

const Main = () => {
  return (
    <>
        <main className={styles.main}>
            <div className={styles.cards}>

              <div className={styles.card}>
                <img src={sandali1}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

              <div className={styles.card}>
                <img src={sandali2}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

              <div className={styles.card}>
                <img src={sandali3}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

              <div className={styles.card}>
                <img src={sandali4}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

              <div className={styles.card}>
                <img src={sandali5}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

              <div className={styles.card}>
                <img src={sandali6}></img>
                <span>White sandali</span>
                <br></br>
                <button>Buy on Wildberries</button>
                <button>Buy on OZON</button>
              </div>

            </div>
        </main>
    </>
  )
}

export default Main