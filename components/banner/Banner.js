import React from 'react'
import styles from './Banner.module.css'

const Banner = ({title,subtitle}) => {
  return (
    <div className={styles.bannerdiv}>
        <div className={styles.banner}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default Banner