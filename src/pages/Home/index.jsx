import React, { useState } from 'react'
import styles from'./index.css'
import light from '../../assets/light.png'

export default function () {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>{number}</h1>
            <button className={styles.beautyBtn} onClick={() => {
                setNumber(number + 1);
            }}>点击</button>
            <img style={{width:'300px',height:'300px'}} src={light}></img>
            <div className={styles.imgBg}></div>
        </div>
    )
}
