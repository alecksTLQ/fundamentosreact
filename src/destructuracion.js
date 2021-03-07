
/* 
    uso de la destructuracion y sus variables 
    en objetos y arrays
*/

const user1 = {
    name: 'Gerardo Gallegos',
    username: 'luxFenix',
    country: 'Mexico',
    social: {
        facebook: 'facebook....',
        twitter: 'twitter......'
    }
}

const saluda =(user)=>{

    var {name, social} = user //se puede extraer mas de una propiedad del user de esta forma
    var {twitter: tw} = social //se puede definir un alias a la propiedad
    var {country} = user
    var {username = 'superninja'} = user //en caso de no existir la propiedad username se asignara como valor por defecto superninja

    const orden = ['pizza', 'te verde', 'pay', 124, false, 'otro']

    /*
        el operador ... crea un array desde la posicion donde se declaro hasta el ultimo valor en este caso desde 124 a otro
        que son posiciones 3,4,5 del array
    */

    const [comida, bebida, postre, ...restantes] = orden

    console.log(
        `orden ${comida} ${bebida} ${postre}, restantes: ${restantes}`
    )

    console.log(
        `Hola soy ${name} y vivo en ${country} tengo una cuenta de ${tw}, username: ${username}`
    )
}

saluda(user1)