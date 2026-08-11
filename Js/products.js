/*
  Para agregar un producto: copia un objeto del array y cambia los valores.
  Para quitarlo: borra su objeto del array.
  "images" acepta uno o varios archivos dentro de img/products/.
  "estado" solo puede ser: "Nuevo", "Muy buen estado", "Buen estado", "Uso normal".
*/

const PRODUCTS = [
  {
    id: "laptop-dell",
    nombre: "Laptop Dell",
    precioQ: 4500,
    estado: "Buen estado",
    descripcionCorta: "Laptop Dell ideal para trabajo y estudio.",
    descripcionCompleta:
      "Laptop Dell con buen rendimiento para tareas de oficina, navegación y estudio. Batería en buen estado, sin golpes en la pantalla. Formateada, lista para usarse.",
    especificaciones: ["Pantalla 14\"", "Almacenamiento SSD", "Windows instalado"],
    accesorios: ["Cargador original"],
    observaciones: "Escríbeme para conocer el detalle exacto de procesador y RAM.",
    images: ["img/products/laptop-dell-1.jpg", "img/products/laptop-dell-2.jpg"],
  },
  {
    id: "ps4",
    nombre: "PlayStation 4 Slim",
    precioQ: 1500,
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
    images: ["img/products/ps4-1.jpg"],
  },
  {
    id: "hub-usb",
    nombre: "Hub USB 7 puertos",
    precioQ: 50,
    estado: "Buen estado",
    descripcionCorta: "Expansor USB 3.0 de 7 puertos, ideal para laptop.",
    descripcionCompleta:
      "Hub de transferencia de datos de alta velocidad USB 3.0 7 en 1, expansión multi puerto con conectores tipo C y USB-A, compatible con tabletas, opera a 5V, alimentado por USB",
    especificaciones: ["Capacidad de Expansión: 7 puertos en 1 —— Permite conectar múltiples periféricos simultáneamente, como teclados, ratones, discos duros e impresoras, optimizando el espacio de trabajo","Conectividad Versátil: Conectores Type-C y USB-A —— Gracias a su diseño dual, es compatible con una amplia gama de dispositivos, desde laptops y tabletas hasta computadoras de escritorio y consolas de juegos","Velocidad de Datos: USB 3.0 de alta velocidad —— Facilita la transferencia rápida de archivos y datos, reduciendo los tiempos de espera al mover información entre dispositivos", "Alimentación y Diseño: Alimentado por USB (5V) —— Su funcionamiento sencillo mediante el puerto USB y su acabado metálico ofrecen una solución práctica y duradera para la expansión de puertos"],
    accesorios: ["Cable integrado usb y usb tipo C"],
    observaciones: "Uso ligero, funciona sin problema.",
    images: ["img/products/hub-usb-1.jpg"],
  },
  {
    id: "camara-web",
    nombre: "Webcam Marca Argom Modelo ARG-WC-9145BK",
    precioQ: 150,
    estado: "Muy buen estado",
    descripcionCorta: "Cámara web 1080p con micrófono integrado.",
    descripcionCompleta:
      "Cámara web usada solo para videollamadas de trabajo. Imagen nítida, buen desempeño con poca luz y micrófono integrado con buena captación.",
    especificaciones: ["Resolución HD de hasta 1080p con compensación automática de exposición", "Micrófono dual incorporado con aislamiento de ruido", "3 modos de color LED con botón capacitivo táctil", "Cubierta de privacidad incorporada", "Tasa de velocidad: 30fps"],
    accesorios: ["Clip ajustable para monitor"],
    observaciones: "Con la caja original y en excelente estado funcional.",
    images: ["img/products/camara-web-1.jpg"],
  },
  {
    id: "God-of-War",
    nombre: "God of War de PlayStation 4",
    precioQ: 200,
    estado: "Buen estado",
    descripcionCorta: "Juego de disco es su caja.",
    descripcionCompleta:
      "El juego God of War en formato físico, en su caja original.",
    especificaciones: ["Formato físico (disco)", "Compatibles con PS4 y PS4 Pro"],
    accesorios: ["Caja original del juego"],
    observaciones: "Escríbeme para conocer el estado exacto de títulos disponibles.",
    images: ["img/products/god-of-war-1.jpg"],
  },
  {
    id: "God-of-War-Ragnarok",
    nombre: "God of War: Ragnarök de PlayStation 4",
    precioQ: 400,
    estado: "Buen estado",
    descripcionCorta: "Juego de disco es su caja.",
    descripcionCompleta:
      "El juego God of War: Ragnarök en formato físico, en su caja original.",
    especificaciones: ["Formato físico (disco)", "Compatibles con PS4 y PS4 Pro"],
    accesorios: ["Caja original del juego"],
    observaciones: "Escríbeme para conocer el estado exacto de títulos disponibles.",
    images: ["img/products/god-of-war-ragnarok-1.jpg"],
  },
  {
    id: "uncharted4",
    nombre: "Uncharted 4 de PlayStation 4",
    precioQ: 150,
    estado: "Buen estado",
    descripcionCorta: "Juego de disco es su caja.",
    descripcionCompleta:
      "El juego Uncharted 4 en formato físico, en su caja original.",
    especificaciones: ["Formato físico (disco)", "Compatibles con PS4 y PS4 Pro"],
    accesorios: ["Caja original del juego"],
    observaciones: "Escríbeme para conocer el estado exacto de títulos disponibles.",
    images: ["img/products/uncharted4-1.jpg"],
  },
  {
    id: "spiderman",
    nombre: "Spider-Man de PlayStation 4",
    precioQ: 200,
    estado: "Buen estado",
    descripcionCorta: "Juego de disco es su caja.",
    descripcionCompleta:
      "El juego Spider-Man en formato físico, en su caja original.",
    especificaciones: ["Formato físico (disco)", "Compatibles con PS4 y PS4 Pro"],
    accesorios: ["Caja original del juego"],
    observaciones: "Escríbeme para conocer el estado exacto de títulos disponibles.",
    images: ["img/products/spiderman-1.jpg"],
  },
];
