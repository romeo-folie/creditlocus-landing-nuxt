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


// let resources = document.getElementsByClassName("resource-item");

// for(let i = 0; i < resources.length; i++){
//   resources[i].addEventListener("onmouseover", function() {
    
//   })
// } 

function showSideNav() {
  console.log("called")
  const sideNavToggle = document.getElementById('side-nav')
  // const mediaNav = document.getElementById('social-media-nav-bottom')
  // mediaNav.style.visibility = 'hidden'
  if (sideNavToggle.className === 'side-menu') {
    sideNavToggle.className += ' show'
  } else {
    sideNavToggle.className = 'side-menu'
  }
}

function hideSideNav() {
  const sideNavToggle = document.getElementById('side-nav')
  // const mediaNav = document.getElementById('social-media-nav-bottom')
  // mediaNav.style.visibility = 'visible'
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
  videoContainer.style.display = 'block'
  // document.body.style.overflow = "hidden"
}

function hideVideo(){
  const overlay = document.getElementById('overlay')
  const videoContainer = document.getElementById('vid-cont')

  overlay.style.display = 'none'
  videoContainer.style.display = 'none'
  // document.body.style.overflow = "visible"
}