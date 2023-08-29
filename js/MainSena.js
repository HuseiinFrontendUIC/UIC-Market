const Sena = document.querySelector("#mainSena");
let ProdectHtml = "";
MainSena.forEach((item) => {
  const SenaItem = `
        <div class="sena__card">
            <div class="sena_title">
                <h2>${item.text}</h2>
                <p>${item.porac}</p>
            </div>
            <h2 class="sena">${item.sena}</h2>
            <div class="card_container">
                <p>План включает:</p>
                <div class="container_flex">
                <img src="../pictures/check.png">
               <span>${item.plan1}</span>
               </div>
               <div class="container_flex">
                <img src="../pictures/check.png">
               <span>${item.plan2}</span>
               </div>
               <div class="container_flex">
                <img src="../pictures/check.png">
               <span>${item.plan3}</span>
               </div>
               <div class="container_flex">
                <img src="../pictures/check.png">
               <span>${item.plan4}</span>
               </div>
               <div class="container_flex">
                <img src="../pictures/check.png">
               <span>${item.plan5}</span>
               </div>
            </div>
        </div>
    `;

  Sena.innerHTML += SenaItem;
});
