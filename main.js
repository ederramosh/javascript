console.log(`------------- Primer Ejercicio -------------`);

let miPrimerArray = [1, 2, 3, 4, 5];

function eliminarIndice( indice ) {
    
    let newArray = miPrimerArray.filter( (numero, index) => {
        return indice != index;
    } );

    return newArray;

}
console.log( `Array para el primer ejercicio es: [${miPrimerArray}]` );
console.log( `Eliminando el indice 2, nos genera un nuevo arreglo: [${eliminarIndice(2)}]` );


console.log(`------------- Segundo Ejercicio -------------`);

let miSegundoArray = [1, 'hola', 'adios', 4, 100]

function busquedaArray( valor ) {

    let resultado = miSegundoArray.includes( valor );
    return resultado;

}
console.log( `Array para el segundo ejercicio es: [${miSegundoArray}]` );
console.log( `La palabra "hola" existe dentro del array?: ${busquedaArray('hola')}` );


console.log(`------------- Tercer Ejercicio -------------`);
let arreglo = [1, 2, 3, 4];

function addElement(element, maxSize) {
    
    if( !arreglo.includes( element ) && arreglo.length <= maxSize ){
        arreglo.push( element );
        return arreglo;
    }
    
    if( !arreglo.includes( element ) && arreglo.length >= maxSize ) {
        arreglo.pop();
        arreglo.push( element );
        return arreglo;
    }
    
    if( arreglo.includes( element ) ) {
        
        //remueve el elemento
        let resultado = arreglo.filter( dato => {
            return dato !== element;
        } );

        resultado.push( element );
        return resultado;
    }

};

console.log( addElement(2, 5, ...arreglo) );

console.log(`------------- Mas alla -------------`);

let nacionalidades = ['mexicano', 'argentino', 'argentino', 'venezolano', 'peruano', 'mexicano', 'argentino', 'peruano', 'venezolano'];

function contarNacionalidades(nacionalidad) {

    let resultado = nacionalidades.reduce( ( acc, elementoActual ) => {
        if(elementoActual === nacionalidad) {
            acc++;
        }
        return acc;
    }, 0);

    return resultado;
}

console.log( `Venezolanos: ${contarNacionalidades('venezolano', ...nacionalidades)}` );
console.log( `Mexicanos: ${contarNacionalidades('mexicano', ...nacionalidades)}` );
console.log( `Argentinos: ${contarNacionalidades('argentino', ...nacionalidades)}` );
console.log( `Colombianos: ${contarNacionalidades('colombiano', ...nacionalidades)}` );