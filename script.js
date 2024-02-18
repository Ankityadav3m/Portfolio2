// Navbar Section
function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Home Section

var typed = new Typed('#element', {
  strings: ['Web Developer', 'Frontend Developer', 'RPA Developer', 'Python Developer', 'Web Designer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

function titleEffect(){
  var tl=gsap.timeline();
  tl.to(".bound div",{
    y:'0',
    duration:2,
    ease:Expo.easeInOut
    // opacity:0
  })
}
titleEffect();









  
 