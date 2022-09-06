//npm es el gestor de paquetes de node
//npm en navegador para buscar tdas las librerias que necesitemos
//axios es una libreria que nos permite hacer lamadas http a diferentes servidores , urls
//instalar npm i axios

// Instalar axios para hacer llamadas a servicios externos
import axios from "axios"
//copiar de axios
axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(function (response) {
        // handle success
        console.log("Success!!!")
        console.log(response.data)
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!!")
        console.log(error);
    })
