
  
  let specImg = document.getElementById("specific-image");
  let si = document.querySelector(".img-target .specific-image");
  let my = document.querySelector(".myImg");
  
  
  
  
  
  
  
  
  
  let eventTar = document.getElementById("img-target");
  let allHtml = [];
  let pageload = () => {
    for (let i = 2; i < 73; i++) {
      if (
        i === 2 ||
        i === 6 ||
        i === 7 ||
        i === 9 ||
      i === 13 ||
      i === 14 ||
      i === 15 ||
      i === 16 ||
      i === 17 ||
      i === 18 ||
      i === 19 ||
      i === 20 ||
      i === 21 ||
      i === 23 ||
      i === 25 ||
      i === 26 ||
      i === 27 ||
      i === 28 ||
      i === 33 ||
      (i === 34) ||
     (i === 36)||
     i === 37 ||
     i === 38 ||
      i === 39 ||
      i === 40 ||
      i === 41 ||
      i === 44 ||
      i === 45 ||
      i === 48 ||
      i === 49 ||
      i === 51 ||
      i === 52
      ) {
      let html = `         
      <div id="card" class="card" style="width: 15.65rem;">
      
      <img class="specific-image" src="./images/kp (${i}).jpg" class="card-img-top" alt="...">
        <!-- MODAL STARTS HERE -->
        <div id="myModal" class="modal">
        
        <!-- The Close Button -->
        <span onclick="console.log("test")" class="close">×</span>
        
        <!-- Modal Content (The Image) -->
        <img style="max-width:500px" class="modal-content" src="kp (${i}).jpg">
        
        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
        </div>
        <!-- MODAL ENDS HERE -->
        </div>
        `;
        allHtml.push(html);
      } else {
        let html2 = `         
        <div id="card" class="card bigger-card" style="width: 35rem;">
        
        <img class="specific-image" src="./images/kp (${i}).jpg" class="card-img-top" alt="...">
        <!-- MODAL STARTS HERE -->
        <div id="myModal" class="modal">
        
        <!-- The Close Button -->
        <span onclick="document.getElementById('myModal').style.display='none'" class="close">×</span>
        
        <!-- Modal Content (The Image) -->
        <img style = "width: 100% !important;" class="modal-content" src="kp (${i}).jpg">
        
        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
        </div>
        <!-- MODAL ENDS HERE -->
        </div>
        `;
        //  let cards = document.querySelectorAll(".card")
        //  console.log(cards)
        //  cards.forEach(card=>{
          //   console.log(card)
          //   card.style.width ="200px !important"
          //  })
      allHtml.push(html2);
    }

    eventTar.innerHTML = allHtml;
  }
  console.log(allHtml[0]);
};
pageload();

let modalC = document.querySelectorAll(".modal-content");
let modal = document.querySelectorAll(".modal");
let cards = document.querySelectorAll(".card");

// clickHere.addEventListener("click", windowDirect)
let len = modalC.length + 2

// Get the modal

  let modalShow = (event) => {
    // console.log(event.target)
    let target = event.target.attributes[1].nodeValue;
    for (let i = 0; i < len; i++) {
      // console.log(event.target.attributes[1].nodeValue);
      if (target.includes(`kp (${i})`)) {
        console.log(i)
        console.log(cards[i-2])
        // console.log(event.target.attributes[1].nodeValue);
        if(cards[i-2].style.width === "15.65rem"){
          modalC[i].style.width = "60%"
        }
        console.log(i)
        console.log(modalC[i]);
        console.log(modalC[i-2]);

        modalC[i].src = event.target.src;
        modal[i].style.display = "block";
      }
      if(event.target.attributes[1].nodeValue === "close" ){
        
        modal[i].style.display = "none"
      }
      // if(event.target.atrributes.includes("closed")){
        //   console.log("test")
        //   modal[i].style.display = "none";
        // }
      }
      
  
  
    };
    eventTar.addEventListener("click", modalShow);

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal




