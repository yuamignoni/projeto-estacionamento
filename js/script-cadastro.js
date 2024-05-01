document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservation-form");
  const reservations = [];

  reservationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(reservationForm);
    const reservationData = {};
    formData.forEach((value, key) => {
      reservationData[key] = value;
    });
    reservations.push(reservationData);

    console.log("Reserva de Vaga:", reservationData);
    alert("Cadastro realizado com sucesso!");
    reservationForm.reset();
  });
});
