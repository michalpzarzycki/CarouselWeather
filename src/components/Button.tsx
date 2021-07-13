import styles from './Button.module.css'

function Button({ handleClick, isRight }: any) {
    return (
        
            <button onClick={handleClick} className={styles.button} style ={{ transform: isRight ? 'rotateZ(180deg)' : ""}}></button>
        
    )
}

export default Button
