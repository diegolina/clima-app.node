const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeUrl,
        headers: { 'x-rapidapi-key': '8eada481e2mshdca7fef26530861p1768b5jsnae039c667c62' }
    });


    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error('No existen resultados para ' + direccion);
    };

    const direccionLugar = respuesta.data.Results[0];

    return {
        direccion: direccionLugar.name,
        lat: direccionLugar.lat,
        lng: direccionLugar.lon
    };

};

module.exports = {
    getLugarLatLng
};