import styles from './Button.module.css'

function Button({ handleClick }: any) {
    return (
        <div>
            <button onClick={handleClick}>CLICK</button>
        </div>
    )
}

export default Button
