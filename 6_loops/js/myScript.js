
document.addEventListener('DOMContentLoaded', function() {

    try {
      
       // window.location.href = 'index.html';       
      
       var list1 = document.getElementById("list1");
       var list2 = document.getElementById("list2");
       var arr1=["volvo", "maruti", "BMW"];
       var arr2=[23, 12, 45];
       var variable1 = "m";
       var variable2 = 23;
       
       var i=0;
       while(i<3)
       {
            if(arr1[i].startsWith(variable1,0))
           {
          var pTag = document.createElement("li");
          var pTagText = document.createTextNode(arr1[i]);
          pTag.appendChild(pTagText);
          list1.appendChild(pTag);

          } i++;   
       }

       
       i=0;
       while(i<3)
       {
         if(variable2!=arr2[i])
         {
          var pTag = document.createElement("li");
          var pTagText = document.createTextNode(arr2[i]);
          pTag.appendChild(pTagText);
          list2.appendChild(pTag);

         }i++;
       }
       
       console.log("success!");


    } catch (e) {

      console.error(e);
    }
  });