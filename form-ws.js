      // Función para enviar el formulario por WhatsApp
        function submitForm(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const email = form.email.value || 'No proporcionado';
            const plan = form.plan.value;
            const message = form.message.value || 'No hay mensaje adicional';
            
            const text = `Hola, me interesa este plan:%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Email:* ${email}%0A*Plan:* ${plan}%0A*Mensaje:* ${message}`;
       
form.reset();
     
      alert('¡Gracias por tu solicitud! Serás redirigido a WhatsApp para confirmar.'); 
         window.open(`https://wa.me/584120348988?text=${text}`, '_blank');
            
        
        }