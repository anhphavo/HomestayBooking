let bookings = [];

const bookingForm = document.getElementById("bookingForm");
const bookingData = document.getElementById("bookingData");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const roomType = document.getElementById("roomType").value;
  const numRooms = document.getElementById("numRooms").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const paymentMethod = document.getElementById("paymentMethod").value;
  const paymentDetails = document.getElementById("paymentDetails").value;

  if (fullName === "" || phoneNumber === "" || email === "" || roomType === "" || numRooms === "" || checkIn === "" || checkOut === "" || paymentMethod === "" || paymentDetails === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  const booking = {
    fullName,
    phoneNumber,
    email,
    roomType,
    numRooms,
    checkIn,
    checkOut,
    paymentMethod,
    paymentDetails
  };

  bookings.push(booking);
  displayBookings(); // Hiển thị danh sách sau khi thêm
  bookingForm.reset();
});

function displayBookings() {
  bookingData.innerHTML = `
   
      <tbody>
        ${bookings.map((booking, index) => `
          <tr>
            <td>${booking.fullName}</td>
            <td>${booking.phoneNumber}</td>
            <td>${booking.email}</td>
            <td>${booking.roomType}</td>
            <td>${booking.numRooms}</td>
            <td>${booking.checkIn} - ${booking.checkOut}</td>
            <td>${booking.paymentMethod}</td>
            <td>${booking.paymentDetails}</td>
            <td>
              <button class="edit-button" onclick="editBooking(${index})">Sửa</button>
              <button class="delete-button" onclick="deleteBooking(${index})">Xóa</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    
  `;
}


function editBooking(index) {
  const booking = bookings[index];
  const newFullName = prompt("Nhập họ và tên mới:", booking.fullName);
  const newPhoneNumber = prompt("Nhập số điện thoại mới:", booking.phoneNumber);
  const newEmail = prompt("Nhập email mới:", booking.email);
  const newRoomType = prompt("Nhập loại phòng mới:", booking.roomType);
  const newNumRooms = prompt("Nhập số lượng phòng mới:", booking.numRooms);
  const newCheckIn = prompt("Nhập thời gian đặt mới (ngày vào):", booking.checkIn);
  const newCheckOut = prompt("Nhập thời gian đặt mới (ngày ra):", booking.checkOut);
  const newPaymentMethod = prompt("Nhập phương thức thanh toán mới:", booking.paymentMethod);
  const newPaymentDetails = prompt("Nhập thông tin thanh toán mới:", booking.paymentDetails);

  if (newFullName !== null && newPhoneNumber !== null && newEmail !== null && newRoomType !== null && newNumRooms !== null && newCheckIn !== null && newCheckOut !== null && newPaymentMethod !== null && newPaymentDetails !== null) {
    // Cập nhật thông tin mới cho booking
    booking.fullName = newFullName;
    booking.phoneNumber = newPhoneNumber;
    booking.email = newEmail;
    booking.roomType = newRoomType;
    booking.numRooms = newNumRooms;
    booking.checkIn = newCheckIn;
    booking.checkOut = newCheckOut;
    booking.paymentMethod = newPaymentMethod;
    booking.paymentDetails = newPaymentDetails;

    displayBookings(); // Hiển thị danh sách sau khi sửa
  }
}


function deleteBooking(index) {
  const confirmation = confirm("Bạn có chắc chắn muốn xóa?");
  if (confirmation) {
    bookings.splice(index, 1);
    displayBookings(); // Hiển thị danh sách sau khi xóa
  }
}

displayBookings(); // Hiển thị danh sách khi trang được tải lần đầu
