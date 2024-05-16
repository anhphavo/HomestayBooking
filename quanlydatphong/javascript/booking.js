document.addEventListener("DOMContentLoaded", () => {
    const selectedRooms = [];

    const addRoomButtons = document.querySelectorAll('.add-room');
    const orderCart = document.getElementById("prinf_order_cart");
    const totalMoneyElement = document.getElementById("total_money");

    addRoomButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const roomElement = event.target.closest('.room');
            const roomName = roomElement.getAttribute('data-name');
            const roomPrice = parseInt(roomElement.getAttribute('data-price'));

            const room = { name: roomName, price: roomPrice };
            selectedRooms.push(room);
            displayRooms();
        });
    });

    function displayRooms() {
        orderCart.innerHTML = "";
        let totalMoney = 0;

        selectedRooms.forEach((room, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td style="font-size: 115%;">${room.name}</td>
                <td style="font-size: 115%;" class="text-center">${room.price.toLocaleString()} VND</td>
                <td style="font-size: 115%;" class="text-center">
                    <button class="btn btn-danger" onclick="removeRoom(${index})">X</button>
                </td>
            `;

            orderCart.appendChild(row);
            totalMoney += room.price;
        });

        totalMoneyElement.innerText = totalMoney.toLocaleString() + " VND";
    }

    window.removeRoom = (index) => {
        selectedRooms.splice(index, 1);
        displayRooms();
    };

    window.checkout = () => {
        document.getElementById("selected-rooms").style.display = "none";
        document.getElementById("payment-form").style.display = "block";
    };

    window.return_inforroom = () => {
        document.getElementById("selected-rooms").style.display = "block";
        document.getElementById("payment-form").style.display = "none";
    };
});
