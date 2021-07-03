import { useState, useEffect } from 'react'
import styles from './Card.module.css'

function Card({ title="default", background="yellow", rotateY, translateZ="250px", rotation, idx, weather }: any) {
    const [rotate, setRotate] = useState(rotateY)
    useEffect(() => {
        setRotate(rotate+60)
      console.log(rotateY, rotate)
     console.log("WEATHER", weather)
    }, [rotation])
    return (
        <div className={styles.card} style={{ backgroundColor:`${background}`, transform: `rotateY(${rotate}deg) translateZ(${translateZ})`}}>
            <div className={styles.data}>DATA</div>
            <div className={styles.max}>MAX</div>
            <div className={styles.min}>MIN</div>
            <div className={styles.temp}>TEMP</div>
            <div className={styles.feelsLike}>FEELS LIKE</div>
            <div className={styles.city}>CITY</div>
            <div className={styles.icon}>ICON</div>
            <div className={styles.description}>DESC</div>
        </div>
    )
}

export default Card
