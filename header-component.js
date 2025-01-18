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
                            <a href="#home" class="text-brown hover:text-sand transition-colors px-3">Home</a>
                            <a href="#products" class="text-brown hover:text-sand transition-colors px-3">Products</a>
                            <a href="#gallery" class="text-brown hover:text-sand transition-colors px-3">Gallery</a>
                            <a href="#about" class="text-brown hover:text-sand transition-colors px-3">About</a>
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
                            <a href="#home" class="block text-brown hover:text-sand transition-colors py-2">Home</a>
                            <a href="#products" class="block text-brown hover:text-sand transition-colors py-2">Products</a>
                            <a href="#gallery" class="block text-brown hover:text-sand transition-colors py-2">Gallery</a>
                            <a href="#about" class="block text-brown hover:text-sand transition-colors py-2">About</a>
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

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');

            mobileMenuButton.innerHTML = isOpen
                ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                   </svg>`
                : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                   </svg>`;
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                   </svg>`;
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                   </svg>`;
            });
        });
    }
}

customElements.define('header-component', HeaderComponent); 