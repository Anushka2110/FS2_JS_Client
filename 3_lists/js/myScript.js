
document.addEventListener('DOMContentLoaded', function() {

    try {
      
       // window.location.href = 'index.html';
       var list1 = document.getElementById("list1");
       var list2 = document.getElementById("list2");
       var list3 = document.getElementById("list3");
       //var pTag = document.createElement("li");
       //var pTagText = document.createTextNode("Hello World");
       for(var i=0; i<3; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode("aaa");
        pTag.appendChild(pTagText);
        list1.appendChild(pTag);

       }
       for(var i=0; i<3; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode("bbb");
        pTag.appendChild(pTagText);
        list2.appendChild(pTag);

       }
       for(var i=0; i<3; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode("ccc");
        pTag.appendChild(pTagText);
        list3.appendChild(pTag);

       }
       console.log("success!");




    } catch (e) {

      console.error(e);
    }
  });