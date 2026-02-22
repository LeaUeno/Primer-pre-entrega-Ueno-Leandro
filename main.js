//Primer pre entrega JS, alumno: Ueno Leandro

alert('Presentacion es unsimulador de compras, en la que tenes tu billetera y vas calculando la compra')
alert('Precios \n1) \n2) \n3) \n4) \n5) \n6) \n7)')

let billetera = parseInt(prompt('Ingresa la plata que tenes en tu billetera'));
let continuar = true;

let carrito = 0;
let agregarAlCarrito;



if(billetera <= 0){
        alert('No tenes plata');
        continuar = false;
        alert('Chau')
    }else if(billetera >=1){
        alert('Tenes $' + billetera + ' podes comprar ')
    }
    else{
        alert('¿¿¿¿????');
        continuar = false;
        alert('Adios')
    }

while(continuar){
    //alert('Tenes $' + billetera);
    if(billetera <= 0){
        alert('No tenes plata');
        continuar = false;
    }

    continuar = confirm('¿¿Continuar??');
    while(continuar){
        alert('productos')
        let eleccion = parseInt(prompt('Precios \n1) \n2) \n3) \n4) \n5) \n6) \n7)'+ 'tu carrito $' + carrito));
        switch(eleccion){
            case "1":
                carrito = carrito+ 18000;
                alert("Añadiste Hamburguesa")
                break;
        }



        continuar = confirm('¿¿Continuar??');
    }


    continuar = confirm('¿¿Desea salir??');
}
