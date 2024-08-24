const toggleBtn = document.querySelector("#toggle-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.style.display = "none";

toggleBtn.onclick = function(event) {
    event.preventDefault(); 
    
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "block";
    } else {
        dropdownMenu.style.display = "none";
    }
};



// ..............Dark Mode.......................  
let btn= document.getElementById("mode");
let btnIcon= document.getElementById("mode-btn");

btn.onclick= function(){
    document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
    //     btnIcon =<i class="fa-sharp fa-solid fa-sun"></i>  
    // }else{
    //     <i id="mode-btn" class="fa-solid fa-moon"></i>
    // }
}

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body")

// let currMode= "light"; //light

// modebtn.addEventListener("click",() =>{

//     if (currMode === "light") {  // light
//           currMode="dark" ;   //dark
//           body.classList.add("dark")  ; //dark
//           body.classList.remove("light"); //light
//     }else{
//         currMode = "light" //light
//         body.classList.add("light")  ;//light
//         body.classList.remove("dark");//dark
//     }
// }
// )

// ............ scroll button .. 
const topbtnE1 = document.querySelector("#scrollbtn")

window.addEventListener("scroll", function () {
    console.log(this.window.scrollY);
    if (this.window.scrollY > 150) {
        topbtnE1.style.display =" block";
    }else {
        topbtnE1.style.display =" none";
    }
    
})
// ................................... 

// function sendemail(){
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "khambes606@gmail.com",
//         Password: "72E7739757D21CC1067BE29F24ADF8E330BB",
//         To: 'khambesagar108@gmail.com',
//         From: "khambes606@gmail.com",
//         Subject: "This is the subject",
//         Body: "And this is the body"
//     }).then(
//         message => alert(message)
//     );
// }
