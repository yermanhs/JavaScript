//'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos 
//todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let string = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
console.log(string.match(/amor/g).length)
//Usa match() para contar el número de todos los porque en la siguiente oración:
let text = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(text.match(/porque/g).length)
//Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"

//Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. '
const texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let a = (parseInt(texto.substring(8,12)))*12
let b = parseInt(texto.substring(texto.search("10000")))
let c = (parseInt(texto.substring(texto.search("15000"))))*12
console.log(`El salario anual ${a} + bono de ${b} + curso por mes ${c} , el total es ${a + b +c}`)