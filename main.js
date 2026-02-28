//Primer pre entrega JS, alumno: Ueno Leandro



//por cuestion de tiempo esta bastante basico el trabajo y errores de organizacion o sintaxis, pero espero ir mejorandolo

alert('Presentacion es un simulador de compras, en la que tenes tu billetera y vas calculando la compra')
alert('Precios \n1)Prod1: $5000 \n2)Prod2: $10000 \n3)Prod3: $15000 \n4)Prod4: $20000\n  \n|Compra minima de $5000')

let billetera = parseInt(prompt('Ingresa la plata que tenes en tu billetera'));
let continuar = true;

let carrito = 0;
let agregarAlCarrito;

//ARRAYS Y OBJETOS/////////////////////////////////////////////////////////
let productos = [{}];

let products = ["|prod1: ","|prod2: ","|prod3: ","|prod4: "];

let precios = [5000,10000, 15000, 20000];



let saldo = billetera;
let resultado;


// function saldoCalculo(a, b){
//     saldo = billetera - carrito ;
//     return saldo;
// }
// saldoCalculo();

function saldoCalculo(billetera1, carrito1){
//    saldo = billetera - carrito ;
    return billetera1 - carrito1;
}
//saldoCalculo();

saldo = saldoCalculo(billetera, carrito)

let producto1 = {product:'|prod1', precio: 5000};
let producto2 = {product:'|prod2', precio:10000};
let producto3 = {product:'|prod3', precio:15000};
let producto4 = {product:'|prod4', precio:20000};

// function suuma(){
//     productos.push(products[0], precios[0]);
// }
// suuma();


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

        let eleccion = parseInt(prompt('Precios \n1)prod1: $5000                  5) Eliminar producto\n2)prod2: $10000                6)Confirma\n3)prod3: $15000                7)Total\n4)prod4: $20000                8)Aplicar cupon de descuento 15% \n'+'\n/ Billetera: $'+ billetera +'       / tu carrito $' + carrito +'\n/ Saldo: $' + saldo + '|' +resultado));
        switch(eleccion){
            case 1:
                carrito = carrito+ 5000;
                saldo = saldoCalculo(billetera, carrito);
                //saldo = billetera -5000;
                alert("Añadiste prod1 $5000")
                productos.push(products[0], precios[0])
                break;
                case 2:
                    carrito= carrito+10000;
                    saldo = saldoCalculo(billetera, carrito);
                   // saldo = billetera -10000;
                    alert("Añadiste prod2 $10000")
                    productos.push(products[1], precios[1])
                    break;
                case 3:
                    carrito= carrito+15000;
                    saldo = saldoCalculo(billetera, carrito);
                    //saldo = billetera -15000;
                    alert("Añadiste prod3 $15000")
                    productos.push(products[2], precios[2])
                    break;
                case 4:
                    carrito= carrito+20000;
                    saldo = saldoCalculo(billetera, carrito);
                    //saldo = billetera -20000;
                    alert("Añadiste prod4 $20000")
                    productos.push(products[3], precios[3])
                    break;
                case 5:
                    confirm('Eliminar prducto');
                    break;
                case 6:
                    confirm('Confirmar compra')
                    carrito = carrito*1.21;
//                    saldo = saldoCalculo(billetera, carrito);
                    // function ivaCalculo(){
                    //     let iva = carrito*1.21;
                    // }
                    //     ivaCalculo();

                    break;
                case 7:
                    alert("El total hasta el momento es de: $" + carrito +'\n'+ productos);
                    break;
                case 8:
                    alert('Aplicar descuento 15%')
                    carrito = carrito - carrito*(15/100);
                    alert("Aplicaste tu descuento de 15% \n tu carrito: $" + carrito)
                //     function descuento(){
                //     if(eleccion == 8){
                //     carrito = carrito - carrito*(15/100) ;
                //     alert("Aplicaste tu descuento de 15% \n tu carrito: " + carrito)
                // }
                // descuento();
                // }
                default:
                    alert("Elige ootra opcion");
                    break;

                    

//                     function saldoCalculo(){
//     saldo = billetera - carrito ;
//     return saldo;
//}
// saldoCalculo();
function saldoResultado(){
                        if(eleccion == 1 ||eleccion == 2||eleccion ==3||eleccion == 4){
                            resultado = saldo ;
                        }
                    }saldoResultado();

                    function sumaCarrito(){
  //              let eleccionSuma =;
                if(eleccion === 1){
                    productos.push(products[0], precios[0])
                }else if(eleccion === 2){
                    productos.push(products[1], precios[1])
                }else if(eleccion === 3){
                    productos.push(products[2], precios[2])
                }else if(eleccion === 4){
                    productos.push(products[3], precios[3])
                }
            }
            sumaCarrito();
function sumaCarritoB(){
  //              let eleccionSuma =;
                if(eleccion == 1){
                    productos.push(producto1)
                   // productos.push(products[0], precios[0])
                }else if(eleccion == 2){
                    productos.push(producto2)
                }else if(eleccion == 3){
                    productos.push(producto3)
                }else if(eleccion == 4){
                    productos.push(producto4)
                }
            }
            sumaCarritoB();
            

                } if(eleccion == 6){
                continuar = false;
                alert('confirma')
                alert('El total es de $'+ carrito +'\n|Saldo: $' + saldo)
            }else if(eleccion == 5){

//FUNCION/////////////////////////////////////////////////////                
                function restaCarrito(){
                    let eleccionResta= parseInt(prompt('resta carrito elija que quiere eliminar \n1)$5000 \n2)$10000 \n3)$15000 \n4)$20000'+'\nbilletera $'+ billetera +'       / tu carrito $' + carrito))


                    switch(eleccionResta){//switch////////////////////
                        case 1:
                carrito = carrito - 5000;
                alert("Eliminaste prod1 $5000")
                productos.pop();
                break;
                case 2:
                    carrito= carrito - 10000;
                    alert("Eliminaste prod2 $10000")
                    productos.pop();
                    break;
                case 3:
                    carrito= carrito-15000;
                    alert("Eliminaste prod3 $15000")
                    productos.pop();
                    break;
                case 4:
                    carrito= carrito-20000;
                    alert("Eliminaste prod4  $20000")
                    productos.pop();
                    break;
                default:
                    alert("Elige ootra opcion");
                    break;
                    }
                }restaCarrito();
            }

            if(carrito > billetera){
                alert('Limite alcanzado: $' + billetera +' no tenes mas plata ' + '\n carrito: $ '+carrito);
                continuar = false;}
                
                alert('productos \ntu carrito $'+ carrito + '\n' + productos + 'product')

                // function descuento(){
                //     if(eleccion == 8){
                //     carrito = carrito - carrito*(15/100) ;
                //     alert(carrito)
                // }
                // descuento();
                // }
                
            }//fin WHILE///////////////////////////////////////////

//FUNCION////////////////////////////////////////////////////

// if(carrito >= billetera){
//     alert('Limite alcanzado: $' + billetera +' no tenes mas plata ' + '\n carrito: $ '+carrito);
//     continuar = false;}
// }else if(billetera > carrito){
//     alert('Limite alcanzado: $' + billetera +' no tenes mas plata ' + '\n carrito: $ '+carrito);
//     continuar = false;



//         continuar = confirm('¿¿Continuar??');
//     }


    
        }continuar = confirm('¿¿Desea salir??');
    if(continuar == true){
        alert('adiossss')
    }else{
        alert('adiosss')
    }



////////////////////////////////////////////////////////////////////////
//////////////////////////FIN CODIGO PRIINCIPAL/////////////////////////
////////////////////////////////////////////////////////////////////////


    let mas ;

    let continuar1 = true;

    while(continuar1){
        alert('Tenemos mas servicios\n1)Prestamo personal\n2)Cajero Automatico\n3)Calculadora');
        continuar1= confirm('desea continuar??');

        
        let eleccion2= parseInt(prompt('Ingrese opcion:\n1)Prestamo personal \n2)Cajero Automatico \n3)Calculadora '))


        function switchMas(){
            switch(eleccion2){
                case 1:
                    alert('Prestamo')
                    break;
                case 2:
                    alert('Cajero')
                    break;
                case 3:
                    alert('Calculadora')
                    break;
                default:
                    alert('def')
                    break;
            }
            
        }switchMas();

        function switchMasContinuar(){
            if(eleccion2 == 1){
                alert('1 continuar')
        }else if(eleccion2 ==2){
            alert('2 continuar')

        }else if(eleccion2 ==3){
            alert('3 continuar')
        }
        return eleccion2;
    }switchMasContinuar()

let eleccionPrestamo;

let cantidad;

let eleccionCuotas;
    function prestamo(){
        if(eleccion2 == 1){
                alert('Hacemos prestamos desde $10.000 hasta $500.000\n a pagar en 1 mes,3 meses, 6 meses,1 año ')
                eleccionPrestamo= parseInt(prompt('Que cantidad necesita?\n limites: desde $10.000 hasta $500.000'));

//                return cantidad;
                
        }prestamoContinuar()
    }
    prestamo();



    // function prestamoContinuar(){
    //     if (cantidad >= 10000 && cantidad <=500000){
    //         alert('Puede acceder al prestamo, en cuanto tiempo lo va a finalizar?')
    //     }else if(cantidad <10000){
    //         alert('Solo desde $10.000 hasta $500.000')
    //     }else if(cantidad >500000){
    //         alert('Limite exedido, solo hasta $500.000')
    //     }

    // }
    // prestamoContinuar()

        function prestamoContinuar(){
        if (eleccionPrestamo >= 10000 && eleccionPrestamo <=500000){
            alert('Cantidad: $'+ eleccionPrestamo +'.\nPuede acceder al prestamo, en cuanto tiempo lo va a finalizar?')
            eleccionCuotas = true;
        }else if(eleccionPrestamo <10000){
            alert('Cantidad: $'+ eleccionPrestamo +'.\nSolo desde $10.000 hasta $500.000')
        }else if(eleccionPrestamo >500000){
            alert('Cantidad: $'+ eleccionPrestamo +'.\nLimite exedido, solo hasta $500.000')
        }
        return eleccionCuotas;
    }
    prestamoContinuar()

    function eleccionCuotasF(){
        eleccionCuotas= parseInt(prompt('Cantidad: $'+ eleccionPrestamo +'.\nElija cuotas\n1)1 mes\n2)3 meses\n3)6 meses \n4)1 año'))

        switch(eleccionCuotas){
            case 1:
                alert('1 mes');
                eleccionCuotas =1;
                break;
            case 2:
                alert('3 meses');
                eleccionCuotas =3;
                break;
            case 3:
                alert('6 meses');
                eleccionCuotas =6;
                break;
            case 4:
                alert('1 año');
                eleccionCuotas =12;
                break;
            default:
                alert('cancelar');
                break;
        }
    }
    eleccionCuotasF();

let result;

    function calculoCuotas(cantidad,cuotas){
        result = cantidad * cuotas;
        return result;
        alert(result)
    }
    calculoCuotas(eleccionPrestamo, eleccionCuotas);


////////////////////////////////////////////////////////////////////////
//////////////////////////CAJERO////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
    function cajero(){
        if(eleccion2 == 2){
                alert('opciones de cajero automatico')
        }
    }
    cajero();

////////////////////////////////////////////////////////////////////////
//////////////////////////CALCU/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
    function calcu(){
        if(eleccion2 == 3){
                alert('opciones de calcu ')
        }
    }
    calcu();
//        alert('seleccione');
    }
    
    alert('adios')