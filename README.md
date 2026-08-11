# Segunda Mano — Catálogo personal

Sitio estático (HTML + CSS + JS puro, sin frameworks ni backend) para publicar artículos personales en venta.

## Estructura

```
web-selller/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── products.js   → datos de los productos
│   └── script.js     → render, modal y animaciones
└── img/
    ├── products/      → fotos de los productos
    ├── icons/
    └── background/
```

## Cómo agregar un producto

Edita `js/products.js` y agrega un objeto al array `PRODUCTS`:

```js
{
  id: "id-unico",
  nombre: "Nombre del producto",
  precioQ: 100,
  estado: "Buen estado", // Nuevo | Muy buen estado | Buen estado | Uso normal
  descripcionCorta: "Frase breve para la tarjeta.",
  descripcionCompleta: "Descripción completa para el detalle.",
  especificaciones: ["Dato 1", "Dato 2"],
  accesorios: ["Accesorio 1"],
  observaciones: "Notas importantes para el comprador.",
  images: ["img/products/mi-foto-1.jpg"],
}
```

## Cómo quitar o editar un producto

- **Quitar (vendido):** borra su objeto del array en `js/products.js`.
- **Editar precio/estado/descripción:** cambia el valor correspondiente en su objeto.
- **Agregar fotos:** coloca el archivo en `img/products/` y añade su ruta al arreglo `images`.

Si una foto aún no existe, la tarjeta muestra automáticamente un placeholder con el nombre del producto (no rompe el diseño).

## Cómo cambiar los datos de contacto

En `index.html`, dentro de la sección `#contacto`, edita los `href` de cada tarjeta:

- WhatsApp: `https://wa.me/<numero-con-codigo-de-pais>`
- Correo: `mailto:tu-correo@ejemplo.com`
- Instagram: `https://www.instagram.com/tu-usuario/`
- Teléfono: `tel:+<numero-con-codigo-de-pais>`

El número de WhatsApp también se usa para el botón "Me interesa" del modal; está definido una sola vez en `js/script.js` en la constante `WHATSAPP_NUMBER`.

## Cómo cambiar el color de acento

Todo el color de acento (`#0f4c5c`) está centralizado en `css/style.css`, dentro de `:root`, en las variables `--color-accent`, `--color-accent-light` y `--color-accent-soft`. Cambiarlas ahí actualiza todo el sitio.

## Publicar el sitio

Al ser 100% estático, puedes subirlo tal cual a GitHub Pages, Netlify, Vercel o cualquier hosting. No requiere build ni instalación de dependencias.

## Cómo verlo en local

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```
python3 -m http.server 8000
```

y visita `http://localhost:8000`.