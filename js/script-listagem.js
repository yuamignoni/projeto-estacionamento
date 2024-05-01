document.addEventListener("DOMContentLoaded", function () {
  const parkingList = document.getElementById("parking-list");
  const availableSpaces = document.getElementById("available-spaces");
  const reservations = [
    {
      plate: "ABC-1234",
      owner: "João da Silva",
      apartment: "101",
      block: "A",
      model: "Toyota Corolla",
      color: "Prata",
      "parking-number": 1,
    },
    {
      plate: "XYZ-5678",
      owner: "Maria Oliveira",
      apartment: "205",
      block: "B",
      model: "Honda Civic",
      color: "Preto",
      "parking-number": 3,
    },
  ];
  function renderParkingList() {
    parkingList.innerHTML = "";

    reservations.forEach((reservation, index) => {
      const reservationItem = document.createElement("div");
      reservationItem.classList.add("parking-item");
      reservationItem.innerHTML = `
            <p><strong>Reserva ${index + 1}:</strong></p>
            <p>Placa: ${reservation.plate}</p>
            <p>Proprietário: ${reservation.owner}</p>
            <p>Apartamento: ${reservation.apartment}</p>
            <p>Bloco: ${reservation.block}</p>
            <p>Modelo: ${reservation.model}</p>
            <p>Cor: ${reservation.color}</p>
            <p>Número da Vaga: ${reservation["parking-number"]}</p>
            <button class="remove-btn" data-index="${index}">Remover</button>
          `;
      parkingList.appendChild(reservationItem);
    });
    const totalSpaces = 15;
    const occupiedSpaces = reservations.length;
    const available = totalSpaces - occupiedSpaces;
    availableSpaces.textContent = available;
  }

  renderParkingList();
  parkingList.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const index = event.target.getAttribute("data-index");
      reservations.splice(index, 1);
      renderParkingList();
    }
  });
});
