function CalcularPrecio ()

let vCantidadlamparas;
     let vPrecio = 35;
     let vMarcas;
     let vDescuento;
     let vIIBB;
     let vPrecioIIBB;
     let vResul;

     vCantidadlamparas = parseInt(document.getElementById("txtIdCantidad").value);
     vMarcas = document.getElementById("Marca").value;
//A
     switch (vCantidadlamparas)
     {
         case 6: //no se si se puede aca poner >=6
         vDescuento = 0.50;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.50);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         //b
         case 5:
         vMarcas = "ArgentinaLuz";
         vDescuento = 0.40;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.40);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 5:
         vMarcas = "FelipeLamparas";
         vDescuento = 0.30;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.30);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 5:
         vMarcas = "JeLuz"; //no se si se puede usar && asi agregar las demas marcas c mismo desc
         vDescuento = 0.30;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.30);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 5:
         vMarcas = "HazIluminacion";
         vDescuento = 0.30;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.30);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 5:
         vMarcas = "Osram";
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.30);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break; //c
         case 4:
         vMarcas = "ArgentinaLuz";
         vDescuento = 0.25;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.25);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 4:
         vMarcas = "FelipeLamparas";
         vDescuento = 0.25;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.25);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 4:
         vMarcas = "JeLuz";
         vDescuento = 0.20;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.20);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 4:
         vMarcas = "HazIluminacion";
         vDescuento = 0.20;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.20);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 4:
         vMarcas = "Osram";
         vDescuento = 0.20;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.20);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break; //d
         case 3:
         vMarcas = "ArgentinaLuz";
         vDescuento = 0.15;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.15);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 3:
         vMarcas = "FelipeLamparas";
         vDescuento = 0.10;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.10);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 3:
         vMarcas = "JeLuz";
         vDescuento = 0.05;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.05);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 3:
         vMarcas = "HazIluminacion";
         vDescuento = 0.05;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.05);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break;
         case 3:
         vMarcas = "Osram";
         vDescuento = 0.05;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.05);
         document.getElementById("txtIdprecioDescuento").value = vResul;
         break; //e no se si puede haber dos switch pero tengo q cambiar var
     }
     switch (vResul)
     {
         case 120:
         vPrecioIIBB = vPrecio * 1.10;
         vIIBB = vPrecio * 0.1;
         document.getElementById("txtIdprecioDescuento").value = vPrecioIIBB;
         alert("IIBB Usted pago "+ vPrecioIIBB.toFixed(2) +" siendo "+ vIIBB.toFixed(2) +" el impuesto que se pago.");
         break;
     }
    
     }
