var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.borderBottom = "none";
    } else {
      let scrollHeight = panel.scrollHeight + 50;
      panel.style.maxHeight = scrollHeight + 'px';
      panel.style.borderBottom = "0.5px solid #909ABB";
    }
  });
}

window.onscroll = function() {
  var scroll = window.scrollY;
  if (scroll > 0) {
    document.getElementById("top-nav").classList.add("active");
  } else {
    document.getElementById("top-nav").classList.remove("active");
  }
}



function showSideNav() {
  const sideNavToggle = document.getElementById('side-nav')
  if (sideNavToggle.className === 'side-menu') {
    sideNavToggle.className += ' show'
  } else {
    sideNavToggle.className = 'side-menu'
  }
}

function hideSideNav() {
  const sideNavToggle = document.getElementById('side-nav')
  if (sideNavToggle.className === 'side-menu show') {
    sideNavToggle.className = 'side-menu'
  }
}

function showVideo(){
  //display overlay
  //display video
  const overlay = document.getElementById('overlay')
  const videoContainer = document.getElementById('vid-cont')

  overlay.style.display = 'block'
  videoContainer.style.visibility = 'initial'
}

function hideVideo(){
  const overlay = document.getElementById('overlay')
  const videoContainer = document.getElementById('vid-cont')

  overlay.style.display = 'none'
  videoContainer.style.visibility = 'hidden'
}