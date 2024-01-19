// Checkbox
        function toggleCheckbox(item) {
            const checkbox = item.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;

            const checkboxLabel = item.querySelector('.custom-checkbox');
            checkboxLabel.classList.toggle('checked', checkbox.checked);
        }
// Checkbox

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
// Navigation
function navigateToLocalFile(filePath) {
    // Use window.location.href to navigate to the local file
    window.location.href = filePath;
}
// Navigation
