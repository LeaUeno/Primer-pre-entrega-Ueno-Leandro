//Primer pre entrega JS, alumno: Ueno Leandro


//No pude hacer funcionar el array, no agrega los productos al array.
//y agregar mas funciones

//por cuestion de tiempo esta bastante basico el trabajo y errores de organizacion o sintaxis, pero espero ir mejorandolo

alert('Presentacion es un simulador de compras, en la que tenes tu billetera y vas calculando la compra')
alert('Precios \n1) $5000 \n2) $10000 \n3) $15000 \n4)20000  \ncompra minima de $5000')

let billetera = parseInt(prompt('Ingresa la plata que tenes en tu billetera'));
let continuar = true;

let carrito = 0;
let agregarAlCarrito;

//ARRAYS/////////////////////////////////////////////////////////
let productos = [];

let producto1 = {product:'prod1', precio: 5000};
let producto2 = {product:'prod2', precio:10000};
let producto3 = {product:'prod3', precio:15000};
let producto4 = {product:'prod4', precio:20000};


// if(billetera == carrito){
//     alert('alcanzaste tu limite');
//     continuar = false;
// }else if(billetera > carrito){
//     alert('Limite alcanzado: $' + billetera +' no tenes mas plata ' + '\n carrito: $ '+carrito);
//     continuar = false;
// }


// if(billetera <= 0){
//         alert('No tenes plata');
//         continuar = false;
//         alert('Chau')
//     }else if(billetera >=1 && billetera <10000){
//         alert('Tenes $' + billetera + ' no te alcanza, la compra minima es de $10000')
//     }
//     else{
//         alert('¿¿¿¿????');
//         continuar = false;
//         alert('Adios')
//     }

if(billetera >= 5000){
    alert('Tenes $' + billetera + '\npodes comprar')
}else if(billetera < 5000){
    alert('Tenes $' + billetera +'\n no te alcanza, la compra minima es de $5000')
    alert('adios')
    continuar = false;
}
else{
    alert('¿¿¿¿????????')
    alert('Ingrese cifra en numeros')
   // alert('adios')
    continuar = false;
}

while(continuar){
    //alert('Tenes $' + billetera);
    if(billetera <= 0){
        alert('No tenes plata');
        continuar = false;
    }

    continuar = confirm('¿¿Continuar??');
    while(continuar){
       // alert('productos \ntu carrito \n' +productos)

        let eleccion = parseInt(prompt('Precios \n1) 5000 \n2)10000 \n3)15000 \n4)$20000 \n5) Eliminar producto \n6)Confirma \n7)Total'+'\nbilletera $'+ billetera +'       / tu carrito $' + carrito));
        switch(eleccion){
            case 1:
                carrito = carrito+ 5000;
                alert("Añadiste prod1 $5000")
                break;
                case 2:
                    carrito= carrito+10000;
                    alert("Añadiste prod2 $10000")
                    break;
                case 3:
                    carrito= carrito+15000;
                    alert("Añadiste prod3 $15000")
                    break;
                case 4:
                    carrito= carrito+20000;
                    alert("Añadiste prod4 $20000")
                    break;
                case 5:
                    confirm('Eliminar prducto');
                    break;
                case 6:
                    confirm('Confirmar compra')
                    break;
                case 7:
                    alert("El total hasta el momento es de: $" + carrito +'\n'+productos);
                    break;
                default:
                    alert("Elige ootra opcion");
                    break;

                    function sumaCarrito(){
  //              let eleccionSuma =;
                if(eleccion == 1){
                    productos.push(producto1)
                }else if(eleccion == 2){
                    productos.push(producto2)
                }else if(eleccion == 3){
                    productos.push(producto3)
                }else if(eleccion == 4){
                    productos.push(producto4)
                }
            }


                } if(eleccion == 6){
                continuar = false;
                alert('confirma')
                alert('El total es de $'+ carrito)
            }else if(eleccion == 5){

//FUNCION/////////////////////////////////////////////////////                
                function restaCarrito(){
                    let eleccionResta= parseInt(prompt('resta carrito elija que quiere eliminar \n1)$5000 \n2)$10000 \n3)$15000 \n4)$20000'+'\nbilletera $'+ billetera +'       / tu carrito $' + carrito))
                    switch(eleccionResta){
                        case 1:
                carrito = carrito - 5000;
                alert("Eliminaste prod1 $5000")
                break;
                case 2:
                    carrito= carrito - 10000;
                    alert("Eliminaste prod2 $10000")
                    break;
                case 3:
                    carrito= carrito-15000;
                    alert("Eliminaste prod3 $15000")
                    break;
                case 4:
                    carrito= carrito-20000;
                    alert("Eliminaste prod4  $20000")
                    break;
                default:
                    alert("Elige ootra opcion");
                    break;
                    }
                }restaCarrito();
            }
            alert('productos \ntu carrito $'+ carrito + '\n' +productos + 'product')
            }

//FUNCION////////////////////////////////////////////////////
            function sumaCarrito(){
  //              let eleccionSuma =;
                if(eleccion == 1){
                    productos.push(producto1)
                }else if(eleccion == 2){
                    productos.push(producto2)
                }else if(eleccion == 3){
                    productos.push(producto3)
                }else if(eleccion == 4){
                    productos.push(producto4)
                }
            }
            

if(billetera == carrito){
    alert('alcanzaste tu limite');
    continuar = false;
}else if(billetera > carrito){
    alert('Limite alcanzado: $' + billetera +' no tenes mas plata ' + '\n carrito: $ '+carrito);
    continuar = false;



        continuar = confirm('¿¿Continuar??');
    }


    continuar = confirm('¿¿Desea salir??');
    if(continuar == true){
        alert('adios')
    }else{
        alert('adios')
    }
}
