
let card = document.querySelector("card")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let button = document.querySelector("button")



const getfetchuser = async ()=>{
    const Response =await fetch("http://quotable.io/random") 
    const data = await Response.json();
    
   h1.innerHTML = '<i class="fa-solid fa-quote-left"></i> ' + data.content + ' <i class="fa-solid fa-quote-right"></i>';
   h2.innerText = "Author - " + data.author;

}



button.addEventListener("click", getfetchuser)