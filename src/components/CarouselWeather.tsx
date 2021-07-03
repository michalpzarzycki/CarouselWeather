import Card from './Card'
import styles from './CarouselWeather.module.css'
function CarouselWeather({ rotation }: any) {
    return (
        <div className={styles.mainDiv}>
             <div className={styles.carousel}>
                {[0,0,0,0,0,0].map((elem: any, idx: any) => <Card title="new" rotateY={idx*60} rotation={rotation} idx={idx}/>)}
            </div>
        </div>
    )
}

export default CarouselWeather
