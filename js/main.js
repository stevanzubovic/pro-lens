$(document).ready(function(){
    fillNav();
    fillGallery();
    fillServices();
    document.getElementById("contact_email").addEventListener("blur", emailVer),
    document.getElementById("contact_name").addEventListener("blur", nameVer),
    document.getElementById("contact_message").addEventListener("blur", msgVer);
    document.getElementById('button').addEventListener('click', onSend);
    
   
    var proba = document.getElementsByClassName("single");
    for (let i = 0; i < proba.length; i++ ) {
      proba[i].addEventListener("click", galleryOnclick);
      proba[i].addEventListener("mouseover", function(){
        this.style.opacity = 1;
      })
      proba[i].addEventListener("mouseleave", function(){
        this.style.opacity = 0.8;
      })
  }

  
    
})



function emailVer() {
  var e = document.getElementById("contact_email").value;
  var label = document.getElementById("emailLabel");
  if (e == "") {
      label.textContent = "Email cannot be empty";
      mail = true;
  } else {
      /^\S+@\S+\.\S+$/.test(e) ? (label.textContent = "") : (label.textContent = "Please enter a valid email adress");
  }
  if(label.textContent === ""){
    return true;
  }
}

function nameVer() {
  var e = document.getElementById("contact_name").value;
  var label = document.getElementById("nameLabel");
  if(e == "") {
      label.textContent = "Name cannot be empty";
      
  } else {
      /^[A-ZČĆŽŠĐ][a-zčćžš]{1,20}(\s[A-ZČĆŽŠĐ][a-zčćžš]{1,20})+$/.test(e) ? (label.textContent = "") : (label.textContent= "eg. Peter Parker");
  }
  if(label.textContent === ""){
    return true;
  }
}

function msgVer() {
  var e = document.getElementById("contact_message").value;
  var label = document.getElementById("msgLabel");
  if (e == "") {
      label.textContent = "Message cannot be empty";

  } else {
      label.textContent = "";
  }

  if(label.textContent === ""){
    return true;
  }
}

function onSend() {

  if(msgVer() && nameVer() && emailVer()){
    document.getElementById('msg').textContent = "Form submitted";
    document.getElementById("contact_email").value = "";
    document.getElementById("contact_name").value = "";
    document.getElementById("contact_message").value = "";
    setTimeout(function(){ document.getElementById('msg').textContent = ""; }, 2000);  
  }
}

       

 let navElements = new Array(
     ["index.html","Home"],
     ["#GlassesGallery","Glasses"],
     ["#Services","Services"],
     ["#company","Company"],
     ["#contact","Contact"],
     ["author.html","Author"],
     ["docs.pdf","Docs"])

 function fillNav() {
    let topNav = document.querySelector(".navLinks");
    let location = window.location.pathname;
    console.log(location);
        for(let i = 0; i < navElements.length; i++) {
          if(location == "/" || location == "/index.html"){
            let li = document.createElement("li");
            let a = document.createElement('a');
            a.setAttribute('href', navElements[i][0]);
            a.classList.add('nav-link');
            li.classList.add('nav-item');
            a.textContent = navElements[i][1];
            li.appendChild(a);
            topNav.appendChild(li);
        } 
      }
 }
 let glassesImages = new Array(
   ["img/g1.webp","Glasses","17$"],
   ["img/g2.webp","Glasses","39$"],
   ["img/g3.webp","Glasses","20$"],
   ["img/g4.webp","Glasses","20$"],
   ["img/g5.webp","Glasses","45$"],
   ["img/g6.webp","Glasses","15$"],
   ["img/g7.webp","Glasses","9$"],
   ["img/g8.webp","Glasses","20$"],
   ["img/g9.webp","Glasses","57$",])


 function fillGallery () {
     let imgArea = document.querySelector(".image-area");

     for(let i = 0; i < glassesImages.length; i++){
         let img = document.createElement("img");
         let div = document.createElement("div");
         let span = document.createElement("span");
        
         img.setAttribute('src', glassesImages[i][0]);
         img.setAttribute('alt', "glasses");
         img.classList.add('single');
         div.classList.add('imgDiv');
         span.classList.add('price');
         span.textContent = glassesImages[i][2];
         
         div.appendChild(img);
         div.appendChild(span);
         imgArea.appendChild(div);
    
     }
 }



 function galleryOnclick() {
    let path = this.getAttribute("src");
    if (!path.includes("b.")) {
        this.setAttribute("src",path.substring(0,6) + "b" + path.substring(6,path.length));
    } else {
        path = path.replace("b." , ".");
        this.setAttribute("src", path);
    }
 
   
 }  

 let servicesArray = new Array(
     ["Whether you need a thorough eye examination, diabetic screening, glaucoma screening or surgical treatment, our ophthalmologists will provide you with outstanding quality care"],
     ["Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered."],
     ["Our expert technicians at Pro Lens use laser technology to fix glasses and can repair your eyewear including titanium glasses, plastic eyewear frames and even damaged eyeglass lenses."],
     ["'Better late than never' is not a saying that applies to your eye care. Sometimes it is easy to forego a check-up or well visit however, we provide affordable anual checkups"]
 )
 let servicesArrayPics = new Array(
     ["img/doctorService.jpg","Doctor examining a patients eyes"],
     ["img/servicesGlass.webp","Pair of thin rimmed glasses"],
     ["img/servicesBrokenGlas.png","Pair of broken glasses"],
     ["img/img-04.jpg", "Two red "]
 )

 function fillServices() {
    servicesDiv = document.getElementById("Services");
    servicesDiv.innerHTML = `
    <div class="row">
    <div class="col-12">
      <div class="tm-parallax">
        <header class="tm-parallax-header">
          <h2 class="">Services</h2>
        </header>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <div class="tm-activity-block">
        <div class="tm-activity-img-container">
          <img src="${servicesArrayPics[0][0]}" alt="${servicesArrayPics[0][1]}" class="tm-activity-img" />
        </div>
        <div class="tm-activity-block-text">
          <h3 class="tm-text-blue">Get your perscription</h3>
          <p>${servicesArray[0]}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="tm-activity-block mr-lg-0 ml-lg-auto">
        <div class="tm-activity-img-container">
          <img src="${servicesArrayPics[1][0]}" alt="${servicesArrayPics[1][1]}" class="tm-activity-img" />
        </div>
        <div class="tm-activity-block-text">
          <h3 class="tm-text-blue">Get yourself a new pair of glasses</h3>
          <p>${servicesArray[1]}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="tm-activity-block">
        <div class="tm-activity-img-container">
          <img src="${servicesArrayPics[2][0]}" alt="${servicesArrayPics[2][1]}" class="tm-activity-img" />
        </div>
        <div class="tm-activity-block-text">
          <h3 class="tm-text-blue">Fix your glasses</h3>
          <p>${servicesArray[2]}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="tm-activity-block mr-lg-0 ml-lg-auto">
        <div class="tm-activity-img-container">
          <img src="${servicesArrayPics[3][0]}" alt="${servicesArrayPics[3][1]}" class="tm-activity-img" />
        </div>
        <div class="tm-activity-block-text">
          <h3 class="tm-text-blue">Preventative care</h3>
          <p>${servicesArray[3]}</p>
        </div>
      </div>
    </div>
  </div> 
    `
 }