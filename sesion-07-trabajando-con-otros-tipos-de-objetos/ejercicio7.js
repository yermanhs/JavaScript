
//Un nuevo Set con los nombres de tu familia
const array = ['Yerman','Johanna','Pedro Pablo']

const nombreSet = new Set(array)
console.log(nombreSet)
//Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombreSet.add('Yerman')
console.log(nombreSet)
//Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombreSet.add('JavaScript')
console.log(nombreSet)