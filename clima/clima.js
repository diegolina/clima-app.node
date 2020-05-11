const axios = require('axios');

const getClima = async(lat, lng) => {



    const respuesta = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=195201d6eef92cc7b8148f660f0f711c&units=metric');

    return respuesta.data.main.temp;

};


module.exports = {
    getClima
}