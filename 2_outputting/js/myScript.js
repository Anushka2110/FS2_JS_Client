
document.addEventListener('DOMContentLoaded', function() {

    try {
      
       // window.location.href = 'index.html';
       var container = document.getElementById("helloWorld");
       var pTag = document.createElement("p");
       var pTagText = document.createTextNode("Welcome");
         pTag.appendChild(pTagText);
          container.appendChild(pTag);
          
          console.log("ok");



    } catch (e) {

      console.error(e);
    }
  });