let specImg = document.getElementById("specific-image")
let si = document.querySelector(".img-target .specific-image")
let my = document.querySelector(".myImg")
let eventTar = document.getElementById("img-target")
let allHtml = [];
let pageload = () =>{
  for (let i =2 ; i< 73; i++){
    if ( i ===2 ||i ===6 ||i ===7  ||i ===9||i ===13 ||i ===14 ||i ===15||i ===16||
      i ===17 ||i ===18 ||i ===19 ||i ===20 ||i ===21 ||i ===23 ||i ===25 ||i ===26 ||i ===27 ||
      i === 28|| i ===33 ||i ===34|i ===36 ||i ===37||i ===38 ||i ===39 ||i === 40 ||i ===41 ||i ===44 || 
      i ===45||i ===48 ||i ===49 ||i ===51 ||i ===52 ){

        let html = `         
        <div id="card" class="card" style="width: 12.5rem;">
        
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
      } else{
        let html= `         
        <div id="card" class="card" style="width: 25rem;">
        
    <img class="specific-image" src="./images/kp (${i}).jpg" class="card-img-top" alt="...">
    <!-- MODAL STARTS HERE -->
    <div id="myModal" class="modal">
    
       <!-- The Close Button -->
       <span class="close">×</span>
       
       <!-- Modal Content (The Image) -->
       <img style = "width: 50% !important;" class="modal-content" src="kp (${i}).jpg">
       
       <!-- Modal Caption (Image Text) -->
       <div id="caption"></div>
       </div>
       <!-- MODAL ENDS HERE -->
       </div>
       `
       allHtml.push(html)

      }
 
 eventTar.innerHTML = allHtml
  }
  console.log(allHtml[0])
  
}
pageload();


let modalC = document.querySelector('.modal-content')
var modal = document.getElementById("myModal");




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
      console.log(modalC)
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
