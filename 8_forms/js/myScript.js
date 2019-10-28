
//document.addEventListener('DOMContentLoaded', function() {

 

    try {
      
       // window.location.href = 'index.html'; 
     

       function welcome() {
         window.location.href = 'welcome.html';
          }
        
    
       function fun() {
         window.location.href = 'form.html';
          /*var container = document.getElementById("pg1");
          var pTag = document.createElement("p");
          var pTagText = document.createTextNode("this is page 1");
          pTag.appendChild(pTagText);
          container.appendChild(pTag);
          */
          }
    
          function prev() {
           
            window.location.href = 'index.html';
            }

            function last() {
               window.location.href = 'last.html';
               }


            
      
         

       
       console.log("success!");


    } catch (e) {

      console.error(e);
    }
 // });