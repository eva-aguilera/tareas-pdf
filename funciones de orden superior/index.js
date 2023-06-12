//  Ejercicio 1
 const NivelDealcohol = 5.5; // Nivel de alcohol especificado

 function filtroCervezas(beers, NivelDealcohol) {
    
     const filtroCervezas = beers.filter((cervezas) => cervezas.abv <= NivelDealcohol);
   
     const resultado = filtroCervezas.map((objeto) => {
       return {
         nombre: objeto.name,
         alcohol: objeto.abv,
         amargura: objeto.ibu
       };
     });
  
     console.log(resultado)
   }
 filtroCervezas(beers,NivelDealcohol) 


 // Ejercicio 2
 let NivelmasDealcohol = 7.4;
 function cervezas(beers, NivelmasDealcohol) {
   let cerveza = beers.filter((cerveza) => cerveza.abv >= NivelmasDealcohol);

   let resultado = cerveza.map((objeto) => {
     return {
       nombre: objeto.name,
       alcohol: objeto.abv
     };
   });

   console.log(resultado);
 }

 cervezas(beers, NivelmasDealcohol);

 //Ejercicio 3
 const NivelDeAmargura = 41.5; // Nivel de amargura

 function CervezasAmarga(beers, NivelDeAmargura) {
    
     const CervezaAmarga = beers.filter((cervezas) => cervezas.ibu <= NivelDeAmargura);
   
     const resultado = CervezaAmarga.map((objeto) => {
       return {
         nombre: objeto.name,
         amargura: objeto.ibu
       };
     });
  
     console.log(resultado)
   }
 CervezasAmarga(beers,NivelDeAmargura) 

//Ejercicio 4 

function ordenarCervezasPorPropiedad(beers, nombrePropiedad, ascendente) {

 
    nombrePropiedad = []
 
}


//Ejercicio 5
 console.log(beers);
 let dato = document.getElementById("contenedor");
 console.log(dato);

 function crearPlantilla(objeto) {
   return `
     <table class="table">
       <tbody>
         <tr>
           <td>${objeto.name}</td>
         </tr>
         <tr>
           <td>${objeto.abv}</td>
         </tr>
         <tr>
           <td>${objeto.ibu}</td>
         </tr>
       </tbody>
     </table>`;
 }

 function imprimirDatos(array, place) {
   let template = "";

   for (let cerveza of array) {
     template += crearPlantilla(cerveza);
   }

   place.innerHTML = template;
 }

 imprimirDatos(beers, dato);



