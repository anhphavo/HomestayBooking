let accounts = [];

const accountForm = document.getElementById("accountForm");
const accountData = document.getElementById("accountData");

accountForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (username === "" || password === "" || confirmPassword === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp.");
    return;
  }

  accounts.push({ username, password });
  displayAccounts(); // Hiển thị danh sách sau khi thêm
  accountForm.reset();
});

function displayAccounts() {
  accountData.innerHTML = "";
  accounts.forEach((account, index) => {
    const row = `<div>
                  <span>Tên tài khoản: ${account.username}</span>
                  <span>Mật khẩu: ${account.password}</span>
                  <button class="edit-button" onclick="editAccount(${index})">Sửa</button>
<button class="delete-button" onclick="deleteAccount(${index})">Xóa</button>

                </div>`;
    accountData.innerHTML += row;
  });
}

function editAccount(index) {
  const newUsername = prompt("Nhập tên tài khoản mới:", accounts[index].username);
  const newPassword = prompt("Nhập mật khẩu mới:", accounts[index].password);
  if (newUsername !== null && newPassword !== null) {
    accounts[index] = { username: newUsername, password: newPassword };
    displayAccounts(); // Hiển thị danh sách sau khi sửa
  }
}

function deleteAccount(index) {
  const confirmation = confirm("Bạn có chắc chắn muốn xóa?");
  if (confirmation) {
    accounts.splice(index, 1);
    displayAccounts(); // Hiển thị danh sách sau khi xóa
  }
}

displayAccounts(); // Hiển thị danh sách khi trang được tải lần đầu
