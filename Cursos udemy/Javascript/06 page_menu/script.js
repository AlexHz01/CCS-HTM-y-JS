const menutoggle = document.querySelector('.toggle');
const nav = document.querySelector('.navigation');
menutoggle.onclick = function() {
  menutoggle.classList.toggle('active');
  nav.classList.toggle('active');
}



