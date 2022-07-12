
function textout(){
    document.getElementById("cart").innerHTML="Cart";
}
function normal(){
    document.getElementById("cart").innerHTML="<img src='imgs/carti1.png'>";
}

const headis=document.getElementsByClassName("headings");
//console.log(headis);
let l=headis.length;
//console.log(l);
var i=0;
for(i; i<l; i++){
    var hed=headis[i]; var b=hed.innerHTML;
    var c= b.toUpperCase;
    hed.innerHTML=c;
}
