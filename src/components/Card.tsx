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
            <h1>{weather.name}</h1>
            <p>{weather.temp}</p>
        </div>
    )
}

export default Card
