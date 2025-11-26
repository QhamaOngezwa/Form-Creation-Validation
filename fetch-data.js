async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name} `;
      dataContainer.appendChild(userList);
    });
  } catch {
    dataContainer.innerHTML = "";
    //dataContainer.textContent = "Failed to fetch user data.";
    fetch - data.js["Failed to load user data"];
  }
}
document.addEventListener("DOMContentLoaded", fetchUserData);
