const propiedades_venta = [
  {
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: 5000,
    fumar: false,
    mascotas: false,
  },
  {
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    precio: 1200,
    fumar: true,
    mascotas: true,
  },
  {
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 4500,
    fumar: false,
    mascotas: true,
  },
];

function mostrarPropiedad_venta() {
  const seccionVenta = document.getElementById("venta").querySelector(".row");
  for (propiedad of propiedades_venta) {
    // console.log(propiedad.fumar);
    let htmlinmueble = `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src= ${propiedad.imagen}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
        ${propiedad.titulo}
        </h5>
        <p class="card-text">
         ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>`;

    // if (propiedad.fumar === true) {
    //   htmlinmueble += `<p class="text-success">
    //               <i class="fas fa-smoking"></i> Permitido fumar
    //             </p>`;
    // } else {
    //   htmlinmueble += `<p class="text-danger">
    //       <i class="fas fa-smoking-ban"></i> No se permite fumar
    //     </p>`;
    // }

    // if (propiedad.mascotas === true) {
    //   htmlinmueble += `<p class="text-success">
    //   <i class="fas fa-paw"></i> Mascotas permitidas
    // </p>`;
    // } else {
    //   htmlinmueble += `<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
    // }

    seccionVenta.innerHTML += htmlinmueble;
  }
}

document.addEventListener("DOMContentLoaded", mostrarPropiedad_venta());

// Arreglo de Inmuebles en Alquiler
const propiedades_alquiler = [
  {
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumar: false,
    mascotas: true,
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    precio: 2500,
    fumar: true,
    mascotas: true,
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2200,
    fumar: false,
    mascotas: false,
  },
];

function mostrarPropiedad_alquiler() {
  const seccionAlquiler = document
    .getElementById("alquiler")
    .querySelector(".row");
  let htmlinmueble = "";
  for (propiedad of propiedades_alquiler) {
    // console.log(propiedad.fumar);
    let htmlinmueble = `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src= ${propiedad.imagen}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
        ${propiedad.titulo}
        </h5>
        <p class="card-text">
         ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>`;

    //   if (propiedad.fumar === true) {
    //     htmlinmueble += `<p class="text-success">
    //                 <i class="fas fa-smoking"></i> Permitido fumar
    //               </p>`;
    //   } else {
    //     htmlinmueble += `<p class="text-danger">
    //         <i class="fas fa-smoking-ban"></i> No se permite fumar
    //       </p>`;
    //   }

    //   if (propiedad.mascotas === true) {
    //     htmlinmueble += `<p class="text-success">
    //     <i class="fas fa-paw"></i> Mascotas permitidas
    //   </p>`;
    //   } else {
    //     htmlinmueble += `<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`;
    //   }

    seccionAlquiler.innerHTML += htmlinmueble;
  }
}

document.addEventListener("DOMContentLoaded", mostrarPropiedad_alquiler());
