

const calcularPrecioConDescuento = ( precio, descuento ) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}
const onClickButtonPriceDiccount = () => {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento( priceValue, discountValue );

    const resutlP = document.getElementById('ResultP');
    resutlP.innerText = 'El precio con descuento : ' + precioConDescuento;
}
// console.log(
//     `El precio original es: ${precioOriginal},
//     El descuento es: ${ descuento },
//     El precio con descuento es: ${ precioConDescuento}
// `);

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });