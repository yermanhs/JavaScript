import * as moduloController from './modulos/controller.js'
import chalk from "chalk"

const sum = moduloController.suma(1,2)
console.log(chalk.green(sum))

const multiplicar = moduloController.multiplica(4,5)
console.log(chalk.blue(multiplicar))


