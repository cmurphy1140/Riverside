/* ==========================================================================
   Riverside Cafe - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const header = document.getElementById('header');

  function openMobileMenu() {
    navMenu.classList.add('nav-menu--open');
    navToggle.classList.add('nav-toggle--active');
    if (navOverlay) navOverlay.classList.add('nav-overlay--visible');
    document.body.style.overflow = 'hidden';

    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  }

  function closeMobileMenu() {
    navMenu.classList.remove('nav-menu--open');
    navToggle.classList.remove('nav-toggle--active');
    if (navOverlay) navOverlay.classList.remove('nav-overlay--visible');
    document.body.style.overflow = '';

    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      if (navMenu.classList.contains('nav-menu--open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('nav-menu--open')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });

    // Check scroll position on page load
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    }
  }

  // ==========================================================================
  // Hero Slideshow
  // ==========================================================================

  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroIndicators = document.querySelectorAll('.hero-indicator');

  if (heroSlides.length > 0) {
    let currentSlide = 0;
    const slideCount = heroSlides.length;
    const slideInterval = 6000; // 6 seconds
    let slideTimer;

    function goToSlide(index) {
      // Remove active class from all slides and indicators
      heroSlides.forEach(function(slide) {
        slide.classList.remove('active');
      });
      heroIndicators.forEach(function(indicator) {
        indicator.classList.remove('active');
      });

      // Add active class to current slide and indicator
      heroSlides[index].classList.add('active');
      if (heroIndicators[index]) {
        heroIndicators[index].classList.add('active');
      }

      currentSlide = index;
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slideCount;
      goToSlide(next);
    }

    function startSlideshow() {
      slideTimer = setInterval(nextSlide, slideInterval);
    }

    function stopSlideshow() {
      clearInterval(slideTimer);
    }

    // Click handlers for indicators
    heroIndicators.forEach(function(indicator, index) {
      indicator.addEventListener('click', function() {
        stopSlideshow();
        goToSlide(index);
        startSlideshow();
      });
    });

    // Start the slideshow
    startSlideshow();

    // Pause slideshow on hover (optional - for accessibility)
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopSlideshow);
      heroSection.addEventListener('mouseleave', startSlideshow);
    }
  }

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#' && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ==========================================================================
  // Fade In Animation on Scroll
  // ==========================================================================

  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Add staggered delay for children of grids marked with data-stagger
          const parent = entry.target.parentElement;
          if (parent && parent.hasAttribute('data-stagger')) {
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = (index * 0.2) + 's';
          }

          entry.target.classList.add('fade-in--visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    });

    fadeElements.forEach(function(el) {
      fadeObserver.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    fadeElements.forEach(function(el) {
      el.classList.add('fade-in--visible');
    });
  }

  // ==========================================================================
  // Active Navigation Link
  // ==========================================================================

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ==========================================================================
  // Menu Page - Category Scroll Spy
  // ==========================================================================

  const menuNavLinks = document.querySelectorAll('.menu-nav-link');
  const menuCategories = document.querySelectorAll('.menu-category');

  if (menuNavLinks.length > 0 && menuCategories.length > 0) {
    function updateMenuNav() {
      var scrollPos = window.scrollY;
      var headerOffset = header ? header.offsetHeight : 80;
      var menuNavHeight = 50;
      var offset = headerOffset + menuNavHeight + 40;

      var activeId = '';
      menuCategories.forEach(function(section) {
        var top = section.offsetTop - offset;
        var bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          activeId = section.getAttribute('id');
        }
      });

      if (activeId) {
        menuNavLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + activeId) {
            link.classList.add('active');
          }
        });
      }
    }

    window.addEventListener('scroll', updateMenuNav);
    updateMenuNav();

    // Smooth scroll for menu nav links (with offset for sticky nav)
    menuNavLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
          var headerOffset = header ? header.offsetHeight : 80;
          var menuNavHeight = 50;
          var targetPos = target.getBoundingClientRect().top + window.scrollY - headerOffset - menuNavHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      });
    });
  }

  // ==========================================================================
  // Gallery - Category Filtering
  // ==========================================================================

  var galleryFilters = document.querySelectorAll('.gallery-filter');
  var galleryItems = document.querySelectorAll('.gallery-item');

  if (galleryFilters.length > 0 && galleryItems.length > 0) {
    galleryFilters.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');

        // Update active button
        galleryFilters.forEach(function(b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        // Filter items
        galleryItems.forEach(function(item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // ==========================================================================
  // Gallery - Lightbox
  // ==========================================================================

  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lightbox-image');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxCounter = document.getElementById('lightbox-counter');
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;
  var lightboxPrev = lightbox ? lightbox.querySelector('.lightbox-prev') : null;
  var lightboxNext = lightbox ? lightbox.querySelector('.lightbox-next') : null;

  if (lightbox && galleryItems.length > 0) {
    var currentLightboxIndex = 0;

    function getVisibleItems() {
      return Array.from(galleryItems).filter(function(item) {
        return !item.classList.contains('hidden');
      });
    }

    function openLightbox(index) {
      var visible = getVisibleItems();
      if (index < 0 || index >= visible.length) return;
      currentLightboxIndex = index;

      var item = visible[index];
      var placeholder = item.querySelector('.image-placeholder');
      var label = item.getAttribute('aria-label') || '';

      // Clone the placeholder into the lightbox
      lightboxImage.innerHTML = placeholder.outerHTML;
      lightboxCaption.textContent = label;
      lightboxCounter.textContent = (index + 1) + ' / ' + visible.length;

      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function nextLightboxImage() {
      var visible = getVisibleItems();
      var next = (currentLightboxIndex + 1) % visible.length;
      openLightbox(next);
    }

    function prevLightboxImage() {
      var visible = getVisibleItems();
      var prev = (currentLightboxIndex - 1 + visible.length) % visible.length;
      openLightbox(prev);
    }

    // Open on click/Enter
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var visible = getVisibleItems();
        var index = visible.indexOf(this);
        if (index !== -1) openLightbox(index);
      });
      item.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          var visible = getVisibleItems();
          var index = visible.indexOf(this);
          if (index !== -1) openLightbox(index);
        }
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextLightboxImage);
    lightboxPrev.addEventListener('click', prevLightboxImage);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    });
  }

});
