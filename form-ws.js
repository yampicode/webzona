     function init() {
      // Form submission
        const budgetForm = document.getElementById('budgetForm');
        
        budgetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(budgetForm);
            const name = budgetForm.querySelector('input[type="text"]').value;
            const email = budgetForm.querySelector('input[type="email"]').value;
            const service = budgetForm.querySelector('select').value;
            const message = budgetForm.querySelector('textarea').value;
            
            // Create WhatsApp message
            const whatsappMessage = `Hola, estoy interesado en sus servicios. Mi nombre es ${name} (${email}). Me interesa el servicio de ${service}. Mensaje: ${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp
            window.open(`https://wa.me/584120348988?text=${encodedMessage}`, '_blank');
            
            // Reset form
            budgetForm.reset();
            
            // Show confirmation
            alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp para completar tu consulta.');
        });