const urlParams = new URLSearchParams(window.location.search);
const destinationId = urlParams.get("id")

fetch(`https://misonomika.site/api/rooms/${destinationId}/`)
.then(res => res.json()).then(res => ({ ...res, amenities: res.amenities.map(v => v.name) }))
.then(destination => {
    const destinationDetailContainer = document.getElementById("destinationDetail");

    document
        .getElementById("bookingButton")
        .addEventListener("click", function (event) {
            event.preventDefault();

            // Lấy ngày nhận phòng và ngày trả phòng từ form
            const checkInDate = new Date(
                document.getElementById("checkInDate").value
            );
            const checkOutDate = new Date(
                document.getElementById("checkOutDate").value
            );

            // Lọc danh sách các phòng còn trống dựa trên ngày nhận phòng và ngày trả phòng
            const availableRooms = filterAvailableRooms(checkInDate, checkOutDate);

            // Hiển thị danh sách các phòng còn trống
            displayAvailableRooms(availableRooms);
        });
    if (destination) {
        const detail = document.createElement("div");
        detail.innerHTML = `
            <h2 class="hotel-name">${destination.name}</h2>
            <p class="hotel-address">Địa chỉ: ${destination.address}</p>
            <img src="${destination.image}" alt="${destination.name}">
            <p>${destination.description}</p>
            <p class="cost">Giá: ${destination.cost}</p>
            <p>Rating: <span class="rating">${destination.rating}</span></p>
            <h3>Tổng Quan</h3>
            <p>Tiện nghi: ${destination.amenities.join(", ")}</p>
            <h3>Đánh Giá Khách Hàng</h3>
            <p>${destination.reviews}</p>
        `;
        destinationDetailContainer.appendChild(detail);
    } else {
        destinationDetailContainer.textContent = "Destination not found";
    }

    function filterAvailableRooms(checkInDate, checkOutDate) {
        const availableRooms = rooms.filter((room) => {
            return room.availableDates.some(
                (date) => date >= checkInDate && date <= checkOutDate
            );
        });
        return availableRooms;
    }

    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const checkInDate = new Date(document.getElementById("checkInDate").value);
        const checkOutDate = new Date(
            document.getElementById("checkOutDate").value
        );

        const availableRooms = filterAvailableRooms(checkInDate, checkOutDate);

        displayAvailableRooms(availableRooms);
    });

    function displayAvailableRooms(availableRooms) {
        const roomTypesTableBody = document.querySelector("#roomTypesTable tbody");
        roomTypesTableBody.innerHTML = "";

        availableRooms.forEach((room) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${room.type}</td>
                <td>${room.bedType}</td>
                <td>${room.capacity}</td>
                <td>${room.price}</td>
            `;
            roomTypesTableBody.appendChild(row);
        });
    }
})


function bookNow() {
    fetch('https://misonomika.site/api/bookings/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            room_id: destinationId
        })
    }).then(() => {
        alert("Bạn đã đặt phòng thành công !!");
        window.location.href = "index.html";
    })
}
