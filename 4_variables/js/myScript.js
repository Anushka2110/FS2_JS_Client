
document.addEventListener('DOMContentLoaded', function() {

    try {
      
       // window.location.href = 'index.html';       
       
       var arr1=["sunil", "rosy", "vera", "chaman"];
       var arr2=[23, 12, 45, 78];
       var list1 = document.getElementById("list1");
       var list2 = document.getElementById("list2");
       var list3 = document.getElementById("list3");
       //var pTag = document.createElement("li");
       //var pTagText = document.createTextNode("Hello World");
       for(var i=0; i<4; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode(arr1[i]);
        pTag.appendChild(pTagText);
        list1.appendChild(pTag);

       }
       for(var i=0; i<4; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode(arr2[i]);
        pTag.appendChild(pTagText);
        list2.appendChild(pTag);

       }
       for(var i=0; i<4; i++)
       {
        var pTag = document.createElement("li");
        var pTagText = document.createTextNode(arr1[i]+arr2[i]);
        pTag.appendChild(pTagText);
        list3.appendChild(pTag);

       }
       console.log("success!");


    } catch (e) {

      console.error(e);
    }
  });