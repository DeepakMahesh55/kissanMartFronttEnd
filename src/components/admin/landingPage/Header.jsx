import React from 'react'
import styles from './Header.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Header() {
  return (
    <div className={styles.navBar}>
        <div className={styles.logoContainer}>
            <img src='./kissanlogo.png' alt='' className={styles.logo}/>
            <h3>KissanMart</h3>
        </div> 
        <div className={styles.nameContainer}>
            <div className={styles.circle}>D</div>
            <p>Deepak</p>
            <KeyboardArrowDownIcon/>
        </div>
    </div>
  )
}

export default Header