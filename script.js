let input1=document.querySelector(".input1");
let input2=document.querySelector(".input2");
let submitButton=document.querySelector(".submitButton")
let result=document.querySelector(".result")
let image1=document.querySelector(".image1");
let image2=document.querySelector(".image2");
let image3=document.querySelector(".image3");
let image4=document.querySelector(".image4");


submitButton.onclick=function(){
let input1=document.querySelector(".input1").value;
let input2=document.querySelector(".input2").value;
  
if(input1==="introvert" && input2==="adventurous"){
  result.innerHTML="Because You Picked " + input1 + " and " + input2 + " You are Vanilla "
  image1.style.display="block";
   image2.style.display="none";
  image3.style.display="none";
  image4.style.display="none";
}

else if (input1==="introvert" && input2==="creative"){
  result.innerHTML="Because You Picked " + input1 + " and " + input2 + " You are Mint Chocolate Chip ";
  image2.style.display="block";
  image1.style.display="none";
  image3.style.display="none";
  image4.style.display="none";
}

else if (input1==="extrovert" && input2==="adventurous"){

result.innerHTML="Because You Picked " + input1 + " and " + input2 + " You are Strawberry"  
  image3.style.display="block";
  image2.style.display="none";
  image4.style.display="none";
  image1.style.display="none";

}

else if (input1==="extrovert" && input2==="creative"){

result.innerHTML="Because You Picked " + input1 + " and " + input2 + " You are Cookie Dough"   
  image4.style.display="block"
  image2.style.display="none";
  image3.style.display="none";
  image1.style.display="none";
}

else{
result.innerHTML="Try Again!"
  
}
};
