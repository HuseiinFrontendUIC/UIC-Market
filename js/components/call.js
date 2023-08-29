const call = document.querySelector("#number");
const maskOptions = {
  mask: "+{998}(00)000-00-00",
  lazy: false,
};
const mask = new IMask(call, maskOptions);

const close = document.querySelector(".bx-x");
const Click = document.querySelector(".active_btn");
const Modal = document.querySelector(".modal");
Click.addEventListener("click", () => {
  Modal.classList.remove("activeCall");
});
close.addEventListener("click", () => {
  Modal.classList.add("activeCall");
});

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", submitBtnClicked);
function submitBtnClicked(e) {
  e.preventDefault();
  let params = {
    from_name: document.querySelector("#name").value,
    number: document.querySelector("#number").value,
    email: document.querySelector("#email").value,
  };
  emailjs
    .send("service_m1lrtsb", "template_1fo724g", params)
    .then(function (res) {
      alert("Success" + res.status);
    });
}
