const perfil = {
    nombre: 'Alex',
    info: {
        direccion: 'la direccion...'
    }
}

const region = {
    pais: 'Mexico',
    info: {
        coordenadas: 'coordenadas....'
    }
}

const social = {
    twitter: '@alx'
}


/* utilizando el operador spread */
const resultado = {
    ...region,
    ...perfil,
    ...social,
    info: {
        ...perfil.info,
        ...region.info
    }
}


console.log(resultado)



const frutasVerdes = [
    'limon',
    'kiwi',
    'uva'
]

const frutasRojas = [
    'manzana',
    'fresa',
    'sandia'
]

const frutas = [
    1,
    2,
    ...frutasVerdes,
    ...frutasRojas,
    'toronja'
]


console.log(frutas)