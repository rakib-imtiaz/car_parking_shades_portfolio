class InstagramPopup extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div id="instagram-popup" class="fixed inset-0 z-50 flex items-center justify-center p-4 hidden">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                
                <!-- Popup Content -->
                <div class="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6 transform transition-all">
                    <div class="text-center mb-6">
                        <i class="fab fa-instagram text-4xl text-pink-500 mb-4"></i>
                        <h3 class="text-2xl font-bold text-brown mb-2">Follow Us on Instagram!</h3>
                        <p class="text-brown/70">Stay updated with our latest projects and designs</p>
                    </div>
                    
                    <div class="flex gap-4">
                        <button id="stay-button" 
                                class="flex-1 px-6 py-3 bg-gray-100 text-brown rounded-lg hover:bg-gray-200 transition-colors">
                            Stay Here
                        </button>
                        <a href="https://www.instagram.com/sanatmuzalla" 
                           target="_blank"
                           class="flex-1 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:opacity-90 transition-opacity text-center">
                            Go to Instagram
                        </a>
                    </div>
                    
                    <button id="close-popup" class="absolute top-4 right-4 text-brown/50 hover:text-brown transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        // Show popup on every page load
        setTimeout(() => {
            const popup = this.querySelector('#instagram-popup');
            popup.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }, 2000);

        // Close button handler
        this.querySelector('#close-popup').addEventListener('click', () => this.closePopup());

        // Stay button handler
        this.querySelector('#stay-button').addEventListener('click', () => this.closePopup());

        // Close on backdrop click
        this.querySelector('#instagram-popup').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.closePopup();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closePopup();
            }
        });
    }

    closePopup() {
        const popup = this.querySelector('#instagram-popup');
        popup.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

customElements.define('instagram-popup', InstagramPopup); 