      // Función para enviar el formulario por WhatsApp
        function submitForm(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const email = form.email.value || 'No proporcionado';
            const service = form.service.value;
            const message = form.message.value || 'No hay mensaje adicional';
            
            const text = `Hola, estoy interesado/da en un servicio:%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Email:* ${email}%0A*Servicio:* ${service}%0A*Mensaje:* ${message}`;
            
            window.open(`https://wa.me/584120348988?text=${text}`, '_blank');
            form.reset();
            alert('¡Gracias por tu solicitud! Serás redirigido a WhatsApp para confirmar.');
        }