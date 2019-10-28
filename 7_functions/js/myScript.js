
//document.addEventListener('DOMContentLoaded', function() {

 

    try {
      
       // window.location.href = 'index.html'; 
       
      // fun1();
      // fun2();
       //fun3();

       function fun1() {
        var container = document.getElementById("index");
        var pTag = document.createElement("p");
         var pTagText = document.createTextNode("this is page index");
          pTag.appendChild(pTagText);
          container.appendChild(pTag);
          }
        
    
       function fun2() {
          var container = document.getElementById("pg1");
          var pTag = document.createElement("p");
          var pTagText = document.createTextNode("this is page 1");
          pTag.appendChild(pTagText);
          container.appendChild(pTag);
          }
    
          function fun3() {
            var container = document.getElementById("pg2");
            var pTag = document.createElement("p");
            var pTagText = document.createTextNode("this is page 2");
            pTag.appendChild(pTagText);
            container.appendChild(pTag);
            }
            
      
         

       
       console.log("success!");


    } catch (e) {

      console.error(e);
    }
 // });