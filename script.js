var modal = document.getElementById("myModal");
let specImg = document.getElementById("specific-image")
let si = document.querySelector(".img-target .specific-image")
let my = document.querySelector(".myImg")
let modalC = document.querySelector('.modal-content')
let eventTar = document.getElementById("img-target")
let allHtml = [];
let pageload = () =>{
  for (let i =2 ; i< 73; i++){
    let html = `         
     <div id="card" class="card" style="width: 30rem;">

    <img class="specific-image" src="./images/kp (${i}).jpg" class="card-img-top" alt="...">
    <!-- MODAL STARTS HERE -->
    <div id="myModal" class="modal">

       <!-- The Close Button -->
       <span class="close">×</span>

       <!-- Modal Content (The Image) -->
       <img class="modal-content" src="kp (${i}).jpg">

       <!-- Modal Caption (Image Text) -->
       <div id="caption"></div>
    </div>
    <!-- MODAL ENDS HERE -->
 </div>
 `
 allHtml.push(html)
 
 eventTar.innerHTML = allHtml
  }
  console.log(allHtml[0])
  
}
pageload();





// clickHere.addEventListener("click", windowDirect)


// Get the modal

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
let modalShow = (event)=>{
  // console.log(event.target)
  // console.log(modal)
  for(let i = 2 ; i < 75; i++){
    if (event.target.src.includes(i)){
      modalC.src = event.target.src
      modal.style.display = "block";
    }
  }
  console.log('t')
}

eventTar.addEventListener("click", modalShow)


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
let modalHide = ()=> {
  modal.style.display = "none";
}
span.addEventListener("click", modalHide)
