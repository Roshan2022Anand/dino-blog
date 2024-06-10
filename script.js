const logo = document.getElementById("logo")

const dinoImg = ["assets/dino-img-1.jpg", "assets/dino-img-2.jpg","assets/img3.webp"]

setInterval(()=>{
    logo.style.backgroundImage=`url(${dinoImg[Math.floor(Math.random()*3)]})`
    logo.style.backgroundRepeat="no-repeat";
},5000);