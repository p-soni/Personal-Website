window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 650) nav.className = ''; else nav.className = 'scroll';
};

function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}