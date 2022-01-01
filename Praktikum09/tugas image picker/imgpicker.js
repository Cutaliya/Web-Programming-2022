// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='IMG/pet society.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game pet society.jpg");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='IMG/mystery.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game mystery.jpg");
       }
       else if (pil=="3")
       {
           document.getElementById("img").innerHTML="<img src='IMG/stumble guys.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game stumble guys.jpg");
       }
       else if (pil=="4")
       {
           document.getElementById("img").innerHTML="<img src='IMG/among us.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game among us.jpg");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='IMG/fruit ninja.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game fruit ninja.jpg");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='IMG/candy crush.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game candy crush.jpg");
       }
       else if (pil=="7")
       {
           document.getElementById("img").innerHTML="<img src='IMG/monopoly.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game monopoly.jpg");
       }
       else if (pil=="8")
       {
           document.getElementById("img").innerHTML="<img src='IMG/street hd racing.jpg'>";
           window.alert("Ini Adalah Gambar Dari Game street hd racing.jpg");
       }else{
           document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
       }
       
   }