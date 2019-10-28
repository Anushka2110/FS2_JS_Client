
//document.addEventListener('DOMContentLoaded', function() {

 

    try {
      
       // window.location.href = 'index.html'; 
       var x = Number(document.getElementById('num1').value);
         var y = Number(document.getElementById('num2').value);
     

       
        function add() {
         var z = x+y;
         var container = document.getElementById("page1");
            var pTag = document.createElement("p");
            var pTagText = document.createTextNode(z);
            pTag.appendChild(pTagText);
            container.appendChild(pTag);
            window.location.href = 'add.html'; 
      
      }
      
       function subtract() {
        var z = x-y;
         var container = document.getElementById("page1");
            var pTag = document.createElement("p");
            var pTagText = document.createTextNode(z);
            pTag.appendChild(pTagText);
            container.appendChild(pTag);
            window.location.href = 'subtract.html'; 
       }
          function prev() {
           
            window.location.href = 'index.html';
          }

           function multiply() {
            var z = x*y;
         var container = document.getElementById("page1");
            var pTag = document.createElement("p");
            var pTagText = document.createTextNode(z);
            pTag.appendChild(pTagText);
            container.appendChild(pTag);
            window.location.href = 'multiply.html'; 
            }
            

               document.getElementById('add').addEventListener('click', add);
               document.getElementById('subtract').addEventListener('click', subtract);
               document.getElementById('multiply').addEventListener('click', multiply);
               


            
      
         

       
       console.log("success!");


    } catch (e) {

      console.error(e);
    }
 // });