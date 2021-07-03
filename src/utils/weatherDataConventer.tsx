import { secondsToTime } from './secondsToTime'

export const weatherDataConvert = (data: any) => {
  
    data.sys.sunrise = secondsToTime(data.sys.sunrise)
    data.sys.sunset = secondsToTime(data.sys.sunset)
    data.main.temp = Math.round(data.main.temp - 273) + " °C";
    data.main.feels_like =  Math.round(data.main.feels_like - 273) + " °C";
    data.main.temp_min =  Math.round(data.main.temp_min - 273) + " °C";
    data.main.temp_max =  Math.round(data.main.temp_max - 273) + " °C";
    data.main.pressure += " hPa";
    data.main.humidity += " %"
    return { name: data.name, ...data.main, ...data.weather[0], ...data.sys, iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }
  }