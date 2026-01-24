const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  message.textContent = "Signing in…";

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      message.textContent = data.errors
        ? data.errors.join(" ")
        : "Login failed";
      return;
    }

    message.textContent = `Logged in as ${data.user.email}`;
  } catch (err) {
    console.error(err);
    message.textContent = "Network error";
  }
});
