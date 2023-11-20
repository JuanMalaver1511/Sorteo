document.addEventListener('DOMContentLoaded', function () {
    const btnAgregar = document.getElementById('btnAgregar');
    const tablaEquipos = document.getElementById('tablaEquipos');
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    const listaEmparejamientos = document.getElementById('listaEmparejamientos');
    const btnSortear = document.getElementById('btnSortear');
    const equipos = [];
  
    btnAgregar.addEventListener('click', function () {
      const nombreEquipoInput = document.getElementById('nombreEquipo');
      const nombreEquipo = nombreEquipoInput.value.trim();
  
      if (nombreEquipo !== '') {
        equipos.push(nombreEquipo);
        nombreEquipoInput.value = '';
  
        // Actualizar tabla de equipos
        actualizarTablaEquipos();
  
        // Actualizar lista de emparejamientos
        listaEmparejamientos.innerHTML = '';
      }
    });
  
    function actualizarTablaEquipos() {
      cuerpoTabla.innerHTML = '';
      equipos.forEach(function (equipo, index) {
        const fila = `
          <tr>
            <th scope="row">${index + 1}</th>
            <td>${equipo}</td>
          </tr>
        `;
        cuerpoTabla.innerHTML += fila;
      });
    }

    let equiposGanadores = [];
    let equiposPerdedores = [];
  
    btnSortear.addEventListener('click', function () {
      listaEmparejamientos.innerHTML = '';
  
      const equiposCopia = [...equipos]; // Hacemos una copia de los equipos para no alterar el orden original
      while (equiposCopia.length > 1) {
        const indice1 = Math.floor(Math.random() * equiposCopia.length);
        const equipo1 = equiposCopia[indice1];
        equiposCopia.splice(indice1, 1);
  
        const indice2 = Math.floor(Math.random() * equiposCopia.length);
        const equipo2 = equiposCopia[indice2];
        equiposCopia.splice(indice2, 1);
  
        const emparejamiento = `${equipo1} vs ${equipo2}`;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = emparejamiento;
        listaEmparejamientos.appendChild(listItem);
      }
  
      if (equiposCopia.length === 1) {
        const equipoLibre = equiposCopia[0];
        const mensajeEquipoLibre = `Equipo libre: ${equipoLibre}`;
        const listItemEquipoLibre = document.createElement('li');
        listItemEquipoLibre.className = 'list-group-item';
        listItemEquipoLibre.textContent = mensajeEquipoLibre;
        listaEmparejamientos.appendChild(listItemEquipoLibre);
      }
      btnContinuarSorteo.addEventListener('click', function () {
        const equipoGanador = document.getElementById('equipoGanador').value.trim();
        if (equipoGanador !== '') {
          equiposGanadores.push(equipoGanador);
  
          const equiposActuales = equipos.concat(equiposGanadores, equiposPerdedores);
          if (equiposActuales.length > 1) {
            listaEmparejamientos.innerHTML = '';
            const equiposSorteo = equiposGanadores.concat(equiposPerdedores);
            while (equiposSorteo.length > 1) {
              // Lógica para el sorteo con equipos ganadores y perdedores
              // Puedes utilizar una lógica similar a la anterior de sorteo aleatorio
              // y generar nuevos emparejamientos basados en los equipos disponibles
              // Aquí un ejemplo simulado:
              const indice1 = Math.floor(Math.random() * equiposSorteo.length);
              const equipo1 = equiposSorteo[indice1];
              equiposSorteo.splice(indice1, 1);
  
              const indice2 = Math.floor(Math.random() * equiposSorteo.length);
              const equipo2 = equiposSorteo[indice2];
              equiposSorteo.splice(indice2, 1);
  
              const emparejamiento = `${equipo1} vs ${equipo2}`;
              const listItem = document.createElement('li');
              listItem.className = 'list-group-item';
              listItem.textContent = emparejamiento;
              listaEmparejamientos.appendChild(listItem);
            }
  
            if (equiposSorteo.length === 1) {
              const equipoLibre = equiposSorteo[0];
              const mensajeEquipoLibre = `Equipo libre: ${equipoLibre}`;
              const listItemEquipoLibre = document.createElement('li');
              listItemEquipoLibre.className = 'list-group-item';
              listItemEquipoLibre.textContent = mensajeEquipoLibre;
              listaEmparejamientos.appendChild(listItemEquipoLibre);
            }
          } else {
            alert('No hay suficientes equipos para continuar el sorteo');
          }
        } else {
          alert('Por favor, ingresa el equipo ganador');
        }
      });
    });
  });
  