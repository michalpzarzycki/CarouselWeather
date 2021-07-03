import { useState, useEffect } from 'react'
import styles from './Card.module.css'

function Card({ title="default", background="yellow", rotateY, translateZ="250px", rotation, idx }: any) {
    const [rotate, setRotate] = useState(rotateY)
    useEffect(() => {
        setRotate(rotate+60)
      console.log(rotateY, rotate)
     
    }, [rotation])
    return (
        <div className={styles.card} style={{ backgroundColor:`${background}`, transform: `rotateY(${rotate}deg) translateZ(${translateZ})`}}>CARD{idx}</div>
    )
}

export default Card
