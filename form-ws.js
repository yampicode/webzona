 document.getElementById("budgetForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Capturamos los valores
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let servicio = document.getElementById("servicio").value;
    let proyecto = document.getElementById("proyecto").value;

    // Número de WhatsApp destino (formato internacional sin + ni 00)
    let numeroWhatsApp = "584120348988"; // Ejemplo: Venezuela (+58)

    // Construimos el mensaje con saltos de línea y estilo
    let mensaje = `*Nueva solicitud de presupuesto*%0A
👤 *Nombre:* ${nombre}%0A
📧 *Correo:* ${correo}%0A
📱 *Teléfono:* ${telefono}%0A
💼 *Servicio:* ${servicio}%0A
📝 *Proyecto:* ${proyecto}`;

    // Creamos la URL de WhatsApp
    let url = `https://wa.me/${584120348988}?text=${mensaje}`;

    // Abrimos WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  });