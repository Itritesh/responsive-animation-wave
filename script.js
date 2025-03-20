
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Toggle hamburger to X
    const spans = this.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        
        // Reset hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
  
  // Scroll Animation
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkPosition() {
    animateElements.forEach(element => {
      const positionFromTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (positionFromTop - windowHeight <= -100) {
        element.classList.add('active');
      }
    });
  }
  
  // Run on load
  checkPosition();
  
  // Run on scroll
  window.addEventListener('scroll', checkPosition);
  
  // Sticky Header
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      header.style.padding = '5px 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '15px 0';
      header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  });
  
  // Form Submissions
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for subscribing to our newsletter!');
      this.reset();
    });
  }
  
  // Active Navigation Links
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (current && link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      } else if (!current && link.getAttribute('href') === '#') {
        link.classList.add('active'); // Home link
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just '#'
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        let headerOffset = document.querySelector('.header').offsetHeight;
        let elementPosition = targetElement.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
