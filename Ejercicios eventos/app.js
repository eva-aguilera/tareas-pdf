//Ejercicio 1
        /* let cuadrado = document.querySelector("#cuadrado");
        let boton = document.querySelector("#boton");
 
        let colores = "celeste";
     
        boton.addEventListener("click", cambiarColor);

        function cambiarColor() {
            
            cuadrado.textContent = colores;
            cuadrado.classList.toggle("bg-info")
       } */

       //Ejercicio 2

       let square = document.getElementById('square');
       let textInput = document.getElementById('textInput');
       
       function updateSquare() {
         square.textContent = textInput.value;
       }
       
       function clearSquare() {
         square.textContent = '';
         textInput.value = '';
       }

    //Ejercicio 3
    function calculateBMI() {
        let peso = parseFloat(document.getElementById('peso').value);
        let altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir altura de cm a m
      
        let bmi = peso / (altura * altura);
        let categoria = "";
      
        if (bmi < 18.5) {
          categoria = "Bajo peso";
        } else if (bmi >= 18.5 && bmi < 25) {
          categoria = "Peso normal";
        } else if (bmi >= 25 && bmi < 30) {
          categoria = "Sobrepeso";
        } else if (bmi >= 30) {
          categoria = "Obesidad";
        }
      
        document.getElementById('resultado').innerHTML = "Tu IMC es: " + bmi.toFixed(2) + " - " + categoria;
      }
      
    
    //Ejercicio 4
    function convertCurrency() {
        let Monedas = parseFloat(document.getElementById('Monedas').value);
        let selector1 = document.getElementById('selector1').value;
        let selector2 = document.getElementById('selector2').value;
    
        let pesos = {
          USD: 1,
          pesochileno: 786.99,
        };
    // esta función realiza el cálculo de conversión de monedas y muestra el resultado en un elemento específico en la página web.
        let resultado = (Monedas / pesos[selector1]) * pesos[selector2];
        document.getElementById('result').innerHTML = Monedas + ' ' + selector1 + ' = ' + resultado.toFixed(2) + ' ' + selector2;
      }
