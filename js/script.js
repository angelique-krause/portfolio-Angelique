/* afin de permettre le non recopiage du  header et du footer, je crée un fichier script.js qui va contenir une fonction le permettant */

$(function () {
  $("#header").load("../header.html");
  // $("#footer").load("../footer.html");
});
var fileName = location.href.replace(/\.[^/.]+$/, "").split("/").slice(-1);
$('nav a').each(function () {
  if ($(this).attr('href') == location.href.split("/").slice(-1)) { $(this).addClass("-isActive"); }
});


/* Je souhaite récupérer les mails des personnes qui veulent des infos sur mon C.V. et je leur propose une ANIMATION , je passerai ensuite par  un mailto */


// const sf = {};
// sf.content = document.querySelector('.content');
// sf.form = document.querySelector('.content > #singular-form');
// sf.trigger = document.querySelector('.content > #singular-form > button#trigger');
// sf.input = document.querySelector('.content>#singular-form>#input-content>input');
// sf.submitButton = document.querySelector('.content > #singular-form > #input-content > button');
// sf.successMessage = document.querySelector('.content > #singular-form > #success');

// sf.submitDelay = 1500;

// sf.clickHandler = (e) => {
//   switch (e.target) {
//     case sf.trigger:
//       console.log('case trigger');
//       sf.content.style.width = '37rem'
//       e.target.classList.remove('shown');
//       sf.input.classList.add('shown');
//       sf.submitButton.classList.add('shown');
//       sf.input.focus();
//       break;
//     case sf.submitButton:
//       sf.submitForm();
//       break;
//   }
// }

// sf.handleInputKeypress = (e) => {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     sf.submitForm();
//   }
// }

// sf.submitForm = () => {
//   sf.input.style.transition = 'all .4s ease';
//   sf.submitButton.style.transition = 'all .4s ease';
//   sf.input.classList.remove('shown');
//   sf.submitButton.classList.remove('shown');
//   sf.content.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
//   sf.content.style.width = '';
//   sf.successMessage.classList.add('shown');
//   let submission = setTimeout(() => sf.form.submit(), sf.submitDelay);
// }

// sf.input.addEventListener('keypress', (e) => sf.handleInputKeypress(e));
// document.addEventListener('click', (e) => sf.clickHandler(e));

// je souhaite faire apparaitre les images au click sur le boutton


document.getElementById("btnZephyr").addEventListener("click", showImg);
let visible = 0;

function showImg() {
  if (visible === 0) {
    document.getElementById("imgZephyrTab").className = "visible";
    visible = 1;
  } else if (visible === 1) {
    document.getElementById("imgZephyrTab").className = "hidden";
    visible = 0
  }
}
// je fais pareil pour que le boutton me redirige vers le site
// document.getElementById("btnZephyr").addEventListener("click", showImg);


// function showImg() {
//   if (visible === 0) {
//     document.getElementById("btnZephyrUrl").className = "visible";
//     visible = 1;
//   } else if (visible === 1) {
//     document.getElementById("btnZephyrUrl").className = "hidden";
//     visible = 0
//   }
// }


