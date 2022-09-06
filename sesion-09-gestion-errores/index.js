/*
1.npm  init en terminal para creal el packejson => npm init -y
2. reemplazar en el packejson  el test por star:"node index.js"
main:index.js
3.crear el index.js
4.npm winston en el navegador es una libreria
5.npm install winston en terminal y nos crea la carpeta node_modules
*/


const logger = require('./logger')

// logger.log("Hola estoy saliendo por pantalla")
logger.info("Hola esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")