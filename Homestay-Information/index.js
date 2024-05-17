const destinationsContainer = document.getElementById("destinationsContainer");
const searchForm = document.getElementById("searchForm");

document
    .getElementById("filterLocation")
    .addEventListener("change", function () {
        // Lấy giá trị của thành phố được chọn
        const selectedCity = this.value;

        // Lặp qua mỗi card và kiểm tra thành phố của nó
        document.querySelectorAll(".card").forEach((card) => {
            // Lấy dữ liệu thành phố từ thuộc tính data-city của card
            const city = card.getAttribute("data-city");

            // So sánh thành phố của card với thành phố được chọn
            if (selectedCity === "All" || city === selectedCity) {
                // Hiển thị card nếu thành phố khớp hoặc đang chọn tất cả các thành phố
                card.style.display = "block";
            } else {
                // Ẩn card nếu không khớp
                card.style.display = "none";
            }
        });
    });

function displayDestinations(dests) {
    destinationsContainer.innerHTML = "";
    dests.forEach((destination) => {
        const card = document.createElement("div");
        card.classList.add("col-12", "mb-4");
        card.setAttribute("data-city", destination.location); // Thêm thuộc tính data-city để lọc theo thành phố

        const randomRating = getRandomRating();
        const starRating = getStarRating(randomRating);

        card.innerHTML = `
      <div class="card">
        <div class="card-img-container">
          <img src="${destination.image}" class="card-img-top" alt="${
            destination.name
        }">
        </div>
        <div class="card-body">
          <h5 class="card-title">${
              destination.name
          } <span>${starRating}</span></h5>
          <p class="card-text">${destination.description.substring(
              0,
              100
          )}...</p>
          ${
              destination.caption
                  ? `<p class="card-caption">Chú thích: ${destination.caption}</p>`
                  : ""
          }
          <p class="cost">Giá: ${destination.cost}</p>
          <a href="detail.html?id=${
              destination.id
          }" class="btn btn-primary btn-details">Xem Chi tiết</a>
        </div>
      </div>
    `;
        destinationsContainer.appendChild(card);
    });
}

function getRandomRating() {
    const ratings = [4, 5];
    return ratings[Math.floor(Math.random() * ratings.length)];
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 ? "★" : "";
    const emptyStars = 5 - Math.ceil(rating);
    return "★".repeat(fullStars) + halfStar + "☆".repeat(emptyStars);
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    filterDestinations();
});

function filterDestinations() {
    const searchTerm = document
        .getElementById("searchTerm")
        .value.trim()
        .toLowerCase();
    const selectedAmenities = Array.from(
        document.querySelectorAll(".form-check-input:checked")
    ).map((checkbox) => checkbox.id);

    const searchResults = destinations.filter((dest) => {
        const nameMatch = dest.name.toLowerCase().includes(searchTerm);
        const amenitiesMatch = selectedAmenities.every((amenity) =>
            dest.amenities.includes(amenity)
        );
        return nameMatch && amenitiesMatch;
    });

    displayDestinations(searchResults);
}

fetch('https://misonomika.site/api/rooms/?limit=40')
.then(res => res.json()).then(res => {
    displayDestinations(
        res.map(
            data => ({
                ...data, amenities: data.amenities.map(v => v.name)
            })
        )
    );
})
