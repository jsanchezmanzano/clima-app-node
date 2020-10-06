const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=26ab86af9cb7c76c8141150ee44d006c&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}