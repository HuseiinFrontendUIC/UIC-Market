const mainCard = document.querySelector("#mainCard");
const mainProducts = document.querySelector("#mainProdects");
// console.log(mainProducts);
let Card_header = MainProducts.slice(0, 3);
let Card_footer = MainProducts.slice(3, MainProducts.length);

Card_header.forEach((main, index) => {
  ModalCard(main, index, mainCard);
});

Card_footer.forEach((main, index) => {
  ModalCard(main, index, mainProducts);
});
function ModalCard(main, index, carded) {
  index = index + 1;
  const card = `
        <div class="products__card card${index}">
            <div class="card_title">
                <h2>${main.text}</h2>
                <p>${main.porac}</p>
            </div>
            <div class="app">
                ${main.google ? `<img src="${main?.google}"/>` : ""}
                ${main.apple ? `<img src="${main?.apple}"/>` : ""}
                </div>
            <img src="${main.img}" class="bigPicture"/>
        </div>
    `;
  carded.innerHTML += card;
}
