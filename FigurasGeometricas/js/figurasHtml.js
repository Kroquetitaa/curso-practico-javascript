// Interactuar con HTML
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;
const PI = Math.PI;
const perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;
const diametroCirculo = radio => radio * 2;
const perimetroCirculo = radio => diametroCirculo( radio ) * PI;
const areaCirculo = radio => (radio * radio) * PI;

const alturaTrianguloIsosceles = ( lado, base ) => Math.sqrt( (lado * lado) - ((base * base)/4));

// Cuadrado
const calcularPerimetroCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado( value );
    alert( perimetro );
}

const calcularAreaCuadrado = () => {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado( value );
    alert( area );
}
//Triangulo
const calcularPerimetroTriangulo = () => {
    const inputLadoUno = document.getElementById('InputLadoUnoTriangulo');
    const inputLadoDos = document.getElementById('InputLadoDosTriangulo');
    const inputBase = document.getElementById('InputBaseTriangulo');

    const valueLadoUno = parseInt(inputLadoUno.value);
    const valueLadoDos = parseInt(inputLadoDos.value);
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo( valueLadoUno, valueLadoDos, valueBase );
    alert( perimetro );
}

const calcularAreaTriangulo = () => {
    const inputAltura= document.getElementById('InputAlturaTriangulo');
    const inputBase = document.getElementById('InputBaseTriangulo');

    const valueAltura = parseInt(inputAltura.value);
    const valueBase = parseInt(inputBase.value);

    const area = areaTriangulo( valueBase, valueAltura );
    alert( area );
}
// Circulo

const calcularPerimetroCirculo = () => {
    const inputRadio = document.getElementById('InputRadioCirculo');
    const valueRadio = parseInt(inputRadio.value);

    const perimetro = perimetroCirculo( valueRadio );
    alert( perimetro );
}

const calcularAreaCirculo = () => {
    const inputRadio = document.getElementById('InputRadioCirculo');
    const valueRadio = parseInt(inputRadio.value);

    const area = areaCirculo( valueRadio );
    alert( area );
}

const calcularDiametroCirculo = () => {
    const inputRadio = document.getElementById('InputRadioCirculo');
    const valueRadio = parseInt(inputRadio.value);

    const diametro = diametroCirculo( valueRadio );
    alert( diametro );
}

// Triangulo Isosceles
const calcularAlturaTrianguloIsosceles = () => {
    const inputLadosIsosceles = document.getElementById('InputLadoIsosceles');
    const inputBaseIsosceles = document.getElementById('InputBaseIsosceles');
    const valueLados = parseInt( inputLadosIsosceles);
    const valueBase = parseInt( inputBaseIsosceles );

    const altura = alturaTrianguloIsosceles( valueLados, valueBase );
    alert( altura );
}