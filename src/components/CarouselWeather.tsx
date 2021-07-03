import Card from './Card'
import styles from './CarouselWeather.module.css'
function CarouselWeather() {
    return (
        <div className={styles.mainDiv}>
             <div className={styles.carousel}>
                {[0,0,0,0,0,0].map((elem: any, idx: any) => <Card title="new" rotateY={idx*60 + 'deg'}/>)}
            </div>
        </div>
    )
}

export default CarouselWeather
