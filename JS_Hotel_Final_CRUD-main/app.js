const roomList = document.getElementById("roomList");
const roomModal = document.getElementById("roomModal");
const modalTitle = document.getElementById("modalTitle");
const roomNameInput = document.getElementById("roomNameInput");
const roomTypeInput = document.getElementById("roomTypeInput");
const roomPriceInput = document.getElementById("roomPriceInput");
const roomImageInput = document.getElementById("roomImageInput");
const saveRoomBtn = document.getElementById("saveRoomBtn");
const navLinks = document.querySelectorAll(".nav a");
const mainTitle = document.getElementById("mainTitle");

let editingPost = { id: null, index: null };

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString() {
  return Math.random().toString(32).substring(2)
}

fetch("https://misonomika.site/api/rooms/?limit=10")
    .then((res) => res.json())
    .then((res) =>
        res.map((data) => ({
            ...data,
            amenities: data.amenities.map((v) => v.name),
        }))
    )
    .then((res) => {
        let rooms = res;

        function renderRooms() {
            roomList.innerHTML = "";
            rooms.forEach((room, index) => {
                const li = document.createElement("li");
                li.classList.add("room-item");
                const img = document.createElement("img");
                img.src = room.image;
                const div = document.createElement("div");
                div.classList.add("room-info");
                const name = document.createElement("h3");
                name.textContent = room.name;
                const type = document.createElement("p");
                type.textContent = `Loại phòng: ${room.type}`;
                const price = document.createElement("p");
                price.textContent = `Giá phòng: ${room.price}`;
                div.appendChild(name);
                div.appendChild(type);
                div.appendChild(price);
                const editBtn = document.createElement("button");
                editBtn.textContent = "Sửa";
                editBtn.addEventListener("click", () =>
                    openModal("Sửa phòng", room, index)
                );
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Xóa";
                deleteBtn.addEventListener("click", () => deleteRoom(index, room.id));
                li.appendChild(img);
                li.appendChild(div);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                roomList.appendChild(li);
            });
        }

        function openModal(title, room, index) {
            modalTitle.textContent = title;
            roomNameInput.value = room ? room.name : "";
            roomTypeInput.value = room ? room.type : "";
            roomPriceInput.value = room ? room.price : "";
            roomImageInput.value = room ? room.image : "";
            editingPost.id = room?.id;
            editingPost.index = index
            roomModal.style.display = "block";
        }

        function closeModal() {
            roomModal.style.display = "none";
            roomNameInput.value = "";
            roomTypeInput.value = "";
            roomPriceInput.value = "";
            roomImageInput.value = "";
            editingPost.id = null
            editingPost.index = null
        }

        function saveRoom() {
            const roomName = roomNameInput.value.trim();
            const roomType = roomTypeInput.value.trim();
            const roomPrice = roomPriceInput.value.trim();
            const roomImage = roomImageInput.value.trim();

            if (roomName && roomType && roomPrice && roomImage) {
                const room = {
                    name: roomName,
                    type: roomType,
                    price: Number(roomPrice),
                    image: roomImage,
                };

                if (editingPost.index === null) {
                  fetch(`https://misonomika.site/api/rooms/`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      name: room.name,
                      image: room.image,
                      type: room.type,
                      price: room.price,
                      address: getRandomString(),
                      description: getRandomString(),
                      rating: getRandomInt(1, 10),
                      reviews: getRandomString(),
                      amenities: [getRandomString(), getRandomString()]
                    })
                  }).then(() => {
                    rooms.push(room)
                    closeModal();
                    renderRooms();
                  })
                } else {
                  fetch(`https://misonomika.site/api/rooms/${editingPost.id}/`, {
                    credentials: 'include',
                      method: 'PATCH',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        name: room.name,
                        image: room.image,
                        type: room.type,
                        price: room.price
                      })
                    }).then(() => {
                      rooms[editingPost.index] = room;
                      closeModal();
                      renderRooms();
                    })
                }
            }
        }

        function deleteRoom(index, id) {
            if (confirm("Bạn có chắc chắn muốn xóa phòng này?")) {
                fetch(`https://misonomika.site/api/rooms/${id}/`, {
                    credentials: 'include',
                    method: 'DELETE', 
                }).then(() => {
                  rooms.splice(index, 1);
                  renderRooms();
                })
            }
        }

        function handleNavLinkClick(e) {
            e.preventDefault();
            const action = e.target.dataset.action;
            navLinks.forEach((link) => link.classList.remove("active"));
            e.target.classList.add("active");

            if (action === "list") {
                mainTitle.textContent = "Danh mục phòng";
                renderRooms();
            } else if (action === "add") {
                mainTitle.textContent = "Thêm phòng";
                openModal("Thêm phòng", null, null);
            }
        }

        navLinks.forEach((link) =>
            link.addEventListener("click", handleNavLinkClick)
        );
        saveRoomBtn.addEventListener("click", saveRoom);
        const closeModalBtn = document.querySelector(".close");
        closeModalBtn.addEventListener("click", closeModal);
        window.addEventListener("click", (event) => {
            if (event.target === roomModal) {
                closeModal();
            }
        });

        renderRooms();
    });
