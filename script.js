let eventTar = document.getElementById("img-target");
let allHtml = [];
let specImg = document.getElementById("specific-image");
let si = document.querySelector(".img-target .specific-image");
let my = document.querySelector(".myImg");

let modalShow = (obj, event, modalC, modal, cards) => {
  let image_src = event.target.src
  console.log(image_src)
  console.log(obj[0].link)
  for (let i = 0; i < obj.length; i++){
    
    if (image_src === obj[i].link)
    window.open(image_src)

  }

  // console.log(event.target)
  // let target = event.target.src;
  // for (let i = 0; i < obj.length; i++) {
  //   if (event.target.textContent === "×") {
  //     modalC[i].style.display = "none";
  //     modal[i].style.display = "none";

  //     console.log(modal[0].style.display)
  //     console.log(modalC[i].style.display)

  //     return;
  //   }
  //   console.log(event.target.attributes[1].nodeValue);
  //   else if (target.includes(obj[i].link)) {
  //     console.log(i);
  //     console.log(cards[i]);
  //     console.log(event.target.attributes[1].nodeValue);
  //     if (cards[i].style.width === "15.65rem") {
  //       modalC[i].style.width = "60%";
  //     }
  //     console.log(i);
  //     console.log(modalC[i]);
  //     console.log(modalC[i]);

  //     modalC[i].src = event.target.src;
  //     modal[i].style.display = "block";
  //   }
  //   if(event.target.atrributes.includes("closed")){
  //     console.log("test")
  //     modal[i].style.display = "none";
  //   }
  // }
};
let api_controller = async () =>{
  
  
  let imgr_api = async () => {
    let data = await fetch("https://api.imgur.com/3/album/NGHIWrd", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer 4438eed888a4444658b7de63c81ebddd8bd500b9",
      },
    });
    
    let response = await data.json();
    let obj = response.data.images;
    console.log(obj[1].link)
    for (let i = 0; i < obj.length; i++) {
      if (
        i === 0 ||
        i === 4 ||
        i === 5 ||
        i === 7 ||
        i === 11 ||
        i === 12 ||
        i === 13 ||
        i === 14 ||
        i === 15 ||
        i === 16 ||
        i === 17 ||
        i === 18 ||
        i === 19 ||
        i === 21 ||
        i === 23 ||
        i === 24 ||
        i === 25 ||
        i === 26 ||
        i === 31 ||
        i === 32 ||
        i === 34 ||
        i === 35 ||
        i === 36 ||
        i === 37 ||
        i === 38 ||
        i === 39 ||
        i === 42 ||
        i === 43 ||
        i === 46 ||
        i === 47 ||
      i === 49 ||
      i === 50
      ) {
        let html = `         
        <div id="card" class="card" style="width: 26rem;">
        
        <img class="specific-image" src="${obj[i].link}" class="card-img-top" alt="...">

        </div>
        `;
        allHtml.push(html);
      } else {
        let html2 = `         
        <div id="card" class="card bigger-card" style="width: 58.5rem;">
        
        <img class="specific-image" src="${obj[i].link}" class="card-img-top" alt="...">

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
      // for modal generation you would need to pass these query selectors into modalShow 
      // ^^ **  IF U DECIDE TO GO BACKTO MODALS ** ^^
      let modalC = document.querySelectorAll(".modal-content");
      let modal = document.querySelectorAll(".modal");
      let cards = document.querySelectorAll(".card");
      console.log(obj)
      eventTar.addEventListener("click", (event)=>{
        let obj = response.data.images
        modalShow(obj, event)
      });
    };
    imgr_api();
  }
api_controller()  
