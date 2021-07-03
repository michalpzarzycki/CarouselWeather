import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchWeather = (city: string) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((res: any) => {
      console.log(res)
      return res
    }).catch((err: any) => {
      console.log(err)
      return err
    })
}