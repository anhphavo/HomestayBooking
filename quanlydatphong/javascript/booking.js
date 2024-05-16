document.addEventListener("DOMContentLoaded", () => {
    // Dữ liệu giả lập các phòng đã chọn
    const rooms = [
        { name: "Phòng Deluxe", number: 101, date: "2023-05-20", price: 1000000 },
        { name: "Phòng Suite", number: 102, date: "2023-05-21", price: 2000000 },
    ];

    // Hàm hiển thị các phòng đã chọn
    function displayRooms() {
        const orderCart = document.getElementById("prinf_order_cart");
        orderCart.innerHTML = "";
        let totalMoney = 0;

        rooms.forEach(room => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td style="font-size: 115%;">${room.name}</td>
                <td style="font-size: 115%;" class="text-center">${room.number}</td>
                <td style="font-size: 115%;" class="text-center">${room.date}</td>
                <td style="font-size: 115%;" class="text-center">${room.price.toLocaleString()} VND</td>
                <td style="font-size: 115%;" class="text-center">
                    <button class="btn btn-danger" onclick="removeRoom(${room.number})">X</button>
                </td>
            `;

            orderCart.appendChild(row);
            totalMoney += room.price;
        });

        document.getElementById("total_money").innerText = totalMoney.toLocaleString() + " VND";
    }

    // Hàm xoá phòng
    window.removeRoom = (roomNumber) => {
        const index = rooms.findIndex(room => room.number === roomNumber);
        if (index !== -1) {
            rooms.splice(index, 1);
            displayRooms();
        }
    };

    // Hàm chuyển đổi giữa các form
    window.checkout = () => {
        document.getElementById("checkout_form").style.display = "none";
        document.getElementById("payment_form").style.display = "block";
    };

    window.return_inforroom = () => {
        document.getElementById("checkout_form").style.display = "block";
        document.getElementById("payment_form").style.display = "none";
    };

    // Hiển thị thông tin phòng khi tải trang
    displayRooms();
});
