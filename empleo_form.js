      // Validación del formulario
        (function() {
            'use strict';
            
            // Obtener el formulario
            const form = document.getElementById('registrationForm');
            
            // Validación personalizada para el archivo PDF
            const fileInput = document.getElementById('curriculum');
            fileInput.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const fileType = file.type;
                    if (fileType !== 'application/pdf') {
                        this.setCustomValidity('Por favor selecciona un archivo PDF válido.');
                    } else {
                        this.setCustomValidity('');
                    }
                }
            });
            
            // Validación cuando se envía el formulario
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Si el formulario es válido, mostrar mensaje de éxito
                    event.preventDefault();
                    alert('Formulario enviado correctamente. ¡Gracias por registrarte!');
                    // Aquí normalmente enviarías los datos al servidor
                    form.submit();
                }
                
                form.classList.add('was-validated');
            }, false);
            
            // Validación en tiempo real para WhatsApp
            const whatsappInput = document.getElementById('whatsapp');
            whatsappInput.addEventListener('input', function() {
                // Remover cualquier carácter que no sea número
                this.value = this.value.replace(/[^0-9]/g, '');
                
                // Verificar si cumple con el patrón
                if (this.value.length >= 10 && this.value.length <= 15) {
                    this.setCustomValidity('');
                } else {
                    this.setCustomValidity('El número debe tener entre 10 y 15 dígitos.');
                }
            });
            
       
            
        })();