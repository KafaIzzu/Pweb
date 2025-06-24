(() => {
    // DOM Elements
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const cartButton = document.querySelector('.floating-cart-btn');
    const cartCountBadge = document.getElementById('cart-count');
    const addButtons = [...document.querySelectorAll('.btn-add')];

    // Modals and controls
    const cartModal = document.getElementById('cart-modal');
    const cartModalClose = document.getElementById('cart-modal-close');
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSummary = document.getElementById('cart-summary');
    const cartEmptyMsg = document.getElementById('cart-empty-msg');
    const checkoutBtn = document.getElementById('checkout-btn');

    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutModalClose = document.getElementById('checkout-modal-close');
    const checkoutCancelBtn = document.getElementById('checkout-cancel-btn');
    const checkoutForm = document.getElementById('checkout-form');

    const orderSuccessModal = document.getElementById('order-success-modal');
    const orderSuccessClose = document.getElementById('order-success-close');
    const orderSuccessOkBtn = document.getElementById('order-success-ok-btn');
    const shopNowBtn = document.getElementById('shop-now-btn');

    // State
    let cart = {}; // Format: {productId: {id, name, price, unit, quantity, imageSrc, imageAlt}}

    // Helper: Format price to 'Rp XX.XXX'
    function formatPrice(price) {
      return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Open/Close Mobile Menu
    function openMobileMenu() {
      mobileNavOverlay.classList.add('show');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
      mobileNavOverlay.focus();
    }
    function closeMobileMenu() {
      mobileNavOverlay.classList.remove('show');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.focus();
    }
    mobileMenuButton.addEventListener('click', openMobileMenu);
    mobileNavClose.addEventListener('click', closeMobileMenu);
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) closeMobileMenu();
    });
})