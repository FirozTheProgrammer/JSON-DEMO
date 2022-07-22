//using jsonplaceholder

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => displayUser(json));

//display user name
function displayUser(users) {
  const userNames = users.map((userr) => userr.username);
  console.log(userNames);

  var ul = document.querySelector(".user_container");

  for (let i = 0; i < userNames.length; i++) {
    const name = userNames[i];
    const li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
  }
}

//update time
document.querySelector(".demo").innerHTML = new Date();
