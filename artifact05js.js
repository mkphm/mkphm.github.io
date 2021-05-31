var myImages =["https://i.imgur.com/MdwSEFf.jpg", "https://i.imgur.com/DTfb9b7.jpg","https://i.imgur.com/gWXDJ17.jpg","https://i.imgur.com/vRV8k3I.jpg","https://i.imgur.com/Iik5FcF.jpg"];


var captionImages =["my name is Lulu","me during lunar new year","im a megaphone","im tired need snacks..",":p"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next