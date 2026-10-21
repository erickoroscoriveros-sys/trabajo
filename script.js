const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
 
menuBtn.addEventListener("click", () => {
  const abierto = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(abierto));
  menuBtn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
 
form.addEventListener("submit", (evento) => {
  evento.preventDefault(); 
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const programa = document.getElementById("programa").value;
  const privacidad = document.getElementById("privacidad").checked;
  let valido = true;
  const mostrarError = (id, texto) => {
    document.getElementById(id).textContent = texto;
    if (texto) valido = false;
  };
  mostrarError("nombreError", nombre.length >= 3 ? "" : "Ingresa tu nombre completo (mínimo 3 caracteres).");
  mostrarError("correoError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) ? "" : "Ingresa un correo válido.");
  mostrarError("telefonoError", /^[0-9+()\s-]{7,20}$/.test(telefono) ? "" : "Ingresa un teléfono válido.");
  mostrarError("programaError", programa ? "" : "Selecciona un programa.");
  mostrarError("privacidadError", privacidad ? "" : "Debes aceptar el aviso de privacidad.");
  if (!valido) {
    mensaje.textContent = "Revisa los campos señalados antes de continuar.";
    mensaje.style.color = "#b42318";
    return;
  }
  mensaje.textContent = `Gracias, ${nombre}. Tu solicitud se validó en esta demostración; no se guardó en un servidor.`;
  mensaje.style.color = "#176b3a";
  form.reset();
});

 