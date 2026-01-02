 document.getElementById("budgetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturamos los valores
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let servicio = document.getElementById("servicio").value;
    let proyecto = document.getElementById("proyecto").value;

    // Número de WhatsApp destino (formato internacional sin + ni 00)
    let numeroWhatsApp = "584120348988"; // Venezuela (+58)

    // Construimos el mensaje con saltos de línea y estilo
    let mensaje = `*Nueva solicitud de presupuesto*%0A
👤 *Nombre:* ${nombre}%0A
📧 *Correo:* ${correo}%0A
📱 *Teléfono:* ${telefono}%0A
💼 *Servicio:* ${servicio}%0A
📝 *Proyecto:* ${proyecto}`;

    // Detectamos si el usuario está en móvil o escritorio
    let esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // URL según dispositivo
    let url = esMovil 
      ? `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}` 
      : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

    // Abrimos WhatsApp
    window.open(url, "_blank");
  });