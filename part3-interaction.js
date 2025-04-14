// Say Hello
function sayHello() {
    document.getElementById("message").innerText = "Hello, nice to meet you!";
  }
  
  // Show Name
  function showName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = `Welcome, ${name}!`;
  }
  