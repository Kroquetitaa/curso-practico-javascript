// Codigo del cuadrado
console.group('Cuadrado'); 

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden:', ladoCuadrado, 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es:', perimetroCuadrado, 'cm');

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log('El area del cuadrado es:', areaCuadrado, 'cm');

console.groupEnd();

// Codigo del triangulo
console.group('Triangulo');

const ladoTrianguloUno = 6;

const ladoTrianguloDos = 6;

const baseTriangulo = 4;

console.log(
    'Los lados del triangulo miden: '
    ,ladoTrianguloUno
    ,'cm'
    ,ladoTrianguloDos
    ,'cm'
    ,baseTriangulo
    ,'cm'
    );

const alturaTriangulo = 5.5;
console.log('La altura del triangulo es de: ', alturaTriangulo, 'cm');

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
console.log('El perimetro del triangulo es de:', perimetroTriangulo);

const areaTriangulo = ( baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo es de:', areaTriangulo);

console.groupEnd();

// Codigo del circulo
console.group('Circulo');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo es:', radioCirculo);
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo es:', diametroCirculo);
// PI
const PI = Math.PI;
console.log('El valor de PI es:', PI);
// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetro del circulo es:', perimetroCirculo);
// Area
const areaCirculo = Math.pow( radioCirculo, 2) * PI;
console.log('El area del circulo es:', areaCirculo);

console.groupEnd();