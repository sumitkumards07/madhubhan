document.addEventListener("DOMContentLoaded", () => {
    // Inject Contact Widgets (WhatsApp and Call) using standard Tailwind classes
    const widgetsHTML = `
        <div class="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a href="tel:+919117274186" class="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-14 h-14" aria-label="Call Us">
                <span class="material-symbols-outlined text-2xl">call</span>
            </a>
            <a href="https://wa.me/919117274186" target="_blank" class="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-14 h-14" aria-label="WhatsApp Us">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
        </div>
    `;

    // Inject Booking Modal Form
    const modalHTML = `
        <div id="booking-modal-overlay" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4" style="backdrop-filter: blur(8px);">
            <div class="bg-white dark:bg-stone-900 w-full max-w-md p-8 shadow-2xl relative overflow-hidden">
                <button id="close-modal" class="absolute top-4 right-4 text-stone-500 hover:text-black dark:hover:text-white transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
                <div class="text-center mb-8 pt-4">
                    <span class="text-[#765629] text-xs tracking-[0.3em] uppercase block mb-2">Madhubhan Resort</span>
                    <h2 class="text-3xl font-serif text-[#765629]">Book Your Stay</h2>
                </div>
                <form id="booking-form" class="space-y-6">
                    <div>
                        <label class="block text-xs uppercase tracking-widest text-[#817569] mb-2">Full Name</label>
                        <input type="text" id="bf-name" required class="w-full border-b border-[#d2c4b6] focus:border-[#765629] py-2 px-0 bg-transparent text-lg font-light outline-none transition-colors dark:text-white" placeholder="John Doe">
                    </div>
                    <div class="grid grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs uppercase tracking-widest text-[#817569] mb-2">Check-in</label>
                            <input type="date" id="bf-checkin" required class="w-full border-b border-[#d2c4b6] focus:border-[#765629] py-2 px-0 bg-transparent text-lg font-light outline-none transition-colors dark:text-white">
                        </div>
                        <div>
                            <label class="block text-xs uppercase tracking-widest text-[#817569] mb-2">Check-out</label>
                            <input type="date" id="bf-checkout" required class="w-full border-b border-[#d2c4b6] focus:border-[#765629] py-2 px-0 bg-transparent text-lg font-light outline-none transition-colors dark:text-white">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-widest text-[#817569] mb-2">Number of Guests</label>
                        <select id="bf-guests" required class="w-full border-b border-[#d2c4b6] focus:border-[#765629] py-2 px-0 bg-transparent text-lg font-light outline-none appearance-none transition-colors dark:text-white">
                            <option value="1 Adult">1 Adult</option>
                            <option value="2 Adults" selected>2 Adults</option>
                            <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                            <option value="Group (3+)">Group (3+)</option>
                        </select>
                    </div>
                    <div class="pt-4">
                        <button type="submit" class="w-full bg-gradient-to-r from-[#765629] to-[#926e3f] text-white py-4 uppercase tracking-widest text-sm font-medium hover:opacity-90 transition-opacity shadow-lg focus:outline-none focus:ring-2 focus:ring-[#765629] focus:ring-offset-2">
                            Send Enquiry to WhatsApp
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetsHTML);
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('booking-modal-overlay');
    const closeBtn = document.getElementById('close-modal');
    const form = document.getElementById('booking-form');

    // Make it visible
    const showModal = () => {
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
    };

    const hideModal = () => {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
    };

    // Find all 'Book' buttons to route to the module
    const allButtons = document.querySelectorAll('button, a');
    allButtons.forEach(btn => {
        const text = btn.textContent.toLowerCase();
        if ((text.includes('book') || text.includes('reserve') || text.includes('inquire')) && !btn.closest('#booking-form')) {
            // Remove previous references or hrefs that bypass the form
            if (btn.tagName.toLowerCase() === 'a') {
                btn.removeAttribute('href');
                btn.style.cursor = 'pointer';
            }
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
        }
    });

    closeBtn.addEventListener('click', hideModal);

    // Form logic to send fully formatted payload to WhatsApp
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('bf-name').value;
        const checkin = document.getElementById('bf-checkin').value;
        const checkout = document.getElementById('bf-checkout').value;
        const guests = document.getElementById('bf-guests').value;
        
        const message = "New Booking Enquiry - Madhubhan\n\nName: " + name + "\nCheck-in: " + checkin + "\nCheck-out: " + checkout + "\nGuests: " + guests + "\n\nPlease confirm availability and rates.";

        const encodedMessage = encodeURIComponent(message);
        // Using the single phone number requested
        window.open("https://wa.me/919117274186?text=" + encodedMessage, '_blank');
        
        hideModal();
        form.reset();
    });
});
