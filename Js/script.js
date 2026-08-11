const WHATSAPP_NUMBER = "50237919295";

const money = (value) =>
  new Intl.NumberFormat("es-GT", { style: "currency", currency: "GTQ", maximumFractionDigits: 0 }).format(value);

function placeholderFor(nombre) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#e4edee"/>
    <text x="50%" y="52%" font-family="Inter, sans-serif" font-size="18" fill="#0f4c5c" text-anchor="middle">${nombre}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function buildProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.dataset.id = product.id;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver detalle de ${product.nombre}`);

  card.innerHTML = `
    <div class="product-card__media">
      <span class="product-card__badge">${product.estado}</span>
      <img src="${product.images[0]}" alt="${product.nombre}" loading="lazy"
           onerror="this.onerror=null;this.src='${placeholderFor(product.nombre)}'">
    </div>
    <div class="product-card__body">
      <h3 class="product-card__name">${product.nombre}</h3>
      <p class="product-card__desc">${product.descripcionCorta}</p>
      <div class="product-card__footer">
        <span class="product-card__price">${money(product.precioQ)}</span>
        <button class="btn btn--primary btn--small" data-action="interesa" data-id="${product.id}">Me interesa</button>
      </div>
    </div>
  `;

  return card;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";
  PRODUCTS.forEach((product) => grid.appendChild(buildProductCard(product)));
}

function buildModalContent(product) {
  const gallery = product.images
    .map(
      (src) =>
        `<img src="${src}" alt="${product.nombre}" onerror="this.onerror=null;this.src='${placeholderFor(product.nombre)}'">`
    )
    .join("");

  const specs = product.especificaciones.map((item) => `<li>${item}</li>`).join("");
  const accesorios = product.accesorios.map((item) => `<li>${item}</li>`).join("");
  const whatsappMsg = encodeURIComponent(`Hola, me interesa "${product.nombre}" que vi en tu catálogo.`);

  return `
    <div class="modal-detail__gallery">${gallery}</div>
    <div class="modal-detail__body">
      <span class="modal-detail__badge">${product.estado}</span>
      <h2 class="modal-detail__title" id="modal-title">${product.nombre}</h2>
      <p class="modal-detail__price">${money(product.precioQ)}</p>
      <p class="modal-detail__desc">${product.descripcionCompleta}</p>

      <div class="modal-detail__section">
        <h3>Especificaciones</h3>
        <ul>${specs}</ul>
      </div>

      <div class="modal-detail__section">
        <h3>Incluye</h3>
        <ul>${accesorios}</ul>
      </div>

      <div class="modal-detail__section">
        <h3>Observaciones</h3>
        <p class="modal-detail__note">${product.observaciones}</p>
      </div>

      <a class="btn btn--primary modal-detail__cta" target="_blank" rel="noopener"
         href="https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}">Me interesa, escribir por WhatsApp</a>
    </div>
  `;
}

function openModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");
  content.innerHTML = buildModalContent(product);
  overlay.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("is-open");
  document.body.style.overflow = "";
}

function setupModalEvents() {
  const overlay = document.getElementById("modal-overlay");
  document.getElementById("modal-close").addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) closeModal();
  });
}

function setupGridEvents() {
  const grid = document.getElementById("product-grid");

  grid.addEventListener("click", (e) => {
    const button = e.target.closest("[data-action='interesa']");
    if (button) {
      e.stopPropagation();
      openModal(button.dataset.id);
      return;
    }

    const card = e.target.closest(".product-card");
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".product-card");
    if (card) {
      e.preventDefault();
      openModal(card.dataset.id);
    }
  });
}

function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupModalEvents();
  setupGridEvents();
  setupScrollReveal();
});
