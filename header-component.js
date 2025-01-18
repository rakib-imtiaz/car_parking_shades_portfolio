class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-sm">
                <nav class="max-w-7xl mx-auto px-4">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex items-center gap-2">
                            <img src="./images/logo.png" alt="Logo" class="h-8">
                            <span class="text-brown font-medium">Car Parking Shades</span>
                        </div>

                        <!-- Desktop Menu -->
                        <div class="hidden md:flex items-center gap-4">
                            <a href="#hero" class="text-brown hover:text-sand transition-colors px-3">Home</a>
                            <a href="#services" class="text-brown hover:text-sand transition-colors px-3">Services</a>
                            <a href="#projects" class="text-brown hover:text-sand transition-colors px-3">Projects</a>
                            <a href="#testimonials" class="text-brown hover:text-sand transition-colors px-3">Testimonials</a>
                            <a href="#process" class="text-brown hover:text-sand transition-colors px-3">Process</a>
                            <a href="#contact" class="bg-brown text-cream px-4 py-2 rounded hover:bg-sand hover:text-brown transition-all">Contact Us</a>
                            <button class="bg-sand/20 text-brown px-4 py-2 rounded hover:bg-sand/30 transition-all">عربي</button>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button class="md:hidden text-brown p-2" id="mobile-menu-button">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Mobile Menu Panel -->
                    <div class="md:hidden hidden absolute left-0 right-0 bg-cream/95 backdrop-blur-sm shadow-lg" id="mobile-menu">
                        <div class="px-4 py-3 space-y-2">
                            <a href="#hero" class="block text-brown hover:text-sand transition-colors py-2">Home</a>
                            <a href="#services" class="block text-brown hover:text-sand transition-colors py-2">Services</a>
                            <a href="#projects" class="block text-brown hover:text-sand transition-colors py-2">Projects</a>
                            <a href="#testimonials" class="block text-brown hover:text-sand transition-colors py-2">Testimonials</a>
                            <a href="#process" class="block text-brown hover:text-sand transition-colors py-2">Process</a>
                            <a href="#contact" class="block bg-brown text-cream px-4 py-2 rounded hover:bg-sand hover:text-brown transition-all">Contact Us</a>
                            <button class="w-full mt-2 bg-sand/20 text-brown px-4 py-2 rounded hover:bg-sand/30 transition-all">عربي</button>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }

    connectedCallback() {
        const mobileMenuButton = this.querySelector('#mobile-menu-button');
        const mobileMenu = this.querySelector('#mobile-menu');

        // Enhanced smooth scroll with better offset calculation
        const allLinks = this.querySelectorAll('a[href^="#"]');

        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Get header height for offset
                    const headerHeight = this.querySelector('header').offsetHeight;

                    // Add extra padding for visual comfort
                    const padding = 20;

                    // Calculate position with improved accuracy
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - padding;

                    // Smooth scroll with enhanced easing
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>`;
                    }
                }
            });
        });

        // Enhanced scroll spy with better accuracy
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            const navLinks = this.querySelectorAll('a[href^="#"]');
            const headerHeight = this.querySelector('header').offsetHeight;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Improved scroll position calculation
                if (window.scrollY >= sectionTop - headerHeight - 100) {
                    current = section.getAttribute('id');
                }
            });

            // Update active state with smooth transition
            navLinks.forEach(link => {
                link.classList.remove('text-sand', 'font-medium');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-sand', 'font-medium');
                }
            });
        });

        // Mobile menu toggle with improved animation
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');

            // Animated icon transition
            mobileMenuButton.innerHTML = isOpen
                ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                   </svg>`
                : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                   </svg>`;
        });

        // Enhanced click outside detection
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                   </svg>`;
            }
        });
    }
}

customElements.define('header-component', HeaderComponent); 