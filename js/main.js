// Datos de carpetas y PDFs
const carpetas = [
  {
    nombre: "Actividad 1",
    pdfs: [
      { 
        nombre: "Resumen del tema Fundamentos de un Proyecto Web - Vilchez", 
        archivo: "pdfs/actividad1/fundamentos.pdf"
 
      }
    ]
  },
  {
    nombre: "Actividad 2",
    pdfs: [
      { 
        nombre: "actores y organización del proyecto web - Poma & Vilchez", 
        archivo: "pdfs/actividad2/actores.pdf"
      }
    ]
  },
  {
    nombre: "Actividad 3",
    pdfs: [
      { 
        nombre: "siguiente actividad", 
        archivo: "pdfs/actividad3/ejercicio-js.pdf" 
      },
    ]
  },
  {
    nombre: "Actividad 4",
    pdfs: [
      { 
        nombre: "Siguiente actividad", 
        archivo: "pdfs/actividad4/ejercicio-js.pdf" 
      },
    ]
  }
];

const contenedor = document.getElementById("carpetas-container");

// Construcción de las tarjetas
carpetas.forEach((carpeta, idxCarpeta) => {
  const col = document.createElement("div");
  col.className = "col-md-6 mb-4";

  let pdfsHTML = "";
  carpeta.pdfs.forEach((pdf, idxPdf) => {
    const modalId = `modalPdf-${idxCarpeta}-${idxPdf}`;
    pdfsHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span><i class="bi bi-file-earmark-pdf text-danger"></i> ${pdf.nombre}</span>
        <div>
          <!-- Botón ver PDF en modal -->
          <button class="btn btn-sm btn-outline-primary me-2" data-bs-toggle="modal" data-bs-target="#${modalId}" title="Ver PDF">
            <i class="bi bi-eye"></i>
          </button>
          <!-- Botón descargar PDF -->
          <a href="${pdf.archivo}" download class="btn btn-sm btn-danger" title="Descargar PDF">
            <i class="bi bi-download"></i>
          </a>
        </div>
      </li>

      <!-- Modal para mostrar PDF -->
      <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content bg-dark text-light">
            <div class="modal-header">
              <h5 class="modal-title"><i class="bi bi-file-earmark-pdf text-danger"></i> ${pdf.nombre}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body p-0">
              <iframe src="${pdf.archivo}" width="100%" height="600px" style="border:0;"></iframe>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  col.innerHTML = `
    <div class="card bg-secondary text-light shadow-sm h-100">
      <div class="card-body">
        <h5 class="card-title">
          <i class="bi bi-folder-fill text-warning"></i> ${carpeta.nombre}
        </h5>
        <ul class="list-group list-group-flush">
          ${pdfsHTML}
        </ul>
      </div>
    </div>
  `;

  contenedor.appendChild(col);
});
