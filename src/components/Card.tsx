import { useState, useEffect } from 'react'
import styles from './Card.module.css'

function Card({ rotateY, translateZ="250px", rotation, idx, weather }: any) {
    const [rotate, setRotate] = useState(rotateY)
    useEffect(() => {
        if(rotation.rotateLeft) {
            setRotate(rotate-60)
        } else {
            setRotate(rotate+60)
        }
    }, [rotation])
    return (
        <div className={styles.card} style={{ transform: `rotateY(${rotate}deg) translateZ(${translateZ})`}}>
            <div className={styles.data}>{weather.name}</div>
            <div className={styles.max}>{weather.temp_max}🠕</div>
            <div className={styles.min}>🠗{weather.temp_min}</div>
            <div className={styles.temp}>{weather.temp}</div>
            <div className={styles.feelsLike}>Feels like: {weather.feels_like}</div>
            <div className={styles.city}>{weather.main}</div>
            <div className={styles.icon} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${weather.icon}@2x.png
)`}}></div>
            <div className={styles.description}>{weather.descriptions}</div>
        </div>
    )
}

export default Card
