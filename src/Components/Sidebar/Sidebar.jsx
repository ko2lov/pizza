import React from 'react'
import styles from './Sidebar.module.css'
import logo from '../../images/svg-images/logo.svg'
import home from '../../images/svg-images/home.svg'
import feedback from '../../images/svg-images/feedback.svg'
import favorite from '../../images/svg-images/favorite.svg'
import bag from '../../images/svg-images/bag.svg'
import ticketSale from '../../images/svg-images/ticket-sale.svg'
import settings from '../../images/svg-images/settings.svg'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__logo}>
            <img src={logo} alt="logo" srcset="" />
        </div>
        <nav className={styles.sidebar__nav}>
            <ul className={styles.sidebar__list}>
                <li className={`${styles.sidebar__list_item} ${styles.sidebar__active}`}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={home} alt="home" srcset="" className={styles.sidebar__list_img}/>
                    </a>
                </li>
                <li className={styles.sidebar__list_item}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={feedback} alt="feedback" srcset="" className={styles.sidebar__list_img} />
                    </a>
                </li>
                <li className={styles.sidebar__list_item}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={favorite} alt="favorite" srcset="" className={styles.sidebar__list_img}/>
                    </a>
                </li>
                <li className={styles.sidebar__list_item}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={bag} alt="cart" srcset="" className={styles.sidebar__list_img}/>
                    </a>
                </li>
                <li className={styles.sidebar__list_item}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={ticketSale} alt="promo" srcset="" className={styles.sidebar__list_img}/>
                    </a>
                </li>
                <li className={styles.sidebar__list_item}>
                    <a href="!#" className={styles.sidebar__list_link}>
                        <img src={settings} alt="settings" srcset="" className={styles.sidebar__list_img}/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar