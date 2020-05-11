const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({

    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }

}).argv;

const getInfo = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return "La temeperatura de " + direccion + " es de " + temp;

    } catch (e) {

        return "No se pudo determinar el clima de " + direccion;
    };

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);