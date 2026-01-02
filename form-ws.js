 document.getElementById("budgetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturamos los valores
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let servicio = document.getElementById("servicio").options[document.getElementById("servicio").selectedIndex].value;
    let proyecto = document.getElementById("proyecto").value.trim();

    // Validaciones básicas
    if (!nombre) {
      alert("⚠️ Por favor ingresa tu nombre.");
      return;
    }
    if (!correo) {
      alert("⚠️ Por favor ingresa tu correo.");
      return;
    }
    if (servicio === "" || servicio === null) {
      alert("⚠️ Por favor selecciona un servicio.");
      return;
    }
    if (!proyecto) {
      alert("⚠️ Por favor describe tu proyecto.");
      return;
    }

    // Número de WhatsApp destino
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

    // Mostrar mensaje de confirmación
    let mensajeDiv = document.getElementById("mensajeConfirmacion");
    mensajeDiv.style.display = "block";

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
      mensajeDiv.style.display = "none";
    }, 5000);
  });
