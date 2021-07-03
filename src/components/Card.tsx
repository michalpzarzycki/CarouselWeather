import styles from './Card.module.css'

function Card({ title="default", background="yellow", rotateY="0deg", translateZ="250px" }: any) {
    return (
        <div className={styles.card} style={{ backgroundColor:`${background}`, transform: `rotateY(${rotateY}) translateZ(${translateZ})`}}>CARD {title}</div>
    )
}

export default Card
