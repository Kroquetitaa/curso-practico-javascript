
const calcularMediAritmetica = lista => {
    // let sumaLista = 0;

    // for (let i = 0; i <= lista.length - 1; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    // console.log(sumaLista);
    const sumaLista = lista.reduce( (valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
}