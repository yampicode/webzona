    (function() {
      // ================================================================
      // DATOS DE TUS CURSOS (Precios en DÓLARES USD y BOLÍVARES VES)
      // ================================================================
      const cursosData = [{
        nombre: "Curso Master de Canva",
        precioUSD: 57,
        precioVES: 32405.38, // ← CAMBIA ESTE VALOR MANUALMENTE
        imagen: "https://cdn2.roaslatam.com/products/2V2LlGTZe7SAjPk7tpfcP2o8atVgDv34WpoF6pcl.webp",
        enlace: "https://app.komvii.com/checkout/wpkSlrQ5B9SSXJnnPirdTxxJR2msuLwD",
        keywords: ["canva", "diseño", "master", "diseno"]
      },
        {
          nombre: "Domina Marketing Digital y Redes Sociales",
          precioUSD: 25,
          precioVES: 14212.89, // ← CAMBIA ESTE VALOR MANUALMENTE
          imagen: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
          enlace: "https://app.komvii.com/checkout/5vjknP69TodApSE6PyEUsFYpKjP7sibD",
          keywords: ["marketing", "digital", "redes", "sociales", "estratégia", "pago móvil"]
        },
        {
          nombre: "Curso Cómo Vender por Whatsapp",
          precioUSD: 9.99,
          precioVES: 5679.47, // ← CAMBIA ESTE VALOR MANUALMENTE
          imagen: "https://cdn2.roaslatam.com/products/WDWHm5ygQeJnUlrVgg38TsTdo9q9wvrBPApIGzyX.jpg",
          enlace: "https://app.komvii.com/checkout/FmVxMeGIGuk1YrzoqhbWGP6DrbB5HN6a",
          keywords: ["cómo", "vender", "whatsapp", "como", "por"]
        },
        {
          nombre: "Curso Maestro Pizzero",
          precioUSD: 14.99,
          precioVES: 8522.05, // ← CAMBIA ESTE VALOR MANUALMENTE
          imagen:
          "https://cdn2.roaslatam.com/products/KZIdWcLumXWqZVIVSeZ75pwtKiekZBx2xwzaVI9X.jpg",
          enlace: "https://app.komvii.com/checkout/4kbbs0lgonZhW9tSAGAQxVc4RPiqlrIi",
          keywords: ["maestro", "pizzero", "pizza", "pago móvil"]
        },
        {
          nombre: "Curso de Excel de 0 a Experto",
          precioUSD: 14.99,
          precioVES: 8522.05, // ← CAMBIA ESTE VALOR MANUALMENTE
          imagen: "https://cdn2.roaslatam.com/products/tELOiIsY7UlXzYvLF5rCapIjV7s5NFRWuo0fypy6.jpg",
          enlace: "https://app.komvii.com/checkout/Ptyng98zMkwr4DERmixST9BWm2T2TKlG",
          keywords: ["excel", "tablas", "pago móvil", "hojas de cálculo"]
        },
        {
          nombre: "Curso Mecánica para Moto",
          precioUSD: 14.99,
          precioVES: 8522.05, // ← CAMBIA ESTE VALOR MANUALMENTE
          imagen: "https://cdn2.roaslatam.com/products/rWkgegNLxDJU5jICaYWiG5Z5glgmOu4w1bq2eqSe.jpg",
          enlace: "https://app.komvii.com/checkout/62rkieaPpIDkgT5sWe1D2bP6n44qX7fB",
          keywords: ["mecánica", "mecánica para moto", "taller", "pago móvil"]
        }];

      // ================================================================
      // NO NECESITAS TOCAR NADA DE AQUÍ PARA ABAJO
      // ================================================================

      let searchTerm = '';
      let filtroPrecio = {
        min: null, max: null
      };

      // Referencias DOM
      const container = document.getElementById('cursosContainer');
      const searchInput = document.getElementById('searchInput');
      const clearSearchBtn = document.getElementById('clearSearch');
      const resultadosTexto = document.getElementById('resultadosInfo');
      const minPriceInput = document.getElementById('minPriceInput');
      const maxPriceInput = document.getElementById('maxPriceInput');
      const applyFilterBtn = document.getElementById('applyFilterBtn');
      const resetFilterBtn = document.getElementById('resetFilterBtn');

      // Calcular precio máximo de todos los cursos
      const precioMaximoTotal = Math.max(...cursosData.map(c => c.precioUSD));

      // Funciones de formato
      function formatearUSD(precio) {
        return new Intl.NumberFormat('es-ES', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        }).format(precio);
      }

      function formatearVES(precio) {
        return new Intl.NumberFormat('es-VE', {
          style: 'currency',
          currency: 'VES',
          minimumFractionDigits: 2
        }).format(precio).replace('VES', 'Bs.');
      }

      // Actualizar placeholder del input máximo
      maxPriceInput.placeholder = Math.ceil(precioMaximoTotal);

      // Filtrado
      function filtrarCursos() {
        const termino = searchTerm.toLowerCase().trim();

        return cursosData.filter(curso => {
          // Filtro por precio (en USD)
          if (filtroPrecio.min !== null && curso.precioUSD < filtroPrecio.min) return false;
          if (filtroPrecio.max !== null && curso.precioUSD > filtroPrecio.max) return false;

          // Filtro por búsqueda
          if (!termino) return true;
          if (curso.nombre.toLowerCase().includes(termino)) return true;
          if (curso.keywords && curso.keywords.some(k => k.toLowerCase().includes(termino))) return true;
          return false;
        });
      }

      // Renderizado
      function resaltarTexto(texto,
        termino) {
        if (!termino) return texto;
        try {
          const regex = new RegExp(`(${termino.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
          return texto.replace(regex, '<span class="highlight">$1</span>');
        } catch {
          return texto;
        }
      }

      function renderizarCursos() {
        const cursosFiltrados = filtrarCursos();
        const termino = searchTerm.trim();

        const totalCursos = cursosData.length;

        // Actualizar texto de resultados
        let filtroActivoTexto = '';
        if (filtroPrecio.min !== null || filtroPrecio.max !== null) {
          const minTexto = filtroPrecio.min !== null ? formatearUSD(filtroPrecio.min): '$0';
          const maxTexto = filtroPrecio.max !== null ? formatearUSD(filtroPrecio.max): '∞';
          filtroActivoTexto = `<span class="active-filters"><span class="icofont-filter"></span> ${minTexto} - ${maxTexto}</span>`;
        }

        if (cursosFiltrados.length === 0) {
          resultadosTexto.innerHTML = `<span class="icofont-search"></span> No se encontraron cursos ${filtroActivoTexto}`;
        } else if (cursosFiltrados.length === totalCursos && !filtroActivoTexto) {
          resultadosTexto.innerHTML = `<span class="icofont-book"></span> Mostrando ${totalCursos} cursos disponibles`;
        } else {
          resultadosTexto.innerHTML = `<span class="icofont-filter"></span> ${cursosFiltrados.length} de ${totalCursos} cursos ${filtroActivoTexto}`;
        }

        if (cursosFiltrados.length === 0) {
          container.innerHTML = `
          <div class="no-resultados">
          <span class="icofont-box-open"></span>
          <h3>No hay cursos que coincidan</h3>
          <p>Prueba ajustando los filtros de búsqueda o precio</p>
          <button class="btn-reset" id="resetAllBtn">
          <span class="icofont-undo-alt"></span> Limpiar todos los filtros
          </button>
          </div>
          `;
          document.getElementById('resetAllBtn')?.addEventListener('click', resetearTodo);
          return;
        }

        let html = '';
        cursosFiltrados.forEach(curso => {
          const imagenValida = curso.imagen?.trim();
          const bloqueImagen = imagenValida
          ? `<img class="card-img" src="${curso.imagen}" alt="${curso.nombre}" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'placeholder-img\'><span class=\'icofont-image\'></span> Portada no disponible</div>';">`: `<div class="placeholder-img"><span class="icofont-book-open"></span> Próximamente</div>`;

          const precioUSD = formatearUSD(curso.precioUSD);
          const precioVES = formatearVES(curso.precioVES);

          const nombreMostrar = termino ? resaltarTexto(curso.nombre, termino): curso.nombre;

          html += `
          <div class="curso-card">
          ${bloqueImagen}
          <div class="card-content">
          <h3 class="curso-nombre">${nombreMostrar}</h3>
          <div class="precios-container">
          <div class="precio-usd">${precioUSD}</div>
          <div class="precio-ves">
          <span class="icofont-exchange-alt"></span>
          ${precioVES}
          </div>
          </div>
          <a href="${curso.enlace}" target="_blank" rel="noopener noreferrer" class="btn-cta">
          <span class="icofont-duotone icofont-cart"></span> Comprar curso
          </a>
          </div>
          </div>
          `;
        });

        container.innerHTML = html;
      }

      function aplicarFiltro() {
        const minValor = minPriceInput.value ? parseFloat(minPriceInput.value): null;
        const maxValor = maxPriceInput.value ? parseFloat(maxPriceInput.value): null;

        filtroPrecio = {
          min: minValor,
          max: maxValor
        };
        renderizarCursos();
      }

      function limpiarFiltro() {
        minPriceInput.value = '';
        maxPriceInput.value = '';
        filtroPrecio = {
          min: null,
          max: null
        };
        renderizarCursos();
      }

      function resetearTodo() {
        searchInput.value = '';
        searchTerm = '';
        clearSearchBtn.classList.remove('visible');
        limpiarFiltro();
      }

      // Event Listeners
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        clearSearchBtn.classList.toggle('visible', searchTerm.length > 0);
        renderizarCursos();
      });

      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchTerm = '';
        clearSearchBtn.classList.remove('visible');
        renderizarCursos();
        searchInput.focus();
      });

      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          searchInput.value = '';
          searchTerm = '';
          clearSearchBtn.classList.remove('visible');
          renderizarCursos();
        }
      });

      applyFilterBtn.addEventListener('click',
        aplicarFiltro);
      resetFilterBtn.addEventListener('click',
        limpiarFiltro);

      // Permitir aplicar con Enter
      minPriceInput.addEventListener('keypress',
        (e) => {
          if (e.key === 'Enter') aplicarFiltro();
        });
      maxPriceInput.addEventListener('keypress',
        (e) => {
          if (e.key === 'Enter') aplicarFiltro();
        });

      // Inicialización
      renderizarCursos();
    })();