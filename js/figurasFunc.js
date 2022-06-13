// Cuadrado

console.group('Cuadrado');

const ladoCuadrado = 5;

const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

console.log('El perimetro del cuadrado es:', perimetroCuadrado( ladoCuadrado ));
console.log('El area del cuadrado es:', areaCuadrado( ladoCuadrado ));

console.groupEnd();

// Triangulo

console.group('Triangulo');

const perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;
console.log('El perimetro del triangulo es:', perimetroTriangulo( 2,2,4 ));

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log('El perimetro del triangulo es:', areaTriangulo( 5, 7 ));

console.groupEnd();

// Circulo
console.group('Circulo');

const PI = Math.PI;

const diametroCirculo = radio => radio * 2;
console.log('El diametro del circulo es: ', diametroCirculo(5));

const perimetroCirculo = radio => {
    const diametro = diametroCirculo( radio );
    return diametro * PI;
}
console.log('El perimetro del circulo es: ', perimetroCirculo(7));

const areaCirculo = radio => (radio * radio) * PI;
console.log('El area del circulo es: ', areaCirculo(3));

console.groupEnd();
