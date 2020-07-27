/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{//las lamp salen 35, el user pone la cantidad
     let vCantidadlamparas;
     let vPrecio = 35;
     let vMarcas;
     let vDescuento;
     let vIIBB;
     let vPrecioIIBB;
     let vResul; //podria asignarle aca el parsefloat asi ya me queda para dsp

     vCantidadlamparas = parseInt(document.getElementById("txtIdCantidad").value);//cantidad
     vMarcas = document.getElementById("Marca").value;
     
     if ( vCantidadlamparas >=6) //a
     {
         vDescuento = 0.50;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.50); 
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }
     else if ( vCantidadlamparas == 5 && vMarcas === "ArgentinaLuz") //b
     { 
         vDescuento = 0.40;
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.40);
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }
     else 
     {
         vDescuento = 0.30;
         vResul = parseFloat((vPrecio*vCantidadlamparas)* 0.30);
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }

     if (vCantidadlamparas == 3 && vMarcas == "ArgentinaLuz") //d
     {
         vDescuento = 0.15;  
         vResul = parseFloat((vPrecio * vCantidadlamparas) * 0.15);
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }
     else if (vCantidadlamparas == 3 && vMarcas == "FelipeLamparas")
     {
         vDescuento = 0.10;
         vResul = parseFloat((vPrecio*vCantidadlamparas)* 0.10);
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }
     else (vCantidadlamparas == 3 && vMarcas != "ArgentinaLuz" && "FelipeLamparas") 
     {
         vDescuento = 0.05;
         vResul = parseFloat((vPrecio*vCantidadlamparas)*0.05);
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }
     if (vPrecio >120)
     {
         vPrecioIIBB = vPrecio * 1.10;
         vIIBB = vPrecio * 0.1;
         document.getElementById("txtIdprecioDescuento").value = vPrecioIIBB;
         alert("IIBB Usted pago "+ vPrecioIIBB.toFixed(2) +" siendo "+ vIIBB.toFixed(2) +" el impuesto que se pago.");
     }
     else if (vCantidadlamparas <=2)
     {
         vResul = vCantidadlamparas * vPrecio;
         document.getElementById("txtIdprecioDescuento").value = vResul;
     }

     /*
     if (vLamparas >=6 && vDescuento == (vLamparas * 50) / 100)
     {
         alert(parseFloat(vResul = vLamparas - vDescuento));}//B
         
         else if (vLamparas === 5 && vMarcas === "ArgentinaLuz" && vDescuento == (35 * 40)/100)
         { alert(parseFloat(vResul= 35 * 5 - vDescuento));}
         
         else (vMarcas != "ArgentinaLuz" && vDescuento == (35*30)/100)
         { alert(parseFloat(vResul=35*5 - vDescuento))} //C no se si es necesaria la var descu
         
         if (vLamparas == 4 && vMarcas == "ArgentinaLuz" || "FelipeLamparas")
         { alert(parseFloat(vResul = (35 * 5) * 25 / 100));}
         
         else (vMarcas != "ArgentinaLuz" && "FelipeLamparas")
         { alert(parseFloat(vResul = (35*4) * 20 /100));}
         //D */

}
//no se muestra por alert, se muestra en el cuadro de textos
//por eso no podia escribir ahi 