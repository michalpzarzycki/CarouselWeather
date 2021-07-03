import Card from './Card'
import styles from './CarouselWeather.module.css'
function CarouselWeather({ rotation, weathers=[] }: any) {
    return (
        <div className={styles.mainDiv}>
             <div className={styles.carousel}>
                {weathers.map((weather: any, idx: any) => <Card weather={weather} title="new" rotateY={idx*60} rotation={rotation} idx={idx}/>)}
            </div>
        </div>
    )
}

export default CarouselWeather
