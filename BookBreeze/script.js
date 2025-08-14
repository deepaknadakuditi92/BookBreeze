document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for subscribing to BookBreeze*!");
  this.reset();
});
