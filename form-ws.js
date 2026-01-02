 document.getElementById("budgetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturamos los valores
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let servicio = document.getElementById("servicio").value;
    let proyecto = document.getElementById("proyecto").value.trim();

    // Validaciones básicas
    if (!nombre || !correo || !servicio || !proyecto) {
      alert("⚠️ Por favor completa todos los campos obligatorios antes de enviar.");
      return;
    }

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

    // Mensaje de confirmación en pantalla
    alert("✅ Tu solicitud fue enviada a WhatsApp. Nos pondremos en contacto contigo pronto.");
  });