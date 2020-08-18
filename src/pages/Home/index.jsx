import React, { useState } from 'react'
import styles from'./index.css'
console.log(styles,'哈哈')
export default function () {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>{number}</h1>
            <button className={styles.beautyBtn} onClick={() => {
                setNumber(number + 1);
            }}>点击</button>
        </div>
    )
}
