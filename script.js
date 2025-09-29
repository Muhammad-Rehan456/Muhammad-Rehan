// select all pages 
let pages = {
  home: document.querySelector("#home"),
  about: document.querySelector("#about"),
  project: document.querySelector("#project"),
  contact: document.querySelector("#contact")
};
// select all btns 
let buttons = {
  home: document.getElementById("home-click"),
  about: document.getElementById("about-click"),
  project: document.getElementById("project-click"),
  contact: document.getElementById("contact-click")
};

// function for shoe pages 
function showPages(pageName){
    for(let key in pages){
        if(key === pageName){
            pages[key].classList.remove("hidden");
        }else{
            pages[key].classList.add("hidden");
        }
    }
};


buttons.home.addEventListener("click", () => showPages("home"));
buttons.about.addEventListener("click", () => showPages("about"));
buttons.project.addEventListener("click", () => showPages("project"));
buttons.contact.addEventListener("click", () => showPages("contact"));


// hamburger menu functionality 
let hamburger = document.querySelector("#navbar i");
let menu = document.querySelector("#menu");
let menuItems = document.querySelectorAll("#menu a");

 hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

menuItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 813) {
        menu.classList.remove('show');
      }
    });
  });

  document.addEventListener('click', (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHamburger && menu.classList.contains('show')) {
      menu.classList.remove('show');
    }
  });

  document.addEventListener("scroll",function(e){
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && 
      !isClickOnHamburger && 
      menu.classList.contains('show')) {
      menu.classList.remove('show');
    }

  });

  // typing effect 

 const typedText = document.querySelector(".naming")
  const words = [" Web Developer "," Javascript Developer ", " Programmer "];
  let isDeleting = false;
  let wordIndex = 0;
  let pauseBetweenWords = 1500;
  let typingSpeed = 100;
  let charIndex = 0;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
    }


    let delay = typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }


  document.addEventListener('DOMContentLoaded', () => {
    type();
  }); 

   function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'resume.pdf.pdf';
    link.download = 'Rehan-Resume.pdf';
    link.click();
  }




