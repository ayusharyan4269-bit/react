import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (


    <div className={styles.hdr}>Header Section

<h3 className={styles.rn}>AYUSH ARYAN</h3>           {/* /*  /*never put className inside button tag like this <button className='btn'>  */  }
                                                      {/*    /*    never put ' 'in {styles.rn} */ }

   <button className={styles.btn}>okk</button>


    </div>

  )
}

export default Header