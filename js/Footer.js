const Messagne = [
  {
    name: "bx bxl-facebook",
    link: "https://www.facebook.com/uicgroup.org",
  },
  {
    name: "bx bxl-twitter",
    link: "https://twitter.com/UIC_Group",
  },
  {
    name: "bx bxl-instagram",
    link: "https://www.instagram.com/uic.group/",
  },
  {
    name: "bx bxl-telegram",
    link: "https://t.me/uicgroup",
  },
  {
    name: "bx bxl-linkedin-square",
    link: "https://www.linkedin.com/uas/login-submit",
  },
  {
    name: "bx bxl-behance",
    link: "https://www.behance.net/uic_group",
  },
  {
    name: "bx bxl-dribbble",
    link: "https://dribbble.com/uicgroup",
  },
  {
    name: "bx bxs-star",
    link: "https://www.trustpilot.com/review/uic.group",
  },
  {
    name: "bx bxl-yelp",
    link: "https://www.yelp.com/biz/uic-group-san-francisco",
  },
  {
    name: "bx bx-mail-send",
    text: "info@uic.market",
  },
  {
    name: "bx bxs-phone-call",
    text: "+998 71 200 70 07",
    link: "tel:+998712007007",
  },
];

const footerMessange = document.querySelector(".footer_messange");
Messagne.forEach((message, index) => {
  index = index + 1;
  let mes = `
        <div class="icons icons${index}">
            <a  href="${message.link}"> <i class="${message.name}"></i> 
            <span>${message.text ? message.text : ""}</span>
            </a>
            
        </div>
    `;
  footerMessange.innerHTML += mes;
});
