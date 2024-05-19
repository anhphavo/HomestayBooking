const homestay = [
    { name: "Homestay 1", location: "Location A", giá: "$50/đêm" },
    { name: "Homestay 2", location: "Location B", giá: "$60/đêm" },
    { name: "Homestay 3", location: "Location A", giá: "$55/đêm" },
    { name: "Homestay 4", location: "Location C", giá: "$70/đêm" }
];

document.getElementById('searchInput').addEventListener('input', function() {
    searchHomestay();
});

function searchHomestay() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredHomestays = homestay.filter(homestay => homestay.location.toLowerCase().includes(searchInput));
    displayHomestays(filteredHomestays);
}

function displayHomestays(homestays) {
    const homestayList = document.getElementById('homestayList');
    homestayList.innerHTML = '';

    homestays.forEach(homestay => {
        const li = document.createElement('li');
        li.textContent = `${homestay.name} - ${homestay.location} - ${homestay.giá}`;
        homestayList.appendChild(li);
    });
}
