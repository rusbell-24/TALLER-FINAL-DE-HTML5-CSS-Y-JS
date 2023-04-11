const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const mailSubject = e.target.mailSubject.value;
  const message = e.target.message.value;

  if (name == "") {
    alert("El campo nombre no debe estar vacio");
  } else if (email == "") {
    alert("El campo correo no debe estar vacio");
  } else if (mailSubject == "") {
    alert("El campo Asunto no debe estar vacio");
  } else if (message == "") {
    alert("El campo mensaje no debe estar vacio");
  } else {
    console.log(`Nombre: ${name}`);
    console.log(`Correo: ${email}`);
    console.log(`Asunto: ${mailSubject}`);
    console.log(`Mensaje: ${message}`);
  }
});

const clean = () => {
  document.getElementById("form").reset();
};
