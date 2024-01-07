
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// Footer picture
document.querySelector('.logo').addEventListener('click', function() {
  window.location.href = 'home.html';
});
document.querySelector('#logo').addEventListener('click', function() {
  window.location.href = 'home.html';
});
// Footer picture

// Anchor links
document.addEventListener('DOMContentLoaded', function () {
            var navLinks = document.querySelectorAll('.s');

            navLinks.forEach(function (link) {
                link.addEventListener('click', function () {
                    // Remove 'active' class from all links
                    navLinks.forEach(function (navLink) {
                        navLink.classList.remove('active');
                    });

                    // Add 'active' class to the clicked link
                    link.classList.add('active');
                });
            });
        });
// Anchor links

// Footer 
    // Get all anchor links
    const links = document.querySelectorAll('a');

    // Add event listener for click
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Toggle the bold style of the clicked link
        link.classList.toggle('bold');

        // Remove bold style from other links
        links.forEach(otherLink => {
          if (otherLink !== link) {
            otherLink.classList.remove('bold');
          }
        });

        // Scroll to the target section (you can customize this behavior)
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
// Footer
// Navigation
function navigateToLocalFile(filePath) {
    // Use window.location.href to navigate to the local file
    window.location.href = filePath;
}
// Navigation
//code.jquery.com/jquery-3.5.1.slim.min.js">
//cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js">
//maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">