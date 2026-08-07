/*
  Para agregar un producto: copia un objeto del array y cambia los valores.
  Para quitarlo: borra su objeto del array.
  "images" acepta uno o varios archivos dentro de img/products/.
  "estado" solo puede ser: "Nuevo", "Muy buen estado", "Buen estado", "Uso normal".
*/

const PRODUCTS = [
  {
    id: "ps4",
    nombre: "PlayStation 4",
    precioQ: 1200,
    estado: "Muy buen estado",
    descripcionCorta: "Consola de 500GB con dos controles, lista para jugar.",
    descripcionCompleta:
      "PlayStation 4 en excelente funcionamiento, sin golpes ni fallas técnicas. Uso moderado, siempre en interiores y sobre superficie ventilada. Formateada y lista para configurarse desde cero.",
    especificaciones: [
      "Almacenamiento: 500GB",
      "Incluye 2 controles inalámbricos",
      "Cable HDMI y cable de corriente originales",
    ],
    accesorios: ["2 controles DualShock 4", "Cable HDMI", "Cable de poder"],
    observaciones: "No incluye juegos físicos (se venden por separado).",
    images: ["img/products/ps4-1.jpg", "img/products/ps4-2.jpg"],
  },
  {
    id: "hub-usb",
    nombre: "Hub USB 4 puertos",
    precioQ: 60,
    estado: "Buen estado",
    descripcionCorta: "Expansor USB 3.0 de 4 puertos, ideal para laptop.",
    descripcionCompleta:
      "Hub USB compacto, funciona perfectamente en los cuatro puertos. Útil para conectar mouse, teclado, USB y disco externo al mismo tiempo.",
    especificaciones: ["4 puertos USB 3.0", "Conexión plug and play", "Sin necesidad de drivers"],
    accesorios: ["Cable integrado"],
    observaciones: "Uso ligero, funciona sin problema.",
    images: ["img/products/hub-usb-1.jpg"],
  },
  {
    id: "juegos-ps4",
    nombre: "Juegos de PlayStation 4",
    precioQ: 350,
    estado: "Buen estado",
    descripcionCorta: "Lote de juegos físicos en caja, en buen estado.",
    descripcionCompleta:
      "Lote de juegos físicos para PS4 con caja y disco en buen estado. Precio por el lote completo, se puede conversar por unidad.",
    especificaciones: ["Formato físico (disco)", "Compatibles con PS4 y PS4 Pro"],
    accesorios: ["Caja original de cada juego"],
    observaciones: "Escríbeme para conocer el listado exacto de títulos disponibles.",
    images: ["img/products/juegos-ps4-1.jpg"],
  },
  {
    id: "camara-web",
    nombre: "Cámara web HD",
    precioQ: 120,
    estado: "Muy buen estado",
    descripcionCorta: "Cámara web 1080p con micrófono integrado.",
    descripcionCompleta:
      "Cámara web usada solo para videollamadas de trabajo. Imagen nítida, buen desempeño con poca luz y micrófono integrado con buena captación.",
    especificaciones: ["Resolución 1080p", "Micrófono integrado", "Conexión USB plug and play"],
    accesorios: ["Clip ajustable para monitor"],
    observaciones: "Sin caja original, pero en excelente estado funcional.",
    images: ["img/products/camara-web-1.jpg"],
  },
  {
    id: "laptop-dell",
    nombre: "Laptop Dell",
    precioQ: 2800,
    estado: "Buen estado",
    descripcionCorta: "Laptop Dell ideal para trabajo y estudio.",
    descripcionCompleta:
      "Laptop Dell con buen rendimiento para tareas de oficina, navegación y estudio. Batería en buen estado, sin golpes en la pantalla. Formateada, lista para usarse.",
    especificaciones: ["Pantalla 14\"", "Almacenamiento SSD", "Windows instalado"],
    accesorios: ["Cargador original"],
    observaciones: "Escríbeme para conocer el detalle exacto de procesador y RAM.",
    images: ["img/products/laptop-dell-1.jpg", "img/products/laptop-dell-2.jpg"],
  },
];
