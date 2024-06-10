//accessing all the neccesary DOM element 
const fixedImg = document.getElementById("fixedImg");
const logo = document.getElementById("logo")
const navBar = document.getElementById("nav-bar");
const basicInfo = document.getElementById("basic-info");
const dinoSet = document.getElementById("dino-set");
//declaring an array of images
const dinoImg = ["assets/dino-img-1.jpg", "assets/dino-img-2.jpg", "assets/img3.webp"]

//setting interval to change the background image 
setInterval(() => {
    fixedImg.style.backgroundImage = `url(${dinoImg[Math.floor(Math.random() * 3)]})`
    fixedImg.style.backgroundRepeat = "no-repeat";
    // logo.style.backgroundImage = `url(${dinoImg[Math.floor(Math.random() * 3)]})`
    // logo.style.backgroundRepeat = "no-repeat";
}, 5000);

//click event to change the page 
navBar.addEventListener("click",(ele)=>{
    let id = ele.target.getAttribute("id");
    let idEle = document.getElementById(id);
    if (id=="0"){
        document.getElementById("1").classList.remove("underline");
        idEle.classList.add("underline");
        basicInfo.style.display = "block";
        dinoSet.style.display = "none";
    } else if (id=="1"){
        document.getElementById("0").classList.remove("underline");
        idEle.classList.add("underline");
        dinoSet.style.display="block";
        basicInfo.style.display="none";
    }
})