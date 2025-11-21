import { PRODUCTS, DISTRIBUTORS, NAV_ITEMS } from './constants';
import { generateBakingAdvice } from './services/geminiService';
import { Product, ProductCategory, Distributor } from './types';

// --- DOM ELEMENTS ---
const navbar = document.getElementById('navbar') as HTMLElement;
const brandName = document.getElementById('brand-name') as HTMLElement;
const brandTag = document.getElementById('brand-tag') as HTMLElement;
const desktopMenu = document.getElementById('desktop-menu') as HTMLElement;
const mobileMenuBtn = document.getElementById('mobile-menu-btn') as HTMLElement;
const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;

// --- STATE ---
let productState = {
  category: 'All',
  currentPage: 1,
  itemsPerPage: 10
};

let locatorState = {
  region: 'All',
  search: '',
  selectedId: null as string | null
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProducts();
  initLocator();
  initChat();
});

// --- NAVBAR LOGIC ---
function initNavbar() {
  // Render Links
  NAV_ITEMS.forEach(item => {
    // Desktop
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    link.className = "nav-link text-sm font-semibold tracking-widest uppercase transition-colors duration-300 text-white hover:text-eman-gold";
    desktopMenu.appendChild(link);

    // Mobile
    const mLink = document.createElement('a');
    mLink.href = item.href;
    mLink.textContent = item.label;
    mLink.className = "text-eman-black text-lg font-serif border-b border-gray-100 pb-2";
    mLink.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    mobileMenu.appendChild(mLink);
  });

  // Mobile Toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
  });

  // Scroll Effect
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    if (scrolled) {
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      navbar.classList.remove('bg-transparent', 'py-6');
      brandName.classList.replace('text-white', 'text-eman-black');
      brandTag.classList.replace('text-white/80', 'text-eman-gold');
      document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.replace('text-white', 'text-eman-charcoal');
      });
    } else {
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      navbar.classList.add('bg-transparent', 'py-6');
      brandName.classList.replace('text-eman-black', 'text-white');
      brandTag.classList.replace('text-eman-gold', 'text-white/80');
      document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.replace('text-eman-charcoal', 'text-white');
      });
    }
  });
}

// --- PRODUCTS LOGIC ---
function initProducts() {
  const tabContainer = document.getElementById('product-tabs') as HTMLElement;
  const categories = ['All', ...Object.values(ProductCategory)];

  // Render Tabs
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = `tab-btn text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 ${cat === 'All' ? 'border-eman-black text-eman-black font-bold' : 'border-transparent text-gray-400 hover:text-eman-gold'}`;
    btn.addEventListener('click', () => {
      productState.category = cat;
      productState.currentPage = 1;
      updateTabs(cat);
      renderProducts();
    });
    tabContainer.appendChild(btn);
  });

  // Event Listeners for Pagination
  document.getElementById('prev-page')?.addEventListener('click', () => {
    if (productState.currentPage > 1) {
      productState.currentPage--;
      renderProducts();
      scrollToProductTop();
    }
  });

  document.getElementById('next-page')?.addEventListener('click', () => {
    const filtered = filterProducts();
    const totalPages = Math.ceil(filtered.length / productState.itemsPerPage);
    if (productState.currentPage < totalPages) {
      productState.currentPage++;
      renderProducts();
      scrollToProductTop();
    }
  });

  renderProducts();
}

function updateTabs(activeCat: string) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    if (btn.textContent === activeCat) {
      btn.className = 'tab-btn text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 border-eman-black text-eman-black font-bold';
    } else {
      btn.className = 'tab-btn text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 border-transparent text-gray-400 hover:text-eman-gold';
    }
  });
}

function filterProducts() {
  return productState.category === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === productState.category);
}

function renderProducts() {
  const grid = document.getElementById('product-grid') as HTMLElement;
  const filtered = filterProducts();
  
  // Pagination Logic
  const totalPages = Math.ceil(filtered.length / productState.itemsPerPage);
  const start = (productState.currentPage - 1) * productState.itemsPerPage;
  const end = start + productState.itemsPerPage;
  const currentItems = filtered.slice(start, end);

  grid.innerHTML = currentItems.map(product => `
    <div class="group bg-white shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col animate-fade-in">
      <div class="relative h-72 overflow-hidden shrink-0">
        <img src="${product.imageUrl}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute inset-0 bg-eman-black/0 group-hover:bg-eman-black/40 transition-colors duration-500"></div>
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-wider uppercase text-eman-black">
          ${product.category}
        </div>
      </div>
      <div class="p-8 relative flex flex-col flex-grow">
        <h3 class="font-serif text-2xl text-eman-black mb-2 group-hover:text-eman-gold transition-colors">${product.name}</h3>
        <p class="text-gray-600 font-light leading-relaxed mb-6 flex-grow">${product.description}</p>
        <div class="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
            <span class="text-xs text-gray-400 uppercase tracking-wider">${product.calories} kcal</span>
            <button class="text-sm font-bold uppercase tracking-widest text-eman-black hover:text-eman-gold transition-colors">View Details →</button>
        </div>
      </div>
    </div>
  `).join('');

  // Update Pagination UI
  const controls = document.getElementById('pagination-controls') as HTMLElement;
  const prevBtn = document.getElementById('prev-page') as HTMLButtonElement;
  const nextBtn = document.getElementById('next-page') as HTMLButtonElement;
  const currDisplay = document.getElementById('current-page-display') as HTMLElement;
  const totalDisplay = document.getElementById('total-pages-display') as HTMLElement;

  if (totalPages > 1) {
    controls.classList.remove('hidden');
    currDisplay.textContent = productState.currentPage.toString();
    totalDisplay.textContent = totalPages.toString();
    
    prevBtn.disabled = productState.currentPage === 1;
    nextBtn.disabled = productState.currentPage === totalPages;
  } else {
    controls.classList.add('hidden');
  }
}

function scrollToProductTop() {
  const el = document.getElementById('product-grid-top');
  if (el) {
     const y = el.getBoundingClientRect().top + window.scrollY - 120;
     window.scrollTo({top: y, behavior: 'smooth'});
  }
}

// --- DISTRIBUTOR LOCATOR LOGIC ---
function initLocator() {
  const searchInput = document.getElementById('distributor-search') as HTMLInputElement;
  const regionContainer = document.getElementById('region-filters') as HTMLElement;
  
  // Region Buttons
  const regions = ['All', ...Array.from(new Set(DISTRIBUTORS.map(d => d.region)))];
  
  regions.forEach(reg => {
    const btn = document.createElement('button');
    btn.textContent = reg;
    btn.className = `region-btn px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${reg === 'All' ? 'bg-eman-black text-white border-eman-black' : 'bg-white text-gray-600 border-gray-300 hover:border-eman-gold'}`;
    btn.addEventListener('click', () => {
      locatorState.region = reg;
      updateRegionBtns(reg);
      renderDistributors();
    });
    regionContainer.appendChild(btn);
  });

  searchInput.addEventListener('input', (e) => {
    locatorState.search = (e.target as HTMLInputElement).value;
    renderDistributors();
  });

  renderDistributors();
  renderMapOverlay();
}

function updateRegionBtns(activeReg: string) {
  document.querySelectorAll('.region-btn').forEach(btn => {
    if (btn.textContent === activeReg) {
      btn.className = 'region-btn px-4 py-2 text-xs uppercase tracking-wider border bg-eman-black text-white border-eman-black';
    } else {
      btn.className = 'region-btn px-4 py-2 text-xs uppercase tracking-wider border bg-white text-gray-600 border-gray-300 hover:border-eman-gold';
    }
  });
}

function renderDistributors() {
  const list = document.getElementById('distributor-list') as HTMLElement;
  const filtered = DISTRIBUTORS.filter(d => {
    const matchesRegion = locatorState.region === 'All' || d.region === locatorState.region;
    const matchesSearch = d.city.toLowerCase().includes(locatorState.search.toLowerCase()) || 
                          d.name.toLowerCase().includes(locatorState.search.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p class="text-center text-gray-400 py-8">No distributors found.</p>';
    return;
  }

  list.innerHTML = filtered.map(d => `
    <div data-id="${d.id}" class="distributor-card p-6 border cursor-pointer transition-all duration-300 group ${locatorState.selectedId === d.id ? 'border-eman-gold bg-white shadow-lg scale-[1.02]' : 'border-gray-200 bg-white hover:border-gray-400'}">
      <div class="flex justify-between items-start mb-2">
        <h3 class="font-serif text-lg text-eman-black">${d.name}</h3>
        <span class="text-xs font-bold bg-gray-100 px-2 py-1 text-gray-500 uppercase">${d.type}</span>
      </div>
      <p class="text-sm text-gray-500 mb-1">${d.address}</p>
      <p class="text-sm text-eman-black font-medium mb-4">${d.city}, ${d.region}</p>
      <div class="flex items-center gap-2 text-eman-gold text-sm font-bold uppercase tracking-wider group-hover:underline">
        <span>📍 View on Map</span>
      </div>
    </div>
  `).join('');

  // Add click listeners to cards
  document.querySelectorAll('.distributor-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) {
        locatorState.selectedId = id;
        renderDistributors(); // Re-render to update styles
        renderMapOverlay();
      }
    });
  });
}

function renderMapOverlay() {
  const overlay = document.getElementById('map-overlay') as HTMLElement;
  const selected = DISTRIBUTORS.find(d => d.id === locatorState.selectedId);

  if (selected) {
    overlay.innerHTML = `
      <div class="bg-white p-8 shadow-2xl max-w-md animate-fade-in w-full mx-4">
         <h3 class="font-serif text-3xl mb-2">${selected.name}</h3>
         <hr class="border-eman-gold w-12 mb-4"/>
         <p class="text-gray-600 mb-4">${selected.address}, ${selected.city}</p>
         <div class="space-y-3">
            <div class="flex items-center gap-3"><span class="text-xl">📞</span> <a href="#" class="text-eman-black hover:text-eman-gold">${selected.phone}</a></div>
            <div class="flex items-center gap-3"><span class="text-xl">⏲</span> <span class="text-gray-600">Mon - Sun: 08:00 - 22:00</span></div>
         </div>
         <button class="mt-8 w-full bg-eman-black text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-eman-gold transition-colors">Get Directions</button>
      </div>
    `;
  } else {
    overlay.innerHTML = `
      <div class="bg-white/80 backdrop-blur-md p-8 text-center rounded-sm">
         <span class="text-4xl block mb-4">🌍</span>
         <h3 class="font-serif text-2xl text-eman-black">Select a location</h3>
         <p class="text-gray-600">Choose a distributor from the list to view details.</p>
       </div>
    `;
  }
}

// --- AI CHAT LOGIC ---
function initChat() {
  const toggleBtn = document.getElementById('toggle-chat') as HTMLButtonElement;
  const closeBtn = document.getElementById('close-chat') as HTMLButtonElement;
  const chatWindow = document.getElementById('chat-window') as HTMLElement;
  const sendBtn = document.getElementById('send-btn') as HTMLButtonElement;
  const input = document.getElementById('chat-input') as HTMLInputElement;
  const messagesContainer = document.getElementById('chat-messages') as HTMLElement;

  // Initial Message
  appendMessage('model', 'Welcome to Eman Bakeries. I am your personal baking concierge. How may I assist you today?');

  function toggleVisibility() {
     if (chatWindow.classList.contains('hidden')) {
       chatWindow.classList.remove('hidden');
       chatWindow.classList.add('flex');
     } else {
       chatWindow.classList.add('hidden');
       chatWindow.classList.remove('flex');
     }
  }

  toggleBtn.addEventListener('click', toggleVisibility);
  closeBtn.addEventListener('click', toggleVisibility);

  async function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    appendMessage('user', text);
    input.value = '';
    sendBtn.disabled = true;
    
    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'flex justify-start';
    loadingDiv.innerHTML = `<div class="bg-white p-3 border border-gray-200 rounded-r-lg rounded-tl-lg"><span class="animate-pulse text-eman-gold text-xl">● ● ●</span></div>`;
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    try {
      const response = await generateBakingAdvice(text);
      messagesContainer.removeChild(loadingDiv);
      appendMessage('model', response);
    } catch (e) {
      messagesContainer.removeChild(loadingDiv);
      appendMessage('model', "I apologize, I cannot answer right now.");
    } finally {
      sendBtn.disabled = false;
    }
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  function appendMessage(role: 'user' | 'model', text: string) {
    const div = document.createElement('div');
    div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
    
    const bubble = document.createElement('div');
    bubble.className = `max-w-[80%] p-3 text-sm leading-relaxed ${
      role === 'user' 
        ? 'bg-eman-gold text-white rounded-l-lg rounded-tr-lg' 
        : 'bg-white border border-gray-200 text-gray-800 rounded-r-lg rounded-tl-lg shadow-sm'
    }`;
    bubble.textContent = text;
    
    div.appendChild(bubble);
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}
